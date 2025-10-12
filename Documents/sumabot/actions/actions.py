# ==========================================
# IMPORTAR LIBRERÍAS
# ==========================================
from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from groq import Groq
import os
from dotenv import load_dotenv
import glob

# ==========================================
# CARGAR CONFIGURACIÓN
# ==========================================
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

if not GROQ_API_KEY:
    print("⚠️ ERROR: No se encontró GROQ_API_KEY en .env")

# ==========================================
# SISTEMA RAG SIMPLIFICADO
# ==========================================
class RAGSystemSimple:
    """
    Sistema RAG simplificado SIN ChromaDB ni embeddings
    Usa búsqueda de texto simple pero efectiva
    """
    
    def __init__(self):
        print("\n" + "=" * 60)
        print("🚀 INICIANDO SUMABOT - VERSIÓN SIMPLIFICADA")
        print("=" * 60)
        
        # Diccionario para guardar documentos
        self.documentos = {}
        
        # Cargar documentos
        self._cargar_documentos()
        
        # Cliente Groq
        self.groq_client = Groq(api_key=GROQ_API_KEY)
        
        print("✅ Sistema RAG simplificado listo")
        print("=" * 60 + "\n")
    
    def _cargar_documentos(self):
        """Cargar todos los documentos de knowledge/"""
        print("📚 Cargando documentos de knowledge/...")
        
        # Buscar archivos .txt
        archivos = glob.glob("knowledge/*.txt")
        
        if not archivos:
            print("⚠️ ADVERTENCIA: No se encontraron archivos en knowledge/")
            return
        
        print(f"📄 Encontrados {len(archivos)} archivos")
        
        # Leer cada archivo
        for archivo in archivos:
            nombre = os.path.basename(archivo).replace('.txt', '')
            
            try:
                with open(archivo, 'r', encoding='utf-8') as f:
                    contenido = f.read()
                    self.documentos[nombre] = contenido
                print(f"   ✅ Cargado: {nombre}.txt")
            except Exception as e:
                print(f"   ❌ Error al cargar {nombre}: {e}")
        
        print(f"✅ Total: {len(self.documentos)} documentos cargados\n")
    
    def buscar_contexto(self, pregunta, max_docs=2):
        """
        Buscar documentos relevantes usando palabras clave
        
        Args:
            pregunta: La pregunta del usuario
            max_docs: Máximo de documentos a incluir
            
        Returns:
            String con el contexto relevante
        """
        print(f"🔍 Buscando información para: '{pregunta[:50]}...'")
        
        # Convertir a minúsculas para búsqueda
        pregunta_lower = pregunta.lower()
        
        # Palabras clave a buscar (palabras de 4+ caracteres)
        palabras = [p for p in pregunta_lower.split() if len(p) >= 4]
        
        # Calcular relevancia de cada documento
        scores = {}
        
        for nombre, contenido in self.documentos.items():
            contenido_lower = contenido.lower()
            
            # Contar coincidencias de palabras clave
            score = 0
            for palabra in palabras:
                if palabra in contenido_lower:
                    # Contar cuántas veces aparece
                    score += contenido_lower.count(palabra)
            
            if score > 0:
                scores[nombre] = score
        
        # Ordenar por relevancia
        docs_ordenados = sorted(scores.items(), key=lambda x: x[1], reverse=True)
        
        # Construir contexto
        contexto = ""
        
        if docs_ordenados:
            # Tomar los documentos más relevantes
            for i, (nombre, score) in enumerate(docs_ordenados[:max_docs]):
                print(f"   📄 {i+1}. {nombre} (relevancia: {score})")
                contexto += f"\n\n{'='*50}\n"
                contexto += f"DOCUMENTO: {nombre.upper()}\n"
                contexto += f"{'='*50}\n"
                contexto += self.documentos[nombre]
        else:
            # Si no encontró nada específico, usar todos
            print("   ⚠️ No se encontraron coincidencias, usando toda la base")
            for nombre, contenido in list(self.documentos.items())[:max_docs]:
                print(f"   📄 {nombre}")
                contexto += f"\n\n{'='*50}\n"
                contexto += f"DOCUMENTO: {nombre.upper()}\n"
                contexto += f"{'='*50}\n"
                contexto += contenido
        
        return contexto
    
    def generar_respuesta(self, pregunta, contexto):
        """
        Generar respuesta usando Groq IA
        
        Args:
            pregunta: Pregunta del usuario
            contexto: Información relevante de documentos
            
        Returns:
            Respuesta generada por la IA
        """
        print("🤖 Generando respuesta con IA...")
        
        # Crear prompt para la IA
        prompt = f"""Eres Sumabot, un asistente virtual amigable y servicial de la Escuela Profesional de Ingeniería de Sistemas (EPIS) de la Universidad Nacional José María Arguedas (UNAJMA).

INFORMACIÓN DISPONIBLE:
{contexto}

PREGUNTA DEL ESTUDIANTE:
{pregunta}

INSTRUCCIONES IMPORTANTES:
1. Responde SOLO con información del contexto proporcionado arriba
2. Si la información NO está en el contexto, responde: "No tengo esa información específica en mi base de conocimiento. Te recomiendo contactar directamente con [oficina correspondiente]"
3. Sé claro, conciso y amigable
4. Usa emojis ocasionalmente (máximo 2-3 por respuesta)
5. Si hay fechas, costos o datos específicos, cítalos exactamente
6. Máximo 150 palabras
7. Usa negritas (**texto**) para resaltar información importante
8. Si mencionas contactos, incluye email o teléfono si están disponibles

RESPUESTA:"""

        try:
            # Llamar a Groq API
            respuesta = self.groq_client.chat.completions.create(
                model="llama-3.1-70b-versatile",
                messages=[
                    {
                        "role": "system",
                        "content": "Eres Sumabot, asistente virtual amigable de EPIS-UNAJMA. Eres preciso, útil y siempre basas tus respuestas en la información proporcionada."
                    },
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                temperature=0.3,  # Baja temperatura = más preciso
                max_tokens=500,
                top_p=0.9
            )
            
            # Extraer respuesta
            respuesta_texto = respuesta.choices[0].message.content
            
            print("✅ Respuesta generada exitosamente\n")
            
            return respuesta_texto
            
        except Exception as e:
            print(f"❌ Error al generar respuesta: {str(e)}\n")
            return "Disculpa, tuve un problema técnico al procesar tu consulta. ¿Podrías intentar de nuevo?"


# ==========================================
# CREAR INSTANCIA GLOBAL
# ==========================================
# Se crea UNA sola vez cuando inicia el servidor
rag_system = RAGSystemSimple()


# ==========================================
# ACCIÓN PERSONALIZADA PARA RASA
# ==========================================
class ActionRespuestaInteligente(Action):
    """
    Acción que ejecuta Rasa para respuestas inteligentes
    """
    
    def name(self) -> Text:
        """Nombre de la acción (debe coincidir con domain.yml)"""
        return "action_respuesta_inteligente"
    
    def run(
        self,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any]
    ) -> List[Dict[Text, Any]]:
        """
        Método que se ejecuta cuando Rasa llama esta acción
        """
        
        print("\n" + "=" * 60)
        print("🎯 EJECUTANDO: Respuesta Inteligente")
        print("=" * 60)
        
        # Obtener mensaje del usuario
        mensaje_usuario = tracker.latest_message.get('text')
        print(f"📝 Pregunta del usuario: {mensaje_usuario}")
        
        # Obtener intent detectado
        intent = tracker.latest_message.get('intent', {}).get('name')
        confianza = tracker.latest_message.get('intent', {}).get('confidence', 0)
        print(f"🎯 Intent detectado: {intent} (confianza: {confianza:.2f})")
        
        try:
            # 1. Buscar contexto relevante
            contexto = rag_system.buscar_contexto(mensaje_usuario)
            
            # 2. Generar respuesta con IA
            respuesta = rag_system.generar_respuesta(mensaje_usuario, contexto)
            
            # 3. Enviar respuesta al usuario
            dispatcher.utter_message(text=respuesta)
            
            print("✅ Respuesta enviada al usuario")
            print("=" * 60 + "\n")
            
        except Exception as e:
            print(f"❌ ERROR: {str(e)}")
            print("=" * 60 + "\n")
            
            # Enviar mensaje de error amigable
            dispatcher.utter_message(
                text="Disculpa, tuve un problema al procesar tu consulta. 😅 "
                     "¿Podrías intentar reformular tu pregunta?"
            )
        
        return []
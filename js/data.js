const ACADEMY_DATA = {
    modules: {
        chatbot: {
            id: "chatbot",
            title: "Módulo 1: Ingeniería de Prompts Profesional",
            time: "25 min (Teoría) + 35 min (Práctica)",
            desc: "Dominio de la comunicación con Modelos de Lenguaje (LLMs) aplicando la metodología estructurada y técnicas avanzadas como Few-Shot y Chain-of-Thought.",
            icon: "fa-comments"
        },
        notebooklm: {
            id: "notebooklm",
            title: "Módulo 2: NotebookLM — Asistente de Investigación",
            time: "20 min (Teoría) + 40 min (Práctica)",
            desc: "Creación de centros de estudio inteligentes basados en RAG (Generación Aumentada por Recuperación) para estudiar sin alucinaciones.",
            icon: "fa-book-open"
        },
        comet: {
            id: "comet",
            title: "Módulo 3: Comet Browser — Navegación Agéntica",
            time: "15 min (Teoría) + 45 min (Práctica)",
            desc: "Uso de agentes de navegación autónomos para automatizar la extracción de datos, gestión de correos y búsqueda de información web.",
            icon: "fa-compass"
        },
        antigravity: {
            id: "antigravity",
            title: "Módulo 4: Google AntiGravity — Orquestación de Agentes",
            time: "20 min (Teoría) + 40 min (Práctica)",
            desc: "Introducción a los sistemas multi-agente en paralelo, visualización de flujos con Manager View y generación de Artifacts de trabajo.",
            icon: "fa-network-wired"
        },
        cli: {
            id: "cli",
            title: "Módulo 5: IAs en la Terminal (CLI Mode) — Free & Paid",
            time: "25 min (Teoría) + 35 min (Práctica)",
            desc: "Dominio del uso de Inteligencias Artificiales desde la terminal en modo local gratuito (Ollama) y mediante APIs de pago (sgpt, llm, agy CLI).",
            icon: "fa-terminal"
        }
    },
    
    slides: {
        chatbot: [
            {
                layout: "title",
                title: "INGENIERÍA DE PROMPTS PROFESIONAL",
                subtitle: "Módulo 1: Teoría Fundamental de Modelos Lingüísticos y Prompting Científico",
                author: "Autora: Ing. Marianela Saravia Ortega<br>Universidad Mayor Real y Pontificia de San Francisco Xavier de Chuquisaca<br>Facultad de Tecnología — Carrera de Ingeniería de Sistemas",
                notes: "Presentar a la docente expositora Ing. Marianela Saravia Ortega y dar la bienvenida al Módulo 1. Explicar los objetivos generales del taller."
            },
            {
                layout: "content",
                title: "¿Cómo Funciona un LLM por Dentro?",
                image: "chatbot_s2.jpg",
                text: "La era moderna del Procesamiento del Lenguaje Natural (PLN) tiene sus raíces históricas en los modelos probabilísticos basados en n-gramas y en sistemas de reglas rígidas del siglo XX, como ELIZA (1966). No obstante, el verdadero cambio de paradigma ocurrió en 2017 con la publicación del artículo científico 'Attention Is All You Need' por Vaswani et al. de Google Brain. Este estudio introdujo la arquitectura de redes neuronales conocida como Transformer, la cual eliminó la necesidad de procesamientos secuenciales recurrentes (como las redes LSTM y RNN) que sufrían de la pérdida de información a largo plazo y eran sumamente ineficientes para entrenar en paralelo.<br><br>La base matemática del Transformer radica en el mecanismo de auto-atención (self-attention). Este algoritmo permite que la red calcule dinámicamente un puntaje de relevancia entre cada palabra de un texto y todas las demás en el mismo corpus, sin importar la distancia física que las separe. La ecuación formal de atención escalar multiplicativa se define como el softmax del producto punto de la matriz de consultas (Q) y la matriz de claves (K), escaladas por la raíz del vector de dimensiones, multiplicado finalmente por la matriz de valores (V). Esta relación vectorial permite que el modelo entienda el contexto preciso de una palabra en función de sus acompañantes directas e indirectas.<br><br>Antes de ingresar a la red neuronal, el texto en lenguaje natural sufre un proceso físico de tokenización. Las palabras se descomponen en fragmentos numéricos llamados tokens a través de algoritmos como Byte-Pair Encoding (BPE) o WordPiece. Generalmente, 100 palabras en español equivalen a unos 130 o 140 tokens. Los Large Language Models (LLMs) calculan una distribución de probabilidad sobre un vocabulario de decenas de miles de tokens para adivinar secuencialmente cuál es el elemento más probable que debe seguir al texto de entrada. La ventana de contexto representa el límite máximo de memoria temporal (en tokens) que la red puede retener en una ejecución. Si este búfer de memoria se supera, los primeros tokens de la conversación se purgan del espacio atencional, provocando que el modelo pierda el hilo lógico del diálogo.",
                notes: "Explicar a los estudiantes el concepto de Token y Ventana de Contexto de manera sencilla. Usar la analogía del texto predictivo del celular."
            },
            {
                layout: "content",
                title: "Metodología Estructurada de Prompts",
                image: "chatbot_s3.jpg",
                text: "El término 'Ingeniería de Prompts' ha evolucionado rápidamente de ser una técnica empírica de ensayo y error a consolidarse como una sub-disciplina formal de la interacción humano-computadora orientada a la programación en lenguaje natural. Los modelos de lenguaje masivos no poseen intencionalidad ni metas propias; simplemente reaccionan a las restricciones conceptuales y semánticas del texto introducido por el usuario. Por lo tanto, estructurar un prompt de manera científica consiste en delimitar el espacio latente del modelo para forzarlo a converger en una respuesta precisa, coherente y verídica.<br><br>Para lograr este objetivo de forma sistemática en entornos académicos, se propone e implementa la metodología estructurada basada en cuatro componentes fundamentales e independientes: TAREA, CONTEXTO, FORMATO DE SALIDA y CONDICIONES. La TAREA define de forma unívoca la acción directa que el modelo debe ejecutar, la cual debe redactarse mediante verbos imperativos específicos (ej. clasifica, sintetiza, depura). El CONTEXTO proporciona la información de fondo que ancla la respuesta, definiendo el rol especializado del modelo (ej. actuar como docente universitario), el nivel técnico de la explicación y la audiencia objetivo. El FORMATO DE SALIDA determina la estructura exacta que debe tomar el resultado (ej. tabla con tres columnas específicas, archivo JSON puro, o lista jerárquica en Markdown). Finalmente, las CONDICIONES imponen límites y restricciones operativas estrictas, tales como la longitud de caracteres, palabras prohibidas, obligación de incluir referencias, o el tono de comunicación.<br><br>Estudios recientes demuestran que estructurar los prompts bajo este marco reduce en más de un 45% la necesidad de realizar refinamientos iterativos en los chats y mitiga la vaguedad en las respuestas generadas por los LLMs, optimizando el consumo de tokens y ahorrando tiempo valioso en la producción de reportes.",
                notes: "Resaltar el método TAREA+CONTEXTO+FORMATO+CONDICIONES. Poner ejemplos de cómo cambia una respuesta cuando se aplica esta fórmula."
            },
            {
                layout: "content",
                title: "Técnicas de Razonamiento Científico",
                image: "chatbot_s4.jpg",
                text: "A medida que los modelos de lenguaje crecieron en parámetros, los investigadores descubrieron capacidades emergentes que no estaban explícitamente programadas. Dos de las técnicas de optimización en contexto (In-Context Learning) más potentes y validadas por la comunidad científica son Chain-of-Thought (CoT - Cadena de Pensamiento) y Few-Shot Prompting (Aprendizaje con Pocos Ejemplos).<br><br>La técnica Chain-of-Thought, propuesta formalmente por Wei et al. en 2022, consiste en incitar al modelo a descomponer problemas complejos en etapas lógicas intermedias antes de presentar la respuesta final. Por defecto, los LLMs intentan predecir el siguiente token de manera directa, lo que conduce a fallos aritméticos o de razonamiento lógico. Al obligar al modelo a generar una secuencia verbalizada de pasos (ej. 'Paso 1: Identificar las variables... Paso 2: Aplicar la fórmula...'), se crea un espacio de cálculo intermedio dentro del propio texto. Matemáticamente, esto permite que la atención del modelo se apoye en los tokens de sus propios razonamientos anteriores, incrementando drásticamente el éxito en tareas lógicas.<br><br>Por otro lado, Few-Shot Prompting (Brown et al., 2020) consiste en suministrar en el prompt de entrada un conjunto estructurado de 2 a 5 ejemplos resueltos de la tarea solicitada antes de plantear la entrada final. Esta técnica funciona como un ancla semántica en el espacio de representación latente del modelo. En lugar de explicar conceptualmente qué formato de salida deseamos (Zero-Shot), los ejemplos resueltos guían la atención atencional del modelo para que copie de forma precisa la sintaxis y clasificación de los ejemplos, siendo sumamente útil para tareas de normalización de datos, generación de código sin variación sintáctica y etiquetado masivo.",
                notes: "Explicar la diferencia entre Zero-Shot y Few-Shot. Justificar científicamente con las investigaciones citadas."
            },
            {
                layout: "content",
                title: "Ejercicios de Laboratorio Práctico",
                image: "chatbot_s5.jpg",
                text: "La consolidación del aprendizaje en Ingeniería de Prompts requiere la puesta en práctica de ejercicios que desafíen la capacidad del estudiante para aplicar restricciones semánticas rígidas. En esta capacitación, estructurada para estudiantes de la carrera de Ingeniería de Sistemas de la USFX, se han diseñado tres laboratorios prácticos con niveles de complejidad incremental.<br><br>El primer ejercicio, 'El Tutor Socrático' (Fácil), tiene como meta obligar al chatbot a comportarse como un pedagogo clásico. El reto es programar un prompt donde la IA guíe al estudiante a través del concepto de recursividad mediante analogías físicas y preguntas socráticas, teniendo prohibido dar la respuesta o definición de forma directa. Esto enseña a los estudiantes a definir roles y restricciones condicionales estrictas.<br><br>El segundo ejercicio, 'El Sintetizador de Código PEP 8' (Medio), exige que los alumnos generen un script funcional de cálculo de promedio de notas universitarias en Python. El prompt debe forzar a la IA a cumplir el estándar PEP 8, a incluir comentarios detallados explicativos de la lógica matemática y a implementar bloques robustos de manejo de excepciones para notas fuera del rango estándar (0 a 100). Enseña la especificación técnica precisa del formato de salida.<br><br>El tercer ejercicio, 'Clasificador Few-Shot a JSON' (Difícil), requiere clasificar opiniones y comentarios de estudiantes en categorías y sentimientos específicos. El prompt debe contener ejemplos estructurados (Few-Shot) y el modelo debe responder única y exclusivamente con un bloque JSON sintácticamente válido, sin saludos, preámbulos o explicaciones de texto adicionales, lo cual es clave para el consumo automatizado de APIs en sistemas informáticos reales.",
                notes: "Dar paso a los estudiantes para que abran sus interfaces de IA y comiencen con el desarrollo del primer ejercicio guiado."
            }
        ],
        notebooklm: [
            {
                layout: "title",
                title: "NOTEBOOKLM: TU ASISTENTE DE INVESTIGACIÓN",
                subtitle: "Módulo 2: Arquitectura RAG y la Eliminación de Alucinaciones en el Entorno Académico",
                author: "Autora: Ing. Marianela Saravia Ortega<br>Universidad Mayor Real y Pontificia de San Francisco Xavier de Chuquisaca<br>Facultad de Tecnología — Carrera de Ingeniería de Sistemas",
                notes: "Introducción al Módulo 2 enfocado en RAG y la herramienta de investigación NotebookLM de Google."
            },
            {
                layout: "content",
                title: "¿Qué es RAG y cómo evita Alucinaciones?",
                image: "notebooklm_s2.jpg",
                text: "Los modelos de lenguaje tradicionales (LLMs) presentan dos debilidades críticas en el ámbito científico y educativo: la falta de acceso a información actualizada en tiempo real y la tendencia a generar afirmaciones falsas pero convincentes, fenómeno conocido técnicamente como alucinación de datos. Para solucionar estas limitaciones de raíz, en el año 2020 Lewis et al. propusieron la arquitectura RAG (Retrieval-Augmented Generation / Generación Aumentada por Recuperación), la cual une el poder de redacción de una red generativa con la precisión documental de un motor de búsqueda semántica.<br><br>El funcionamiento técnico de la arquitectura RAG se divide en tres fases principales. En primer lugar, los documentos aportados por el usuario (apuntes, libros, artículos científicos) se segmentan en bloques lógicos de información (chunking). Posteriormente, cada bloque pasa por un modelo de embeddings que transforma el texto natural en vectores de coordenadas matemáticas en un espacio de cientos de dimensiones, almacenándolos en una base de datos vectorial. Cuando el usuario plantea una consulta, el sistema convierte la pregunta en un vector y realiza una búsqueda de similitud (como la distancia coseno) para encontrar los fragmentos del documento con mayor coincidencia de significado.<br><br>Finalmente, los fragmentos recuperados más relevantes se inyectan dinámicamente como contexto de soporte en el prompt de la consulta del usuario, instruyendo explícitamente al LLM a generar su respuesta apoyándose única y exclusivamente en dicho contexto. NotebookLM es la implementación comercial de Google de este sistema, asegurando que las respuestas de la IA estén grounded (ancladas) en la bibliografía cargada por el estudiante y citando la ubicación exacta de cada dato.",
                notes: "Explicar RAG como un examen con libro abierto: el modelo busca la página, lee la respuesta y la escribe citando la fuente."
            },
            {
                layout: "content",
                title: "Funcionalidades del Centro de Estudios",
                image: "notebooklm_s3.jpg",
                text: "NotebookLM destaca por su capacidad de actuar como un centro de estudios personalizado y aislado, lo que significa que la información cargada por los estudiantes o docentes no se comparte públicamente ni se utiliza para reentrenar a los modelos comerciales globales de Google. Esta política de privacidad y seguridad institucional es clave para manejar información y tesis de grado en desarrollo.<br><br>El núcleo funcional de la herramienta permite cargar un abanico muy amplio de formatos documentales, superando con creces a los tradicionales chats de archivos. Los estudiantes pueden subir archivos PDF locales, documentos de Microsoft Word, archivos de texto plano (TXT), y enlaces directos a carpetas y Google Docs en su nube. Adicionalmente, cuenta con soporte directo para procesar URLs de sitios web públicos, extrayendo el contenido relevante del DOM de forma inteligente. Una de sus funciones más valoradas en ingeniería es la carga de URLs de YouTube: al procesarse, la plataforma lee y descarga automáticamente la transcripción del audio del video para incorporarla como texto de estudio.<br><br>Toda esta información agregada se consolida en una base vectorial unificada para la libreta actual. La interfaz permite interactuar mediante chat con todas las fuentes de manera simultánea o bien seleccionar individualmente qué archivos utilizar para responder a una pregunta en particular. Los estudiantes pueden consolidar las respuestas valiosas del chat en 'Notas Fijas' de la interfaz, sirviendo como borradores editables para redactar informes completos.",
                notes: "Demostrar cómo la IA extrae la transcripción de un video de YouTube y la indexa como fuente."
            },
            {
                layout: "content",
                title: "Audio Overview: Podcasts de Estudio",
                image: "notebooklm_s4.jpg",
                text: "El aprendizaje en entornos universitarios requiere adaptarse a diferentes estilos de asimilación cognitiva (visual, textual y auditivo). Para responder al estilo de aprendizaje auditivo, Google ha desarrollado la funcionalidad 'Audio Overview' dentro de NotebookLM, la cual representa uno de los usos más avanzados de la síntesis de voz conversacional y la generación de contenido estructurado basada en IA.<br><br>Al activar esta función, NotebookLM analiza de forma holística la totalidad de las fuentes cargadas en la libreta. En lugar de redactar un resumen en prosa o una lista de viñetas, el sistema diseña un guion dinámico para dos personajes virtuales de IA (un hombre y una mujer) que asumen el rol de conductores de un programa de debate/podcast de divulgación científica. La tecnología genera un archivo de audio donde ambos conductores conversan de manera fluida sobre los temas de tus apuntes, utilizando entonaciones naturales, inflexiones de voz realistas, risas, interrupciones casuales, analogías y simplificaciones conceptuales.<br><br>El Audio Overview no es un simple lector de textos. Es una traducción de contenido académico a formato conversacional que destaca los puntos clave, conecta ideas de estudio dispersas entre diferentes documentos y explica conceptos difíciles con metáforas del día a día. Los estudiantes pueden usar esta herramienta para repasar materias densas mientras caminan, viajan en autobús o descansan la vista de las pantallas, potenciando la retención de conocimientos de forma ágil y cómoda.",
                notes: "Escuchar unos segundos de un audio de ejemplo para mostrar las inflexiones y naturalidad de las voces sintéticas."
            },
            {
                layout: "content",
                title: "Laboratorios Prácticos del Módulo",
                image: "notebooklm_s5.jpg",
                text: "El uso provechoso de NotebookLM en el ámbito universitario se consolida mediante actividades prácticas estructuradas de investigación y análisis comparativo. Los laboratorios prácticos de este módulo están orientados a familiarizar al alumno con los flujos de carga de fuentes múltiples y análisis grounded.<br><br>El Ejercicio 2.1, 'El Podcast Académico Cruzado' (Fácil), consiste en crear un notebook enfocado en la propuesta de capacitación. Los estudiantes deberán cargar el PDF oficial junto con un documento redactado por ellos con sus propias dudas e inquietudes académicas. Posteriormente, deben generar el Audio Overview y analizar críticamente cómo las voces de IA sintetizan la relación entre la propuesta institucional y sus expectativas de estudio.<br><br>El Ejercicio 2.2, 'Generador de Guías y Flashcards' (Medio), busca el desarrollo de técnicas de autoevaluación. Los alumnos deben utilizar el chat de NotebookLM para identificar los 10 conceptos técnicos más importantes del documento de estudio, estructurarlos en una tabla comparativa bidimensional (concepto y definición del documento) y fijarla en el tablero del proyecto para consolidarla como material de estudio definitivo.<br><br>El Ejercicio 2.3, 'Comparación de Material de Clase vs YouTube' (Difícil), entrena la capacidad de detección de sesgos y discrepancias. Los estudiantes deben añadir un video explicativo de YouTube sobre agentes autónomos a su libreta y formular prompts cruzados para identificar qué temas del video de internet no están considerado en la propuesta formal escrita de la materia, evaluando la vigencia del contenido.",
                notes: "Explicar los entregables de este módulo y supervisar la carga de documentos de los estudiantes."
            }
        ],
        comet: [
            {
                layout: "title",
                title: "COMET BROWSER: NAVEGACIÓN AGÉNTICA",
                subtitle: "Módulo 3: Automatización Web Directa e Interacción Autónoma con Interfaces de Usuario",
                author: "Autora: Ing. Marianela Saravia Ortega<br>Universidad Mayor Real y Pontificia de San Francisco Xavier de Chuquisaca<br>Facultad de Tecnología — Carrera de Ingeniería de Sistemas",
                notes: "Introducción al Módulo 3: Automatización y agentes web autónomos con Comet Browser."
            },
            {
                layout: "content",
                title: "¿Qué es un Agente de Navegación?",
                image: "comet_s2.jpg",
                text: "En la evolución de la Inteligencia Artificial, hemos pasado de los modelos pasivos que solo procesan datos de entrada a los agentes autónomos de acción (AI Agents). Un agente de software es un sistema inteligente capaz de percibir su entorno, tomar decisiones fundamentadas en metas lógicas preestablecidas y ejecutar acciones físicas sobre ese entorno utilizando herramientas específicas. En este marco, Comet Browser (desarrollado por Perplexity AI) representa el surgimiento de los navegadores web agénticos (browser-use agents).<br><br>A diferencia del software de automatización web tradicional (como Selenium o Puppeteer, que dependen de coordenadas de pantalla rígidas o selectores CSS estáticos de programación), un agente web lee y procesa semánticamente la estructura jerárquica del DOM (Document Object Model) de la página web. Esto significa que el agente comprende qué es un botón de compra, un campo de texto de login o un enlace de menú, de la misma forma que un usuario humano lo deduciría visualmente. El agente funciona bajo un bucle continuo de control agéntico estructurado en cuatro etapas: Percibir (analizar la interfaz visual y el código HTML de la pestaña activa), Planificar (diseñar una estrategia secuencial de pasos para cumplir el objetivo), Actuar (realizar clics físicos, teclear datos, enviar formularios) y Reflexionar (verificar el nuevo estado de la pantalla para confirmar si la acción tuvo éxito o si debe corregirse la planificación).<br><br>Este comportamiento dinámico permite realizar tareas de búsqueda de información y transacciones complejas en cualquier sitio web moderno, resumiendo los datos de forma ágil y autónoma.",
                notes: "Diferenciar entre un script tradicional (Selenium) y un agente semántico que lee el DOM."
            },
            {
                layout: "content",
                title: "Capacidades de Comet Browser",
                image: "comet_s3.jpg",
                text: "Comet Browser trasciende la navegación convencional al integrar una IA con permisos controlados de sistema sobre el propio cliente web. Esto dota al navegador de capacidades multitarea avanzadas que ahorran horas de trabajo rutinario y permiten a estudiantes y profesionales centrarse en labores de análisis y toma de decisiones.<br><br>Entre sus funciones principales, destaca la investigación activa y minería de mercado. Si un estudiante solicita comparar las características de tres herramientas de software de simulación, el agente de Comet abrirá de manera autónoma múltiples pestañas de competidores, leerá las tablas de precios de cada sitio, descartará información promocional inútil y sintetizará los datos consolidados en un cuadro markdown estructurado. Otra capacidad crítica es la automatización de plataformas cotidianas de comunicación: el asistente puede acceder directamente al cliente web de Gmail del usuario para buscar correspondencias pasadas de docentes, redactar borradores formales de correos respetando directrices del usuario y, consecutivamente, abrir Google Calendar para agendar citas, bloques de estudio o tutorías académicas de forma totalmente coordinada y sin requerir APIs propietarias de programación.<br><br>Asimismo, el agente destaca en labores de web scraping semántico en portales de empleo, bibliotecas digitales de investigación científica o portales gubernamentales, permitiendo filtrar información compleja mediante lenguaje natural o instrucciones verbales directas.",
                notes: "Mostrar cómo el agente redacta borradores en Gmail y crea citas en Calendar en tiempo real."
            },
            {
                layout: "content",
                title: "Seguridad y Buenas Prácticas",
                image: "comet_s4.jpg",
                text: "La automatización web activa mediante agentes inteligentes introduce nuevos desafíos y riesgos críticos en términos de seguridad informática y privacidad que los estudiantes y profesionales de la Ingeniería de Sistemas deben aprender a gestionar y mitigar de forma consciente desde las aulas.<br><br>El principal riesgo radica en el acceso del agente a sesiones web activas que contienen cookies de autenticación de usuario. Si se instruye al agente a navegar en sitios no seguros o maliciosos, este podría transferir información sensible expuesta en pantalla. Por lo tanto, la primera regla es mantener siempre la supervisión humana en el bucle (Human-in-the-loop). El usuario debe observar visualmente la ejecución del agente en tiempo real, monitoreando las acciones automáticas y teniendo la capacidad de interrumpir el hilo de navegación si detecta comportamientos erráticos, navegación en enlaces sospechosos o intentos de rellenar datos privados en formularios equivocados.<br><br>Adicionalmente, se desaconseja de manera categórica permitir que los agentes gestionen de forma autónoma pasarelas de pago, contraseñas bancarias o portales financieros confidenciales. Finalmente, para evitar ser bloqueados o considerados ataques informáticos por los cortafuegos de los servidores web (bloqueos anti-bot), es imperativo calibrar los agentes para que operen con intervalos de simulación de velocidad humana, evitando el scraping agresivo o el envío masivo de correos (spam) que infrinjan los términos de servicio de los proveedores web visitados.",
                notes: "Hacer hincapié en la ética del scraping y en la seguridad del manejo de sesiones activas."
            },
            {
                layout: "content",
                title: "Laboratorios Prácticos del Módulo",
                image: "comet_s5.jpg",
                text: "La aplicación práctica de la navegación agéntica se ejercita mediante tres escenarios de uso cotidiano diseñados para estudiantes universitarios, orientados a la automatización del estudio de hardware, la gestión de comunicaciones académicas y la inserción laboral temprana.<br><br>El Ejercicio 3.1, 'Comparación de Hardware Académico' (Fácil), plantea que los estudiantes utilicen a Comet Browser para buscar tres opciones de computadoras portátiles adecuadas para el desarrollo de software. El agente debe entrar a tiendas online reales, comparar especificaciones técnicas básicas de procesador, memoria RAM y capacidad de almacenamiento, y estructurar precios y links en una tabla resumen para tomar la decisión de compra.<br><br>El Ejercicio 3.2, 'Asistente Automático de Gmail y Calendar' (Medio), desafía al estudiante a automatizar sus comunicaciones. El agente de Comet debe abrir Gmail, redactar y guardar un borrador formal solicitando una prórroga de examen a un profesor por enfermedad, y seguidamente abrir Google Calendar para agendar un bloque de estudio personal para el día de repaso de la materia.<br><br>El Ejercicio 3.3, 'Extracción de Ofertas de Prácticas' (Difícil), entrena técnicas de web scraping agéntico. El alumno instruye al agente a entrar a portales de empleo de tecnología, buscar convocatorias vigentes para practicantes de sistemas, recopilar nombre de puesto, empresa, requisitos clave y enlace de aplicación de los primeros 5 resultados y exportar los datos recopilados en un archivo de texto plano ordenado en su PC.",
                notes: "Monitorear la ejecución de los alumnos al interactuar con Gmail y LinkedIn."
            }
        ],
        antigravity: [
            {
                layout: "title",
                title: "GOOGLE ANTIGRAVITY",
                subtitle: "Módulo 4: Programación Concurrente y Orquestación de Sistemas Multi-Agente",
                author: "Autora: Ing. Marianela Saravia Ortega<br>Universidad Mayor Real y Pontificia de San Francisco Xavier de Chuquisaca<br>Facultad de Tecnología — Carrera de Ingeniería de Sistemas",
                notes: "Bienvenida al Módulo 4 enfocado en el IDE AntiGravity y la orquestación multi-agente en paralelo."
            },
            {
                layout: "content",
                title: "Sistemas Multi-Agente en Paralelo",
                image: "antigravity_s2.jpg",
                text: "La resolución de problemas lógicos de gran complejidad en informática a menudo se enfrenta a cuellos de botella cuando se intenta resolver mediante un único agente conversacional debido a los límites de atención y procesamiento de los LLMs. La solución avanzada de ingeniería es la implementación de Sistemas Multi-Agente (MAS - Multi-Agent Systems), que proponen descomponer un problema global en un conjunto coordinado de sub-tareas individuales que se delegan a agentes inteligentes especializados en roles específicos.<br><br>Google AntiGravity es un Entorno de Desarrollo Integrado (IDE) diseñado específicamente para programar, orquestar y supervisar estos sistemas concurrentes. En lugar de ejecutar consultas lineales, el programador configura agentes con identidades y herramientas únicas (ej: un agente investigador con acceso a internet, un agente desarrollador con intérprete de Python local, y un agente auditor para verificar la calidad del código). Estos agentes corren de manera concurrente en hilos de procesamiento en paralelo, comunicándose a través de paso de mensajes y archivos compartidos. Esto reduce el consumo innecesario de tokens al limitar el contexto de cada sub-agente únicamente a su tarea específica, logrando una eficiencia notablemente mayor.<br><br>El sustento teórico de este enfoque radica en los principios de la inteligencia artificial distribuida y la computación paralela, donde la interacción de componentes autónomos simples genera comportamientos colectivos inteligentes para solucionar problemas de automatización a nivel empresarial.",
                notes: "Explicar las bases teóricas de la computación paralela y agentes distribuidos."
            },
            {
                layout: "content",
                title: "Panel de Control: Manager View",
                image: "antigravity_s3.jpg",
                text: "La supervisión y depuración de sistemas concurrentes suele ser un desafío complejo en el desarrollo de software tradicional. Para mitigar esto, Google AntiGravity incorpora la interfaz gráfica de control denominada Manager View (Vista de Administrador), la cual actúa como la torre de control de todo el sistema multi-agente en ejecución.<br><br>Desde la Manager View, el programador tiene acceso visual en tiempo real a las consolas individuales de salida de cada sub-agente activo. Esto permite auditar los procesos internos de razonamiento del modelo (su cadena de pensamiento), ver qué herramientas específicas está invocando, qué comandos de terminal está proponiendo y qué APIs externas está consultando en cada instante. El panel reporta de forma detallada el estado del ciclo de vida de cada agente (Ejecutando, Esperando confirmación de usuario, Erróneo o Inactivo).<br><br>Además, supervisa de forma agregada las métricas operativas del proyecto: el consumo acumulado de tokens de entrada y salida de cada modelo (esencial para la optimización de costos), el tiempo transcurrido por tarea y las dependencias lógicas cruzadas entre agentes. La Manager View transforma la orquestación agéntica de una 'caja negra' a un sistema transparente y depurable, facilitando a los ingenieros de sistemas identificar cuellos de botella semánticos o fallos de lógica de los agentes de manera oportuna.",
                notes: "Mostrar cómo el panel permite ver los consumos de tokens y el estado del ciclo de vida."
            },
            {
                layout: "content",
                title: "Artefactos y Autonomía Configurable",
                image: "antigravity_s4.jpg",
                text: "Los flujos de trabajo basados en Inteligencia Artificial Generativa conversacional tradicional a menudo sufren del problema de 'ruido de chat', donde las especificaciones técnicas, las iteraciones de código y los reportes largos se mezclan con los mensajes de diálogo ordinarios de la interfaz. Google AntiGravity introduce el concepto revolucionario de Artifacts (Artefactos) de usuario y el patrón Human-in-the-loop (HITL) para optimizar este flujo.<br><br>Un Artifact es un documento estructurado de salida (ej: un archivo de código fuente en Python, un reporte analítico en Markdown, o un diagrama arquitectónico) que los agentes generan de forma paralela en una pestaña dedicada de la interfaz. Los agentes pueden editar, reescribir y refinar el artefacto de forma de manera iterativa según la conversación progresa, manteniendo el chat libre de código redundante y permitiendo al usuario descargar directamente la versión final y limpia del archivo.<br><br>Por otro lado, la autonomía de los agentes es configurable. En modo supervisado, el IDE detiene el proceso de forma automática y muestra al usuario una ventana de confirmación detallada de la acción propuesta. El agente solo reanudará la marcha una vez que el usuario apruebe explícitamente el paso, garantizando un control total de la seguridad sobre las acciones automáticas.",
                notes: "Explicar el concepto de Human-in-the-loop (HITL) como patrón de seguridad esencial."
            },
            {
                layout: "content",
                title: "Laboratorios Prácticos del Módulo",
                image: "antigravity_s5.jpg",
                text: "Los laboratorios de este módulo en el entorno AntiGravity desafían al estudiante de la USFX a estructurar y supervisar flujos de trabajo multi-agente concurrentes para tareas comunes de desarrollo y administración de sistemas de archivos y datos.<br><br>El Ejercicio 4.1, 'Escritores y Editores en Paralelo' (Fácil), enseña los fundamentos de la colaboración de roles. El estudiante debe instanciar dos agentes en el IDE: un agente investigador que recopila datos científicos en la web sobre la evolución del internet, y un agente redactor que toma los apuntes en tiempo real y edita un reporte académico estructurado en un artefacto markdown.<br><br>El Ejercicio 4.2, 'Agente Organizador de Descargas' (Medio), implementa automatización local segura. El estudiante configura un agente con permisos restringidos de manipulación de archivos para ordenar una carpeta local llena de archivos mezclados de estudio (.pdf, .docx, .zip) en subdirectorios ordenados según su tipo, revisando el artefacto del log final de la operación.<br><br>El Ejercicio 4.3, 'Analista Estadístico con Gráficos' (Difícil), consolida la ejecución de herramientas. El estudiante diseña un flujo agéntico para leer un archivo CSV de notas académicas universitarias, escribir y ejecutar de forma autónoma un script en Python (utilizando Pandas y Matplotlib) para calcular promedios y generar un reporte ejecutivo estructurado en un artefacto Markdown y un gráfico de barras PNG de rendimiento escolar.",
                notes: "Monitorear la configuración del archivo de flujo de los dos agentes en paralelo."
            }
        ],
        cli: [
            {
                layout: "title",
                title: "IAS EN LA TERMINAL: CLI MODE",
                subtitle: "Módulo 5: Productividad de Consola, Modelos Locales y la CLI de AntiGravity en Linux y Windows",
                author: "Autora: Ing. Marianela Saravia Ortega<br>Universidad Mayor Real y Pontificia de San Francisco Xavier de Chuquisaca<br>Facultad de Tecnología — Carrera de Ingeniería de Sistemas",
                notes: "Bienvenida al Módulo 5 final enfocado en terminales, Ollama, APIs de pago y la CLI agy."
            },
            {
                layout: "content",
                title: "Ecosistema CLI Local Gratuito (Ollama y agy)",
                image: "cli_s2.jpg",
                text: "El ecosistema CLI gratuito se sustenta en la ejecución local de modelos, lo que elimina los costos recurrentes y protege la privacidad de la información académica. La herramienta líder en este campo es Ollama, una plataforma open-source que simplifica la descarga, cuantización y ejecución de modelos de lenguaje en el computador del usuario. Ollama funciona de manera nativa en Linux, macOS y Windows, y permite descargar modelos como Llama 3 (Meta), Phi-3 (Microsoft) y Gemma 2 (Google), optimizando de forma automática el uso de la memoria GPU o la CPU mediante aceleración de hardware.<br><br>No obstante, Ollama no es la única herramienta gratuita de consola. Alternativas como Llamafile empaquetan un LLM y un servidor web en un único archivo binario ejecutable para sistemas operativos múltiples, facilitando su distribución. Asimismo, la CLI de AntiGravity (agy) puede configurarse para operar de forma totalmente gratuita. A través del archivo de configuración local, el programador puede redirigir las solicitudes de los agentes autónomos de AntiGravity hacia servidores locales de inferencia (como el endpoint de Ollama en http://localhost:11434/v1), logrando orquestar múltiples agentes paralelos locales sin realizar consumos de API de nube ni requerir tarjetas de crédito.<br><br>La ejecución local en terminal permite la automatización a gran escala libre de costos, ideal para laboratorios de la USFX. El estudiante puede automatizar el procesamiento de archivos de código, realizar análisis sintácticos y probar agentes inteligentes en segundo plano de manera ilimitada, aun cuando la conectividad a internet de la facultad presente fallas o restricciones.",
                notes: "Demostrar cómo configurar la CLI de agy localmente conectada a Ollama sin coste."
            },
            {
                layout: "content",
                title: "Clientes CLI de Pago por API (sgpt y llm)",
                image: "cli_s3.jpg",
                text: "Cuando las tareas académicas o de desarrollo exigen capacidades de razonamiento superiores (como el análisis de grandes bases de datos o depuración de algoritmos complejos de sistemas), el hardware local suele ser insuficiente. Para estos casos, se recurre al ecosistema CLI de pago basado en APIs de la nube, donde se paga estrictamente por token de entrada y salida procesado. La autenticación en la terminal se realiza mediante claves de API. En Linux y Windows, la variable de entorno se configura de manera distinta:<br><br>En Linux, se utiliza el archivo de configuración del shell (bashrc/zshrc) escribiendo: export GEMINI_API_KEY='tu_clave'. En Windows, si se utiliza PowerShell, se declara la variable mediante: $env:GEMINI_API_KEY='tu_clave', mientras que en la consola CMD tradicional se escribe: set GEMINI_API_KEY=tu_clave. Una vez configuradas las credenciales, existen diversos clientes de consola de pago destacados. Shell-GPT (sgpt) permite generar y ejecutar comandos de terminal interactivos en lenguaje natural (ej: sgpt --shell 'limpiar archivos log'). Por otro lado, la herramienta LLM CLI (desarrollada por Simon Willison) es un cliente Python extensible que permite realizar consultas a múltiples proveedores de nube y almacenar de forma estructurada el historial de conversaciones en bases de datos SQLite locales para auditoría de datos.<br><br>Es importante destacar que el modelo de pago por API resulta hasta un 95% más económico para un estudiante que pagar suscripciones web fijas mensuales, ya que una consulta compleja en la terminal cuesta solo una fracción de centavo de dólar.",
                notes: "Mostrar las diferencias en configuración de variables entre bash, PowerShell y CMD."
            },
            {
                layout: "content",
                title: "Orquestación con agy en Linux y Windows",
                image: "cli_s4.jpg",
                text: "La interfaz de terminal de Google AntiGravity, controlada por el comando `agy`, permite orquestar agentes concurrentes autónomos de manera desatendida. Esta CLI puede funcionar tanto en modo local gratuito (enlazada a Ollama) como en modo de pago (conectada a APIs comerciales). Su instalación y uso varían de forma notable según el sistema operativo, debiendo adaptarse a los entornos de trabajo de los alumnos.<br><br>En sistemas Linux (ej. Ubuntu, Kali, Debian), `agy` se integra de forma nativa. La instalación consiste en descargar el binario a una ruta del sistema y exportar la variable de entorno PATH (ej. export PATH=$PATH:/usr/local/bin) en el archivo `.bashrc` para que sea reconocible globalmente. Las tareas se lanzan de forma asíncrona mediante el operador de segundo plano de Unix (ej: `agy run 'tarea' &` o usando la bandera `--background`). En entornos Windows, la CLI se ejecuta principalmente a través de PowerShell mediante el ejecutable `agy.exe`. El estudiante debe añadir el directorio del ejecutable a las Variables de Entorno del Sistema de Windows mediante el Panel de Control o mediante el comando de PowerShell: `[Environment]::SetEnvironmentVariable('Path', $env:Path + ';C:\\antigravity', 'User')`.<br><br>Una vez configurado en Windows, se invoca como `agy run 'tarea'` o `.\\agy.exe run 'tarea'`. El monitoreo se realiza mediante `agy status` para vigilar el estado de los agentes paralelos y `agy log` para auditar la cadena de pensamiento del modelo en ejecución, permitiendo la depuración de tareas complejas en ambos sistemas operativos.",
                notes: "Mostrar cómo agy monitorea tareas de orquestación en background en ambos sistemas."
            },
            {
                layout: "content",
                title: "Laboratorios Prácticos del Módulo",
                image: "cli_s5.jpg",
                text: "Los laboratorios de este módulo buscan capacitar a los estudiantes en la instalación, configuración e integración de soluciones CLI de Inteligencia Artificial en entornos de computación heterogéneos (Linux y Windows), promoviendo la automatización activa de tareas de sistemas de archivos.<br><br>El Ejercicio 5.1, 'Servidor Local y Ejecución Offline' (Fácil), requiere instalar Ollama en Linux o Windows. Los alumnos deben descargar el modelo Phi-3, ejecutar consultas de desarrollo directamente en la consola interactiva y comprobar la ejecución offline desactivando el Wi-Fi. Esto demuestra la viabilidad de la inferencia local sin costo.<br><br>El Ejercicio 5.2, 'Consultas de Shell en Linux y Windows' (Medio), entrena la instalación de `shell-gpt` y la exportación de variables de entorno específicas del sistema. El reto es configurar el cliente con una API Key, y solicitar comandos del sistema para buscar y reubicar archivos grandes (en bash para Linux y en PowerShell para Windows), ejecutándolos de forma segura.<br><br>El Ejercicio 5.3, 'Lanzador de Agentes agy Cruzado' (Difícil), desafía al estudiante a orquestar agentes autónomos. Se debe configurar la CLI de AntiGravity, lanzar una tarea de depuración de código de forma asíncrona en segundo plano (usando `&` en Linux o jobs en PowerShell de Windows), monitorear su avance secuencial mediante `agy status` y leer los resultados del artefacto resultante impreso en consola.",
                notes: "Dar retroalimentación final sobre el uso de la terminal y cerrar el taller de capacitación de la USFX."
            }
        ]
    },
    
    manuals: {
        use: [
            {
                id: "use-chatbot",
                title: "Manual de Uso: Chatbots y Prompts",
                content: `
                    <p>Los chatbots basados en Modelos de Lenguaje de Gran Escala (LLMs) son herramientas conversacionales versátiles. Para sacarles el máximo provecho profesional, debemos tratarlos como asistentes especializados en lugar de buscadores tradicionales de internet.</p>
                    
                    <h3>1. Acceso a las Plataformas Principales</h3>
                    <p>Puedes utilizar interfaces gratuitas como <b>Google Gemini</b> (gemini.google.com) o <b>ChatGPT</b> (chatgpt.com). Ambos ofrecen modelos avanzados y soporte para procesamiento de archivos de texto e imágenes.</p>
                    
                    <h3>2. Estructuración del Prompt en la Práctica</h3>
                    <p>Cada vez que envíes una consulta, asegúrate de escribirla siguiendo estos cuatro bloques lógicos:</p>
                    <ul>
                        <li><b>Rol del Asistente (Contexto):</b> <i>"Actúa como un experto desarrollador de software con 10 años de experiencia en Python..."</i></li>
                        <li><b>Instrucción (Tarea):</b> <i>"...escribe una función que limpie una cadena de texto eliminando caracteres especiales."</i></li>
                        <li><b>Formato de Entrega:</b> <i>"Entrega únicamente el código de la función dentro de un bloque markdown de Python, acompañado de 3 casos de prueba explicados."</i></li>
                        <li><b>Condiciones de Salida:</b> <i>"No agregues texto introductorio ni conclusiones. Usa nombres de variables descriptivos y en español."</i></li>
                    </ul>
                    
                    <div class="callout-box tip">
                        <div class="callout-title">💡 Consejo del Profesional</div>
                        <p>Si la tarea requiere lógica matemática o lógica estructurada compleja, añade siempre al final de tu prompt la instrucción: <b>"Piensa paso a paso y justifica detalladamente cada etapa antes de formar el resultado definitivo"</b> (Técnica Chain-of-Thought).</p>
                    </div>
                `
            },
            {
                id: "use-notebooklm",
                title: "Manual de Uso: NotebookLM",
                content: `
                    <p>NotebookLM es una plataforma de investigación asistida por IA de Google que funciona de forma aislada, utilizando únicamente las fuentes documentales aportadas por el usuario para responder preguntas.</p>
                    
                    <h3>1. Creación de una Libreta (Notebook)</h3>
                    <p>Ingresa a <b>notebooklm.google</b> con tu cuenta de Google. Haz clic en "New Notebook" (Nueva Libreta) para crear un espacio de trabajo limpio.</p>
                    
                    <h3>2. Carga de Fuentes</h3>
                    <p>Una vez dentro de la libreta, el sistema te solicitará añadir fuentes. Puedes seleccionar:</p>
                    <ul>
                        <li>Archivos desde tu PC (PDFs, documentos Word, TXT).</li>
                        <li>Archivos de Google Drive (Google Docs, Slides).</li>
                        <li>URLs de sitios web de referencia (artículos académicos, blogs).</li>
                        <li>Enlaces de videos de YouTube (el sistema procesará la transcripción de audio del video de forma automática).</li>
                    </ul>
                    
                    <h3>3. Interacción y Guías</h3>
                    <p>En la parte inferior de la interfaz, dispones de un chat. Al hacer preguntas, NotebookLM buscará en las fuentes cargadas y te devolverá una respuesta redactada, acompañada de <b>números de cita interactivos</b>. Al hacer clic en una cita, el panel izquierdo te mostrará el párrafo original exacto del cual se extrajo la información.</p>
                    
                    <div class="callout-box info">
                        <div class="callout-title">🎙️ Audio Overview (Podcasts)</div>
                        <p>En la esquina superior derecha, dentro del panel de notas de fuentes, encontrarás el botón "Generate Audio". Al presionarlo, el sistema procesará tus documentos y creará una conversación de audio fluida y amena protagonizada por dos presentadores artificiales de Google discutiendo tu material.</p>
                    </div>
                `
            },
            {
                id: "use-comet",
                title: "Manual de Uso: Comet Browser",
                content: `
                    <p>Comet Browser es un navegador diseñado para la automatización y navegación agéntica basada en Inteligencia Actorial. A diferencia de las extensiones tradicionales, Comet puede leer y entender las páginas activas del mismo modo que lo haría un humano.</p>
                    
                    <h3>1. Activación del Asistente Agéntico</h3>
                    <p>Con Comet abierto, puedes desplegar la barra lateral de IA o presionar el comando de voz integrado. Puedes darle instrucciones complejas en lenguaje natural.</p>
                    
                    <h3>2. Interacción con Formularios y Enlaces</h3>
                    <p>El agente de Comet lee el árbol DOM del navegador. Si le pides: <i>"Entra a Gmail, busca correos de profesores y haz un resumen"</i>, el agente ejecutará una navegación autónoma simulando clics del ratón y escritura en teclado sobre la interfaz web.</p>
                    
                    <div class="callout-box warning">
                        <div class="callout-title">⚠️ Seguridad y Privacidad</div>
                        <p>Los agentes de navegación tienen acceso visual a la información de las pestañas que indicas. Nunca ejecutes agentes sobre formularios bancarios o páginas con información altamente sensible sin supervisión activa en pantalla.</p>
                    </div>
                `
            },
            {
                id: "use-antigravity",
                title: "Manual de Uso: Google AntiGravity",
                content: `
                    <p>Google AntiGravity es un Entorno de Desarrollo Integrado (IDE) diseñado para el diseño, despliegue y monitoreo de agentes inteligentes autónomos que trabajan de forma coordinada.</p>
                    
                    <h3>1. Creación de Agentes y Roles</h3>
                    <p>En la vista de configuración de AntiGravity, puedes definir uno o más agentes de IA asignándoles roles específicos, modelos a utilizar, herramientas asociadas (como acceso a terminal, web, python, etc.) y un prompt de sistema que defina sus directrices de comportamiento.</p>
                    
                    <h3>2. Manager View (Panel de Control)</h3>
                    <p>Cuando ejecutas una tarea compleja, la vista del administrador (Manager View) te permite visualizar en paralelo qué está procesando cada subagente en tiempo real. Puedes ver terminales individuales y flujos de datos cruzados.</p>
                    
                    <h3>3. Control de Autonomía y Artifacts</h3>
                    <ul>
                        <li><b>Autonomía:</b> Puedes configurar el nivel de control del agente. En modo 'supervisado', el agente solicitará tu confirmación antes de ejecutar comandos del sistema o guardar archivos importantes.</li>
                        <li><b>Artifacts:</b> Son las salidas estables del trabajo agéntico. Si un agente genera un reporte markdown o un código fuente, este aparecerá de forma persistente en la barra de artefactos del proyecto.</li>
                    </ul>
                `
            },
            {
                id: "use-cli",
                title: "Manual de Uso: IAs en Modo CLI (Consola)",
                content: `
                    <p>El uso de Inteligencia Artificial desde la interfaz de línea de comandos (CLI) permite automatizar tareas del sistema de archivos, integrar respuestas de IA en scripts de Shell y optimizar recursos del PC.</p>
                    
                    <h3>1. Ollama (Modo Local Gratuito)</h3>
                    <p>Ollama corre de manera local en sistemas Linux, macOS y Windows.</p>
                    <ol>
                        <li>Descarga e instala Ollama desde su sitio web oficial.</li>
                        <li>Abre tu terminal y ejecuta: <code>ollama run phi3</code> (esto descargará y ejecutará el modelo ligero Phi-3 de Microsoft).</li>
                        <li>Escribe tus preguntas directamente en la terminal.</li>
                        <li>Para salir, escribe <code>/bye</code>.</li>
                    </ol>
                    
                    <h3>2. Shell-GPT (sgpt) y API Keys (Modo de Pago)</h3>
                    <p>Para usar modelos en la nube como Gemini o GPT de forma económica, podemos instalar <code>shell-gpt</code>:</p>
                    <pre class="slide-code-box">pip install shell-gpt</pre>
                    <p>Configura tu clave de API de forma permanente exportando la variable en tu archivo de configuración del shell (ej. <code>.bashrc</code> o <code>.zshrc</code>):</p>
                    <pre class="slide-code-box">export GEMINI_API_KEY="tu_api_key_aqui"</pre>
                    
                    <h3>3. Comandos de Referencia Rápidos</h3>
                    <div class="cli-grid">
                        <div class="cli-card">
                            <div class="cli-card-header">
                                <b>Ollama CLI</b>
                                <span class="cli-badge free">Gratis</span>
                            </div>
                            <code style="font-size: 0.8rem;">ollama run llama3</code><br>
                            <code style="font-size: 0.8rem;">ollama list</code>
                        </div>
                        <div class="cli-card">
                            <div class="cli-card-header">
                                <b>Shell GPT</b>
                                <span class="cli-badge paid">Pago API</span>
                            </div>
                            <code style="font-size: 0.8rem;">sgpt "código para ordenar lista"</code><br>
                            <code style="font-size: 0.8rem;">sgpt --shell "crear alias"</code>
                        </div>
                    </div>
                `
            }
        ],
        exercises: [
            {
                id: "ex-chatbot-1",
                topic: "chatbot",
                title: "Ejercicio 1.1: El Tutor Socrático",
                difficulty: "easy",
                difficultyText: "Fácil",
                objective: "Diseñar un tutor virtual que te guíe a comprender un tema complejo de tu carrera sin darte la respuesta directa, usando el método Chain-of-Thought.",
                instructions: `
                    <ol>
                        <li>Ingresa a tu chatbot de confianza (Gemini o ChatGPT).</li>
                        <li>Escribe un prompt estructurado aplicando la metodología <b>TAREA + CONTEXTO + FORMATO + CONDICIONES</b>.</li>
                        <li>Configura el rol de la IA como un <i>Tutor Socrático</i> experto en tu área de estudio.</li>
                        <li>Establece como condición estricta que <b>nunca</b> proporcione la definición directa, sino que te haga preguntas reflexivas y use analogías para que tú deduzcas el concepto.</li>
                        <li>Interactúa con el chatbot para aprender un tema difícil (por ejemplo: '¿Qué es un vector en álgebra lineal?' o '¿Cómo funciona la memoria RAM?').</li>
                    </ol>
                `,
                solution: `
                    <p><b>Prompt propuesto a ingresar:</b></p>
                    <pre class="slide-code-box">
[TAREA] Explícame el concepto de "recursión en programación" utilizando el método socrático.
[CONTEXTO] Soy estudiante de primer semestre de Ingeniería de Sistemas y me cuesta entender la lógica abstracta.
[FORMATO] Respuestas cortas, en lenguaje conversacional, planteándome una pregunta a la vez para guiar mi razonamiento.
[CONDICIONES]
- NUNCA definas la recursión directamente ni me des código resuelto.
- Utiliza una analogía del mundo real (por ejemplo, muñecas rusas o un espejo en frente de otro).
- Guíame paso a paso y espera a que yo responda antes de hacer la siguiente pregunta.
                    </pre>
                `
            },
            {
                id: "ex-chatbot-2",
                topic: "chatbot",
                title: "Ejercicio 1.2: El Sintetizador de Código Limpio",
                difficulty: "medium",
                difficultyText: "Medio",
                objective: "Generar un script funcional en Python que aplique buenas prácticas de desarrollo (PEP 8), documentado y con manejo de errores a partir de una descripción en lenguaje natural.",
                instructions: `
                    <ol>
                        <li>Define un prompt que solicite un programa que calcule el promedio de notas de estudiantes.</li>
                        <li>Instruye a la IA a seguir el estándar de estilo de programación Python (PEP 8).</li>
                        <li>Agrega condiciones específicas para que valide que los valores de notas estén en el rango de 0 a 100, y lance excepciones claras en caso contrario.</li>
                        <li>Pide que incluya comentarios detallados y un bloque de ejecución principal de ejemplo.</li>
                    </ol>
                `,
                solution: `
                    <p><b>Prompt propuesto a ingresar:</b></p>
                    <pre class="slide-code-box">
[TAREA] Crea un script en Python que calcule el promedio ponderado de notas de un estudiante.
[CONTEXTO] Desarrollador de software junior que necesita entregar un código limpio para revisión.
[FORMATO] Código de Python formateado correctamente en un bloque markdown, con docstrings en las funciones.
[CONDICIONES]
- Debe cumplir estrictamente con el estándar PEP 8.
- Si las notas ingresadas son menores que 0 o mayores que 100, debe levantar una excepción del tipo ValueError personalizada con un mensaje claro en español.
- Debe incluir comentarios explicando la fórmula matemática del promedio ponderado.
- Añade un ejemplo de uso práctico con datos simulados en la sección "if __name__ == '__main__':".
                    </pre>
                `
            },
            {
                id: "ex-chatbot-3",
                topic: "chatbot",
                title: "Ejercicio 1.3: Clasificador Few-Shot a JSON",
                difficulty: "hard",
                difficultyText: "Difícil",
                objective: "Clasificar opiniones sobre la universidad en diferentes categorías y con una puntuación de sentimiento del 1 al 5, entregando el resultado exclusivamente en formato JSON estructurado.",
                instructions: `
                    <ol>
                        <li>Escribe un prompt que le proporcione al chatbot tres ejemplos de textos clasificados con su respectiva salida JSON (técnica Few-Shot).</li>
                        <li>Proporciona una lista de 4 opiniones de estudiantes no clasificadas.</li>
                        <li>Establece una restricción estricta indicando que el chatbot <b>únicamente</b> debe retornar el bloque de código JSON, sin textos de saludo o explicaciones adicionales.</li>
                    </ol>
                `,
                solution: `
                    <p><b>Prompt propuesto a ingresar:</b></p>
                    <pre class="slide-code-box">
[TAREA] Clasifica el sentimiento de los textos de entrada en Positivo, Neutro o Negativo, y asígnales una categoría (Infraestructura, Docencia, Administración).
[CONTEXTO] Analista de datos de calidad institucional académica.
[FORMATO] Exclusivamente un objeto JSON de tipo array.
[CONDICIONES]
- Sigue fielmente los ejemplos proporcionados a continuación.
- No agregues explicaciones, saludos ni marcas de bloques que no sean el JSON limpio.

Ejemplos:
Texto: "El aire acondicionado de los laboratorios no funciona y hace demasiado calor."
Salida: {"texto": "El aire acondicionado de los laboratorios no funciona y hace demasiado calor.", "sentimiento": "Negativo", "categoria": "Infraestructura"}

Texto: "El profesor de cálculo explica muy bien y tiene mucha paciencia."
Salida: {"texto": "El profesor de cálculo explica muy bien y tiene mucha paciencia.", "sentimiento": "Positivo", "categoria": "Docencia"}

Ahora procesa los siguientes textos y genera la salida JSON para cada uno en una lista:
1. "Los trámites de inscripción en caja tardan demasiadas horas y el personal atiende de mal humor."
2. "La biblioteca tiene libros actualizados, pero el espacio de estudio es muy pequeño."
3. "Me gusta el nuevo plan de estudios de la carrera, tiene materias muy actuales."
                    </pre>
                `
            },
            {
                id: "ex-notebooklm-1",
                topic: "notebooklm",
                title: "Ejercicio 2.1: El Podcast Académico Cruzado",
                difficulty: "easy",
                difficultyText: "Fácil",
                objective: "Crear un podcast sintético de discusión a partir de la propuesta de capacitación de IA y apuntes personales del estudiante.",
                instructions: `
                    <ol>
                        <li>Ingresa a NotebookLM (notebooklm.google).</li>
                        <li>Crea un nuevo Notebook y nómbralo "Estudios de Capacitación IA".</li>
                        <li>Sube la propuesta de capacitación (el archivo PDF proporcionado en tu carpeta de trabajo).</li>
                        <li>Crea un documento de texto directamente dentro de NotebookLM con tus propias anotaciones de lo que esperas aprender de la IA en tus estudios.</li>
                        <li>Genera un "Audio Overview" y escúchalo. Anota cómo los presentadores relacionan la propuesta institucional con las expectativas del estudiante.</li>
                    </ol>
                `,
                solution: `
                    <p><b>Instrucciones de Verificación:</b></p>
                    <p>Una vez generado el Audio Overview, verás un reproductor en el panel derecho de fuentes. Escucharás un diálogo dinámico donde las voces artificiales sintetizan las ideas principales del taller de IA.</p>
                `
            },
            {
                id: "ex-notebooklm-2",
                topic: "notebooklm",
                title: "Ejercicio 2.2: Generador de Guías y Flashcards",
                difficulty: "medium",
                difficultyText: "Medio",
                objective: "Extraer conceptos técnicos de la propuesta académica y estructurarlos en un formato de autoevaluación para prepararse ante una sustentación de proyecto.",
                instructions: `
                    <ol>
                        <li>En tu notebook activo de la propuesta de capacitación, ve a la sección de chat.</li>
                        <li>Pide al sistema que genere una lista de 10 conceptos clave mencionados en el documento (ej: RAG, Ingeniería de prompts, agentes paralelos).</li>
                        <li>Solicita que estructure cada concepto en una tabla con dos columnas: "Concepto" y "Definición del documento".</li>
                        <li>Utiliza la opción "Save to Note" (Guardar como Nota) para almacenar esta tabla en tus notas fijadas de NotebookLM.</li>
                    </ol>
                `,
                solution: `
                    <p><b>Prompt a ingresar en el chat de NotebookLM:</b></p>
                    <pre class="slide-code-box">
Analiza el documento de la propuesta de capacitación y extrae los 10 términos técnicos más importantes. Preséntalos en una tabla markdown de dos columnas: una para el concepto y otra para su explicación resumida basada únicamente en el texto.
                    </pre>
                `
            },
            {
                id: "ex-notebooklm-3",
                topic: "notebooklm",
                title: "Ejercicio 2.3: Comparación de Material de Clase vs Video",
                difficulty: "hard",
                difficultyText: "Difícil",
                objective: "Identificar complementos y omisiones entre el plan oficial del taller de IA y una clase grabada de YouTube sobre agentes autónomos.",
                instructions: `
                    <ol>
                        <li>Busca en YouTube un video introductorio sobre "Agentes Inteligentes y Auto-GPT" (copia el link).</li>
                        <li>En tu Notebook de estudio, agrega una nueva fuente seleccionando la opción "YouTube URL". Pega el link.</li>
                        <li>Una vez que se haya procesado la transcripción, escribe una pregunta en el chat solicitando que identifique qué temas del video de YouTube no están considerados en el Módulo 4 de la propuesta física del taller.</li>
                    </ol>
                `,
                solution: `
                    <p><b>Pregunta sugerida para el chat cruzado:</b></p>
                    <pre class="slide-code-box">
Compara el contenido de la transcripción del video de YouTube que acabo de añadir con los contenidos del Módulo 4 (Google AntiGravity) de la propuesta escrita. Haz una lista de:
1. Conceptos del video que no figuran en la propuesta.
2. Temas de la propuesta que el video no menciona.
                    </pre>
                `
            },
            {
                id: "ex-comet-1",
                topic: "comet",
                title: "Ejercicio 3.1: Tabla Comparativa de Hardware Académico",
                difficulty: "easy",
                difficultyText: "Fácil",
                objective: "Utilizar el navegador Comet para realizar una búsqueda comparativa de precios y características de laptops recomendadas para estudiantes de ingeniería.",
                instructions: `
                    <ol>
                        <li>Abre Comet Browser y activa el asistente inteligente.</li>
                        <li>Ingresa una instrucción que le pida buscar en al menos tres tiendas en línea (ej. Amazon, BestBuy u otras locales) laptops con un procesador mínimo Ryzen 5 / Core i5 y 16GB de RAM.</li>
                        <li>Pídele al agente que recolecte precios, especificaciones y enlaces directos de compra, y los consolide en una tabla.</li>
                    </ol>
                `,
                solution: `
                    <p><b>Instrucción para el Agente de Comet:</b></p>
                    <pre class="slide-code-box">
Busca 3 opciones de laptops ideales para estudiantes de sistemas con procesador i5 o Ryzen 5 y 16GB de RAM. Entra a tiendas online, compara sus precios en dólares, sus principales características técnicas y genera una tabla comparativa con enlaces de compra.
                    </pre>
                `
            },
            {
                id: "ex-comet-2",
                topic: "comet",
                title: "Ejercicio 3.2: Asistente Automático de Gmail y Agenda",
                difficulty: "medium",
                difficultyText: "Medio",
                objective: "Automatizar mediante Comet la redacción de una solicitud de justificación de inasistencia a un docente y crear el recordatorio correspondiente en Google Calendar.",
                instructions: `
                    <ol>
                        <li>Asegúrate de tener iniciada tu sesión de Google en el navegador Comet.</li>
                        <li>Escribe al asistente de Comet que abra Gmail, redacte un borrador de correo formal dirigido al docente explicando una inasistencia ficticia y que luego guarde ese borrador.</li>
                        <li>Posteriormente, pídele al agente que abra Google Calendar y agende una tutoría de repaso para el próximo viernes a las 4:00 PM.</li>
                    </ol>
                `,
                solution: `
                    <p><b>Comandos secuenciales para ingresar en Comet:</b></p>
                    <pre class="slide-code-box">
1. "Abre Gmail y redacta un borrador para el profesor de Programación I justificando mi inasistencia de ayer debido a problemas de salud. Pídele coordinar una fecha para presentar el laboratorio pendiente de forma respetuosa."
2. "Ahora abre mi Google Calendar y crea un recordatorio llamado 'Tutoría de Repaso Programación' para el viernes 14 de agosto a las 16:00 horas."
                    </pre>
                `
            },
            {
                id: "ex-comet-3",
                topic: "comet",
                title: "Ejercicio 3.3: Extracción Automatizada de Ofertas de Prácticas",
                difficulty: "hard",
                difficultyText: "Difícil",
                objective: "Configurar un flujo agéntico para extraer ofertas de prácticas pre-profesionales para programadores en un sitio web de empleo y guardarlo en un archivo limpio.",
                instructions: `
                    <ol>
                        <li>Indica al asistente de Comet que visite una plataforma de empleo (como LinkedIn o portales locales) y busque posiciones con palabras clave "Practicante de Sistemas" o "Desarrollador Junior".</li>
                        <li>Indica al agente que navegue por los primeros 5 resultados de búsqueda, extraiga el título del cargo, la empresa, los requisitos obligatorios y la ubicación.</li>
                        <li>Ordénale guardar esta información estructurada en un archivo de texto en la computadora de estudio.</li>
                    </ol>
                `,
                solution: `
                    <p><b>Instrucción detallada para Comet:</b></p>
                    <pre class="slide-code-box">
Ve al buscador de empleo de LinkedIn o Indeed, busca 'Junior Developer' o 'Practicante de Desarrollo'. Navega entre los primeros 5 resultados y extrae: Nombre del puesto, Empresa, Enlace de postulación y Requisitos principales. Guarda toda esta información en un archivo de texto llamado 'oportunidades_practicas.txt'.
                    </pre>
                `
            },
            {
                id: "ex-antigravity-1",
                topic: "antigravity",
                title: "Ejercicio 4.1: Configuración de Escritores y Editores en Paralelo",
                difficulty: "easy",
                difficultyText: "Fácil",
                objective: "Definir dos agentes autónomos en AntiGravity que colaboren secuencialmente: uno realiza la investigación académica y otro redacta un documento estructurado.",
                instructions: `
                    <ol>
                        <li>En el entorno de desarrollo AntiGravity, crea un nuevo flujo de trabajo.</li>
                        <li>Configura el <b>Agente Investigador</b> con herramientas de búsqueda web para recopilar datos de la historia del Internet de las Cosas (IoT).</li>
                        <li>Configura el <b>Agente Redactor</b> con instrucciones para recibir los datos de investigación y generar un artículo en formato Markdown.</li>
                        <li>Inicia la ejecución y supervisa en el <b>Manager View</b> cómo se comunican ambos agentes hasta generar el reporte.</li>
                    </ol>
                `,
                solution: `
                    <p><b>Estructura de la configuración en AntiGravity:</b></p>
                    <pre class="slide-code-box">
Investigador (Agent_1):
  - System Prompt: "Busca en la web información verídica y fechas clave sobre el nacimiento del IoT."
  - Tools: [web_search]

Redactor (Agent_2):
  - System Prompt: "Toma la información entregada por Agent_1 y redacta un artículo de divulgación científica en Markdown, organizándolo con subtítulos claros y sin jerga."
                    </pre>
                `
            },
            {
                id: "ex-antigravity-2",
                topic: "antigravity",
                title: "Ejercicio 4.2: Agente Organizador de Descargas",
                difficulty: "medium",
                difficultyText: "Medio",
                objective: "Desplegar un agente local en AntiGravity con permisos de archivos para clasificar automáticamente documentos según su extensión.",
                instructions: `
                    <ol>
                        <li>Crea un agente en tu espacio de trabajo y asígnale el rol de <i>File Manager Assistant</i>.</li>
                        <li>Otórgale acceso restringido a la carpeta de descargas de prueba.</li>
                        <li>Configura al agente para que identifique archivos <code>.pdf</code>, <code>.docx</code> y <code>.zip</code>, y los ordene en subcarpetas llamadas 'Documentos', 'Textos' y 'Comprimidos'.</li>
                        <li>Revisa el <b>Artifact</b> de reporte final generado por el agente para comprobar qué archivos fueron movidos.</li>
                    </ol>
                `,
                solution: `
                    <p><b>Prompt de Sistema para el Agente Organizador:</b></p>
                    <pre class="slide-code-box">
Eres un agente organizador de archivos locales. Tu tarea es listar los archivos del directorio './descargas_prueba' y clasificarlos:
- Mueve archivos PDF a './descargas_prueba/Documentos'
- Mueve archivos DOCX a './descargas_prueba/Textos'
- Mueve archivos ZIP/RAR a './descargas_prueba/Comprimidos'
Una vez finalizado, genera un reporte markdown en la raíz listando las acciones tomadas.
                    </pre>
                `
            },
            {
                id: "ex-antigravity-3",
                topic: "antigravity",
                title: "Ejercicio 4.3: Analista Estadístico Automático con Artifact",
                difficulty: "hard",
                difficultyText: "Difícil",
                objective: "Ejecutar un agente analista de datos que cargue un archivo CSV de notas estudiantiles, realice cálculos de estadísticas básicas en Python y genere una gráfica en un artefacto visible.",
                instructions: `
                    <ol>
                        <li>Carga en el entorno de AntiGravity un archivo CSV ficticio con columnas: "Nombre", "Nota1", "Nota2", "Nota3".</li>
                        <li>Configura al agente analista con la biblioteca <code>pandas</code> y <code>matplotlib</code> habilitadas.</li>
                        <li>Indícale calcular los promedios globales por examen y el top 3 de alumnos con mejor rendimiento.</li>
                        <li>Configura la salida para que cree un reporte gráfico en PNG y un archivo resumen markdown como <b>Artifact</b> de usuario.</li>
                    </ol>
                `,
                solution: `
                    <p><b>Instrucción del flujo en AntiGravity:</b></p>
                    <pre class="slide-code-box">
Lee el archivo './notas.csv'. Escribe y ejecuta un script en Python que calcule el promedio de cada examen, la tasa de aprobación (notas >= 51) y genere un gráfico de barras de los promedios de los 5 estudiantes con mejor nota. Guarda la imagen en './grafico_promedios.png' y escribe los resultados en el artefacto 'reporte_rendimiento.md'.
                    </pre>
                `
            },
            {
                id: "ex-cli-1",
                topic: "cli",
                title: "Ejercicio 5.1: Servidor Local y Descarga de Modelos Offline",
                difficulty: "easy",
                difficultyText: "Fácil",
                objective: "Configurar el cliente de Ollama local, descargar un modelo eficiente de Microsoft y realizar tu primera consulta de codificación sin conexión.",
                instructions: `
                    <ol>
                        <li>Abre tu consola de comandos del sistema.</li>
                        <li>Instala Ollama en tu equipo Linux o macOS ejecutando: <br><code>curl -fsSL https://ollama.com/install.sh | sh</code></li>
                        <li>Inicia el servicio de Ollama y descarga el modelo ultraligero Phi-3 escribiendo: <br><code>ollama run phi3</code></li>
                        <li>Una vez cargado el prompt interactivo de Ollama, pídele que escriba una función matemática simple para calcular números primos en C++.</li>
                        <li>Prueba apagar tu Wi-Fi del computador y pídele otra explicación para constatar el funcionamiento 100% offline.</li>
                    </ol>
                `,
                solution: `
                    <p><b>Comandos secuenciales para la terminal:</b></p>
                    <pre class="slide-code-box">
<span style="color: var(--success);">$</span> ollama --version
<span style="color: var(--success);">$</span> ollama run phi3
>>> Escribe un bucle simple en C++ que imprima los números del 1 al 10.
>>> /bye
                    </pre>
                `
            },
            {
                id: "ex-cli-2",
                topic: "cli",
                title: "Ejercicio 5.2: Consultas Avanzadas al Shell con Shell-GPT",
                difficulty: "medium",
                difficultyText: "Medio",
                objective: "Utilizar Shell-GPT configurado con una clave de API para solicitar comandos bash de filtrado de archivos y ejecutarlos directamente desde la consola.",
                instructions: `
                    <ol>
                        <li>En tu terminal, instala <code>shell-gpt</code> mediante <code>pip</code>.</li>
                        <li>Crea una clave API de Google AI Studio o OpenAI y expórtala en tus variables de sesión.</li>
                        <li>Usa la bandera <code>--shell</code> o <code>-s</code> para pedirle a <code>sgpt</code> un comando que busque en tu carpeta actual todos los archivos modificados hace menos de 2 días.</li>
                        <li>Acepta la sugerencia pulsando 'E' (Execute) para ejecutar el comando sugerido en tu consola.</li>
                    </ol>
                `,
                solution: `
                    <p><b>Secuencia de comandos terminal:</b></p>
                    <pre class="slide-code-box">
<span style="color: var(--success);">$</span> pip install shell-gpt
<span style="color: var(--success);">$</span> export GEMINI_API_KEY="AIzaSy..."  # Reemplazar con clave real
<span style="color: var(--success);">$</span> sgpt --shell "buscar y listar todos los archivos de más de 5MB en mi carpeta home"
                    </pre>
                `
            },
            {
                id: "ex-cli-3",
                topic: "cli",
                title: "Ejercicio 5.3: Lanzador de Agentes mediante CLI de AntiGravity",
                difficulty: "hard",
                difficultyText: "Difícil",
                objective: "Automatizar un flujo agéntico autónomo en segundo plano utilizando el cliente de consola de AntiGravity y consultando los logs mediante la terminal.",
                instructions: `
                    <ol>
                        <li>Verifica que tienes instalado el binario de control de AntiGravity (<code>agy</code>) ejecutando <code>agy --help</code>.</li>
                        <li>Prepara un archivo de tareas simple con instrucciones de depuración de código de un archivo de prueba con errores de sintaxis en JavaScript.</li>
                        <li>Lanza el agente en la consola usando la instrucción de ejecución: <br><code>agy run --file debug_js_task.json --background</code></li>
                        <li>Monitorea el avance de la tarea y el estado del agente usando el comando: <br><code>agy status</code></li>
                        <li>Cuando finalice la tarea, visualiza el artefacto resultante directamente en tu consola ejecutando <code>cat ./debug_report.md</code>.</li>
                    </ol>
                `,
                solution: `
                    <p><b>Comandos en terminal para AntiGravity CLI:</b></p>
                    <pre class="slide-code-box">
<span style="color: var(--success);">$</span> agy --version
<span style="color: var(--success);">$</span> agy run "analiza y corrige el archivo ./app.js que tiene errores" --output-artifact report.md
<span style="color: var(--success);">$</span> agy status
<span style="color: var(--success);">$</span> cat report.md
                    </pre>
                `
            }
        ]
    }
};

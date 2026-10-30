# Informe de Implementación: Landing de Presentación Comercial
## Proyecto: "Magallanes — Hecho por su Gente"
**Destinatario:** Centro de Negocios Sercotec Punta Arenas y Satélites (Puerto Natales, Porvenir, Cabo de Hornos), operado por INACAP.  
**Proponente:** Agencia PatagoniaCoach (Punta Arenas, Región de Magallanes).  
**Fecha de Emisión:** 30 de Octubre de 2026.  
**Ruta de Acceso Local:** `http://localhost:8080/presentacion/` (`presentacion/index.html`).  
**Documento Maestro Vinculado:** `assets/docs/Propuesta_comercial_Sercotec_PatagoniaCoach.pdf` (14 páginas).

---

## 1. Resumen Ejecutivo y Arquitectura

En concordancia con los Términos de Referencia oficiales del proyecto y la propuesta técnica-comercial vigente, se implementó una **Landing Page de Presentación Independiente y Liviana** en el directorio `presentacion/`.

Esta solución emula la disciplina organizacional utilizada previamente en la presentación institucional MICE (`https://mice-presentaciones-cormag.vercel.app/`), garantizando dos principios arquitectónicos clave:
1. **Preservación total de la plataforma funcional (Demo):** La Home y las rutas del directorio de emprendedores (`/`, `/directorio/`, `/historias/`, etc.) se mantienen 100% intactas, accesibles y operativas como producto demostrativo, sin ser contaminadas con discursos de venta ni convertidas en presentaciones comerciales.
2. **Presentación Comercial y Técnica Dedicada (`/presentacion/`):** Estructurada como una herramienta ejecutiva para que el comité evaluador de Sercotec e INACAP revise en un solo lugar la propuesta de valor, los antecedentes de la agencia, el alcance de 12 meses, la carta Gantt de 30 días hábiles, la estructura presupuestaria cerrada, la política de privacidad Ley 21.719 y los enlaces directos a cada vista de la demo.

---

## 2. Estructura de las 10 Secciones Implementadas

La landing de presentación recorre taxativamente los diez puntos requeridos:

| Sección | ID / Ancla | Contenido y Enfoque Fiel a la Propuesta Oficial |
| :--- | :--- | :--- |
| **A. Portada (Hero)** | `#portada` | Identificación del proyecto, propuesta técnica-comercial, destinatario (Centro Sercotec / INACAP), proponente (Agencia PatagoniaCoach). CTAs directos a Demo, PDF oficial y Centro de Recursos. Mockup visual de la demo en ventana macOS. |
| **B. Antecedentes y Propósito** | `#antecedentes` | Arraigo en Punta Arenas (Av. Manuel Bulnes 215), diagnóstico territorial de las 4 provincias (Magallanes, Última Esperanza, Tierra del Fuego, Antártica Chilena). Objetivo: visibilidad y conexión comercial directa sin intermediación ni cobro de comisiones (B2C y B2B). |
| **C. Recorrido del Directorio** | `#directorio` | Exposición de las 6 vistas funcionales existentes (Home, Catálogo con filtros, Ficha Lookbook con WhatsApp, Tu Historia Me Inspira, Aprende a Emprender, Agenda del Centro). Tabla comparativa clara entre funcionalidades demostrables hoy y compromisos previstos en el plan de 30 días hábiles. |
| **D. Alcance del Servicio (12 Meses)** | `#alcance` | Resumen taxativo de los 8 componentes contractuales: bilingüismo (ES/EN), carga inicial de hasta 100 empresas, hasta 5 incorporaciones mensuales (60 anuales), hosting + dominio + 5 correos por 12 meses, soporte L-V (SLA 24-48h), 4 campañas Meta con pauta incluida, 4 talleres formativos sin costo y transferencia final. |
| **E. Gobernanza y Calidad Editorial** | `#administracion` | Flujo editorial en 3 pasos: Solicitud de la Empresa $\rightarrow$ Validación del Centro $\rightarrow$ Normalización y Publicación por PatagoniaCoach. 4 pilares: optimización de imágenes (<100 KB), equidad y rotación democrática (sin banners ni ranking pagado), coherencia idiomática y soberanía/traspaso de datos. |
| **F. Cronograma y Carta Gantt** | `#cronograma` | Carta Gantt interactiva y visual para la fase de implementación de 30 días hábiles (6 semanas: Sem 1 Inicio/Dominio, Sem 1-2 Diseño, Sem 2-4 Panel y Fichas, Sem 3-5 Carga 100 empresas/inglés, Sem 6 Pruebas/Lanzamiento), más 12 meses de operación continua y seguimiento de métricas reales. |
| **G. Inversión y Formas de Pago** | `#inversion` | Monto exacto: **$2.600.000 CLP (Total final, exento de IVA)**. Se explicita que la pauta publicitaria Meta ($200.000) está 100% financiada dentro del valor total. Hitos de pago propuestos: 40% Inicio ($1.040.000), 40% Puesta en marcha ($1.040.000), 20% Operación anual en 4 cuotas trimestrales de $130.000 ($520.000 total). |
| **H. Centro de Recursos Oficiales** | `#recursos` | Acceso al documento maestro PDF (`Propuesta_comercial_Sercotec_PatagoniaCoach.pdf`, 351 KB) y accesos directos por número de página a los anexos integrados: Correspondencia con TDR (Págs 13-14), Plan Meta Ads (Pág 8) y Programa de 4 Talleres (Pág 9). |
| **I. Protección de Datos (Ley 21.719)** | `#privacidad` | Marco técnico y metodológico conforme a la nueva legislación chilena de datos personales: estricta separación de datos públicos y privados, canal formal para ejercicio de derechos ARCO, protocolo de conservación, y cero rastreos o formularios invasivos en la presentación. |
| **J. Cierre y Contacto Directo** | `#contacto` | Datos de contacto oficiales de Franco Gallardo S. (Representante Agencia PatagoniaCoach): email (`fgallardo@agenciapatagoniacoach.cl`), teléfono (`+56 9 9568 4198`), dirección y web. Enlaces finales de navegación a la demo y descarga del documento. |

---

## 3. Inventario y Proveniencia de Recursos Integrados

Todos los recursos gráficos derivados cumplen con el protocolo de optimización web estricto (**peso menor a 100 KB** por archivo en formato WebP con compresión Lanczos de alta fidelidad):

| Recurso | Tipo | Ubicación Local | Peso | Proveniencia / Fuente |
| :--- | :--- | :--- | :--- | :--- |
| **Propuesta Comercial Oficial** | PDF Maestro (14p) | `assets/docs/Propuesta_comercial_Sercotec_PatagoniaCoach.pdf` | 351 KB | Respaldo oficial transferido desde el entorno local de PatagoniaCoach. |
| **Logo Agencia PatagoniaCoach** | Vector SVG | `assets/logos/logo-patagoniacoach.svg` | 2.1 KB | Vector oficial extraído de `/Users/patagoniacoach/Documents/agencia-patagonia-coach/`. |
| **Captura Home** | WebP (1280x800) | `presentacion/assets/img/screen_home.webp` | 77 KB | Captura real generada desde `http://localhost:8080/index.html`. |
| **Captura Directorio** | WebP (1280x800) | `presentacion/assets/img/screen_directorio.webp` | 80 KB | Captura real generada desde la vista de búsqueda y filtros. |
| **Captura Ficha Lookbook** | WebP (1280x800) | `presentacion/assets/img/screen_ficha.webp` | 69 KB | Captura real generada desde la ficha comercial individual. |
| **Captura Historias** | WebP (1280x800) | `presentacion/assets/img/screen_historias.webp` | 88 KB | Captura real generada desde la sección testimonial y crónicas. |
| **Captura Aprende a Emprender** | WebP (1280x800) | `presentacion/assets/img/screen_blog.webp` | 57 KB | Captura real generada desde el blog educativo y formativo. |
| **Captura Agenda de Talleres** | WebP (1280x800) | `presentacion/assets/img/screen_agenda.webp` | 59 KB | Captura real generada desde la cartelera de actividades. |

---

## 4. Verificación Técnica y Pruebas de Calidad

1. **Pruebas de Enlaces y Recursos (HTTP 200 OK):**
   - Se validaron mediante pruebas de conexión local todos los enlaces relativos (`../index.html`, `../assets/docs/...`, accesos directos a fichas y secciones de la demo), confirmando código de respuesta `HTTP 200 OK` en el 100% de los casos.
2. **Pruebas de Responsividad Multi-dispositivo:**
   - **Desktop (1440x900px):** Navegación fluida sticky, menú de secciones completo, visualización en 3 columnas y carta Gantt en grilla horizontal de alta legibilidad.
   - **Tablet (768x1024px):** Reorganización automática de cards a 2 columnas, menú colapsado accesible mediante botón hamburguesa, botones CTA visibles y proporcionados.
   - **Mobile (390x844px / 500px):** Tipografías escaladas, contenedor `overflow-x: hidden` para prevenir desbordes laterales, carta Gantt con desplazamiento horizontal suave (`overflow-x-auto`) sin afectar el flujo del documento, botones de acción en ancho completo táctil.
3. **Privacidad y Rastreo:**
   - La página incorpora la metaetiqueta `<meta name="robots" content="noindex, nofollow"/>` para resguardar el carácter privado de la propuesta y evitar indexación preliminar en buscadores. No se han inyectado cookies, píxeles de Meta ni formularios de captura en esta landing.

---

## 5. Registro de Faltantes y Observaciones

- **Videos de Presentación:** Al momento de esta entrega no existen piezas audiovisuales renderizadas específicamente para la propuesta Sercotec en el equipo local. Siguiendo las directrices estrictas del proyecto, **no se simularon reproductores vacíos ni se reutilizaron videos del proyecto MICE**. La sección se ilustró mediante capturas reales de alta definición de la demo. Si el cliente o la agencia graban una cápsula explicativa, el contenedor HTML está preparado para recibir el archivo de video con controles y lazy loading.
- **Isotipo Institucional Sercotec / INACAP:** Se mantuvieron los logotipos y menciones textuales requeridas conforme a los antecedentes disponibles, reservando los vectores oficiales definitivos para la etapa de puesta en marcha formal.


# INFORME DE FASE 1: REVISIÓN DE PROYECTO Y CONSOLIDACIÓN DE REFERENCIAS LOCALES

**Proyecto:** Magallanes — Hecho por su gente  
**Mandante:** Centro de Negocios Sercotec Punta Arenas (Operado por INACAP)  
**Agencia Responsable:** PatagoniaCoach  
**Fecha:** 29 de octubre de 2026  
**Documento:** `docs/01-base-del-proyecto.md`  
**Estado:** Fase 1 Completada — Referencias Locales Consolidadas  

---

## 1. Resumen Ejecutivo y Alcance

Se ha completado la auditoría integral del proyecto «Magallanes — Hecho por su gente», el escaparate y directorio comercial digital del Centro de Negocios Sercotec Punta Arenas.

- **Naturaleza del portal:** Catálogo editorial y directorio comercial de vinculación directa entre compradores (B2C/B2B) y los emprendedores, productores y prestadores de servicios de la Región de Magallanes y de la Antártica Chilena.
- **Canal de conversión:** Contacto comercial directo (enlace dinámico a WhatsApp Business, llamada telefónica y ubicación presencial).
- **Límites de alcance explícitos:** **Cero carritos de compra, checkout ni pasarelas de pago** dentro del portal (sin intermediación financiera ni comisiones).
- **Directriz de preservación:** No se modificó código preexistente, no se instalaron paquetes ni se inicializaron frameworks. La exportación original de Stitch permanece intacta como referencia visual inmutable.

---

## 2. Inventario de Referencias y Recursos Locales

Se realizó un escaneo completo del espacio de trabajo. Se identificaron y descartaron todos los metadatos auxiliares de macOS (`._*`), consolidando los siguientes activos válidos:

| Tipo de Recurso | Archivo o Directorio Local | Descripción y Estado |
|---|---|---|
| **Sistema de Diseño (Tokens)** | `magallanes_editorial_directory/DESIGN.md` | Especificación completa de tokens Stitch: paleta cromática, escala tipográfica, retícula de 12 columnas, bordes y componentes. |
| **Documento de Requerimientos (PRD)** | `docs/PRD.md` | Especificación de producto y brief ejecutivo recuperado desde Stitch Screen `e3bd6aa2feaf4bccb79de0b5bda9e3bd`. Define público objetivo, requerimientos funcionales (RF-01 a RF-07) y reglas de negocio. |
| **Manual de Identidad Institucional** | `ANEXO-N°6-Manual-de-Marca_compressed.pdf` | Manual oficial de marca de los Centros de Desarrollo de Negocios Sercotec (68 páginas). Establece versiones de logotipo, zona de resguardo, tamaño mínimo, colores Pantone y tipografía oficial. |
| **Tipografías Institucionales** | `Tipografía/gobCL/` | 4 archivos vectoriales OpenType (.otf) de la familia oficial del Estado de Chile: `gobCL_Light.otf`, `gobCL_Regular.otf`, `gobCL_Bold.otf`, `gobCL_Heavy.otf`. |
| **Archivos de Imagen / Marca** | `logo.jpg` | Imagen ráster de 554×554 px (fondo blanco) con el símbolo institucional en rojo (`#F14046`), azul (`#006CB5`) y gris (`#565656`). |
| **Vistas del Sitio (HTML + PNG)** | 7 directorios locales de pantallas | Códigos HTML completos y capturas (`screen.png`) correspondientes a las páginas del ecosistema (detalladas a continuación). |

---

## 3. Correspondencia entre Páginas, Archivos Locales y Pantallas de Stitch

A continuación se detalla la matriz de correspondencia entre el árbol local y el proyecto Stitch (`projects/6303297039093541039`):

| Página / Vista | Carpeta Local | Pantalla Stitch (Resource Name) | Viewport | Dim. Stitch | Estado & Procedencia |
|---|---|---|---|---|---|
| **1. Portada / Home (Actualizada)** | `magallanes_hecho_por_su_gente_portada_actualizada` | `screens/4da64cab7d154943a0731ebd83c84a74` | Desktop | 2560 × 11462 | Local preexistente. Portada oficial activa con accesos a todo el ecosistema. |
| **2. Directorio de Negocios (Desktop)** | `directorio_de_negocios_de_magallanes_desktop` | `screens/271fa2f255384ae8b4c326c94a511b1f` | Desktop | 2560 × 4986 | Local preexistente. Grilla con filtros por rubro y comuna. |
| **3. Directorio de Negocios (Mobile)** | `directorio_de_negocios_de_magallanes_mobile` | `screens/f1024dec4d63426c86ed48576cdd7e61` | Mobile | 780 × 8584 | **Recuperada vía MCP Stitch**. Adaptación nativa mobile-first con navegación ergonómica y botones de contacto directo. |
| **4. Ficha de Negocio (Artesanías El Calafate)** | `ficha_individual_de_negocio_artesan_as_el_calafate_desktop` | `screens/eea69bd848774a8a8355950fe97c3e66` | Desktop | 2560 × 7846 | Local preexistente. Plantilla tipo lookbook, historia del artesano, mapa y botón WhatsApp. |
| **5. Crónicas Regionales (Historias)** | `tu_historia_me_inspira_cr_nicas_regionales` | `screens/30994f02814b40128604e9c512326026` | Desktop | 2560 × 8326 | Local preexistente. Reportajes fotográficos y testimonios ("Tu historia me inspira"). |
| **6. Blog de Contenidos (Aprende)** | `aprende_a_emprender_blog_de_contenidos` | `screens/25d2eb364909420eb420874ee38853f2` | Desktop | 2560 × 8148 | Local preexistente. Guías y artículos formativos para emprendedores. |
| **7. Agenda y Talleres** | `agenda_del_centro_de_negocios_talleres_y_actividades` | `screens/e0240fb394b54ca0b8dd825c752bbdb3` | Desktop | 2560 × 6984 | Local preexistente. Calendario/lista de capacitaciones Sercotec con link de postulación. |
| **8. PRD y Brief Ejecutivo** | `docs/PRD.md` | `screens/e3bd6aa2feaf4bccb79de0b5bda9e3bd` | Markdown | Documento | **Recuperado vía MCP Stitch**. |
| **9. Directrices de Botones Gob.cl** | Documentado en PRD / DESIGN.md | `screens/5e1d904ae86c4056a868761bf024fda2` | Markdown | Referencia | Extraído de `framework.digital.gob.cl/buttons.html`. |

*Nota sobre versiones históricas en Stitch:* En el proyecto Stitch existen versiones preliminares de la portada (`screens/2fbc8eaceb2d4609a9f6a25cbe556ed5`, `screens/70dd69556e6f436e8e330259dab1aaa8` y `screens/38fbf911f21d45bd8267ea085f1359fd`). La versión definitiva y canónica es `magallanes_hecho_por_su_gente_portada_actualizada` (`4da64cab7d154943a0731ebd83c84a74`), la cual incorpora la topbar institucional, la navegación unificada y la grilla editorial aprobada.

---

## 4. Cobertura del Sitio y Flujo de Navegación

El mapa de arquitectura del sitio contempla un flujo editorial claro y sin callejones sin salida:

```
                                  [ TOPBAR INSTITUCIONAL ]
                      SERCOTEC | Centro de Negocios Punta Arenas · INACAP
                                             │
                        ┌────────────────────┴────────────────────┐
                        │                                         │
              [ INICIO / PORTADA ]                      [ CTA INSCRIBIR NEGOCIO ]
    (magallanes_hecho_por_su_gente)                  (Derivación a Formulario CDN)
                        │
       ┌────────────────┼────────────────┬────────────────────────┐
       ▼                ▼                ▼                        ▼
[ DIRECTORIO ]    [ HISTORIAS ]       [ BLOG ]                [ AGENDA ]
(Desktop/Mobile)  ("Tu Historia    ("Aprende a             (Talleres Sercotec
       │            Me Inspira")     Emprender")               y Actividades)
       ▼                │                │                        │
[ FICHA NEGOCIO ]       │                │                        │
(Showroom + WA)         ▼                ▼                        ▼
       │         [ CRÓNICA COMPLETA ] [ ARTÍCULO COMPLETO ] [ INSCRIPCIÓN TALLER ]
       └────────────────┼────────────────┼────────────────────────┘
                        ▼                ▼
                 [ MÓDULO B2B & ENCADENAMIENTO PRODUCTIVO ]
                        │
                        ▼
                 [ FOOTER INSTITUCIONAL GOBIERNO DE CHILE ]
```

### Características de las Secciones en Portada:
1. **Header & Topbar Institucional:** Mención obligatoria a Sercotec, Centro de Negocios Punta Arenas y operador INACAP.
2. **Hero Editorial Inmersivo:** Gran titular («LO QUE BUSCAS, alguien de aquí LO HACE»), buscador predictivo por texto y selector por Comuna (Punta Arenas, Puerto Natales, Porvenir, Cabo de Hornos), con chips de rubro.
3. **Mosaico Lookbook (Rubros):** 6 accesos directos estructurados (*01. Para comer*, *02. Hecho a mano*, *03. Para regalar y comprar*, *04. Para explorar*, *05. Servicios y oficios*, *06. B2B / Industria*).
4. **Directorio Activo:** Grilla interactiva de emprendedores con selector de comuna/rubro y botón de WhatsApp directo.
5. **Vitrina del Mes:** Foco monográfico en un productor local.
6. **Módulo B2B & Encadenamiento Productivo:** Contenedor cromático azul profundo (`#103D68`) dedicado a empresas y prestadores industriales.
7. **Accesos a Satélites:** Enlaces directos a "Tu historia me inspira" (crónicas), "Aprende a emprender" (blog) y "Agenda del Centro de Negocios" (talleres gratuitos).
8. **Footer Transparencia:** Estándar institucional de Sercotec y del Ministerio de Economía.

---

## 5. Revisión de Identidad Institucional (Manual Sercotec vs. PRD vs. Stitch)

Se confrontó el **Manual de Marca de Centros Sercotec** (`ANEXO-N°6`) frente al **PRD** y a la exportación de **Stitch**.

### 5.1 Reglas del Manual de Marca (Centros Sercotec)
- **Denominación y personalización singular:** Para este proyecto corresponde la denominación:  
  `Centro de Negocios Sercotec Punta Arenas` (o `Centro de Desarrollo de Negocios Sercotec — Punta Arenas`).
- **Composición del Logotipo:**
  - *Identidad Primaria:* Versión vertical (símbolo superior + texto inferior).
  - *Identidad Secundaria:* Versión horizontal (símbolo a la izquierda + texto a la derecha).
- **Área de protección:** Espacio libre perimetral equivalente a la altura de la letra **«C»** de la palabra «CENTROS».
- **Tamaño mínimo:** 1.5 cm de ancho en versión vertical; 2.7 cm de ancho en versión horizontal.
- **Colores oficiales normados:**
  - **Azul Sercotec:** Pantone 293C | CMYK (100, 55, 0, 0) | RGB (15, 105, 180) | **Hex `#0F69B4`**.
  - **Rojo Sercotec:** Pantone 185C | CMYK (0, 90, 75, 0) | RGB (235, 60, 70) | **Hex `#EB3C46`**.
  - **Gris Oscuro Marca:** Pantone Cool Gray 11C | CMYK (0, 0, 0, 80) | RGB (88, 89, 91) | **Hex `#58595B`**.
  - **Gris Medio:** Pantone Cool Gray 9C | CMYK (0, 0, 0, 65) | RGB (120, 120, 120) | **Hex `#787878`**.
- **Tipografía Institucional Oficial:** **gobCL** (Light, Regular, Bold, Heavy).  
- **Tipografía complementaria de sistema:** **Calibri**.

---

### 5.2 Matriz de Diferencias y Propuesta de Resolución

| Aspecto | Manual Sercotec (Oficial) | PRD (Especificación) | Stitch (Prototipo Visual) | Análisis de Discrepancia | Propuesta de Resolución Recomendada |
|---|---|---|---|---|---|
| **Tipografía de Títulos y Hero** | `gobCL` | `Roboto` (Display/Headlines) | `Space Grotesk` (700/600) | El manual exige `gobCL` para piezas institucionales. El PRD sugiere `Roboto` como estándar de UI pública. Stitch empleó `Space Grotesk` para darle estética editorial/lookbook de revista austral. | **Arquitectura Tipográfica Híbrida:**<br>1. Emplear **`gobCL`** estrictamente en el membrete institucional (topbar, sello Sercotec/INACAP, pie de página institucional).<br>2. Mantener **`Space Grotesk`** para el título de marca *«MAGALLANES — Hecho por su gente»* y los grandes titulares editoriales H1/H2 (respeta el diseño de Stitch aprobado).<br>3. Utilizar **`Manrope`** (o `Roboto`) para cuerpo de texto y tablas. |
| **Tipografía de Cuerpo y Datos** | `Calibri` (sistema) / `gobCL` | `Roboto` (300, 400, 500) | `Manrope` (400, 500, 600) | `Calibri` está pensada para ofimática interna, no para frontend web moderno. `Manrope` aporta excelente legibilidad en fichas y chips. | Adoptar **`Manrope`** como fuente principal de lectura y UI web, con fallback a `Roboto` y fuentes sans-serif de sistema. |
| **Logotipos en Header** | Logotipo gráfico Sercotec Punta Arenas (símbolo + texto) + INACAP + Min. Economía | Acreditación oficial Sercotec + INACAP | Membrete tipográfico en topbar azul (`#103D68`) con texto plano institucional; logotipo central puramente tipográfico (*MAGALLANES*). | Stitch no incluyó los vectores gráficos oficiales de Sercotec ni de INACAP, resolviéndolo mediante tipografía y colores. | Integrar el bloque oficial con el logo institucional en SVG/PNG transparente en la barra superior o cabecera, respetando el área de protección «C», coexistiendo con la identidad gráfica del portal. |
| **Colores y Contrastes** | Azul `#0F69B4`, Rojo `#EB3C46`, Grises `#58595B` / `#787878` | Idénticos al manual + Warm White `#FAF7F2` + Navy `#103D68` | Idénticos al PRD y manual. Total coherencia en códigos hexadecimales. | **Sin conflicto.** Existe absoluta concordancia cromática entre el manual, el PRD y el código de Stitch. | Mantener las variables CSS definidas en `DESIGN.md`. |
| **Botones y Acciones** | Criterio institucional | Directrices Gob.cl (`framework.digital.gob.cl/buttons.html`), radio 4px (`rounded`), padding 12×24px. | Implementa clases Tailwind con radios de 4px (`rounded`), coincidente con Gob.cl. | **Sin conflicto.** Total alineación entre el requerimiento del Estado y la exportación de Stitch. | Consolidar componentes de botones bajo la convención `.btn.btn-primary` y `.btn.btn-outline`. |

---

## 6. Recursos Faltantes Registrados

Para la etapa de implementación técnica final se identifican los siguientes faltantes:

1. **Logos Oficiales en Vector (SVG o PNG transparente de alta resolución):**
   - *Falta:* Logotipo oficial personalizado «Centro de Negocios Sercotec Punta Arenas» (símbolo + texto en negativo y positivo).
   - *Falta:* Logotipo oficial «Operado por INACAP».
   - *Falta:* Isotipo / Imagotipo «Ministerio de Economía, Fomento y Turismo».
   - *Estado actual:* Se dispone únicamente de `logo.jpg` (554×554 px, fondo blanco no transparente) y de las referencias vectoriales en el PDF del manual. No se deben calcar ni recrear logos por cuenta propia; se requerirá solicitar los archivos SVG/PNG originales a Sercotec/INACAP o extraer los vectores limpios del PDF corporativo si vienen incrustados.
2. **Adaptaciones Móviles para Vistas Satélites:**
   - Se dispone de la versión mobile completa del **Directorio de Negocios** (`directorio_de_negocios_de_magallanes_mobile`).
   - Las páginas satélites independientes (**Portada**, **Ficha de Negocio**, **Crónicas**, **Blog**, **Agenda**) están exportadas únicamente en viewport Desktop (2560 px / 1280 px).
   - *Acción requerida en desarrollo:* Implementar la responsividad móvil fluida (media queries y Tailwind responsive `sm:` / `md:` / `lg:`) siguiendo la retícula y comportamiento visto en la versión móvil del Directorio.
3. **Localización de Activos Multimedia (Imágenes de Negocios y Artesanos):**
   - Los archivos HTML referencian temporalmente imágenes alojadas en `lh3.googleusercontent.com/aida-public/...`.
   - *Acción en etapas posteriores:* Descargar y almacenar localmente las imágenes en una carpeta optimizada (`assets/images/`), categorizadas por negocio, evitando dependencias de enlaces remotos efímeros.

---

## 7. Registro de Consultas MCP a Stitch

| ID Consulta | Herramienta MCP | Parámetros | Propósito | Resultado Obtenido |
|---|---|---|---|---|
| **MCP-01** | `list_projects` | `{}` | Verificación de conexión y obtención del Project ID. | Localizado proyecto `projects/6303297039093541039` con todas sus pantallas e instancias. |
| **MCP-02** | `list_screens` | `{"projectId": "6303297039093541039"}` | Inventario detallado de pantallas en la nube. | Identificación de metadatos de las 11 pantallas del proyecto. |
| **MCP-03** | `download_file` | `{"name": ".../files/e3bd6aa2feaf4bccb79de0b5bda9e3bd"}` | Recuperar PRD y brief ejecutivo ausente en carpetas locales. | Rescatado documento PRD en Markdown completo; guardado en `docs/PRD.md`. |
| **MCP-04** | `get_screen` | `{"name": ".../screens/f1024dec4d63426c86ed48576cdd7e61"}` | Obtener metadata de pantalla mobile oculta. | Confirmados recursos HTML y screenshot para Directorio Mobile. |
| **MCP-05** | `download_file` | `{"name": ".../files/f1024dec4d63426c86ed48576cdd7e61"}` | Descargar código HTML de pantalla mobile. | Guardado en `directorio_de_negocios_de_magallanes_mobile/code.html`. |
| **MCP-06** | `download_file` | `{"name": ".../files/screenshot_00065f0254bab05107c4d500a0238d70"}` | Descargar imagen de referencia mobile. | Guardada en `directorio_de_negocios_de_magallanes_mobile/screen.png`. |

**Consultas Pendientes:** Ninguna. Se detuvieron por completo las llamadas al MCP de Stitch.

---

## 8. Siguiente Intervención Concreta Recomendada

Para la **Etapa 2 (Estructuración y Arquitectura de Frontend)**, se recomienda:
1. **Definir el stack y estructura de maquetación limpia:** Establecer la arquitectura de componentes compartidos (`Header`, `Topbar Institucional`, `Footer`, `BusinessCard`, `RubroFilterChip`, `SearchBar`).
2. **Modularizar los datos del catálogo:** Extraer la información estática de los negocios y artesanos (nombre, comuna, rubro, contacto de WhatsApp, descripción, fotos) a un modelo de datos JSON unificado (`data/negocios.json`), permitiendo que el directorio y las fichas consuman datos homogéneos.
3. **Estandarizar estilos y tipografías locales:** Configurar las fuentes locales `@font-face` para `gobCL` e importar `Space Grotesk` y `Manrope`, enlazando los tokens de `DESIGN.md`.
4. **Implementar comportamiento responsivo:** Ajustar los breakpoints para móviles en la Portada, Ficha y vistas satélites tomando como referencia la pantalla mobile rescatada.

---

## 9. Estado de las Referencias Locales

> **REFERENCIAS LOCALES COMPLETAS: YA PUEDES DESACTIVAR EL MCP DE STITCH**
>
> *(Nota técnica: Las consultas de lectura al MCP de Stitch han sido completamente detenidas. Todos los archivos visuales, de diseño, de requerimientos y de código necesarios para la construcción se encuentran debidamente descargados y consolidados en el almacenamiento local).*


# 💎 Catálogo de Pulseras de Ámbar de Chiapas

Catálogo web interactivo, responsivo y optimizado para teléfonos celulares (Android e iOS), diseñado para exhibir la colección de pulseras de ámbar de Chiapas y facilitar pedidos directos a través de WhatsApp (**+52 961 749 6409**).

---

## 🚀 Despliegue en GitHub Pages (Guía Rápida)

El proyecto está 100% preparado y optimizado para funcionar en **GitHub Pages** sin problemas de rutas, mayúsculas ni caracteres especiales.

### Pasos para desplegar:

1. **Crear el repositorio en GitHub:**
   - Ve a [github.com](https://github.com) y crea un nuevo repositorio (por ejemplo: `pulseras-ambar`).
   - Puedes dejarlo como público o privado.

2. **Subir los archivos:**
   - Si usas la terminal desde esta carpeta:
     ```bash
     git init
     git add .
     git commit -m "Catálogo de Pulseras de Ámbar listo para GitHub Pages"
     git branch -M main
     git remote add origin https://github.com/TU_USUARIO/pulseras-ambar.git
     git push -u origin main
     ```
   - O si prefieres la web de GitHub: simplemente arrastra y sube todos los archivos respetando las carpetas (`index.html`, `css/`, `js/`, `images/`, `.nojekyll`).

3. **Activar GitHub Pages:**
   - En tu repositorio de GitHub, entra a **Settings** (Configuración) > **Pages** (en el menú lateral izquierdo).
   - En **Build and deployment > Branch**: selecciona la rama `main` y la carpeta `/(root)`.
   - Haz clic en **Save** (Guardar).
   - ¡Listo! En 1 o 2 minutos tu catálogo estará en línea en:  
     `https://TU_USUARIO.github.io/pulseras-ambar/`

---

## 📂 Nueva Estructura del Proyecto

```text
pulseras/
├── .nojekyll              # Evita que Jekyll bloquee archivos estáticos en GitHub Pages
├── index.html             # Página principal del catálogo
├── README.md              # Documentación y guía de despliegue
├── skills de diseno.txt   # Referencia de principios de diseño y usabilidad
├── css/
│   └── styles.css         # Estilos responsivos (Mobile-First para Android e iOS)
├── js/
│   ├── app.js             # Lógica del catálogo, búsqueda, favoritos y WhatsApp
│   └── pulseras-data.js   # Catálogo estructurado de las 42 pulseras
└── images/
    ├── amb-001.jpg        # Nombres cortos, en minúsculas y sin espacios
    ├── amb-002.jpg
    ├── ...
    └── amb-042.jpg
```

---

## 📸 Optimización de Imágenes para la Web

- **Nombres cortos y seguros:** Las 42 fotografías fueron renombradas a `amb-001.jpg` hasta `amb-042.jpg`. Esto elimina errores comunes de servidores web Linux (espacios `%20`, caracteres extraños o discrepancias de mayúsculas/minúsculas).
- **Rutas Relativas:** Todas las imágenes se cargan con rutas relativas (`images/amb-xxx.jpg`), por lo que funcionan igual de bien en local, en un subdominio de GitHub Pages (`usuario.github.io/repositorio/`) o en un dominio personalizado.
- **Vista Previa en WhatsApp:** Al estar en línea en GitHub Pages, cuando un cliente presiona **«Pedir por WhatsApp»**, el enlace público de la imagen genera automáticamente la miniatura visual en la conversación de WhatsApp.

---

## 📲 Mensajes Directos por WhatsApp (+52 961 749 6409)

Al tocar **«Pedir por WhatsApp»** en cualquier pulsera, se abre WhatsApp con un mensaje directo y sin rodeos:

```text
Hola, quiero esta pulsera: Pulsera Protección Ónix Negro & Trío de Ámbar (Código: AMB-005). ¿Está disponible?
Foto: https://TU_USUARIO.github.io/pulseras-ambar/images/amb-005.jpg
```

El mensaje contiene exactamente el nombre del modelo, el código SKU para identificar la pieza al instante, la consulta de disponibilidad y el enlace directo a la fotografía.

---

## 🎨 Principios de Diseño y Leyes de Usabilidad

- **Gestalt:** Proximidad, Semejanza, Cierre, Continuidad, Figura/Fondo, Simetría, Destino Común, Pregnancia y Conexión.
- **Usabilidad:** Hick-Hyman, Fitts, Jakob, Miller, Pareto (80/20), Tesler, Doherty (0ms de latencia), Postel, Estética-Usabilidad y Efecto Zeigarnik (barra de progreso y favoritas).

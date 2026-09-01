# Portafolio — Ingeniero Civil

Sitio web estático (HTML/CSS/JS puro, sin frameworks) listo para publicar en **GitHub Pages**.

## Estructura

```
portfolio-site/
├── index.html            Página de inicio (hero + destacados)
├── proyectos.html         Listado de proyectos con filtro Obra / Diseños
├── proyecto.html          Plantilla de detalle (una sola página para todos los proyectos)
├── certificados.html      Certificados de estudios y laborales (pestañas)
├── contacto.html          Referencias laborales + contacto directo
├── css/style.css          Todos los estilos
├── js/data.js             ⭐ AQUÍ EDITAS TU CONTENIDO (proyectos, certificados, referencias)
├── js/main.js             Lógica del sitio (no es necesario tocarlo)
└── assets/                Imágenes (reemplaza las de ejemplo por las tuyas)
    ├── img/hero.jpg
    ├── proyectos/
    └── certificados/
```

## 1. Cómo editar el contenido (sin tocar HTML)

Todo el contenido vive en **`js/data.js`**. Es un archivo de texto simple, ábrelo con
cualquier editor (incluso el editor de archivos de GitHub) y edita:

- **`SITE`**: tu nombre, título, correo, teléfono, LinkedIn.
- **`PROYECTOS`**: un proyecto por bloque `{ ... }`. Copia y pega un bloque para
  agregar un proyecto nuevo. Campos importantes:
  - `categoria`: `"obra"` o `"diseno"` (controla el filtro y el menú desplegable).
  - `ubicacion.lat` / `ubicacion.lng`: coordenadas GPS del proyecto (para el mapa).
    Puedes obtenerlas dando clic derecho en Google Maps → "¿Qué hay aquí?".
  - `portada` / `galeria`: rutas a tus imágenes dentro de `assets/proyectos/`.
- **`CERTIFICADOS`**: dos listas, `estudios` y `laborales`.
-- **`REFERENCIAS`**: tus jefes/empresas de contacto. **Importante**: pide
  autorización antes de publicar el correo/teléfono de otra persona.

No necesitas saber programar para editar este archivo — solo respeta las comillas
`" "` y las comas entre campos.

## 2. Cómo reemplazar las imágenes de ejemplo

Las imágenes actuales son marcadores de posición con estilo "plano técnico" para que
puedas ver el diseño terminado. Reemplázalas por tus fotos reales:

1. Sube tus fotos a `assets/proyectos/` (portadas y galería) y `assets/certificados/`
   (fotos o escaneos de tus certificados).
2. Usa nombres de archivo sin espacios ni tildes (ej. `puente-yumbo-01.jpg`).
3. Actualiza las rutas correspondientes en `js/data.js`.
4. Recomendado: fotos entre 1200–2000 px de ancho, comprimidas (JPG calidad 80%)
   para que el sitio cargue rápido.

## 3. Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `mi-portafolio`).
2. Sube todo el contenido de esta carpeta (`portfolio-site/`) a la raíz del repositorio.
   - Con GitHub Desktop: arrastra la carpeta y haz commit + push.
   - O por línea de comandos:
     ```
     git init
     git add .
     git commit -m "Primera versión del portafolio"
     git branch -M main
     git remote add origin https://github.com/TU-USUARIO/mi-portafolio.git
     git push -u origin main
     ```
3. En GitHub, entra a **Settings → Pages**.
4. En "Source" selecciona la rama `main` y la carpeta `/ (root)`. Guarda.
5. Espera 1–2 minutos: GitHub te dará una URL como
   `https://ingenieriajvb.github.io/`.
6. Cada vez que hagas `git push` con cambios, el sitio se actualiza solo.

## 4. Personalizar el diseño (opcional)

Todos los colores, tipografías y espaciados están centralizados como variables
al inicio de `css/style.css`, dentro de `:root { ... }`. Por ejemplo, para
cambiar el azul principal, edita `--petrol-950`, `--petrol-700`, etc.

## 5. Buenas prácticas antes de publicar

- Reemplaza `Julian [Apellido]` por tu nombre completo en los `<title>` y en el
  logo (`.brand`) de cada página HTML.
- Verifica que cada correo/teléfono de referencia haya sido autorizado por esa
  persona antes de subir el sitio.
- Revisa la ortografía de las descripciones de tus proyectos.
- Prueba el sitio en tu celular (o achicando la ventana del navegador) para
  confirmar que el menú y las tarjetas se vean bien.

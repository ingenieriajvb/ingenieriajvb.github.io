/* ============================================================
   COMPORTAMIENTO DEL SITIO
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initFooterYear();
  initSiteContent();
  initHomeFeatured();
  initProyectosGrid();
  initProyectoDetalle();
  initContacto();
});

/* -------------------- Navegación -------------------- */
function initNav() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add("scrolled");
    else if (!nav.classList.contains("solid")) nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });
    // Dropdown en móvil: al tocar el botón, despliega en vez de navegar
    document.querySelectorAll(".has-dropdown > .drop-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (window.innerWidth <= 880) {
          e.preventDefault();
          btn.parentElement.classList.toggle("open");
        }
      });
    });
  }
}

function initFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

function initSiteContent() {
  document.title = `${SITE.nombre} — ${SITE.titulo}`;

  document.querySelectorAll(".brand").forEach((el) => {
    el.innerHTML = `${SITE.nombre}<small>${SITE.titulo}</small>`;
  });

  const heroPhoto = document.querySelector(".hero-photo");
  if (heroPhoto) {
    heroPhoto.src = SITE.heroImagen || heroPhoto.src;
    heroPhoto.alt = SITE.heroAlt || heroPhoto.alt;
  }

  const heroEyebrow = document.querySelector(".hero .eyebrow");
  if (heroEyebrow) heroEyebrow.textContent = SITE.heroEyebrow || SITE.ubicacionBase;

  const heroTitle = document.querySelector(".hero h1");
  if (heroTitle) heroTitle.textContent = SITE.heroTitulo || heroTitle.textContent;

  const heroDesc = document.querySelector(".hero .lead");
  if (heroDesc) heroDesc.textContent = SITE.heroDescripcion || heroDesc.textContent;

  const heroStats = document.querySelector(".hero-stats");
  if (heroStats && Array.isArray(SITE.heroStats)) {
    heroStats.innerHTML = SITE.heroStats.map((stat) => `
      <div class="stat"><b>${stat.valor}</b><span>${stat.texto}</span></div>
    `).join("");
  }

  const acerca = SITE.acercaDeNosotros || {};
  const aboutTitle = document.getElementById("about-title");
  const aboutDescription = document.getElementById("about-description");
  const aboutList = document.getElementById("about-list");

  if (aboutTitle && acerca.titulo) aboutTitle.textContent = acerca.titulo;
  if (aboutDescription && acerca.descripcion) aboutDescription.textContent = acerca.descripcion;
  if (aboutList && Array.isArray(acerca.puntos)) {
    aboutList.innerHTML = acerca.puntos.map((punto) => `<li>${punto}</li>`).join("");
  }
}

/* -------------------- Utilidades -------------------- */
function categoriaLabel(cat) {
  return cat === "obra" ? "Obra" : "Diseño";
}

function sheetCardHTML(p) {
  const portada = getMediaSource(p.portada);
  return `
    <a class="sheet-card" href="proyecto.html?id=${p.id}">
      <div class="sheet-media">
        <span class="sheet-tag">${categoriaLabel(p.categoria)}</span>
        <img src="${portada}" alt="${p.titulo}" loading="lazy">
      </div>
      <div class="sheet-body">
        <h3>${p.titulo}</h3>
        <p>${p.resumen}</p>
        <div class="sheet-loc mono">
          ${pinIcon()} ${p.ubicacion.nombre}
        </div>
      </div>
    </a>`;
}

function pinIcon() {
  return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13z"/><circle cx="12" cy="9" r="2.4"/></svg>`;
}

function getMediaSource(media, fallback = "") {
  if (typeof media === "string") return media;
  if (media && typeof media === "object") return media.src || media.url || fallback;
  return fallback;
}

function mediaToMarkup(item, alt = "") {
  if (typeof item === "string") {
    return `<button class="gallery-image-button" type="button" aria-label="Ampliar imagen: ${alt}"><img src="${item}" alt="${alt}" loading="lazy"></button>`;
  }

  if (item && typeof item === "object") {
    const src = item.src || item.url || "";
    if (item.type === "video" || item.kind === "video") {
      const poster = item.poster ? ` poster="${item.poster}"` : "";
      return `<video controls preload="metadata"${poster}><source src="${src}" type="${item.mime || "video/mp4"}"></video>`;
    }
    const imageAlt = item.alt || item.caption || alt;
    return `<button class="gallery-image-button" type="button" aria-label="Ampliar imagen: ${imageAlt}"><img src="${src}" alt="${imageAlt}" loading="lazy"></button>`;
  }

  return "";
}

function getProjectMediaItems(p) {
  const media = Array.isArray(p.media) && p.media.length
    ? p.media
    : Array.isArray(p.galeria) && p.galeria.length
      ? p.galeria
      : [p.portada];
  const isVideo = item => {
    const src = typeof item === "string" ? item : item?.src || item?.url || "";
    return item?.type === "video" || item?.kind === "video" || /\.(mp4|m4v|mov|webm)(?:[?#]|$)/i.test(src);
  };
  return [...media.filter(item => !isVideo(item)), ...media.filter(isVideo)];
}

/* -------------------- Home: proyectos destacados -------------------- */
function initHomeFeatured() {
  const el = document.getElementById("featured-projects");
  if (!el) return;
  const destacadosIds = [
    "casa-grande-resguardo-honduras",
    "remodelacion-rama-judicial-cauca",
    "vias-pureto-suarez"
  ];
  const destacados = destacadosIds.map(id => {
    const proyecto = PROYECTOS.find(item => item.id === id);
    if (!proyecto) throw new Error(`No se encontró el proyecto destacado "${id}".`);
    return proyecto;
  });
  el.innerHTML = destacados.map(sheetCardHTML).join("");
}

/* -------------------- Página: proyectos.html -------------------- */
function initProyectosGrid() {
  const el = document.getElementById("projects-grid");
  if (!el) return;

  const params = new URLSearchParams(window.location.search);
  let filtro = params.get("cat") || "todos";

  const buttons = document.querySelectorAll(".filter-btn");

  function render() {
    const lista = filtro === "todos" ? PROYECTOS : PROYECTOS.filter(p => p.categoria === filtro);
    el.innerHTML = lista.length
      ? lista.map(sheetCardHTML).join("")
      : `<p style="color:var(--concrete)">Aún no hay proyectos en esta categoría.</p>`;
    buttons.forEach(b => b.classList.toggle("active", b.dataset.filter === filtro));
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      filtro = btn.dataset.filter;
      const url = new URL(window.location);
      if (filtro === "todos") url.searchParams.delete("cat");
      else url.searchParams.set("cat", filtro);
      window.history.replaceState({}, "", url);
      render();
    });
  });

  render();
}

/* -------------------- Página: proyecto.html (detalle) -------------------- */
function initProyectoDetalle() {
  const el = document.getElementById("project-detail");
  if (!el) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const p = PROYECTOS.find(x => x.id === id) || PROYECTOS[0];

  document.title = `${p.titulo} — ${SITE.nombre}`;

  document.getElementById("pd-tag").textContent = categoriaLabel(p.categoria);
  document.getElementById("pd-title").textContent = p.titulo;
  document.getElementById("pd-summary").textContent = p.resumen;
  const heroMedia = getMediaSource(p.portada) || getMediaSource(getProjectMediaItems(p)[0]);
  document.getElementById("pd-hero-img").src = heroMedia;
  document.getElementById("pd-hero-img").alt = p.titulo;

  document.getElementById("pd-ubicacion-meta").textContent = p.ubicacion.nombre;

  document.getElementById("pd-descripcion").innerHTML = p.descripcion.map(t => `<p>${t}</p>`).join("");
  document.getElementById("pd-alcance").innerHTML = p.alcance.map(t => `<li>${t}</li>`).join("");

  document.getElementById("pd-coord").textContent =
    `${p.ubicacion.lat.toFixed(4)}° N, ${p.ubicacion.lng.toFixed(4)}° O`;
  document.getElementById("pd-ubicacion-nombre").textContent = p.ubicacion.nombre;

  const mapEl = document.getElementById("pd-map");
  mapEl.src = `https://maps.google.com/maps?q=${p.ubicacion.lat},${p.ubicacion.lng}&z=13&output=embed`;
  document.getElementById("pd-map-link").href =
    `https://www.google.com/maps/search/?api=1&query=${p.ubicacion.lat},${p.ubicacion.lng}`;

  initProjectRoute(p);

  const gal = document.getElementById("pd-gallery");
  const mediaItems = getProjectMediaItems(p);
  gal.innerHTML = mediaItems.map(item => mediaToMarkup(item, p.titulo)).join("");
  initProjectImageViewer(gal, p.titulo);

  // Siguiente proyecto
  const idx = PROYECTOS.findIndex(x => x.id === p.id);
  const siguiente = PROYECTOS[(idx + 1) % PROYECTOS.length];
  const nextEl = document.getElementById("pd-next");
  if (nextEl) {
    nextEl.href = `proyecto.html?id=${siguiente.id}`;
    nextEl.querySelector(".next-title").textContent = siguiente.titulo;
  }
}

function initProjectRoute(project) {
  const section = document.getElementById("pd-route-section");
  if (!section || !project.kmz) return;

  const status = document.getElementById("pd-route-status");
  const viewerContainer = document.getElementById("pd-route-viewer");
  const downloadLink = document.getElementById("pd-kmz-download");
  const cesiumBaseUrl = "https://cesium.com/downloads/cesiumjs/releases/1.130/Build/Cesium/";

  section.hidden = false;
  status.textContent = "Cargando el recorrido GPS…";
  downloadLink.href = project.kmz;

  if (!document.querySelector("[data-cesium-styles]")) {
    const styles = document.createElement("link");
    styles.rel = "stylesheet";
    styles.href = `${cesiumBaseUrl}Widgets/widgets.css`;
    styles.dataset.cesiumStyles = "";
    document.head.append(styles);
  }

  function createRouteViewer() {
    if (!window.Cesium) {
      status.textContent = "No se pudo cargar el visor 3D. Verifica tu conexión a internet e inténtalo de nuevo.";
      return;
    }

    let viewer;
    try {
      viewer = new Cesium.Viewer(viewerContainer, {
        animation: false,
        baseLayerPicker: false,
        baseLayer: new Cesium.ImageryLayer(new Cesium.OpenStreetMapImageryProvider({
          url: "https://tile.openstreetmap.org/"
        })),
        fullscreenButton: false,
        geocoder: false,
        homeButton: false,
        infoBox: false,
        navigationHelpButton: false,
        sceneModePicker: false,
        selectionIndicator: false,
        terrainProvider: new Cesium.EllipsoidTerrainProvider(),
        timeline: false
      });
    } catch (error) {
      status.textContent = "No fue posible iniciar el globo 3D en este navegador.";
      console.error("No se pudo iniciar el visor CesiumJS.", error);
      return;
    }

    Cesium.KmlDataSource.load(project.kmz, {
      camera: viewer.scene.camera,
      canvas: viewer.scene.canvas,
      clampToGround: true
    }).then(dataSource => viewer.dataSources.add(dataSource))
      .then(dataSource => viewer.flyTo(dataSource, { duration: 0 }))
      .then(() => {
        status.textContent = "Recorrido cargado. Arrastra para mover la vista; usa la rueda para acercar o alejar.";
      })
      .catch(error => {
        status.textContent = "No se pudo cargar el recorrido GPS. Puedes descargar el archivo KMZ para abrirlo en Google Earth.";
        console.error("No se pudo cargar el KMZ del proyecto.", error);
      });
  }

  if (window.Cesium) {
    createRouteViewer();
    return;
  }

  window.CESIUM_BASE_URL = cesiumBaseUrl;
  const script = document.createElement("script");
  script.src = `${cesiumBaseUrl}Cesium.js`;
  script.async = true;
  script.addEventListener("load", createRouteViewer, { once: true });
  script.addEventListener("error", () => {
    status.textContent = "No se pudo descargar el visor 3D. Verifica tu conexión a internet e inténtalo de nuevo.";
  }, { once: true });
  document.head.append(script);
}

function initProjectImageViewer(gallery, projectTitle) {
  const viewer = document.getElementById("project-image-viewer");
  const viewerImage = document.getElementById("project-image-viewer-image");
  const caption = document.getElementById("project-image-viewer-caption");
  const closeButton = viewer.querySelector(".image-viewer-close");
  const previousButton = viewer.querySelector(".image-viewer-previous");
  const nextButton = viewer.querySelector(".image-viewer-next");
  let images = [];
  let currentIndex = 0;
  let zoom = 1;
  let offsetX = 0;
  let offsetY = 0;
  const pointers = new Map();
  let gesture = null;

  function constrainOffset() {
    const maxX = viewerImage.offsetWidth * (zoom - 1) / 2;
    const maxY = viewerImage.offsetHeight * (zoom - 1) / 2;
    offsetX = Math.max(-maxX, Math.min(maxX, offsetX));
    offsetY = Math.max(-maxY, Math.min(maxY, offsetY));
  }

  function updateZoom() {
    constrainOffset();
    viewerImage.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(${zoom})`;
    viewerImage.style.cursor = zoom > 1 ? "grab" : "zoom-in";
  }

  function resetZoom() {
    zoom = 1;
    offsetX = 0;
    offsetY = 0;
    pointers.clear();
    gesture = null;
    updateZoom();
  }

  function zoomAt(nextZoom, clientX, clientY) {
    const rect = viewer.querySelector(".image-viewer-stage").getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const imageX = (clientX - centerX - offsetX) / zoom;
    const imageY = (clientY - centerY - offsetY) / zoom;
    zoom = Math.max(1, Math.min(5, nextZoom));
    offsetX = clientX - centerX - imageX * zoom;
    offsetY = clientY - centerY - imageY * zoom;
    updateZoom();
  }

  function beginPinch() {
    const [first, second] = pointers.values();
    const centerX = (first.x + second.x) / 2;
    const centerY = (first.y + second.y) / 2;
    const rect = viewer.querySelector(".image-viewer-stage").getBoundingClientRect();
    gesture = {
      type: "pinch",
      distance: Math.hypot(second.x - first.x, second.y - first.y),
      zoom,
      imageX: (centerX - rect.left - rect.width / 2 - offsetX) / zoom,
      imageY: (centerY - rect.top - rect.height / 2 - offsetY) / zoom
    };
  }

  function showImage(index) {
    currentIndex = (index + images.length) % images.length;
    const image = images[currentIndex].querySelector("img");
    resetZoom();
    viewerImage.src = image.src;
    viewerImage.alt = image.alt;
    caption.textContent = image.alt && image.alt !== projectTitle
      ? image.alt
      : `${projectTitle} — Foto ${currentIndex + 1} de ${images.length}`;
    const canNavigate = images.length > 1;
    previousButton.disabled = !canNavigate;
    nextButton.disabled = !canNavigate;
  }

  gallery.addEventListener("click", event => {
    const button = event.target.closest(".gallery-image-button");
    if (!button) return;

    images = [...gallery.querySelectorAll(".gallery-image-button")];
    showImage(images.indexOf(button));
    viewer.showModal();
  });

  viewerImage.addEventListener("wheel", event => {
    event.preventDefault();
    zoomAt(zoom * (event.deltaY < 0 ? 1.15 : 1 / 1.15), event.clientX, event.clientY);
  }, { passive: false });

  viewerImage.addEventListener("pointerdown", event => {
    const isMouse = event.pointerType === "mouse";
    const isMiddleButton = isMouse && event.button === 1;
    if (isMiddleButton || (isMouse && zoom > 1)) event.preventDefault();
    if (isMouse && (zoom === 1 || (event.button !== 0 && !isMiddleButton))) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (isMouse || event.pointerType === "pen") viewerImage.setPointerCapture(event.pointerId);
    if (pointers.size === 2) {
      beginPinch();
    } else if (pointers.size === 1 && zoom > 1) {
      gesture = {
        type: "pan",
        pointerId: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        offsetX,
        offsetY
      };
    }
  });

  viewerImage.addEventListener("auxclick", event => {
    if (event.button === 1) event.preventDefault();
  });

  viewerImage.addEventListener("pointermove", event => {
    if (!pointers.has(event.pointerId)) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.size >= 2 && gesture?.type === "pinch") {
      const [first, second] = pointers.values();
      const centerX = (first.x + second.x) / 2;
      const centerY = (first.y + second.y) / 2;
      const rect = viewer.querySelector(".image-viewer-stage").getBoundingClientRect();
      zoom = Math.max(1, Math.min(5, gesture.zoom *
        Math.hypot(second.x - first.x, second.y - first.y) / gesture.distance));
      offsetX = centerX - rect.left - rect.width / 2 - gesture.imageX * zoom;
      offsetY = centerY - rect.top - rect.height / 2 - gesture.imageY * zoom;
      updateZoom();
    } else if (gesture?.type === "pan" && gesture.pointerId === event.pointerId) {
      offsetX = gesture.offsetX + event.clientX - gesture.x;
      offsetY = gesture.offsetY + event.clientY - gesture.y;
      updateZoom();
      viewerImage.style.cursor = "grabbing";
    }
  });

  function endPointer(event) {
    pointers.delete(event.pointerId);
    if (pointers.size >= 2) {
      beginPinch();
    } else if (pointers.size === 1 && zoom > 1) {
      const [pointerId, point] = pointers.entries().next().value;
      gesture = {
        type: "pan",
        pointerId,
        x: point.x,
        y: point.y,
        offsetX,
        offsetY
      };
    } else {
      gesture = null;
    }
  }

  viewerImage.addEventListener("pointerup", endPointer);
  viewerImage.addEventListener("pointercancel", endPointer);

  previousButton.addEventListener("click", () => showImage(currentIndex - 1));
  nextButton.addEventListener("click", () => showImage(currentIndex + 1));
  viewer.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      showImage(currentIndex + (event.key === "ArrowRight" ? 1 : -1));
    }
  });
  closeButton.addEventListener("click", () => viewer.close());
  viewer.addEventListener("close", resetZoom);
  viewer.addEventListener("click", event => {
    if (event.target === viewer) viewer.close();
  });
}

/* -------------------- Página: contacto.html -------------------- */
function initContacto() {
  const emailEl = document.getElementById("contact-email");
  const phoneEl = document.getElementById("contact-phone");
  const linkedinEl = document.getElementById("contact-linkedin");

  if (emailEl) {
    emailEl.textContent = SITE.email || "Correo no disponible";
    emailEl.href = `mailto:${SITE.email || ""}`;
  }

  if (phoneEl) {
    phoneEl.textContent = SITE.telefono || "Teléfono no disponible";
    phoneEl.href = `https://wa.me/573206093811?text=${encodeURIComponent("Hola Julian, quiero hablar sobre un proyecto.")}`;
  }

  if (linkedinEl) {
    linkedinEl.href = SITE.linkedin || "#";
  }
}

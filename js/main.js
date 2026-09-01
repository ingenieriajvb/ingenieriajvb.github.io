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
  initCertificados();
  initReferencias();
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

function sheetCardHTML(p, index) {
  const portada = getMediaSource(p.portada);
  return `
    <a class="sheet-card" href="proyecto.html?id=${p.id}">
      <div class="sheet-media">
        <span class="sheet-tag">${categoriaLabel(p.categoria)}</span>
        <span class="sheet-num mono">HOJA ${String(index + 1).padStart(2, "0")}</span>
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
    return `<img src="${item}" alt="${alt}" loading="lazy">`;
  }

  if (item && typeof item === "object") {
    const src = item.src || item.url || "";
    if (item.type === "video" || item.kind === "video") {
      const poster = item.poster ? ` poster="${item.poster}"` : "";
      return `<video controls preload="metadata"${poster}><source src="${src}" type="${item.mime || "video/mp4"}"></video>`;
    }
    return `<img src="${src}" alt="${item.alt || alt}" loading="lazy">`;
  }

  return "";
}

function getProjectMediaItems(p) {
  if (Array.isArray(p.media) && p.media.length) return p.media;
  if (Array.isArray(p.galeria) && p.galeria.length) return p.galeria;
  return [p.portada];
}

/* -------------------- Home: proyectos destacados -------------------- */
function initHomeFeatured() {
  const el = document.getElementById("featured-projects");
  if (!el) return;
  const destacados = PROYECTOS.slice(0, 3);
  el.innerHTML = destacados.map((p, i) => sheetCardHTML(p, i)).join("");
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
      ? lista.map((p, i) => sheetCardHTML(p, i)).join("")
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

  document.getElementById("pd-anio").textContent = p.anio;
  document.getElementById("pd-cliente").textContent = p.cliente;
  document.getElementById("pd-rol").textContent = p.rol;
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

  const gal = document.getElementById("pd-gallery");
  const mediaItems = getProjectMediaItems(p);
  gal.innerHTML = mediaItems.map(item => mediaToMarkup(item, p.titulo)).join("");

  // Siguiente proyecto
  const idx = PROYECTOS.findIndex(x => x.id === p.id);
  const siguiente = PROYECTOS[(idx + 1) % PROYECTOS.length];
  const nextEl = document.getElementById("pd-next");
  if (nextEl) {
    nextEl.href = `proyecto.html?id=${siguiente.id}`;
    nextEl.querySelector(".next-title").textContent = siguiente.titulo;
  }
}

/* -------------------- Página: certificados.html -------------------- */
function initCertificados() {
  const estudiosEl = document.getElementById("cert-estudios");
  const laboralesEl = document.getElementById("cert-laborales");
  if (!estudiosEl && !laboralesEl) return;

  function certCard(c) {
    return `
      <div class="cert-card">
        <div class="cert-thumb"><img src="${c.imagen}" alt="${c.titulo}" loading="lazy"></div>
        <div class="cert-info">
          <h4>${c.titulo}</h4>
          <p>${c.institucion}</p>
          <span class="cert-year mono">${c.anio}</span>
          <a class="cert-view" href="${c.archivo}" target="_blank" rel="noopener">Ver certificado ↗</a>
        </div>
      </div>`;
  }

  if (estudiosEl) estudiosEl.innerHTML = CERTIFICADOS.estudios.map(certCard).join("");
  if (laboralesEl) laboralesEl.innerHTML = CERTIFICADOS.laborales.map(certCard).join("");

  const tabBtns = document.querySelectorAll(".cert-tab-btn");
  const panels = document.querySelectorAll(".cert-panel");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.target).classList.add("active");
    });
  });
}

/* -------------------- Página: contacto.html -------------------- */
function initContacto() {
  const emailEl = document.getElementById("contact-email");
  const phoneEl = document.getElementById("contact-phone");
  const linkedinEl = document.getElementById("contact-linkedin");
  const emailSummaryEl = document.getElementById("contact-email-summary");
  const phoneSummaryEl = document.getElementById("contact-phone-summary");

  if (emailEl) {
    emailEl.textContent = SITE.email || "Correo no disponible";
    emailEl.href = `mailto:${SITE.email || ""}`;
  }
  if (emailSummaryEl) {
    emailSummaryEl.textContent = SITE.email || "Correo no disponible";
    emailSummaryEl.href = `mailto:${SITE.email || ""}`;
  }

  if (phoneEl) {
    phoneEl.textContent = SITE.telefono || "Teléfono no disponible";
    phoneEl.href = `https://wa.me/573206093811?text=${encodeURIComponent("Hola Julian, quiero hablar sobre un proyecto.")}`;
  }
  if (phoneSummaryEl) {
    phoneSummaryEl.textContent = SITE.telefono || "Teléfono no disponible";
    phoneSummaryEl.href = `https://wa.me/573206093811?text=${encodeURIComponent("Hola Julian, quiero hablar sobre un proyecto.")}`;
  }

  if (linkedinEl) {
    linkedinEl.href = SITE.linkedin || "#";
  }
}


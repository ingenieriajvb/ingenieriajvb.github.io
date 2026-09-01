/* ============================================================
   DATOS DEL SITIO
   -----------------------------------------------------------
   Edita este archivo para actualizar proyectos, certificados
   y referencias. No necesitas tocar el HTML ni el CSS.
   Reemplaza las rutas de imagen por las tuyas dentro de
   /assets/proyectos y /assets/certificados.
   ============================================================ */

const SITE = {
  nombre: "Julian Velasco",
  titulo: "Ingeniero Civil",
  ubicacionBase: "Cali, Valle del Cauca, Colombia",
  email: "julian89@live.com",
  telefono: "+57 320 609 3811",
  linkedin: "https://www.linkedin.com/in/tu-usuario",
  heroImagen: "assets/img/hero.jpg",
  heroAlt: "Obra civil en construcción",
  heroEyebrow: "Cali, Valle del Cauca · Colombia",
  heroTitulo: "Ingeniería civil, ejecutada con precisión.",
  heroDescripcion: "Este portafolio reúne los proyectos en los que he participado a lo largo de mi carrera profesional.",
  heroStats: [
    { valor: "8+", texto: "Años de experiencia" },
    { valor: "20+", texto: "Proyectos ejecutados" },
    { valor: "3", texto: "Áreas: obra, diseño, interventoría" }
  ],
  acercaDeNosotros: {
    titulo: "Acerca de nosotros",
    descripcion: "Mi nombre es Julián Andrés Velasco Bonilla, ingeniero civil graduado de la Universidad del Cauca, con especialización técnica en Sistemas de Información Geográfica (SIG) y estudios en costos y presupuestos, programación de obra con Project y desarrollo de Inteligencia Artificial (IA) básica y aplicada a la ingeniería.",
    puntos: [
      "En Ingeniería JVB contamos con un equipo de profesionales en todas las áreas de la ingeniería y la arquitectura.",
      "Contamos con un equipo técnico de construcción de excelente calidad.",
      "Acompañamos cada proyecto desde la planificación hasta la entrega final con enfoque técnico, eficiente y responsable."
    ]
  }
};

/* -------------------- PROYECTOS -------------------- */
/* categoria: "obra" | "diseno"                         */
const PROYECTOS = [
  {
    id: "puente-vehicular-yumbo",
    titulo: "Puente vehicular El Retiro",
    categoria: "obra",
    anio: "2023",
    cliente: "Alcaldía Municipal de Yumbo",
    rol: "Residente de obra",
    resumen: "Construcción de puente vehicular de 42 m en concreto postensado sobre el río Yumbo.",
    descripcion: [
      "Dirección técnica y administrativa de la construcción de un puente vehicular de dos carriles, incluyendo cimentación profunda, pilas y superestructura en concreto postensado.",
      "El proyecto incluyó control topográfico, interventoría de calidad de concreto y coordinación con redes de servicios públicos existentes en la zona de influencia."
    ],
    alcance: [
      "Cimentación profunda (pilotes preexcavados)",
      "Superestructura en concreto postensado",
      "Obras de protección hidráulica en las márgenes del río"
    ],
    ubicacion: { nombre: "Yumbo, Valle del Cauca, Colombia", lat: 3.5833, lng: -76.4922 },
    portada: "assets/proyectos/placeholder-obra-1.jpg",
    galeria: ["assets/proyectos/placeholder-obra-1.jpg","assets/proyectos/placeholder-obra-1b.jpg","assets/proyectos/placeholder-obra-1c.jpg"]
  },
  {
    id: "urbanizacion-altos-del-pinar",
    titulo: "Urbanización Altos del Pinar",
    categoria: "obra",
    anio: "2022",
    cliente: "Constructora particular",
    rol: "Ingeniero de campo",
    resumen: "Ejecución de redes de urbanismo y vías internas para 86 unidades de vivienda.",
    descripcion: [
      "Ejecución de movimiento de tierras, redes de acueducto, alcantarillado pluvial y sanitario, y pavimentación de vías internas para un proyecto de 86 viviendas.",
      "Responsable del control de cantidades de obra, seguimiento de cronograma y verificación de especificaciones técnicas frente a diseño."
    ],
    alcance: [
      "Movimiento de tierras y conformación de subrasante",
      "Redes de acueducto y alcantarillado",
      "Pavimento flexible en vías internas"
    ],
    ubicacion: { nombre: "Jamundí, Valle del Cauca, Colombia", lat: 3.2569, lng: -76.5425 },
    portada: "assets/proyectos/placeholder-obra-2.jpg",
    galeria: ["assets/proyectos/placeholder-obra-2.jpg","assets/proyectos/placeholder-obra-2b.jpg"]
  },
  {
    id: "diseno-estructural-bodega",
    titulo: "Diseño estructural bodega industrial",
    categoria: "diseno",
    anio: "2023",
    cliente: "Grupo Logístico del Pacífico",
    rol: "Diseñador estructural",
    resumen: "Diseño estructural en pórticos metálicos para bodega industrial de 3.200 m².",
    descripcion: [
      "Diseño estructural de una bodega industrial en pórticos metálicos, incluyendo análisis sísmico, diseño de cubierta autoportante y cimentación superficial.",
      "Modelación en software especializado, memorias de cálculo y planos estructurales para construcción."
    ],
    alcance: [
      "Modelación y análisis estructural",
      "Diseño de cimentación superficial",
      "Planos y memorias de cálculo"
    ],
    ubicacion: { nombre: "Palmira, Valle del Cauca, Colombia", lat: 3.5394, lng: -76.3036 },
    portada: "assets/proyectos/placeholder-diseno-1.jpg",
    galeria: ["assets/proyectos/placeholder-diseno-1.jpg","assets/proyectos/placeholder-diseno-1b.jpg"]
  },
  {
    id: "diseno-vial-circunvalar",
    titulo: "Diseño geométrico vía circunvalar",
    categoria: "diseno",
    anio: "2021",
    cliente: "Consorcio Vial del Sur",
    rol: "Ingeniero de diseño vial",
    resumen: "Diseño geométrico y de pavimentos para 6,4 km de vía circunvalar.",
    descripcion: [
      "Diseño geométrico horizontal y vertical de 6,4 km de vía circunvalar, incluyendo diseño de pavimento, señalización y obras de drenaje.",
      "Elaboración de estudios de tránsito y coordinación con la entidad contratante para la aprobación de diseños."
    ],
    alcance: [
      "Diseño geométrico horizontal y vertical",
      "Diseño de estructura de pavimento",
      "Estudio de drenaje y obras hidráulicas menores"
    ],
    ubicacion: { nombre: "Buga, Valle del Cauca, Colombia", lat: 3.9006, lng: -76.2986 },
    portada: "assets/proyectos/placeholder-diseno-2.jpg",
    galeria: ["assets/proyectos/placeholder-diseno-2.jpg"]
  },
  {
    id: "reforzamiento-edificio-institucional",
    titulo: "Reforzamiento estructural edificio institucional",
    categoria: "obra",
    anio: "2020",
    cliente: "Institución educativa privada",
    rol: "Ingeniero residente",
    resumen: "Reforzamiento sísmico de edificio institucional de 4 niveles.",
    descripcion: [
      "Ejecución de obras de reforzamiento estructural mediante encamisado de columnas y adición de muros de cortante en concreto reforzado, conforme a estudio de vulnerabilidad sísmica previo.",
      "Coordinación de obra en funcionamiento parcial de la institución, minimizando afectación a las actividades académicas."
    ],
    alcance: [
      "Encamisado de columnas en concreto reforzado",
      "Muros de cortante nuevos",
      "Refuerzo de diafragmas de entrepiso"
    ],
    ubicacion: { nombre: "Cali, Valle del Cauca, Colombia", lat: 3.4516, lng: -76.5320 },
    portada: "assets/proyectos/placeholder-obra-3.jpg",
    galeria: ["assets/proyectos/placeholder-obra-3.jpg","assets/proyectos/placeholder-obra-3b.jpg"]
  },
  {
    id: "diseno-hidraulico-canal",
    titulo: "Diseño hidráulico canal de aguas lluvias",
    categoria: "diseno",
    anio: "2019",
    cliente: "EMCALI",
    rol: "Ingeniero hidráulico",
    resumen: "Diseño hidráulico de canal abierto para manejo de aguas lluvias en zona urbana.",
    descripcion: [
      "Modelación hidráulica e hidrológica para el diseño de un canal abierto de 1,2 km destinado al manejo de aguas lluvias en una zona urbana con antecedentes de inundación.",
      "Definición de sección de canal, obras de disipación de energía y estructuras de entrega."
    ],
    alcance: [
      "Modelación hidrológica de la cuenca aportante",
      "Diseño hidráulico del canal",
      "Estructuras de disipación de energía"
    ],
    ubicacion: { nombre: "Cali, Valle del Cauca, Colombia", lat: 3.4372, lng: -76.5225 },
    portada: "assets/proyectos/placeholder-diseno-3.jpg",
    galeria: ["assets/proyectos/placeholder-diseno-3.jpg"]
  }
];

/* -------------------- CERTIFICADOS -------------------- */
const CERTIFICADOS = {
  estudios: [
    {
      titulo: "Ingeniería Civil — Pregrado",
      institucion: "Universidad del Valle",
      anio: "2016",
      imagen: "assets/certificados/placeholder-cert-1.jpg",
      archivo: "assets/certificados/placeholder-cert-1.jpg"
    },
    {
      titulo: "Especialización en Estructuras",
      institucion: "Universidad Nacional de Colombia",
      anio: "2018",
      imagen: "assets/certificados/placeholder-cert-2.jpg",
      archivo: "assets/certificados/placeholder-cert-2.jpg"
    },
    {
      titulo: "Diplomado en Interventoría de Obras",
      institucion: "Universidad Javeriana Cali",
      anio: "2020",
      imagen: "assets/certificados/placeholder-cert-3.jpg",
      archivo: "assets/certificados/placeholder-cert-3.jpg"
    },
    {
      titulo: "Curso en Diseño Sismo Resistente NSR-10",
      institucion: "SCI — Sociedad Colombiana de Ingenieros",
      anio: "2021",
      imagen: "assets/certificados/placeholder-cert-4.jpg",
      archivo: "assets/certificados/placeholder-cert-4.jpg"
    }
  ],
  laborales: [
    {
      titulo: "Certificación laboral — Residente de obra",
      institucion: "Constructora XYZ S.A.S.",
      anio: "2022 – 2023",
      imagen: "assets/certificados/placeholder-lab-1.jpg",
      archivo: "assets/certificados/placeholder-lab-1.jpg"
    },
    {
      titulo: "Certificación laboral — Ingeniero de diseño",
      institucion: "Consorcio Vial del Sur",
      anio: "2021",
      imagen: "assets/certificados/placeholder-lab-2.jpg",
      archivo: "assets/certificados/placeholder-lab-2.jpg"
    },
    {
      titulo: "Certificación laboral — Ingeniero residente",
      institucion: "Institución educativa privada",
      anio: "2019 – 2020",
      imagen: "assets/certificados/placeholder-lab-3.jpg",
      archivo: "assets/certificados/placeholder-lab-3.jpg"
    }
  ]
};

/* -------------------- REFERENCIAS LABORALES -------------------- */
/* Estos datos son visibles públicamente en el sitio.
   Confirma con cada persona antes de publicar su contacto. */
const REFERENCIAS = [
  {
    nombre: "Ing. Andrés [Apellido]",
    cargo: "Director de obra",
    empresa: "Constructora XYZ S.A.S.",
    periodo: "2022 – 2023",
    email: "andres@ejemplo.com",
    telefono: "+57 300 000 0001"
  },
  {
    nombre: "Ing. Carolina [Apellido]",
    cargo: "Gerente de proyectos",
    empresa: "Consorcio Vial del Sur",
    periodo: "2021",
    email: "carolina@ejemplo.com",
    telefono: "+57 300 000 0002"
  },
  {
    nombre: "Ing. Felipe [Apellido]",
    cargo: "Rector / Representante legal",
    empresa: "Institución educativa privada",
    periodo: "2019 – 2020",
    email: "felipe@ejemplo.com",
    telefono: "+57 300 000 0003"
  }
];

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
  ubicacionBase: "Colombia",
  email: "ingenieriajvb@gmail.com",
  telefono: "+57 320 609 3811",
  linkedin: "https://www.linkedin.com/in/tu-usuario",
  heroImagen: "assets/img/hero.jpg",
  heroAlt: "Obra civil en construcción",
  heroEyebrow: "Colombia",
  heroTitulo: "Ingeniería civil, ejecutada con precisión.",
  heroDescripcion: "Este portafolio reúne los proyectos en los que he participado a lo largo de mi carrera profesional.",
  heroStats: [
    { valor: "8+", texto: "Años de experiencia" },
    { valor: "8+", texto: "Proyectos ejecutados" },
    { valor: "3", texto: "Áreas: Presupuestos, diseño, obra" }
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
    id: "casa-campestre-popayan",
    titulo: "Casa Campestre Popayán",
    categoria: "obra",
    anio: "2024",
    cliente: "Cliente particular",
    rol: "Proyecto residencial",
    resumen: "Diseño y ejecución de vivienda campestre con propuesta arquitectónica y obra civil adaptada al terreno.",
    descripcion: [
      "Proyecto de vivienda campestre desarrollado con enfoque funcional, paisajístico y constructivo, ajustado a las condiciones del sitio y la topografía.",
      "Se gestionó la ejecución de obra con coordinación de acabados, estructura, urbanismo y detalles constructivos que aportan valor al proyecto final."
    ],
    alcance: [
      "Diseño y obra civil residencial",
      "Ajuste a topografía y condiciones del lote",
      "Coordinación de acabados y detalles de construcción"
    ],
    ubicacion: { nombre: "Popayán, Cauca, Colombia", lat: 2.4448, lng: -76.6140 },
    portada: "assets/proyectos/web/casa-campestre/casa-campestre-01.jpg",
    galeria: [
      "assets/proyectos/web/casa-campestre/casa-campestre-01.jpg",
      "assets/proyectos/web/casa-campestre/casa-campestre-02.jpg",
      "assets/proyectos/web/casa-campestre/casa-campestre-03.jpg",
      "assets/proyectos/web/casa-campestre/casa-campestre-04.jpg",
      "assets/proyectos/web/casa-campestre/casa-campestre-05.jpg",
      "assets/proyectos/web/casa-campestre/casa-campestre-06.jpg"
    ]
  },
  {
    id: "vias-la-meseta-suarez",
    titulo: "Diagnóstico vial Suárez - Vías La Meseta",
    categoria: "obra",
    anio: "2021",
    cliente: "Municipio de Suárez",
    rol: "Diagnóstico y seguimiento vial",
    resumen: "Estudio de diagnóstico vial para sectores rurales con análisis de condición, tramos, y necesidades de intervención.",
    descripcion: [
      "Se realizó el diagnóstico de vías en el corregimiento La Meseta con revisión de condiciones de servicio, deterioro superficial y necesidad de intervención.",
      "El trabajo permitió identificar puntos críticos, requerimientos de rehabilitación y priorización de intervenciones para la red vial local."
    ],
    alcance: [
      "Inspección técnica del tramo vial",
      "Evaluación de condición y deterioro",
      "Diagnóstico para intervención y priorización"
    ],
    ubicacion: { nombre: "Suárez, Cauca, Colombia", lat: 2.9513, lng: -76.6945 },
    portada: "assets/proyectos/web/meseta/meseta-01.jpg",
    galeria: [
      "assets/proyectos/web/meseta/meseta-01.jpg",
      "assets/proyectos/web/meseta/meseta-02.jpg",
      "assets/proyectos/web/meseta/meseta-03.jpg",
      "assets/proyectos/web/meseta/meseta-04.jpg",
      "assets/proyectos/web/meseta/meseta-05.jpg",
      "assets/proyectos/web/meseta/meseta-06.jpg",
      "assets/proyectos/web/meseta/meseta-07.jpg",
      "assets/proyectos/web/meseta/meseta-08.jpg",
      "assets/proyectos/web/meseta/meseta-09.jpg",
      "assets/proyectos/web/meseta/meseta-10.jpg",
      "assets/proyectos/web/meseta/meseta-11.jpg",
      "assets/proyectos/web/meseta/meseta-12.jpg",
      "assets/proyectos/web/meseta/meseta-13.jpg",
      "assets/proyectos/web/meseta/meseta-14.jpg",
      "assets/proyectos/web/meseta/meseta-15.jpg",
      "assets/proyectos/web/meseta/meseta-16.jpg"
    ]
  },
  {
    id: "vias-la-toma-suarez",
    titulo: "Diagnóstico vial Suárez - Vías La Toma",
    categoria: "obra",
    anio: "2021",
    cliente: "Municipio de Suárez",
    rol: "Diagnóstico y análisis vial",
    resumen: "Revisión y diagnóstico de tramos viales en La Toma, con prioridad en condiciones de servicio y mantenimiento.",
    descripcion: [
      "Se evaluaron los tramos viales del sector de La Toma para determinar estado actual, afectaciones y requerimientos de intervención.",
      "El trabajo incluyó observación técnica de la infraestructura y registro fotográfico para apoyar decisiones de rehabilitación y mantenimiento."
    ],
    alcance: [
      "Evaluación geométrica y funcional",
      "Inspección de condiciones actuales",
      "Diagnóstico para intervención vial"
    ],
    ubicacion: { nombre: "Suárez, Cauca, Colombia", lat: 2.9513, lng: -76.6945 },
    portada: "assets/proyectos/web/toma/toma-01.jpg",
    galeria: [
      "assets/proyectos/web/toma/toma-01.jpg",
      "assets/proyectos/web/toma/toma-02.jpg",
      "assets/proyectos/web/toma/toma-03.jpg",
      "assets/proyectos/web/toma/toma-04.jpg",
      "assets/proyectos/web/toma/toma-05.jpg",
      "assets/proyectos/web/toma/toma-06.jpg",
      "assets/proyectos/web/toma/toma-07.jpg",
      "assets/proyectos/web/toma/toma-08.jpg",
      "assets/proyectos/web/toma/toma-09.jpg",
      "assets/proyectos/web/toma/toma-10.jpg",
      "assets/proyectos/web/toma/toma-11.jpg",
      "assets/proyectos/web/toma/toma-12.jpg",
      "assets/proyectos/web/toma/toma-13.jpg",
      "assets/proyectos/web/toma/toma-14.jpg",
      "assets/proyectos/web/toma/toma-15.jpg",
      "assets/proyectos/web/toma/toma-16.jpg",
      "assets/proyectos/web/toma/toma-17.jpg",
      "assets/proyectos/web/toma/toma-18.jpg",
      "assets/proyectos/web/toma/toma-19.jpg",
      "assets/proyectos/web/toma/toma-20.jpg"
    ]
  },
  {
    id: "vias-pureto-suarez",
    titulo: "Diagnóstico vial Suárez - Vías Pureto",
    categoria: "obra",
    anio: "2021",
    cliente: "Municipio de Suárez",
    rol: "Diagnóstico vial",
    resumen: "Inspección técnica de vías en el sector Puerto, con análisis de afectaciones y requerimientos de intervención.",
    descripcion: [
      "Se adelantó un diagnóstico técnico para tramos viales del sector Pureto, revisando su condición física, operación y necesidad de mejoras.",
      "La información recopilada sirvió de base para priorizar intervenciones y apoyar la gestión del mantenimiento vial."
    ],
    alcance: [
      "Diagnóstico técnico del tramo",
      "Registro fotográfico y revisión visual",
      "Base para intervención y mantenimiento"
    ],
    ubicacion: { nombre: "Suárez, Cauca, Colombia", lat: 2.9513, lng: -76.6945 },
    portada: "assets/proyectos/web/pureto/pureto-01.jpg",
    galeria: [
      "assets/proyectos/web/pureto/pureto-01.jpg",
      "assets/proyectos/web/pureto/pureto-02.jpg",
      "assets/proyectos/web/pureto/pureto-03.jpg",
      "assets/proyectos/web/pureto/pureto-04.jpg",
      "assets/proyectos/web/pureto/pureto-05.jpg",
      "assets/proyectos/web/pureto/pureto-06.jpg",
      "assets/proyectos/web/pureto/pureto-07.jpg",
      "assets/proyectos/web/pureto/pureto-08.jpg",
      "assets/proyectos/web/pureto/pureto-09.jpg",
      "assets/proyectos/web/pureto/pureto-10.jpg",
      "assets/proyectos/web/pureto/pureto-11.jpg",
      "assets/proyectos/web/pureto/pureto-12.jpg",
      "assets/proyectos/web/pureto/pureto-13.jpg",
      "assets/proyectos/web/pureto/pureto-14.jpg",
      "assets/proyectos/web/pureto/pureto-15.jpg",
      "assets/proyectos/web/pureto/pureto-16.jpg",
      "assets/proyectos/web/pureto/pureto-17.jpg",
      "assets/proyectos/web/pureto/pureto-18.jpg",
      "assets/proyectos/web/pureto/pureto-19.jpg",
      "assets/proyectos/web/pureto/pureto-20.jpg",
      "assets/proyectos/web/pureto/pureto-21.jpg"
    ]
  },
  {
    id: "remodelacion-rama-judicial-cauca",
    titulo: "Remodelación de instalaciones de la Rama Judicial",
    categoria: "obra",
    anio: "2018–2019",
    cliente: "Rama Judicial",
    rol: "Remodelación de instalaciones",
    resumen: "Registro de la remodelación de sedes judiciales en Corinto, Santander de Quilichao y Popayán.",
    descripcion: [
      "Registro fotográfico de las obras de remodelación realizadas en instalaciones de la Rama Judicial en el Cauca."
    ],
    alcance: [
      "Remodelación de instalaciones",
      "Registro fotográfico de obra"
    ],
    ubicacion: { nombre: "Corinto, Santander de Quilichao y Popayán, Cauca", lat: 2.4448, lng: -76.6140 },
    portada: "assets/proyectos/web/rama-judicial/rama-judicial-01.jpg",
    galeria: [
      "assets/proyectos/web/rama-judicial/rama-judicial-01.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-02.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-03.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-04.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-05.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-06.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-07.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-08.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-09.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-10.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-11.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-12.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-13.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-14.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-15.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-16.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-17.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-18.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-19.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-20.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-21.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-22.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-23.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-24.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-25.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-26.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-27.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-28.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-29.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-30.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-31.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-32.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-33.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-34.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-35.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-36.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-37.jpg",
      "assets/proyectos/web/rama-judicial/rama-judicial-38.jpg"
    ]
  },
  {
    id: "remodelacion-banos-popayan",
    titulo: "Remodelación de baños en conjunto residencial",
    categoria: "obra",
    anio: "2023",
    cliente: "Conjunto residencial",
    rol: "Remodelación",
    resumen: "Remodelación de baños en un conjunto residencial de Popayán.",
    descripcion: [
      "Registro fotográfico del proceso de remodelación de los baños del conjunto residencial."
    ],
    alcance: [
      "Remodelación de baños",
      "Registro fotográfico de obra"
    ],
    ubicacion: { nombre: "Popayán, Cauca, Colombia", lat: 2.4448, lng: -76.6140 },
    portada: "assets/proyectos/web/remodelacion-banos/remodelacion-banos-01.jpg",
    galeria: [
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-01.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-02.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-03.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-04.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-05.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-06.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-07.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-08.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-09.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-10.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-11.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-12.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-13.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-14.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-15.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-16.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-17.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-18.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-19.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-20.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-21.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-22.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-23.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-24.jpg",
      "assets/proyectos/web/remodelacion-banos/remodelacion-banos-25.jpg"
    ]
  },
  {
    id: "remodelacion-casa-centro-popayan",
    titulo: "Remodelación de casa en el centro histórico de Popayán",
    categoria: "obra",
    anio: "s. f.",
    cliente: "Cliente particular",
    rol: "Remodelación residencial",
    resumen: "Remodelación de una vivienda en el centro histórico de Popayán.",
    descripcion: [
      "Registro visual del proyecto de remodelación de una casa ubicada en el centro histórico de Popayán."
    ],
    alcance: [
      "Remodelación residencial",
      "Registro fotográfico del proyecto"
    ],
    ubicacion: { nombre: "Centro histórico de Popayán, Cauca", lat: 2.4448, lng: -76.6140 },
    portada: "assets/proyectos/web/casa-centro/casa-centro-01.jpg",
    galeria: [
      "assets/proyectos/web/casa-centro/casa-centro-01.jpg",
      "assets/proyectos/web/casa-centro/casa-centro-02.jpg",
      "assets/proyectos/web/casa-centro/casa-centro-03.jpg",
      "assets/proyectos/web/casa-centro/casa-centro-04.jpg",
      "assets/proyectos/web/casa-centro/casa-centro-05.jpg",
      "assets/proyectos/web/casa-centro/casa-centro-06.jpg"
    ]
  },
  {
    id: "casa-grande-resguardo-honduras",
    titulo: "Casa Grande del Resguardo Indígena de Honduras",
    categoria: "obra",
    anio: "2024",
    cliente: "Cabildo Indígena de Honduras",
    rol: "Proyecto de infraestructura",
    resumen: "Proyecto de Casa Grande para el Cabildo Indígena de Honduras, en Morales, Cauca.",
    descripcion: [
      "Registro fotográfico y audiovisual de la Casa Grande del Resguardo Indígena de Honduras."
    ],
    alcance: [
      "Infraestructura comunitaria",
      "Registro fotográfico y audiovisual"
    ],
    ubicacion: { nombre: "Resguardo de Honduras, Morales, Cauca", lat: 2.7549, lng: -76.6273 },
    portada: "assets/proyectos/web/casa-grande/casa-grande-01.jpg",
    galeria: [
      "assets/proyectos/web/casa-grande/casa-grande-01.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-02.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-03.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-04.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-05.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-06.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-07.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-08.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-09.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-10.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-11.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-12.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-13.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-14.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-15.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-16.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-17.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-18.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-19.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-20.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-21.jpg",
      "assets/proyectos/web/casa-grande/casa-grande-22.jpg",
      {
        type: "video",
        src: "assets/proyectos/web/casa-grande/casa-grande-resguardo.mp4",
        mime: "video/mp4",
        poster: "assets/proyectos/web/casa-grande/casa-grande-01.jpg"
      }
    ]
  },
  {
    id: "planta-tratamiento-agua-silvia",
    titulo: "Planta de tratamiento de agua potable de Silvia",
    categoria: "obra",
    anio: "2024",
    cliente: "Proyecto de agua potable",
    rol: "Infraestructura hidráulica",
    resumen: "Proyecto de planta de tratamiento de agua potable en Silvia, Cauca.",
    descripcion: [
      "Registro fotográfico del proyecto de la planta de tratamiento de agua potable de Silvia."
    ],
    alcance: [
      "Infraestructura para tratamiento de agua potable",
      "Registro fotográfico del proyecto"
    ],
    ubicacion: { nombre: "Silvia, Cauca, Colombia", lat: 2.6115, lng: -76.3826 },
    portada: "assets/proyectos/web/planta-agua-silvia/planta-agua-silvia-01.jpg",
    galeria: [
      "assets/proyectos/web/planta-agua-silvia/planta-agua-silvia-01.jpg",
      "assets/proyectos/web/planta-agua-silvia/planta-agua-silvia-02.jpg",
      "assets/proyectos/web/planta-agua-silvia/planta-agua-silvia-03.jpg",
      "assets/proyectos/web/planta-agua-silvia/planta-agua-silvia-04.jpg",
      "assets/proyectos/web/planta-agua-silvia/planta-agua-silvia-05.jpg"
    ]
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


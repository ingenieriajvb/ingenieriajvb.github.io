/* ============================================================
   DATOS DEL SITIO
   -----------------------------------------------------------
   Edita este archivo para actualizar proyectos y referencias.
   No necesitas tocar el HTML ni el CSS.
   Reemplaza las rutas de imagen por las tuyas dentro de
   /assets/proyectos.
   ============================================================ */

const SITE = {
  nombre: "Julian Velasco",
  titulo: "Ingeniero Civil",
  ubicacionBase: "Colombia",
  email: "ingenieriajvb@gmail.com",
  telefono: "+57 320 609 3811",
  linkedin: "https://www.linkedin.com/in/tu-usuario",
  heroImagen: "assets/proyectos/casa1-1.png",
  heroAlt: "Casa campestre en Popayán",
  heroEyebrow: "Colombia",
  heroTitulo: "Ingeniería civil, ejecutada con precisión.",
  heroDescripcion: "Este portafolio reúne los proyectos en los que he participado a lo largo de mi carrera profesional.",
  heroStats: [
    { valor: "8+", texto: "Años de experiencia" },
    { valor: "4", texto: "Proyectos destacados" },
    { valor: "3", texto: "Áreas: obra, vial y residencial" }
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
function fotosDeCarpeta(carpeta, nombres) {
  return nombres.map(nombre => ({
    src: `${carpeta}/${nombre}`,
    alt: nombre.replace(/\.[^.]+$/, "")
  }));
}

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
    galeria: fotosDeCarpeta("portfolio-site/Casa Campestre Popayán", [
      "Cubierta.png",
      "Fachadas y Cortes.png",
      "Lote.jpeg",
      "Plano Electrico.png",
      "Plano Hidraulico.png",
      "Plano Sanitario Primer Piso.png",
      "Plano Sanitario segundo piso.png",
      "Planta Primer Piso.png",
      "Planta Segundo Piso.png"
    ])
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
    galeria: fotosDeCarpeta("portfolio-site/Diagnostico vial Suarez - Cauca/Vias la Meseta", [
      "Canoas para trasporte de comercio local por via fluvial.jpg",
      "Embalse la Salvajina - Suarez.jpg",
      "Embalse la Salvajina vista desde la Meseta.jpg",
      "Embarcadero Buenavista.jpg",
      "Embarcadero el Arenal.jpg",
      "Equipo de trabajo diagnostico vial.jpg",
      "Montañas la Meseta vista amplia.jpg",
      "Montañas la Meseta.jpg",
      "Paso de agua en la via donde se propone batea en concreto.jpg",
      "Propuesta de ubicacion de alcantarilla.jpg",
      "Propuesta de ubicación de obra de arte ( alcantarilla).jpg",
      "Puente artesanal en madera donde se propone ubicación de  obra de arte.jpg",
      "Punto donde  se propone alcantarilla.jpg",
      "Total de tramos recorridos para mejora en la vereda de la  Meseta - Google Earth.jpg",
      "Ubicacion de obras de arte y propuesta de mejoras inmediatas por el alto deterioro.jpg",
      "Vehiculo de trabajo en vias con malas condiciones.jpg",
      "Vias con propuesta de placa huella por condiciones actuales - la Meseta.jpg"
    ])
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
    galeria: fotosDeCarpeta("portfolio-site/Diagnostico vial Suarez - Cauca/Vias la Toma", [
      "Alcantarilla antigua de los años 1920 debajo de las vias del tren.jpg",
      "Alcantarilla años 1920.jpg",
      "Bifurcación tramos en la Toma.jpg",
      "Embalse la Salvajina.jpg",
      "Embarcadero el Lago.jpg",
      "Finalizando tramo colegio en la Toma.jpg",
      "Fuentes hidricas.jpg",
      "Funtes hidricas - Nacimiento de agua.jpg",
      "Guia de la comunidad - embalse Salvajina.jpg",
      "Inicio recorrido tramos la Toma.jpg",
      "Paso en mula.jpg",
      "Propuesta de linea de vida junto a lago.jpg",
      "Punto obra de arte ( alcantarilla).jpg",
      "Punto obra de arte (alcantarillas).jpg",
      "Total de tramos recorridos para mejora en la vereda de la Toma - Google Earth.jpg",
      "Vias alta montaña - la Toma.jpg",
      "Vista de el embalse la Salvajina.jpg",
      "Vista embalse Salvajina desde la Toma.jpg"
    ])
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
    kmz: "assets/kmz/vias-pureto.kmz",
    portada: "assets/proyectos/web/pureto/pureto-01.jpg",
    galeria: fotosDeCarpeta("portfolio-site/Diagnostico vial Suarez - Cauca/Vias Pureto", [
      "Equipo de trabajo CELSIA Valle.jpg",
      "Equipo de trabajo realizando toma de puntos con GPS de alta precisión.jpg",
      "Puente artesanal donde se propone ponton en concreto.jpg",
      "Punto de ubicaciopn de alcantarilla en curva con pendiente alta.jpg",
      "Punto de ubicación de Box Culvert.jpg",
      "Punto de ubicación de obra de arte vias afectadas.jpg",
      "Punto de ubicación de obra de arte.jpg",
      "Punto para ubicacion de Box Culvert.jpg",
      "Puntos criticos en las vias de Pureto.jpg",
      "Total de tramos recorridos para mejora en la vereda de Pureto - Google Earth.jpg",
      "Vehiculo de trabajo con perdida de traccion por mal estado de la via.jpg",
      "Vias con mejoramiento de superficie.jpg",
      "Vias consideradas en buen estado y con banca amplia.jpg",
      "Vias Pureto.jpg",
      "Vista montañas Pureto.jpg"
    ])
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
    galeria: fotosDeCarpeta("portfolio-site/Remodelación Instalaciones Rama Judicial Corinto - Santander de Quilichao - Popayán", [
      "Arquitectura clasica italiana combinada con estructura liviana - Palacio Nacional.jpg",
      "Cielo raso terminado - Palacio Nacional.jpg",
      "Construcción de caseta - Palacio de Justicia, Puerto Tejada, Cauca.jpg",
      "Instalación cielo rasos - Palacio de Justicia, Popayán.jpg",
      "Montaje nuevas oficinas segundo piso, acabados - Palacio Nacional.jpg",
      "Montaje nuevas oficinas segundo piso, terminadas - Palacio Nacional.jpg",
      "Montaje nuevas oficinas, segundo piso, estructura liviana - Palacio Nacional.jpg",
      "Obras - Palacio Nacional.jpg",
      "Obras de remodelación en oficinas terminadas - Palacio de Justica, Popayán.jpg",
      "Obras electricas, instalción de luminarias - Palacio de Justicia, Popayán.jpg",
      "Obras en altura - Palacio Nacional.jpg",
      "Obras oficinas - Palcio de Justica, Popayán.jpg",
      "Obras Termidas - Palacio de Justicia Santander de Quilichao.jpg",
      "Palacio de Justicia, Santander de Quilichao.jpg",
      "Palacio Nacional.jpg",
      "Remodelación oficinas - Palacio de Justicia.jpg",
      "Remodelación patios - Palacio de Justicia, Popayán.jpg",
      "Remodelación pisos, pintura, oficinas - Palacio de Justicia, Santander de Quilichao.jpg",
      "Remopdelación pisos, cielo raso - Palacio de Justicia, Popayán.jpg",
      "Restauracion canales, pintura, tuberias - Palacio de Justicia, Popayán.jpg",
      "Restauración canales - Palacio de Justicia, Popayán.jpg",
      "Restauración canales y fachada - Juzgados Penales para Adolecentes, Popayán.jpg",
      "Restauración canales y pintura - Palacio de Justicia, Popayán.jpg",
      "Restauración canales, pintura, pisos, barandas - Palacio de Justicia, Santander de Quilichao.jpg",
      "Restauración cielo raso artesona de composición ecléctica italiana - Palacio Nacional.jpg",
      "Restauración columnas estilos eclectica italiana - Palacio Nacional.jpg",
      "Restauración cubiertas - Palacio Nacional.jpg",
      "Restauración cubiertas, cerrajeria y pintura plazoleta - Palacio Nacional.jpg",
      "Restauración fachada principal - Palacio de Justicia, Popayán.jpg",
      "Restauración pisos - Palacio de Justicia, Santander de Quilichao.jpg",
      "Techos teja de barro, centro historico - Popayán.jpg"
    ])
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
    galeria: fotosDeCarpeta("portfolio-site/Remodelación baños conjunto cerrado  Popayán", [
      "20231207_184508.jpg",
      "20231207_184535.jpg",
      "20231207_184541.jpg",
      "Bateria sanitaria existente baño 1.jpg",
      "Bateria sanitaria existente baño 2.jpg",
      "Baño 2 terminado foto 2.jpg",
      "Baño 2 terminado.jpg",
      "Demolición de enchape existente.jpg",
      "Desmonte de aparatos sanitarios.jpg",
      "Ducha baño 1.jpg",
      "Ducha baño 2.jpg",
      "Ducha completa baño 1.jpg",
      "Enchape baño 1.jpg",
      "Enchape baño 2.jpg",
      "Instalación de aparatos sanitarios baño 1.jpg",
      "Lavamanos baño 1.jpg",
      "Lavamanos baño 2.jpg",
      "Montaje baño 2.jpg",
      "Preparación de muro para enchape.jpg",
      "Proceso de enchape baño 2.jpg"
    ])
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
    galeria: fotosDeCarpeta("portfolio-site/Remodelacion casa centro historico Popayán", [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "Avanze de obra.jpg",
      "Carpinteria de puertas y ventanas.jpg",
      "Castillos.jpg",
      "Cielo razo en super board.jpg",
      "Columnetas para refuerzo.jpg",
      "Enmallado en muros de  adobe.jpg",
      "Escombros.jpg",
      "Iluminación de dia.jpg",
      "Inicio de obra.JPG",
      "Inicio obras.JPG",
      "Luz de cielo blanca, apliques luz calida.JPG",
      "Muro en mamposteria divisorio.jpg",
      "Muros en adobe en mal estado.jpg",
      "Obra blanca.JPG",
      "Obra gris.jpg",
      "Obra sala.jpg",
      "Obra terminada 2.jpg",
      "Obra terminada, pisos.jpg",
      "Obra terminada.jpg",
      "Portada terminada.jpg",
      "Puerta  de acceso.jpg",
      "Recuperacion de ventanas en Cedro.jpg",
      "Regates e instalciones electricas.jpg",
      "Repello.jpg",
      "Retiro de escombros.jpg",
      "Ultimos acabados.jpg",
      "Ventana colonial  restaurada.jpg",
      "Viga aerea de refuerzo.JPG",
      "Zanjas para vigas de cimentación.jpg"
    ])
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
      ...fotosDeCarpeta("portfolio-site/Casa grande Cabildo Indigena de Honduras  Morales - Cauca", [
        "Construcción existente fahcada principal.jpg",
        "Construcción existente vista aerea.jpg",
        "Construcción existente vista lateral derecha.jpg",
        "Construcción existente vista lateral izquierda.jpg",
        "Cubierta.jpg",
        "Emisora.jpg",
        "Fachada Lateral Derecha.jpg",
        "Fachada Lateral.jpg",
        "Fachada Principal.jpg",
        "Interior Corredor.jpg",
        "Interior Oficinas.jpg",
        "Interior Parqueadero.jpg",
        "Interior.jpg",
        "Isometrica derecha.jpg",
        "Isometrica izquierda.jpg",
        "Piso 1.jpg",
        "Piso 2.jpg",
        "Piso 3.jpg",
        "Sotano.jpg",
        "Vista Aerea.jpg",
        "Zona Cafeteria.jpg"
      ]),
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
    galeria: fotosDeCarpeta("portfolio-site/Planta de tratamiento agua potable Silvia - Cauca", [
      "Corte diseño PTAR.jpg",
      "Georeferenciación PTAR - Planta.jpg",
      "Instalación de equipo GPS de alta precisión.jpg",
      "Municipio de Silvia - Cauca.jpg",
      "Perfil, corte y planta PTAR.jpg",
      "Punto de ubicación planta de tratamiento de aguas residuales - vista lateral.jpg",
      "Punto de ubicación planta de tratamiento de aguas residuales.jpg"
    ])
  }
];

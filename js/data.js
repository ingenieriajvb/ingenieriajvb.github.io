/* ============================================================
   DATOS DEL SITIO
   -----------------------------------------------------------
   Edita este archivo para actualizar proyectos y referencias.
   No necesitas tocar el HTML ni el CSS.
   Reemplaza las rutas de imagen por las tuyas dentro de
   /assets/proyectos.
   ============================================================ */

const SITE = {
  nombre: "Julián Velasco",
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
    { valor: "8", texto: "Años de experiencia" },
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
function fotosDeCarpeta(carpeta, nombres) {
  return nombres.map(nombre => ({
    src: `${carpeta}/${nombre}`,
    alt: corregirOrtografia(nombre.replace(/\.[^.]+$/, ""))
  }));
}

function corregirOrtografia(texto) {
  const correcciones = {
    adolecentes: "adolescentes",
    avanze: "avance",
    bateria: "batería",
    cafeteria: "cafetería",
    carpinteria: "carpintería",
    diagnostico: "diagnóstico",
    funtes: "fuentes",
    guia: "guía",
    georeferenciacion: "georreferenciación",
    isometrica: "isométrica",
    instalción: "instalación",
    instalcion: "instalación",
    instalciones: "instalaciones",
    justica: "justicia",
    palcio: "palacio",
    ponton: "pontón",
    regates: "regatas",
    remopdelación: "remodelación",
    sotano: "sótano",
    termidas: "terminadas",
    aerea: "aérea",
    calida: "cálida",
    clasica: "clásica",
    criticos: "críticos",
    dificil: "difícil",
    dia: "día",
    eclectica: "ecléctica",
    electrico: "eléctrico",
    electricas: "eléctricas",
    fahcada: "fachada",
    historico: "histórico",
    hidraulico: "hidráulico",
    hidricas: "hídricas",
    kilometros: "kilómetros",
    linea: "línea",
    mamposteria: "mampostería",
    perdida: "pérdida",
    realizo: "realizó",
    relacion: "relación",
    recuperacion: "recuperación",
    restauracion: "restauración",
    suarez: "suárez",
    trasporte: "transporte",
    traccion: "tracción",
    tuberias: "tuberías",
    ultimos: "últimos",
    ubicaciopn: "ubicación",
    ubicacion: "ubicación",
    vehiculo: "vehículo",
    via: "vía",
    vias: "vías"
  };
  const textoCorregido = texto.replace(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g, palabra => {
    const correccion = correcciones[palabra.toLowerCase()];
    if (!correccion) return palabra;
    return palabra[0] === palabra[0].toUpperCase()
      ? correccion[0].toUpperCase() + correccion.slice(1)
      : correccion;
  });
  return textoCorregido
    .replace(/restauración cielo raso artesona/gi, "Restauración del cielo raso artesonado")
    .replace(/instalación cielo rasos/gi, "Instalación de cielos rasos")
    .replace(/restauración columnas estilos ecléctica italiana/gi, "Restauración de columnas de estilo ecléctico italiano")
    .replace(/techos teja de barro/gi, "Techos de teja de barro")
    .replace(/vista de el embalse/gi, "Vista del embalse");
}

const PROYECTOS = [
  {
    id: "casa-campestre-popayan",
    titulo: "Casa Campestre Popayán",
    categoria: "diseno",
    anio: "2024",
    cliente: "Cliente particular",
    rol: "Proyecto residencial",
    resumen: "Diseño arquitectónico, estructural, hidráulico, hidrosanitario y eléctrico de una vivienda campestre en las afueras de Popayán.",
    descripcion: [
      "Proyecto de vivienda campestre desarrollado con un enfoque funcional y moderno, buscando la mejor relación entre calidad y precio, y ajustado a las condiciones del sitio y a las necesidades del cliente.",
      "Se realizó el presupuesto de todas las etapas de construcción y de terminación de acabados, de acuerdo con las especificaciones del cliente."
    ],
    alcance: [
      "Diseño residencial integral",
      "Ajuste a topografía y condiciones del lote",
      "Presupuesto y programación de obra",
    ],
    ubicacion: { nombre: "Popayán, Cauca, Colombia", lat: 2.4448, lng: -76.6140 },
    portada: "assets/proyectos/web/casa-campestre/casa-campestre-01.jpg",
    galeria: fotosDeCarpeta("portfolio-site/Casa Campestre Popayán", [
      "Fachadas y Cortes.png",
      "Planta Primer Piso.png",
      "Planta Segundo Piso.png",
      "Plano Electrico.png",
      "Plano Hidraulico.png",
      "Plano Sanitario Primer Piso.png",
      "Plano Sanitario segundo piso.png",
      "Cubierta.png",
      "Lote.jpeg"
    ])
  },
  {
    id: "vias-la-meseta-suarez",
    titulo: "Diagnóstico vial Suárez - Vías La Meseta",
    categoria: "obra",
    anio: "2021",
    cliente: "Municipio de Suárez",
    rol: "Diagnóstico y seguimiento vial",
    resumen: "Estudio de diagnóstico vial en sectores rurales, con análisis de las condiciones de los tramos y de las necesidades de intervención.",
    descripcion: [
      "Se realizó el diagnóstico de vías en el corregimiento La Meseta con revisión de condiciones de servicio, deterioro superficial y necesidad de intervención.",
      "El trabajo permitió identificar puntos críticos, requerimientos de rehabilitación y priorización de intervenciones para la ubicación de obras de arte.",
      "El equipo recorrió aproximadamente 70 kilómetros a pie."
    ],
    alcance: [
      "Diagnóstico técnico de los tramos viales",
      "Evaluación de las condiciones junto con la comunidad",
      "Base para intervención y mantenimiento"
    ],
    ubicacion: { nombre: "Suárez, Cauca, Colombia", lat: 2.9513, lng: -76.6945 },
    portada: "assets/proyectos/web/meseta/meseta-01.jpg",
    galeria: fotosDeCarpeta("portfolio-site/Diagnostico vial Suarez - Cauca/Vias la Meseta", [
      "Total de tramos recorridos para mejora en la vereda de la  Meseta - Google Earth.jpg",
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
      "Ubicacion de obras de arte y propuesta de mejoras inmediatas por el alto deterioro.jpg",
      "Vehiculo de trabajo en vias con malas condiciones.jpg",
      "Vias con propuesta de placa huella por condiciones actuales - la Meseta.jpg"
      ]).concat([{
        type: "video",
        src: "portfolio-site/Diagnostico vial Suarez - Cauca/Vias la Meseta/Vias de la Meseta.mp4",
        mime: "video/mp4"
      }])
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
      "Se evaluaron los tramos viales del sector de La Toma para determinar su estado actual, las afectaciones y las necesidades de intervención.",
      "El trabajo permitió identificar puntos críticos, requerimientos de rehabilitación y priorización de intervenciones para la ubicación de obras de arte.",
      "El equipo recorrió aproximadamente 73 kilómetros a pie."
    ],
    alcance: [
      "Diagnóstico técnico de los tramos viales",
      "Evaluación de las condiciones junto con la comunidad",
      "Base para intervención y mantenimiento"
    ],
    ubicacion: { nombre: "Suárez, Cauca, Colombia", lat: 2.9513, lng: -76.6945 },
    portada: "assets/proyectos/web/toma/toma-01.jpg",
    galeria: fotosDeCarpeta("portfolio-site/Diagnostico vial Suarez - Cauca/Vias la Toma", [
      "Total de tramos recorridos para mejora en la vereda de la Toma - Google Earth.jpg",
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
      "Vias alta montaña - la Toma.jpg",
      "Vista de el embalse la Salvajina.jpg",
      "Vista embalse Salvajina desde la Toma.jpg"
      ]).concat([{
        type: "video",
        src: "portfolio-site/Diagnostico vial Suarez - Cauca/Vias la Toma/Embalse.mp4",
        mime: "video/mp4"
      }])
  },
  {
    id: "vias-pureto-suarez",
    titulo: "Diagnóstico vial Suárez - Vías Pureto",
    categoria: "obra",
    anio: "2021",
    cliente: "Municipio de Suárez",
    rol: "Diagnóstico vial",
    resumen: "Inspección técnica de las vías del sector de Pureto, con análisis de afectaciones y necesidades de intervención.",
    descripcion: [
      "Se adelantó un diagnóstico técnico de los tramos viales del sector Pureto, revisando su condición física y operativa, así como las necesidades de mejora.",
      "El trabajo permitió identificar puntos críticos, requerimientos de rehabilitación y priorización de intervenciones para la ubicación de obras de arte.",
      "El equipo recorrió aproximadamente 31 kilómetros a pie."
    ],
    alcance: [
      "Diagnóstico técnico de los tramos viales",
      "Evaluación de las condiciones junto con la comunidad",
      "Base para intervención y mantenimiento"
    ],
    ubicacion: { nombre: "Suárez, Cauca, Colombia", lat: 2.9513, lng: -76.6945 },
    portada: "portfolio-site/Diagnostico vial Suarez - Cauca/Vias Pureto/Vehiculo de trabajo con perdida de traccion por mal estado de la via.jpg",
    galeria: fotosDeCarpeta("portfolio-site/Diagnostico vial Suarez - Cauca/Vias Pureto", [
      "Total de tramos recorridos para mejora en la vereda de Pureto - Google Earth.jpg",
      "Equipo de trabajo CELSIA Valle.jpg",
      "Equipo de trabajo realizando toma de puntos con GPS de alta precisión.jpg",
      "Puente artesanal donde se propone ponton en concreto.jpg",
      "Punto de ubicaciopn de alcantarilla en curva con pendiente alta.jpg",
      "Punto de ubicación de Box Culvert.jpg",
      "Punto de ubicación de obra de arte vias afectadas.jpg",
      "Punto de ubicación de obra de arte.jpg",
      "Punto para ubicacion de Box Culvert.jpg",
      "Puntos criticos en las vias de Pureto.jpg",
      "Vehiculo de trabajo con perdida de traccion por mal estado de la via.jpg",
      "Vias con mejoramiento de superficie.jpg",
      "Vias consideradas en buen estado y con banca amplia.jpg",
      "Vias Pureto.jpg",
      "Vista montañas Pureto.jpg"
      ]).concat([{
        type: "video",
        src: "portfolio-site/Diagnostico vial Suarez - Cauca/Vias Pureto/Vias de dificil acceso.mp4",
        mime: "video/mp4"
      }])
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
      "Registro fotográfico de las obras de remodelación y restauración realizadas en instalaciones de la Rama Judicial en el Cauca."
    ],
    alcance: [
      "Remodelación de instalaciones",
      "Palacio Nacional, Palacio de Justicia de Popayán, Juzgado Penal para Adolescentes de Popayán, Palacio de Justicia de Santander de Quilichao, Palacio de Justicia de Corinto, Palacio de Justicia de Puerto Tejada",
    ],
    ubicacion: { nombre: "Corinto, Santander de Quilichao y Popayán, Cauca", lat: 2.4448, lng: -76.6140 },
    portada: "portfolio-site/Remodelación Instalaciones Rama Judicial Corinto - Santander de Quilichao - Popayán/Restauración fachada plazoleta - Palacio Nacional.jpg",
    galeria: fotosDeCarpeta("portfolio-site/Remodelación Instalaciones Rama Judicial Corinto - Santander de Quilichao - Popayán", [
      "Restauración cielo raso artesona de composición ecléctica italiana - Palacio Nacional.jpg",
      "Obras en altura - Palacio Nacional.jpg",
      "Cielo raso terminado - Palacio Nacional.jpg",
      "Instalación cielo rasos - Palacio de Justicia, Popayán.jpg",
      "Montaje nuevas oficinas, segundo piso, estructura liviana - Palacio Nacional.jpg",
      "Montaje nuevas oficinas segundo piso, acabados - Palacio Nacional.jpg",
      "Montaje nuevas oficinas segundo piso, terminadas - Palacio Nacional.jpg",
      "Arquitectura clasica italiana combinada con estructura liviana - Palacio Nacional.jpg",
      "Obras - Palacio de Justicia.jpg",
      "Obras de remodelación en oficinas terminadas - Palacio de Justica, Popayán.jpg",
      "Obras electricas, instalción de luminarias - Palacio de Justicia, Popayán.jpg",
      "Obras oficinas - Palcio de Justica, Popayán.jpg",
      "Obras Termidas - Palacio de Justicia Santander de Quilichao.jpg",
      "Palacio de Justicia, Santander de Quilichao.jpg",
      "Remodelación oficinas - Palacio de Justicia.jpg",
      "Remodelación patios - Palacio de Justicia, Popayán.jpg",
      "Remodelación pisos, pintura, oficinas - Palacio de Justicia, Santander de Quilichao.jpg",
      "Remopdelación pisos, cielo raso - Palacio de Justicia, Popayán.jpg",
      "Restauracion canales, pintura, tuberias - Palacio de Justicia, Popayán.jpg",
      "Restauración canales - Palacio de Justicia, Popayán.jpg",
      "Restauración canales y fachada - Juzgados Penales para Adolecentes, Popayán.jpg",
      "Restauración canales y pintura - Palacio de Justicia, Popayán.jpg",
      "Restauración canales, pintura, pisos, barandas - Palacio de Justicia, Santander de Quilichao.jpg",
      "Restauración columnas estilos eclectica italiana - Palacio Nacional.jpg",
      "Restauración cubiertas y fachada - Palacio Nacional.jpg",
      "Restauración fachada plazoleta - Palacio Nacional.jpg",
      "Restauración fachada principal - Palacio de Justicia, Popayán.jpg",
      "Restauración pisos - Palacio de Justicia, Santander de Quilichao.jpg",
      "Techos teja de barro, centro historico - Popayán.jpg",
      "Construcción de caseta - Palacio de Justicia, Puerto Tejada, Cauca.jpg"
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
      "Remodelación de baños en conjunto residencial de la ciudad de Popayán con acabados modernos de alta calidad e iluminación adecuada a las normas y a la necesidad del cliente."
    ],
    alcance: [
      "Remodelación de baños",
      "Elaboración de presupuesto.",
    ],
    ubicacion: { nombre: "Popayán, Cauca, Colombia", lat: 2.4448, lng: -76.6140 },
    portada: "portfolio-site/Remodelación baños conjunto cerrado  Popayán/Baño 2 terminado.jpg",
    galeria: fotosDeCarpeta("portfolio-site/Remodelación baños conjunto cerrado  Popayán", [
      "Bateria sanitaria existente baño 1.jpg",
      "Bateria sanitaria existente baño 2.jpg",
      "Desmonte de aparatos sanitarios.jpg",
      "Demolición de enchape existente.jpg",
      "Preparación de muro para enchape.jpg",
      "Proceso de enchape baño 2.jpg",
      "Enchape baño 1.jpg",
      "Enchape baño 2.jpg",
      "Montaje baño 2.jpg",
      "Duchas.jpg",
      "Ducha baño 2.jpg",
      "Ducha  baño 1.jpg",
      "Instalación de aparatos sanitarios baño 1.jpg",
      "Baño 1 terminado.jpg",
      "Baño 2 terminado foto 2.jpg",
      "Baño 2 terminado.jpg",
      "Iluminación completa baño 2.jpg",
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
      "Remodelación residencial de una casa construida en adobe y afectada por el terremoto de 1983 y el paso del tiempo en la ciudad de Popayán.",
      "Se restauraron los muros, las vigas, los cielos rasos, los pisos y los acabados de la vivienda para combinar la arquitectura colonial con la moderna y mejorar la funcionalidad y la estética del espacio."
    ],
    alcance: [
      "Remodelación residencial",
      "Combinación de arquitectura colonial y moderna",
      "Unión de sistemas estructurales, adobe por gravedad y aporticado por distribución de fuerzas",
    ],
    ubicacion: { nombre: "Centro histórico de Popayán, Cauca", lat: 2.4448, lng: -76.6140 },
    portada: "portfolio-site/Remodelacion casa centro historico Popayán/Obra terminada 2.jpg",
    galeria: fotosDeCarpeta("portfolio-site/Remodelacion casa centro historico Popayán", [
      "Inicio de obra.JPG",
      "Inicio obras.JPG",
      "Escombros.jpg",
      "Muros en adobe en mal estado.jpg",
      "Zanjas para vigas de cimentación.jpg",
      "Castillos.jpg",
      "Columnetas para refuerzo.jpg",
      "Viga aerea de refuerzo.JPG",
      "Muro en mamposteria divisorio.jpg",
      "Regates e instalciones electricas.jpg",
      "Enmallado en muros de  adobe.jpg",
      "Repello.jpg",
      "Obra gris.jpg",
      "Retiro de ultimos escombros.jpg",
      "Cielo razo en super board.jpg",
      "Obra blanca.JPG",
      "Avanze de obra.jpg",
      "Puerta  de acceso.jpg",
      "Obra sala.jpg",
      "Carpinteria de puertas y ventanas.jpg",
      "Recuperacion de ventanas en Cedro.jpg",
      "Ultimos acabados.jpg",
      "Iluminación de dia.jpg",
      "Portada terminada.jpg",
      "Obra terminada.jpg",
      "Obra terminada 2.jpg",
      "Ventana colonial  restaurada.jpg",
      "Obra terminada, pisos.jpg",
      "Luz de cielo blanca, apliques luz calida.JPG",
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
    ])
  },
  {
    id: "casa-grande-resguardo-honduras",
    titulo: "Casa Grande del Resguardo Indígena de Honduras",
    categoria: "diseno",
    anio: "2024",
    cliente: "Cabildo Indígena de Honduras",
    rol: "Proyecto de infraestructura",
    resumen: "Proyecto de Casa Grande para el Cabildo Indígena de Honduras, en Morales, Cauca.",
    descripcion: [
      "Consultoría técnica para el proyecto de la Casa Grande del resguardo indígena de Honduras."
    ],
    alcance: [
      "Elaboración de diseño con propuesta vanguardista conservando la arquitectura tradicional de la región.",
      "Diseño y proyección de la construcción",
      "Render interactivo en 3D",
      "Presupuesto y cronograma de obra",
    ],
    ubicacion: { nombre: "Parque principal de Morales, Cauca", lat: 2.75750, lng: -76.63050 },
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
    categoria: "diseno",
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
    portada: "portfolio-site/Planta de tratamiento agua potable Silvia - Cauca/Georeferenciación PTAR - Planta.jpg",
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

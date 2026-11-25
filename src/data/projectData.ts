/**
 * Toda la información de la presentación vive acá, desacoplada y tipada.
 * Fuente única: propuesta_institucional_multilab_itec_3.md
 *
 * Regla de redacción: para la modernización administrativa usar siempre
 * "la inminente digitalización del sistema académico" (sin siglas ni nombres de sistemas).
 */

export type CareerId = 'prog' | 'pymes' | 'mkt' | 'dg' | 'rrpp'

export interface Career {
  id: CareerId
  name: string
  short: string
  /** Rótulo corto para la ilustración del Hero */
  node: string
  /** Color institucional (Manual de Normas) */
  color: string
  /** Variable CSS del color institucional */
  cssVar: string
  isNew2027?: boolean
  /** Micro-síntesis para la ilustración del Hero */
  micro: string
  aporte: string
  workshops: string
  rol: string
}

export const careers: Career[] = [
  {
    id: 'prog',
    name: 'Programación y Análisis de Sistemas',
    short: 'Programación',
    node: 'Programación',
    color: '#FE5000',
    cssVar: 'var(--itec-orange)',
    micro: 'Construye y mantiene el portal, las integraciones y el soporte técnico.',
    aporte:
      'Desarrollo y mantenimiento del portal multilab.itec3misiones.edu.ar, evolución continua de itec3misiones.edu.ar, creación de plataformas a medida, integraciones, automatizaciones y soporte técnico.',
    workshops:
      'Inteligencia Artificial aplicada, herramientas de software, introducción al desarrollo web y digitalización de procesos para PyMES.',
    rol: 'Desarrolladores web junior, administradores de entornos y plataformas institucionales, y soporte técnico de la infraestructura digital.',
  },
  {
    id: 'pymes',
    name: 'Administración de PyMES',
    short: 'Admin. de PyMES',
    node: 'PyMES',
    color: '#009A17',
    cssVar: 'var(--itec-green)',
    micro: 'Ordena proyectos, eventos e indicadores y diagnostica emprendimientos.',
    aporte:
      'Organización operativa de proyectos, planificación de eventos y talleres, seguimiento de indicadores y diagnóstico de los emprendimientos participantes.',
    workshops:
      'Asesoramiento comercial y de ventas a emprendedores, estructura de costos, planificación financiera básica y gestión de microempresas.',
    rol: 'Asistentes de gestión de proyectos, asesores comerciales junior y coordinadores operativos de las clínicas para emprendedores.',
  },
  {
    id: 'mkt',
    name: 'Comercialización y Marketing',
    short: 'Marketing',
    node: 'Marketing',
    color: '#1D4F91',
    cssVar: 'var(--itec-blue)',
    micro: 'Posiciona el sitio y el portal, y llega a futuros estudiantes y emprendedores.',
    aporte:
      'Estrategia de contenidos y posicionamiento SEO del sitio oficial y del portal, campañas de difusión de carreras y cursos, y análisis del tráfico de aspirantes.',
    workshops:
      'Marketing digital para emprendedores, estrategias de redes sociales, posicionamiento local y embudos de venta.',
    rol: 'Analistas de marketing digital, estrategas de difusión y consultores junior de marca y mercado.',
  },
  {
    id: 'dg',
    name: 'Diseño Gráfico Digital',
    short: 'Diseño Gráfico',
    node: 'Diseño',
    color: '#CE1482',
    cssVar: 'var(--itec-fucsia)',
    micro: 'Da forma visual al portal, a las publicaciones y a cada transmisión.',
    aporte:
      'Sistema visual e ilustrativo del portal y sus secciones, diseño editorial de publicaciones, piezas gráficas para cursos en línea y paquetes visuales para streaming.',
    workshops:
      'Diseño gráfico aplicado a proyectos emprendedores, identidad visual, comunicación visual digital y herramientas creativas contemporáneas.',
    rol: 'Diseñadores gráficos, ilustradores y maquetadores editoriales, realizadores de motion graphics y soporte visual audiovisual.',
  },
  {
    id: 'rrpp',
    name: 'Relaciones Públicas y Comunicación Institucional',
    short: 'RRPP y Comunicación',
    node: 'RRPP',
    color: '#0C2340',
    cssVar: 'var(--itec-dark-blue)',
    isNew2027: true,
    micro: 'Pone la voz institucional: redacta, conduce y archiva los 20 años.',
    aporte:
      'Redacción institucional y periodística, producción y conducción de ciclos de streaming, protocolo de eventos, vinculación con medios y archivo del 20° Aniversario.',
    workshops:
      'Comunicación efectiva, oratoria para emprendedores, prensa comunitaria y gestión de relaciones institucionales.',
    rol: 'Redactores de contenidos, productores periodísticos, conductores y productores de streaming, y gestores de prensa y vínculos.',
  },
]

export const careerById = (id: CareerId): Career => careers.find((c) => c.id === id) as Career

/* ------------------------------------------------------------------ */
/* Hero / Resumen ejecutivo                                           */
/* ------------------------------------------------------------------ */

export const brand = {
  name: 'MULTILAB ITEC 3',
  badge: 'PROPUESTA INSTITUCIONAL · 20° ANIVERSARIO (2007–2027)',
  anniversaryMilestone: 'Camino al 20° Aniversario · 7 de agosto de 2027',
  headline: 'Cinco tecnicaturas. Un laboratorio vivo.',
  subheadline:
    'Un centro que abraza a las cinco tecnicaturas, potencia a docentes y estudiantes con prácticas reales y culmina en la muestra pública EXPO ITEC 2027.',
  concept: 'Cinco tecnicaturas. Un laboratorio vivo. Un legado digital para los 20 años del ITEC 3.',
  subdomain: 'multilab.itec3misiones.edu.ar',
  officialSite: 'itec3misiones.edu.ar',
  officialUrl: 'https://itec3misiones.edu.ar',
}

export const fichaTecnica: { label: string; value: string }[] = [
  {
    label: 'Institución',
    value:
      'Instituto Tecnológico N° 3 (ITEC 3) — Barrio Fátima, Posadas / Garupá / Candelaria, Provincia de Misiones.',
  },
  { label: 'Proyecto', value: 'MULTILAB ITEC 3 (denominación de trabajo).' },
  { label: 'Destinatario', value: 'Rectorado del Instituto Tecnológico N° 3.' },
  { label: 'Elevación del borrador', value: 'Hasta el 10 de diciembre de 2026.' },
  {
    label: 'Implementación',
    value: 'Ciclo Lectivo 2027 · camino al 20° Aniversario (agosto 2007 – agosto 2027).',
  },
  {
    label: 'Entorno digital',
    value: 'itec3misiones.edu.ar y subdominio dedicado multilab.itec3misiones.edu.ar.',
  },
  {
    label: 'Unidades articuladoras',
    value:
      'Equipo de Comunicación Institucional, Coordinaciones de Carrera, Equipos Docentes de Prácticas Profesionalizantes y Centro de Desarrollo Web del ITEC 3.',
  },
]

export const conceptoRector =
  'MULTILAB ITEC 3 es un programa institucional de Prácticas Profesionalizantes guiadas y supervisadas que convierte la infraestructura del Multilab —conectividad dedicada, estaciones de edición, estudio de streaming y centro propio de desarrollo web— en un centro interdisciplinario de producción de contenidos, transferencia tecnológica y formación abierta.'

export const objetivoGeneral =
  'Consolidar en el ámbito del MULTILAB ITEC 3 un programa anual e interdisciplinario de producción de contenidos, desarrollo digital, extensión y Prácticas Profesionalizantes supervisadas que integre a las cinco tecnicaturas superiores en 2027, fortalezca la comunicación institucional y construya un legado digital por los 20 años del Instituto.'

export const objetivosEspecificos: string[] = [
  'Lanzar y consolidar el entorno multilab.itec3misiones.edu.ar: primero presentación interactiva y luego Portal de Contenidos oficial vinculado a itec3misiones.edu.ar.',
  'Operar el Centro de Desarrollo y Soporte Web institucional con desarrollo propio, articulando el sitio oficial, el Aula Virtual y nuevas plataformas a medida.',
  'Desarrollar una agenda anual de workshops, talleres y cursos en línea sobre tecnología, IA, software, diseño, marketing, ventas y comunicación.',
  'Institucionalizar un sistema de Prácticas Profesionalizantes certificadas, con reglamento, tutorías, entregables verificables y certificación oficial.',
  'Ordenar el uso del Multilab mediante una Agenda Común Anual que optimice streaming, edición y conectividad dedicada.',
]

/* ------------------------------------------------------------------ */
/* El momento ITEC 3                                                  */
/* ------------------------------------------------------------------ */

export interface MomentCard {
  figure: string
  label: string
  line: string
  accent: string
  kind: 'years' | 'careers' | 'digital'
}

export const momentCards: MomentCard[] = [
  {
    figure: '20',
    label: 'Años',
    line: 'De 2007 a 2027: dos décadas formando técnicos superiores en Posadas, Garupá y Candelaria.',
    accent: 'var(--itec-dark-blue)',
    kind: 'years',
  },
  {
    figure: '5',
    label: 'Tecnicaturas',
    line: 'Con Relaciones Públicas y Comunicación Institucional, el ecosistema formativo queda completo.',
    accent: 'var(--itec-orange)',
    kind: 'careers',
  },
  {
    figure: '1',
    label: 'Impulso Digital',
    line: 'Sitio oficial en crecimiento, Aula Virtual, Multilab equipado e inminente digitalización del sistema académico.',
    accent: 'var(--itec-blue)',
    kind: 'digital',
  },
]

export const factoresOportunidad: { title: string; text: string }[] = [
  {
    title: 'Ampliación académica a cinco tecnicaturas',
    text: 'La incorporación de Relaciones Públicas y Comunicación Institucional en 2027 completa un ecosistema donde tecnología, gestión, diseño, marketing y comunicación pueden trabajar como un verdadero estudio multidisciplinario.',
  },
  {
    title: 'Modernización del ecosistema digital',
    text: 'Aula Virtual activa, nuevo sitio web oficial en crecimiento sostenido de visitas —sobre todo en períodos de elección vocacional— y la inminente digitalización del sistema académico, que elevará la precisión de los procesos y la calidad de la información institucional.',
  },
  {
    title: 'Infraestructura técnica y capacidad digital propia',
    text: 'Internet dedicado, computadoras de edición y estudio de streaming, junto con capacidad propia de desarrollo y publicación digital bajo el dominio oficial itec3misiones.edu.ar.',
  },
  {
    title: 'Capital humano profesional',
    text: 'Un equipo de comunicación institucional con experiencia que, articulado con los docentes tutores de cada tecnicatura, garantiza rigor técnico y acompañamiento pedagógico.',
  },
  {
    title: 'Demanda de prácticas profesionalizantes significativas',
    text: 'El programa amplía y diversifica las oportunidades de práctica certificada en estándares reales de producción, complementando las pasantías en el sector socio-productivo externo.',
  },
]

export const marcoNormativo: { norma: string; text: string }[] = [
  {
    norma: 'Ley de Educación Técnico Profesional N° 26.058',
    text: 'Consagra a las Prácticas Profesionalizantes como instancia formativa esencial, orientada a integrar capacidades profesionales y a vincularse con el sector socio-productivo.',
  },
  {
    norma: 'Ley de Educación Nacional N° 26.206',
    text: 'Promueve una Educación Superior articulada con las necesidades de desarrollo local, la producción de conocimiento y la extensión a la comunidad.',
  },
  {
    norma: 'Resolución CFE N° 229/14',
    text: 'Reconoce formatos válidos de Prácticas Profesionalizantes —proyectos productivos institucionales, laboratorios tecnológicos, talleres de servicios y proyectos de extensión— con planificación pedagógica, supervisión docente y evaluación formal.',
  },
  {
    norma: 'Resolución CFE N° 295/16',
    text: 'Fortalece la organización institucional de los Institutos Superiores Técnicos en dispositivos de innovación, vinculación tecnológica y formación continua.',
  },
  {
    norma: 'Ley Provincial de Educación de Misiones (VI – N° 212)',
    text: 'Junto con los lineamientos de la Subsecretaría de Educación Técnico Profesional, impulsa la economía del conocimiento, la innovación digital y la articulación de los Institutos Tecnológicos con el ecosistema emprendedor misionero.',
  },
]

export const referenciasUniversitarias: { ref: string; text: string }[] = [
  {
    ref: 'UNaM — Transmedia UNaM y centros audiovisuales',
    text: 'Experiencia provincial consolidada que articula docencia, comunicación institucional y prácticas estudiantiles en contenidos periodísticos, streaming y divulgación territorial.',
  },
  {
    ref: 'UNR — Dirección de Comunicación Multimedial (DCM)',
    text: 'Referente nacional en plataformas de contenidos y narrativas transmedia coproducidas entre equipos técnicos estables y estudiantes avanzados.',
  },
  {
    ref: 'UNC — Centro de Producción e Innovación en Comunicación (CePIC)',
    text: 'Modelo de formación práctica supervisada en entornos reales de producción editorial, audiovisual y digital.',
  },
  {
    ref: 'UNLP — Centro de Producción Multimedial (CeProM)',
    text: 'Articulación sostenida entre carreras técnicas y creativas y medios institucionales para la divulgación y la memoria académica.',
  },
  {
    ref: 'Red Federal de Institutos Tecnológicos (INET)',
    text: 'Promoción de agencias-escuela y clínicas para emprendedores como dispositivos acreditables de Prácticas Profesionalizantes.',
  },
]

/* ------------------------------------------------------------------ */
/* Pilares                                                            */
/* ------------------------------------------------------------------ */

export interface Pillar {
  n: '01' | '02' | '03' | '04'
  id: 'portal' | 'web' | 'workshops' | 'agencia'
  title: string
  line: string
  purpose: string
  deliverables: string[]
  resources: string[]
  careers: CareerId[]
  accent: string
}

export const pillars: Pillar[] = [
  {
    n: '01',
    id: 'portal',
    title: 'Portal de Contenidos y Streaming',
    line: 'La voz institucional y el archivo digital de los 20 años.',
    purpose: 'Construir la voz institucional y el archivo digital de los 20 años del ITEC 3.',
    deliverables: [
      'Artículos de divulgación',
      'Entrevistas en streaming',
      'Cápsulas educativas',
      'Coberturas institucionales',
      'Memoria histórica audiovisual en multilab.itec3misiones.edu.ar',
    ],
    resources: ['Estudio de streaming', 'Estaciones de edición', 'Conectividad dedicada'],
    careers: ['rrpp', 'dg', 'mkt', 'prog'],
    accent: 'var(--itec-dark-blue)',
  },
  {
    n: '02',
    id: 'web',
    title: 'Centro de Desarrollo Web',
    line: 'Soporte web propio, sitio oficial, Aula Virtual y plataformas a medida.',
    purpose:
      'Potenciar la presencia digital del ITEC 3 mediante soporte web y desarrollo propio, integrando el sitio institucional, el Aula Virtual y nuevas plataformas a medida dentro de un mismo ecosistema de comunicación digital.',
    deliverables: [
      'Actualización permanente y evolución UX/UI de itec3misiones.edu.ar',
      'Creación y mantenimiento de sitios web y plataformas personalizadas a medida',
      'Vinculación fluida entre el sitio web oficial, el Aula Virtual y los canales digitales del Instituto',
      'Analítica de visitas y mejora continua de la experiencia de aspirantes y comunidad',
    ],
    resources: [
      'Equipo de soporte técnico y desarrollo web propio',
      'Infraestructura digital institucional con dominio oficial (itec3misiones.edu.ar)',
      'Capacidad de implementación de plataformas a medida vinculadas al ecosistema de comunicación',
      'Integración con Aula Virtual y entornos digitales del ITEC 3',
    ],
    careers: ['prog', 'dg', 'mkt'],
    accent: 'var(--itec-orange)',
  },
  {
    n: '03',
    id: 'workshops',
    title: 'Talleres, Workshops y Cursos en Línea',
    line: 'Conocimiento práctico compartido con la comunidad.',
    purpose: 'Compartir conocimiento práctico con la comunidad y con futuros estudiantes.',
    deliverables: [
      'Ciclos presenciales e híbridos',
      'Cursos asincrónicos en el Aula Virtual',
      'Temáticas: IA, software, diseño, marketing digital y gestión emprendedora',
      'Co-facilitación entre docentes y practicantes',
    ],
    resources: ['Aula Virtual', 'Estudio de streaming', 'Agenda Común del Multilab'],
    careers: ['prog', 'pymes', 'mkt', 'dg', 'rrpp'],
    accent: 'var(--itec-green)',
  },
  {
    n: '04',
    id: 'agencia',
    title: 'Agencia-Escuela para Emprendedores',
    line: 'El aula conectada con necesidades reales del entorno.',
    purpose: 'Vincular el aula con necesidades reales del entorno socio-productivo.',
    deliverables: [
      'Clínicas interdisciplinarias de asesoramiento comercial',
      'Identidad visual para emprendimientos',
      'Presencia digital y comunicación',
      'Informe de diagnóstico y acompañamiento por emprendimiento',
    ],
    resources: ['Células interdisciplinarias', 'Tutoría docente', 'Multilab equipado'],
    careers: ['pymes', 'mkt', 'dg', 'prog', 'rrpp'],
    accent: 'var(--itec-fucsia)',
  },
]

/* ------------------------------------------------------------------ */
/* EXPO ITEC 2027 · Edición 20° Aniversario                           */
/* ------------------------------------------------------------------ */

export type ExpoCardId = 'sede' | 'vinculacion' | 'aliados' | 'red'

export interface ExpoCard {
  n: '01' | '02' | '03' | '04'
  id: ExpoCardId
  title: string
  summary: string
  accent: string
  details: { heading?: string; text: string }[]
}

export const expo2027 = {
  badge: 'PROPUESTA DEL EQUIPO DE COMUNICACIÓN · SUJETA A APROBACIÓN DEL RECTORADO',
  milestone: '7 DE AGOSTO DE 2027 · 20 AÑOS DEL ITEC 3',
  title: 'EXPO ITEC 2027 — Edición Aniversario',
  lead: 'Dos días de muestras de proyectos, intervenciones creativas y clases abiertas en vivo para visibilizar el talento de las cinco tecnicaturas ante toda la comunidad.',
  governanceNote:
    'Esta iniciativa es elevada por el Equipo de Comunicación como propuesta complementaria del programa MULTILAB ITEC 3. Su puesta en marcha, la gestión de convenios con Estación Industrias Culturales / MIDI y el lanzamiento del programa de aliados estratégicos se activarán tras la aprobación formal del Rectorado.',
  cards: [
    {
      n: '01',
      id: 'sede',
      title: 'Sede y Convenio Estratégico',
      summary: 'Articulación propuesta con Estación Industrias Culturales y MIDI.',
      accent: 'var(--itec-orange)',
      details: [
        {
          heading: 'Sede y 2 jornadas abiertas',
          text: 'Propuesta de convenio especial con la Estación Industrias Culturales y el MIDI (Misiones Diseña) para desarrollar 2 jornadas abiertas en un espacio de referencia cultural y de diseño, accesible al público general.',
        },
        {
          heading: 'Tres formatos dinámicos',
          text: 'Muestra anual de proyectos de las cinco tecnicaturas, intervenciones en vivo (streaming, diseño, programación, marketing y comunicación) y clases abiertas para estudiantes secundarios, emprendedores y vecinos.',
        },
        {
          heading: 'Proyección territorial',
          text: 'Proyectar la identidad y calidad formativa del ITEC 3 fuera de sus aulas en la semana conmemorativa del 7 de agosto (20° aniversario institucional).',
        },
      ],
    },
    {
      n: '02',
      id: 'vinculacion',
      title: 'Vinculación Socio-Estratégica Regional',
      summary: 'Puentes de valor real con Garupá, Posadas y Misiones.',
      accent: 'var(--itec-green)',
      details: [
        {
          heading: 'Fundamentación',
          text: 'La EXPO ITEC 2027 se concibe como un dispositivo de vinculación socio-estratégica con el sector empresarial, comercial e institucional de Garupá, Posadas y la provincia de Misiones.',
        },
        {
          heading: 'Valor sostenido',
          text: 'Estas alianzas trascienden lo coyuntural: suman valor concreto al proyecto educativo, acercan demandas reales del sector productivo a las prácticas profesionalizantes y consolidan al ITEC 3 como actor clave en la formación técnica regional.',
        },
      ],
    },
    {
      n: '03',
      id: 'aliados',
      title: 'Dispositivo de Aliados Estratégicos y Sponsors',
      summary: 'Planificación anticipada para financiar logística y producción con visibilidad integral.',
      accent: 'var(--itec-fucsia)',
      details: [
        {
          heading: 'Planificación anticipada',
          text: 'Una vez aprobada la propuesta por el Rectorado, el Equipo de Comunicación iniciará con meses de antelación una campaña institucional de articulación y sponsoreo destinada a cubrir logística, montaje, equipamiento y materiales de la muestra sin sobrecargar el presupuesto ordinario.',
        },
        {
          heading: 'Actores convocados',
          text: 'Municipios, organismos estatales, empresas regionales y comercios locales que acompañen el desarrollo educativo y tecnológico.',
        },
        {
          heading: 'Contraprestación de visibilidad para aliados',
          text: 'Presencia institucional destacada de sus marcas y servicios en todos los canales digitales de comunicación del ITEC 3 (sitio web oficial, portal Multilab, transmisiones de streaming y redes sociales) y en la gráfica, señalética y piezas presenciales de las dos jornadas de la EXPO ITEC 2027.',
        },
      ],
    },
    {
      n: '04',
      id: 'red',
      title: 'Red Académica y Casas de Estudio Invitadas',
      summary: 'Encuentro abierto junto a instituciones educativas aliadas.',
      accent: 'var(--itec-blue)',
      details: [
        {
          heading: 'Red de educación superior',
          text: 'Invitación especial a otras casas de estudio e instituciones educativas con las que el ITEC 3 articula habitualmente para sumarse como invitadas, fortaleciendo la red de educación superior de la región.',
        },
        {
          heading: 'Orientación vocacional',
          text: 'Espacio ideal para acercar a jóvenes en etapa de elección vocacional a las producciones reales de las cinco tecnicaturas y a charlas abiertas de orientación e innovación.',
        },
      ],
    },
  ] satisfies ExpoCard[],
}

/* ------------------------------------------------------------------ */
/* Vista integrada 5 en 1                                             */
/* ------------------------------------------------------------------ */

export interface Production {
  id: 'streaming' | 'emprendedores'
  title: string
  summary: string
  roles: Record<CareerId, string>
}

export const productions: Production[] = [
  {
    id: 'streaming',
    title: 'Un ciclo de streaming',
    summary: 'Una misma producción, cinco miradas profesionales trabajando a la vez.',
    roles: {
      rrpp: 'Redacta, conduce y produce las entrevistas.',
      dg: 'Diseña el paquete visual y las piezas gráficas.',
      mkt: 'Difunde el ciclo y analiza a la audiencia.',
      prog: 'Publica y mantiene el portal donde vive el ciclo.',
      pymes: 'Organiza agenda, invitados e indicadores.',
    },
  },
  {
    id: 'emprendedores',
    title: 'Una campaña para emprendedores',
    summary: 'La clínica interdisciplinaria que lleva el aula al territorio.',
    roles: {
      pymes: 'Diagnostica el emprendimiento: costos y gestión.',
      mkt: 'Define estrategia, redes y posicionamiento.',
      dg: 'Crea la identidad visual.',
      prog: 'Arma la presencia web y digitaliza procesos.',
      rrpp: 'Trabaja la comunicación y los vínculos con medios y comunidad.',
    },
  },
]

/* ------------------------------------------------------------------ */
/* Ecosistema digital                                                 */
/* ------------------------------------------------------------------ */

export const ecosystemLayers: { name: string; tool: string; role: string }[] = [
  {
    name: 'Sitio Institucional oficial',
    tool: 'itec3misiones.edu.ar',
    role: 'Puerta de entrada principal para aspirantes, estudiantes y comunidad, con actualización permanente y mejora continua de experiencia de usuario.',
  },
  {
    name: 'Portal de Contenidos y Producción',
    tool: 'multilab.itec3misiones.edu.ar',
    role: 'Entorno propio del Multilab para difundir producciones audiovisuales, artículos, talleres y el archivo histórico del 20° Aniversario.',
  },
  {
    name: 'Formación y plataformas a medida',
    tool: 'Aula Virtual + sitios dedicados',
    role: 'Vinculación fluida con el Aula Virtual y capacidad de desarrollo propio para lanzar sitios web dedicados a eventos, muestras y proyectos.',
  },
  {
    name: 'Modernización administrativa',
    tool: 'Ecosistema preparado para crecer',
    role: 'Articulación concebida para acompañar la inminente digitalización del sistema académico, elevando la precisión y la calidad de la información institucional.',
  },
]

export const ecosystemStages: { stage: string; when: string; title: string; text: string; items: string[] }[] = [
  {
    stage: 'Etapa 1',
    when: 'Presentación 2026',
    title: 'Presentación ejecutiva y base autónoma',
    text: 'Presentación interactiva en multilab.itec3misiones.edu.ar para el Rectorado y la comunidad docente, sostenida sobre infraestructura y desarrollo propios.',
    items: [
      'Autonomía tecnológica del ITEC 3 para gestionar y actualizar sus plataformas',
      'Subdominio institucional propio bajo itec3misiones.edu.ar',
      'Arquitectura modular preparada para escalar sin rehacer el proyecto',
      'Sin inversión extraordinaria en licencias ni servidores adicionales',
    ],
  },
  {
    stage: 'Etapa 2',
    when: 'Portal real 2027',
    title: 'Ecosistema escalable sin rehacer infraestructura',
    text: 'La misma base evoluciona hacia el Portal de Contenidos oficial, articulando Sitio Institucional, Aula Virtual, Portal Multilab y sitios dedicados a eventos y proyectos.',
    items: [
      'Publicación continua de artículos, cursos, entrevistas y novedades del Multilab',
      'Sitios web a medida para eventos, muestras y proyectos especiales',
      'Integración fluida entre itec3misiones.edu.ar, el Aula Virtual y el Portal Multilab',
      'Acompañamiento a la inminente digitalización del sistema académico',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Beneficios, gobernanza, agenda                                     */
/* ------------------------------------------------------------------ */

export const beneficiosDocentes: { title: string; text: string }[] = [
  { title: 'Tutoría interdisciplinaria', text: 'Roles formales y certificables de acompañamiento entre carreras.' },
  { title: 'Dirección de proyectos aplicados', text: 'Liderazgo de proyectos e investigación situada.' },
  { title: 'Recursos educativos digitales', text: 'Producción de materiales para el Aula Virtual y el portal.' },
  { title: 'Talleres y cursos abiertos', text: 'Dictado de talleres para la comunidad, con certificación.' },
]

export const beneficiosEstudiantes: { title: string; text: string }[] = [
  { title: 'Prácticas supervisadas', text: 'Horas formales de Prácticas Profesionalizantes con tutoría docente.' },
  { title: 'Portafolio real', text: 'Entregables verificables dentro de flujos reales de desarrollo web propio, diseño, producción audiovisual y gestión editorial.' },
  { title: 'Trabajo interdisciplinario', text: 'Células mixtas con metas trimestrales concretas.' },
  { title: 'Certificación oficial', text: 'Constancia del Rectorado con rol, horas y competencias.' },
]

export interface AgendaBlock {
  n: number
  title: string
  text: string
  color: string
}

export const agendaBlocks: AgendaBlock[] = [
  {
    n: 1,
    title: 'Streaming y Audiovisual',
    text: 'Grabación de entrevistas, cápsulas y programas institucionales.',
    color: 'var(--itec-dark-blue)',
  },
  {
    n: 2,
    title: 'Laboratorio Digital y Web',
    text: 'Edición, diseño, redacción, soporte técnico y desarrollo de plataformas web propias.',
    color: 'var(--itec-orange)',
  },
  {
    n: 3,
    title: 'Extensión y Workshops',
    text: 'Talleres presenciales e híbridos y clínicas para emprendedores.',
    color: 'var(--itec-green)',
  },
  {
    n: 4,
    title: 'Mantenimiento y Mesa Editorial',
    text: 'Respaldo técnico, revisión de equipamiento y planificación semanal.',
    color: 'var(--itec-fucsia)',
  },
]

export const gobernanza: { title: string; text: string }[] = [
  {
    title: 'Dirección Ejecutiva y Editorial',
    text: 'Equipo de Comunicación Institucional: lineamientos de marca, estándares de publicación, administración del Multilab y reporte al Rectorado.',
  },
  {
    title: 'Mesa de Articulación Académica',
    text: 'Coordinaciones de las 5 tecnicaturas + Equipo de Comunicación: cupos, proyectos y calendario cuatrimestral.',
  },
  {
    title: 'Tutoría Docente',
    text: 'Docentes de Prácticas Profesionalizantes: acompañamiento pedagógico y validación académica de entregables.',
  },
  {
    title: 'Células Interdisciplinarias',
    text: 'Equipos mixtos de estudiantes con metas trimestrales concretas.',
  },
]

export const acreditacion: string[] = [
  'Las horas acreditan dentro de los espacios de Prácticas Profesionalizantes de los últimos años de cada carrera.',
  'Cada participante tiene un Plan Individual de Práctica, registro de asistencia, bitácora de entregables y evaluación compartida.',
  'El Rectorado emite certificación institucional oficial con rol, horas y competencias, para estudiantes, docentes tutores y disertantes.',
]

/* ------------------------------------------------------------------ */
/* Hoja de ruta e indicadores                                         */
/* ------------------------------------------------------------------ */

export interface Phase {
  n: number
  when: string
  short: string
  title: string
  summary: string
  deliverables: string[]
  owners: string[]
  accent: string
}

export const roadmap: Phase[] = [
  {
    n: 1,
    when: 'Diciembre 2026',
    short: 'Elevación al Rectorado',
    title: 'Programa y propuesta EXPO 2027',
    summary: 'Elevación al Rectorado del programa MULTILAB ITEC 3 y de la propuesta preliminar EXPO ITEC 2027.',
    deliverables: [
      'Presentación web interactiva en multilab.itec3misiones.edu.ar',
      'Borrador institucional del programa MULTILAB ITEC 3',
      'Propuesta preliminar EXPO ITEC 2027 · Edición Aniversario',
    ],
    owners: ['Equipo de Comunicación Institucional', 'Rectorado'],
    accent: 'var(--itec-dark-blue)',
  },
  {
    n: 2,
    when: 'Feb – Mar 2027',
    short: 'Convenios y aliados',
    title: 'Aprobación, convenios y sponsors',
    summary:
      'Aprobación, inicio de gestión de convenios (Estación Industrias Culturales / MIDI) y apertura de convocatoria a aliados estratégicos y sponsors.',
    deliverables: [
      'Aprobación institucional, Reglamento y Agenda Común del Multilab',
      'Inicio de gestión de convenios con Estación Industrias Culturales / MIDI',
      'Apertura de convocatoria a aliados estratégicos y sponsors',
      'Arquitectura editorial definitiva del ecosistema digital propio',
    ],
    owners: ['Rectorado', 'Equipo de Comunicación Institucional', 'Mesa de Articulación Académica'],
    accent: 'var(--itec-orange)',
  },
  {
    n: 3,
    when: 'Abr – Jul 2027',
    short: 'Producción y difusión',
    title: 'Producción Multilab y previa Expo',
    summary:
      'Producción de proyectos interdisciplinarios en el Multilab, difusión anticipada con marcas aliadas e invitaciones a casas de estudio.',
    deliverables: [
      'Convocatoria a practicantes, células interdisciplinarias y lanzamiento del Portal de Contenidos',
      'Producción de proyectos de las 5 tecnicaturas y primeros ciclos de streaming y workshops',
      'Difusión anticipada con marcas aliadas e invitaciones a casas de estudio',
    ],
    owners: ['Células interdisciplinarias', 'Coordinaciones de Carrera', 'Equipo de Comunicación Institucional'],
    accent: 'var(--itec-green)',
  },
  {
    n: 4,
    when: 'Agosto 2027',
    short: '7 ago · 20° Aniversario',
    title: 'EXPO ITEC 2027 · Edición Aniversario',
    summary:
      'Hito 7 de agosto — 20° Aniversario: realización de EXPO ITEC 2027 (2 días de muestra, intervenciones y clases abiertas en vivo).',
    deliverables: [
      '2 jornadas abiertas de muestra anual de proyectos de las cinco tecnicaturas',
      'Intervenciones creativas y transmisiones en vivo desde la sede',
      'Clases abiertas para estudiantes secundarios, emprendedores y comunidad',
      'Visibilidad integral de aliados estratégicos y encuentro con casas de estudio invitadas',
    ],
    owners: ['Equipo de Comunicación Institucional', 'Las 5 Tecnicaturas', 'Rectorado'],
    accent: 'var(--itec-fucsia)',
  },
  {
    n: 5,
    when: 'Sep – Dic 2027',
    short: 'Archivo y balance',
    title: 'Archivo 20 años y cierre anual',
    summary:
      'Archivo digital del 20° aniversario, cierre de clínicas emprendedoras, certificación de prácticas profesionalizantes y balance anual.',
    deliverables: [
      'Archivo digital del 20° aniversario publicado en el portal Multilab',
      'Cierre de clínicas emprendedoras y campaña de carreras 2028',
      'Certificación de prácticas profesionalizantes para estudiantes y docentes',
      'Informe de balance anual para proyectar 2028',
    ],
    owners: ['Rectorado', 'Mesa de Articulación Académica', 'Equipo de Comunicación Institucional'],
    accent: 'var(--itec-blue)',
  },
]

export const indicadores: { title: string; kind: 'academicos' | 'digitales' | 'territoriales'; items: string[]; accent: string }[] = [
  {
    title: 'Académicos',
    kind: 'academicos',
    items: ['Estudiantes certificados por tecnicatura', 'Docentes participantes en tutorías y extensión'],
    accent: 'var(--itec-dark-blue)',
  },
  {
    title: 'Digitales y editoriales',
    kind: 'digitales',
    items: [
      'Contenidos publicados en el Portal',
      'Episodios de streaming y cursos lanzados',
      'Crecimiento de visitas en itec3misiones.edu.ar y multilab.itec3misiones.edu.ar',
    ],
    accent: 'var(--itec-orange)',
  },
  {
    title: 'Territoriales',
    kind: 'territoriales',
    items: ['Workshops dictados', 'Asistentes capacitados', 'Emprendedores locales asesorados'],
    accent: 'var(--itec-green)',
  },
]

/* Navegación de secciones */
export const sections: { id: string; label: string }[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'momento', label: 'El momento' },
  { id: 'pilares', label: 'Pilares' },
  { id: 'tecnicaturas', label: 'Tecnicaturas' },
  { id: 'expo-2027', label: 'EXPO 2027' },
  { id: 'ecosistema', label: 'Ecosistema' },
  { id: 'beneficios', label: 'Beneficios' },
  { id: 'hoja-de-ruta', label: 'Hoja de ruta' },
]


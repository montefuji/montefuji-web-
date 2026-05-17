export type SeoLandingPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  vehicle: string;
  symptoms: string[];
  checks: string[];
  quoteData: string[];
  related: string[];
  keywords: string[];
  whatsappText: string;
  heroImage: string;
  heroImageAlt: string;
  heroImageWidth: number;
  heroImageHeight: number;
  heroImageStyle?: "default" | "plain";
  technicalTitle?: string;
  technicalParagraphs?: string[];
};

export const SEO_LANDING_PAGES: SeoLandingPage[] = [
  {
    slug: "homocineticas-concepcion",
    title: "Homocinéticas en Concepción",
    metaTitle: "Homocinéticas en Concepción",
    metaDescription:
      "Venta y orientacion tecnica en homocineticas en Concepcion. Revision de ruido al doblar, vibracion al acelerar, fuelles y semiejes para pick-ups y SUVs.",
    eyebrow: "HOMOCINÉTICAS",
    intro:
      "Nos especializamos en homocineticas en Concepcion: validamos aplicacion real antes de recomendar repuesto o servicio.",
    vehicle: "Concepcion y Gran Concepcion: atencion para particulares, talleres y flotas.",
    symptoms: [
      "Ruido al doblar o maniobrar",
      "Vibracion al acelerar",
      "Golpe al cambiar de carga",
      "Grasa en rueda por fuelle roto",
      "Juego en semieje o junta",
    ],
    checks: [
      "Cruce por ano, motor, traccion y posicion",
      "Validacion de estrias, ABS y largo",
      "Revision de fuelle, grasa y seguros",
    ],
    quoteData: [
      "Marca, modelo, ano y motor",
      "Lado y posicion (LH/RH - interior/exterior)",
      "Sintoma principal",
      "OEM, codigo o foto de referencia",
    ],
    related: ["direccion-hidraulica-concepcion", "fuelle-homocinetica-concepcion"],
    keywords: [
      "homocineticas Concepcion",
      "homocinetica Concepcion",
      "junta homocinetica Concepcion",
      "semieje Concepcion",
    ],
    whatsappText:
      "Hola Montefuji, necesito cotizar homocinetica en Concepcion.%0A%0AVehiculo:%0AAno:%0AMotor:%0ALado/posicion:%0ASintoma:%0AOEM o foto:",
    heroImage: "/montefuji-product-cv-kit.webp",
    heroImageAlt: "Kit de junta homocinetica Montefuji",
    heroImageWidth: 1086,
    heroImageHeight: 1448,
    technicalTitle: "Homocineticas",
    technicalParagraphs: [
      "Las homocineticas permiten transmitir la fuerza del motor hacia las ruedas manteniendo un giro constante, incluso durante el movimiento de la suspension y la direccion. Son componentes esenciales para una conduccion suave, segura y sin vibraciones.",
      "En Montefuji trabajamos juntas homocineticas, puntas de eje, semiejes tripodes y componentes asociados para distintas aplicaciones. Confirmamos compatibilidad antes de la compra para evitar errores de aplicacion y asegurar una instalacion correcta.",
      "Recomendamos revisar el estado general del tren delantero, soportes de motor, transmision y fuelles antes de instalar una homocinetica nueva, ya que el mal estado de componentes asociados puede generar ruidos, vibraciones o fallas prematuras.",
    ],
  },
  {
    slug: "homocineticas-hilux-concepcion",
    title: "Homocinéticas para Toyota Hilux en Concepción",
    metaTitle: "Homocinéticas Hilux en Concepción",
    metaDescription:
      "Venta, diagnóstico y orientación técnica para homocinéticas Toyota Hilux en Concepción. Cotiza por WhatsApp con modelo, año, motor, lado y referencia.",
    eyebrow: "TOYOTA HILUX",
    intro:
      "Revisamos aplicación, lado, estrías, medidas y referencia antes de recomendar una junta homocinética para Hilux.",
    vehicle: "Hilux 4x2 y 4x4, uso particular, faena, taller y flota.",
    symptoms: [
      "Ruido al doblar o al estacionar",
      "Golpe en aceleración o cambio de carga",
      "Vibración al acelerar",
      "Fuelle roto con grasa en la rueda",
      "Juego en semieje o junta exterior",
    ],
    checks: [
      "Cruce por año, motor, tracción y posición",
      "Validación de estrías, ABS y largo efectivo",
      "Revisión de fuelle, grasa, tuerca y seguros",
    ],
    quoteData: [
      "Modelo, año y motor",
      "4x2 o 4x4",
      "Lado LH/RH e interior/exterior",
      "OEM, código o foto de la pieza",
    ],
    related: ["fuelle-homocinetica-concepcion", "semiejes-subaru"],
    keywords: [
      "homocineticas Hilux Concepcion",
      "junta homocinetica Toyota Hilux",
      "homocinética Hilux 4x4",
      "semieje Hilux Concepción",
    ],
    whatsappText:
      "Hola Montefuji, necesito cotizar homocinética para Toyota Hilux.%0A%0AAño:%0AMotor:%0A4x2 o 4x4:%0ALado/posición:%0AOEM o foto:%0ASíntoma:",
    heroImage: "/montefuji-product-cv-kit.webp",
    heroImageAlt: "Kit de junta homocinetica para Toyota Hilux",
    heroImageWidth: 1086,
    heroImageHeight: 1448,
    technicalTitle: "Homocineticas",
    technicalParagraphs: [
      "Las homocineticas permiten transmitir la fuerza del motor hacia las ruedas manteniendo un giro constante, incluso durante el movimiento de la suspension y la direccion. Son componentes esenciales para una conduccion suave, segura y sin vibraciones.",
      "En Montefuji trabajamos juntas homocineticas, puntas de eje, semiejes tripodes y componentes asociados para distintas aplicaciones. Confirmamos compatibilidad antes de la compra para evitar errores de aplicacion y asegurar una instalacion correcta.",
      "Recomendamos revisar el estado general del tren delantero, soportes de motor, transmision y fuelles antes de instalar una homocinetica nueva, ya que el mal estado de componentes asociados puede generar ruidos, vibraciones o fallas prematuras.",
    ],
  },
  {
    slug: "direccion-hidraulica-concepcion",
    title: "Dirección hidráulica en Concepción",
    metaTitle: "Dirección hidráulica en Concepción",
    metaDescription:
      "Servicio tecnico de direccion hidraulica en Concepcion: diagnostico, fugas, cremallera, bomba, sellos y componentes asociados para pick-ups y SUVs.",
    eyebrow: "DIRECCIÓN HIDRÁULICA",
    intro:
      "Revisamos el sistema de direccion hidraulica completo antes de recomendar reparacion o recambio.",
    vehicle: "Pick-ups, SUVs y autos con direccion hidraulica en Concepcion y Gran Concepcion.",
    symptoms: [
      "Volante duro en frio o caliente",
      "Fuga de liquido de direccion",
      "Zumbido o ruido al girar",
      "Retorno irregular del volante",
      "Juego en direccion o golpe frontal",
    ],
    checks: [
      "Revision de cremallera, bomba y sellos",
      "Control de juego en terminales, rotulas y bieletas",
      "Prueba hidraulica y validacion del sistema asociado",
    ],
    quoteData: [
      "Marca, modelo, ano y motor",
      "Sintoma principal y cuando aparece",
      "Foto de fuga, cremallera o bomba",
      "Uso del vehiculo y urgencia",
    ],
    related: ["direccion-hidraulica-ranger", "homocineticas-hilux-concepcion"],
    keywords: [
      "direccion hidraulica Concepcion",
      "reparacion direccion hidraulica Concepcion",
      "cremallera hidraulica Concepcion",
      "bomba direccion hidraulica Concepcion",
    ],
    whatsappText:
      "Hola Montefuji, necesito revisar direccion hidraulica en Concepcion.%0A%0AVehiculo:%0AAno:%0AMotor:%0ASintoma:%0AHay fuga:%0AFotos:%0ACiudad:",
    heroImage: "/montefuji-steering-rack.webp",
    heroImageAlt: "Cremallera de direccion hidraulica Montefuji",
    heroImageWidth: 1600,
    heroImageHeight: 792,
    technicalTitle: "Direccion hidraulica",
    technicalParagraphs: [
      "El sistema de direccion hidraulica permite una conduccion mas suave y precisa, reduciendo el esfuerzo al girar el volante. Su correcto funcionamiento depende del estado de la bomba hidraulica, cremallera, mangueras, terminales, fluido y componentes asociados.",
      "En Montefuji contamos con componentes para sistemas de direccion hidraulica y apoyo tecnico para confirmar compatibilidad segun modelo, aplicacion y tipo de sistema.",
      "Antes de reemplazar una pieza, recomendamos revisar fugas, ruidos, dureza en el volante, contaminacion del fluido y estado general del tren delantero, ya que una falla en el sistema asociado puede afectar el rendimiento de la direccion.",
    ],
  },
  {
    slug: "direccion-hidraulica-ranger",
    title: "Dirección hidráulica para Ford Ranger",
    metaTitle: "Dirección hidráulica Ford Ranger",
    metaDescription:
      "Diagnóstico y reparación de dirección hidráulica para Ford Ranger. Revisión de fuga, volante duro, zumbido de bomba, juego y retorno irregular.",
    eyebrow: "FORD RANGER",
    intro:
      "Evaluamos el síntoma antes de decidir si corresponde revisar cremallera, bomba, terminales, sellos o conjunto asociado.",
    vehicle: "Ford Ranger de uso particular, faena, taller y flota.",
    symptoms: [
      "Volante duro en frío o caliente",
      "Fuga de fluido hidráulico",
      "Zumbido de bomba al girar",
      "Juego o golpe en dirección",
      "Retorno irregular del volante",
    ],
    checks: [
      "Revisión de fuga y estado de sellos",
      "Control de juego, vástago y terminales",
      "Prueba hidráulica bajo carga cuando corresponde",
    ],
    quoteData: [
      "Año y motor",
      "Síntoma principal",
      "Fotos de fuga o cremallera",
      "Uso del vehículo y urgencia",
    ],
    related: ["homocineticas-hilux-concepcion", "fuelle-homocinetica-concepcion"],
    keywords: [
      "direccion hidraulica Ranger",
      "cremallera Ford Ranger",
      "reparacion direccion hidraulica Concepcion",
      "volante duro Ranger",
    ],
    whatsappText:
      "Hola Montefuji, necesito revisar dirección hidráulica de Ford Ranger.%0A%0AAño:%0AMotor:%0ASíntoma:%0AHay fuga:%0AFotos:%0ACiudad:",
    heroImage: "/montefuji-steering-rack.webp",
    heroImageAlt: "Sistema de direccion hidraulica para Ford Ranger",
    heroImageWidth: 1600,
    heroImageHeight: 792,
    technicalTitle: "Direccion hidraulica",
    technicalParagraphs: [
      "El sistema de direccion hidraulica permite una conduccion mas suave y precisa, reduciendo el esfuerzo al girar el volante. Su correcto funcionamiento depende del estado de la bomba hidraulica, cremallera, mangueras, terminales, fluido y componentes asociados.",
      "En Montefuji contamos con componentes para sistemas de direccion hidraulica y apoyo tecnico para confirmar compatibilidad segun modelo, aplicacion y tipo de sistema.",
      "Antes de reemplazar una pieza, recomendamos revisar fugas, ruidos, dureza en el volante, contaminacion del fluido y estado general del tren delantero, ya que una falla en el sistema asociado puede afectar el rendimiento de la direccion.",
    ],
  },
  {
    slug: "sistemas-de-direccion-concepcion",
    title: "Sistemas de dirección en Concepción",
    metaTitle: "Sistemas de dirección en Concepción",
    metaDescription:
      "Revision y soporte tecnico para sistemas de direccion en Concepcion: direccion hidraulica, terminales, rotulas, cremallera y tren delantero.",
    eyebrow: "SISTEMAS DE DIRECCIÓN",
    intro:
      "Nos enfocamos en direccion hidraulica y componentes del sistema de direccion para diagnostico real y reparacion precisa.",
    vehicle: "Concepcion: atencion para particulares, talleres y flotas.",
    symptoms: [
      "Desgaste irregular de neumaticos",
      "Volante con juego o vibracion",
      "Tironeo al frenar o al pasar baches",
      "Crujidos en maniobras cerradas",
      "Desviacion de trayectoria",
    ],
    checks: [
      "Revision de terminales, rotulas y bujes",
      "Control de cremallera, sellos y fugas",
      "Evaluacion de tren delantero en contexto",
    ],
    quoteData: [
      "Marca, modelo y ano",
      "Sintoma y en que condiciones aparece",
      "Cambios o reparaciones recientes",
      "Fotos o video del comportamiento",
    ],
    related: ["direccion-hidraulica-concepcion", "direccion-hidraulica-ranger"],
    keywords: [
      "sistemas de direccion Concepcion",
      "sistema de direccion hidraulica",
      "diagnostico direccion automotriz",
      "tren delantero direccion Concepcion",
    ],
    whatsappText:
      "Hola Montefuji, necesito revisar sistema de direccion.%0A%0AVehiculo:%0AAno:%0ASintoma:%0AFotos o video:%0ACiudad:",
    heroImage: "/montefuji-carousel-09.jpg",
    heroImageAlt: "Reparacion de direccion hidraulica con prueba de sellado",
    heroImageWidth: 2048,
    heroImageHeight: 1366,
    heroImageStyle: "plain",
    technicalTitle: "Direccion hidraulica",
    technicalParagraphs: [
      "El sistema de direccion hidraulica permite una conduccion mas suave y precisa, reduciendo el esfuerzo al girar el volante. Su correcto funcionamiento depende del estado de la bomba hidraulica, cremallera, mangueras, terminales, fluido y componentes asociados.",
      "En Montefuji contamos con componentes para sistemas de direccion hidraulica y apoyo tecnico para confirmar compatibilidad segun modelo, aplicacion y tipo de sistema.",
      "Antes de reemplazar una pieza, recomendamos revisar fugas, ruidos, dureza en el volante, contaminacion del fluido y estado general del tren delantero, ya que una falla en el sistema asociado puede afectar el rendimiento de la direccion.",
    ],
  },
  {
    slug: "fuelle-homocinetica-concepcion",
    title: "Fuelle de homocinética en Concepción",
    metaTitle: "Fuelle de homocinética en Concepción",
    metaDescription:
      "Cambio y selección de fuelles homocinéticos en Concepción. Evita que la pérdida de grasa dañe la junta completa.",
    eyebrow: "FUELLES HOMOCINÉTICOS",
    intro:
      "Un fuelle roto puede convertir una reparación simple en una junta dañada. Revisamos medida, material y ajuste antes de instalar.",
    vehicle: "Pick-ups, SUVs y autos de uso diario con fuelle exterior o interior.",
    symptoms: [
      "Grasa salpicada en rueda o chasis",
      "Fuelle cortado o reseco",
      "Ruido al doblar después de circular sin grasa",
      "Abrazadera suelta",
      "Pérdida visible de lubricación",
    ],
    checks: [
      "Medida de boca chica, boca grande y largo",
      "Material NBR, TPE o TPU según aplicación",
      "Estado real de la junta antes de cerrar",
    ],
    quoteData: [
      "Modelo, año y motor",
      "Interior o exterior",
      "Medidas o foto del fuelle",
      "Si ya tiene ruido o solo perdió grasa",
    ],
    related: ["homocineticas-hilux-concepcion", "semiejes-subaru"],
    keywords: [
      "fuelle homocinetica Concepcion",
      "cambio fuelle homocinetica",
      "fuelle junta homocinetica",
      "grasa rueda homocinetica",
    ],
    whatsappText:
      "Hola Montefuji, necesito cotizar o cambiar fuelle de homocinética.%0A%0AVehículo:%0AAño:%0AInterior/exterior:%0ALado:%0ATiene ruido:%0AFoto:",
    heroImage: "/montefuji-product-boots.webp",
    heroImageAlt: "Fuelles homocineticos Montefuji",
    heroImageWidth: 1672,
    heroImageHeight: 941,
  },
  {
    slug: "semiejes-subaru",
    title: "Semiejes Subaru",
    metaTitle: "Semiejes Subaru",
    metaDescription:
      "Semiejes Subaru AWD con validacion de largo efectivo, estrias, balance dinamico, NVH y compatibilidad precisa para evitar vibraciones.",
    eyebrow: "SEMIEJES SUBARU",
    intro:
      "En plataformas Subaru AWD es fundamental validar largo efectivo, estrias, balance dinamico y comportamiento bajo carga para evitar vibraciones, tensiones en transmision y montajes forzados.",
    vehicle: "Compatibilidad precisa para sistemas AWD sensibles a NVH.",
    symptoms: [
      "Vibración al acelerar",
      "Golpe al pasar de carga a retención",
      "Ruido en giro cerrado",
      "Fuelle roto o reseco",
      "Juego axial o radial en semieje",
    ],
    checks: [
      "Confirmacion de largo efectivo, lado y posicion",
      "Revision de estrias, retencion y geometria del conjunto",
      "Evaluacion de vibracion, NVH y comportamiento bajo carga",
    ],
    quoteData: [
      "Año, motor y transmisión",
      "Lado del vehículo",
      "Síntoma y velocidad donde aparece",
      "Foto del semieje o referencia",
    ],
    related: ["fuelle-homocinetica-concepcion", "homocineticas-hilux-concepcion"],
    keywords: [
      "semieje Subaru",
      "homocinetica Subaru",
      "vibracion Subaru semieje",
      "repuesto Subaru Concepcion",
    ],
    whatsappText:
      "Hola Montefuji, necesito cotizar semieje para Subaru.%0A%0AAño:%0AMotor/transmisión:%0ALado:%0ASíntoma:%0AReferencia o foto:",
    heroImage: "/semieje-subaru.png",
    heroImageAlt: "Semieje Subaru",
    heroImageWidth: 2176,
    heroImageHeight: 2176,
    technicalTitle: "Aplicaciones Subaru AWD",
    technicalParagraphs: [
      "Trabajamos aplicaciones compatibles con distintos modelos Subaru, priorizando funcionamiento suave, geometria correcta y comportamiento estable en condiciones reales de uso.",
      "Diferencias minimas de geometria pueden generar vibraciones perceptibles en plataformas Subaru AWD.",
    ],
  },
];

export function getSeoLandingPage(slug: string) {
  return SEO_LANDING_PAGES.find((page) => page.slug === slug);
}

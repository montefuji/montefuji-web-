"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import {
  Boxes,
  ChevronLeft,
  ChevronRight,
  Clock,
  ClipboardCheck,
  FileText,
  Gauge,
  Mail,
  MessageCircle,
  MapPin,
  Pause,
  Phone,
  Play,
  Ruler,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { SEO_LANDING_PAGES } from "./seo-pages";

const WHATSAPP_MESSAGE =
  "Hola Montefuji, necesito cotizar.%0A%0AVehiculo:%0AAno:%0AMotor:%0APosicion (LH/RH - interior/exterior):%0ASintoma:%0AOEM o referencia:%0ACiudad:";
const WHATSAPP_URL = `https://wa.me/56950995385?text=${WHATSAPP_MESSAGE}`;
const SALES_ADDRESS = "Salas 566";
const WORKSHOP_ADDRESS = "Colo Colo 922";
const BUSINESS_HOURS = "Lunes a viernes: 9:30 a 18:30 · Sábado: coordinar por WhatsApp";
const SALES_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Salas%20566%2C%20Concepcion%2C%20Chile";
const WORKSHOP_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Colo%20Colo%20922%2C%20Concepcion%2C%20Chile";
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Salas%20566%2C%20Concepcion%2C%20Chile&output=embed";

function Logo() {
  return (
    <Image
      src="/montefuji-logo.png"
      alt="Montefuji"
      width={302}
      height={151}
      priority
      style={{ height: 76, width: "auto", display: "block" }}
    />
  );
}




const PRODUCTOS = [
  {
    categoria: "Homocinéticas / CV Joints",
    items: [
      {
        nombre: "Kit junta homocinética exterior",
        desc: "Kit completo (fuelle, grasa, abrazaderas, tuerca). Referencias núcleo para pick-ups y SUVs.",
      },
      {
        nombre: "Kit junta homocinética interior",
        desc: "Enfoque en NVH, ajuste y consistencia lote a lote.",
      },
      {
        nombre: "Semiejes / drive shafts",
        desc: "Referencias núcleo con control de ajuste, retención y comportamiento en carga. Solo lo que se repite sin sorpresas.",
      },
    ],
  },
  {
    categoria: "Fuelles y Abrazaderas",
    items: [
      {
        nombre: "Fuelles homocinéticos",
        desc: "NBR / TPE / TPU con validación térmica y consistencia de compuesto.",
      },
      {
        nombre: "Abrazaderas",
        desc: "Cierre firme, retención estable y sin deformación.",
      },
      {
  nombre: "Grasa técnica para cambio de fuelle",
  desc: "Formulación compatible con aplicaciones CV. Estabilidad térmica y adherencia adecuadas para trabajos de reemplazo de fuelle.",
},
    ],
  },
  {
  categoria: "Dirección hidráulica",
  items: [
    {
      nombre: "Servicio de cremalleras hidráulicas",
      desc: "Reacondicionamiento con control de estanqueidad, juego y comportamiento dinámico.",
    },
    {
      nombre: "Bombas de dirección hidráulica",
      desc: "Referencias seleccionadas bajo criterio de presión, caudal y confiabilidad en operación.",
    },
    {
      nombre: "Terminales, rótulas y sellos",
      desc: "Componentes de dirección con control de ajuste, retención y durabilidad en montaje real.",
    },
  ],
},
];

const FAQ = [
  {
    q: "¿Puedo cotizar solo con una foto?",
    paragraphs: [
      "La foto ayuda mucho como referencia visual, especialmente si se ve la pieza completa, el lado y el estado del fuelle o la junta.",
      "Sin embargo, una foto por sí sola no basta para confirmar compatibilidad ni realizar un diagnóstico definitivo. En transmisión, dirección y homocinéticas, pequeños cambios de versión, medidas o estriado pueden cambiar completamente la pieza requerida.",
    ],
  },
  {
    q: "¿Qué datos debo enviar por WhatsApp?",
    paragraphs: ["Idealmente:"],
    list: [
      "VIN (número de chasis)",
      "Marca, modelo y año",
      "Motorización",
      "Lado (piloto/copiloto)",
      "Síntoma o falla",
      "Fotos de la pieza o del vehículo",
      "Código OEM si lo tienes",
    ],
    afterList: "Mientras más información recibimos, más precisa y rápida puede ser la revisión.",
  },
  {
    q: "¿Por qué el VIN es importante?",
    paragraphs: [
      "El VIN permite identificar la configuración exacta del vehículo según catálogo original.",
      "En transmisión, dirección y homocinéticas pueden existir diferencias de estriado, medidas, conexiones o versiones incluso dentro del mismo modelo y año. Revisar con VIN ayuda a reducir errores y mejorar la compatibilidad de la pieza correcta.",
    ],
  },
  {
    q: "¿Necesitan código OEM?",
    paragraphs: [
      "No siempre.",
      "Si lo tienes, ayuda bastante porque reduce tiempos y evita errores. Si no, podemos revisar con VIN, datos técnicos y referencias reales de taller para buscar la pieza correcta.",
    ],
  },
  {
    q: "¿Qué es el estriado y por qué importa?",
    paragraphs: [
      "El estriado corresponde a la cantidad y tipo de dientes que conectan la homocinética, semieje o eje con el vehículo.",
      "En muchos modelos existen variaciones de estriado según versión, transmisión o motorización. Esa diferencia no siempre es visible externamente y puede cambiar completamente la compatibilidad de la pieza.",
    ],
  },
  {
    q: "¿Atienden particulares y talleres?",
    paragraphs: [
      "Sí. Atendemos usuarios finales, talleres y distribuidores.",
      "A particulares los orientamos para evitar compras incorrectas o cambios innecesarios. Con talleres y distribución trabajamos atención técnica según volumen o necesidad.",
    ],
  },
  {
    q: "¿Cuándo conviene cambiar solo el fuelle?",
    paragraphs: [
      "Lo ideal es cambiar el fuelle apenas presente grietas, pérdida de grasa o envejecimiento.",
      "Un fuelle roto permite la entrada de tierra y humedad, lo que termina dañando la junta homocinética internamente. Si la pieza ya presenta ruido, juego o vibración, normalmente conviene revisar o reemplazar la homocinética completa.",
    ],
  },
  {
    q: "¿Trabajan dirección hidráulica?",
    paragraphs: ["Sí.", "Trabajamos especialmente con:"],
    list: [
      "cajas de dirección",
      "cremalleras",
      "bombas",
      "terminales y componentes asociados",
    ],
    afterList: "Según el caso, realizamos diagnóstico, reparación o revisión de compatibilidad.",
  },
  {
    q: "¿Hacen diagnóstico en taller?",
    paragraphs: ["Sí.", "Revisamos especialmente:"],
    list: [
      "transmisión",
      "homocinéticas",
      "dirección hidráulica",
      "cajas de dirección",
      "tren delantero",
    ],
    afterList: "La inspección presencial sigue siendo la forma más confiable de confirmar una falla antes de reemplazar piezas.",
  },
];

const SYMPTOMS = [
  {
    title: "Ruido al doblar",
    desc: "Chasquido o tac-tac al girar, típico de junta exterior con desgaste.",
  },
  {
    title: "Vibración al acelerar",
    desc: "Temblor bajo carga que puede venir de semieje, junta interior o montaje.",
  },
  {
    title: "Golpe en cambios de carga",
    desc: "Golpe al pasar de acelerar a retener, especialmente en pick-ups y SUVs.",
  },
  {
    title: "Grasa en la rueda",
    desc: "Fuelle roto o abrazadera suelta: conviene actuar antes de dañar la junta.",
  },
  {
    title: "Volante duro o fuga",
    desc: "Señal frecuente en dirección hidráulica, bomba, cremallera o sellos.",
  },
];

const PRODUCT_VISUALS = [
  {
    src: "/montefuji-cv-joint-schema.webp",
    alt: "Plano técnico de junta homocinética",
    width: 1000,
    height: 1444,
  },
  {
    src: "/montefuji-cv-boot-tech.webp",
    alt: "Plano técnico de fuelle homocinético",
    width: 1000,
    height: 1444,
  },
  {
    src: "/montefuji-steering-rack.webp",
    alt: "Plano técnico de cremallera de dirección hidráulica",
    width: 1600,
    height: 792,
  },
];

const GALLERY_SLIDES = [
  {
    src: "/montefuji-carousel-01-1.jpg",
    alt: "Junta homocinética GCK con certificación ISO/TS 16949 y componentes",
    label: "Calidad certificada ISO/TS",
    width: 1536,
    height: 1024,
  },
  {
    src: "/montefuji-product-boots.webp",
    alt: "Fuelles homocinéticos de distintas medidas sobre mesón",
    label: "Fuelles homocinéticos",
    width: 1672,
    height: 941,
  },
  {
    src: "/montefuji-carousel-01-2.jpg",
    alt: "Funcionamiento de homocinética lado rueda y lado caja",
    label: "Funcionamiento homocinética",
    width: 1536,
    height: 1024,
  },
  {
    src: "/montefuji-carousel-02.jpg",
    alt: "Falla por desgaste interno en junta homocinética",
    label: "Desgaste interno CV",
    width: 1536,
    height: 1024,
  },
  {
    src: "/montefuji-carousel-03.jpg",
    alt: "Soluciones de semieje y homocinética en taller",
    label: "Soluciones CV",
    width: 1536,
    height: 1024,
  },
  {
    src: "/montefuji-gallery-semiejes-antes-despues.jpg",
    alt: "Comparación antes y después de semiejes reparados",
    label: "Semiejes antes y después",
    width: 1536,
    height: 1024,
  },
  {
    src: "/montefuji-carousel-04.jpg",
    alt: "Fabricación de eje de transmisión con estriado",
    label: "Fabricación de eje",
    width: 1536,
    height: 1024,
  },
  {
    src: "/montefuji-carousel-05.jpg",
    alt: "Fuelle roto con pérdida de grasa en homocinética",
    label: "Fuelle roto",
    width: 1086,
    height: 1448,
  },
  {
    src: "/montefuji-carousel-06.jpg",
    alt: "Variedad de fuelles homocinéticos de distintas medidas",
    label: "Variedad de fuelles",
    width: 1536,
    height: 1024,
  },
  {
    src: "/montefuji-gallery-abrazaderas-acero.jpg",
    alt: "Abrazaderas de acero para fuelles homocinéticos sobre superficie de taller",
    label: "Abrazaderas de acero",
    width: 1536,
    height: 1024,
  },
  {
    src: "/montefuji-carousel-07.jpg",
    alt: "Reparación de cremallera de dirección con sellos y fuelles",
    label: "Reparación de cremallera",
    width: 1694,
    height: 929,
  },
  {
    src: "/montefuji-carousel-08.jpg",
    alt: "Recuperación de vástago de dirección hidráulica",
    label: "Recuperación de vástago",
    width: 1536,
    height: 1024,
  },
  {
    src: "/montefuji-carousel-09.jpg",
    alt: "Prueba de sellado de dirección hidráulica a 120 bares",
    label: "Prueba 120 bares",
    width: 1536,
    height: 1024,
  },
  {
    src: "/montefuji-gallery-direccion-problema-solucion.jpg",
    alt: "Comparación de problema y solución en dirección hidráulica",
    label: "Dirección problema y solución",
    width: 1536,
    height: 1024,
  },
  {
    src: "/montefuji-carousel-10.jpg",
    alt: "Collage de máquinas y trabajo de taller Montefuji",
    label: "Taller Montefuji",
    width: 1536,
    height: 1024,
  },
  {
    src: "/montefuji-carousel-11.jpg",
    alt: "Tornos y maquinaria del taller Montefuji",
    label: "Taller y torno",
    width: 1774,
    height: 887,
  },
];

const QUOTE_FIELDS = [
  ["Vehiculo", "Marca, modelo, año y motor"],
  ["Posicion", "LH/RH e interior/exterior"],
  ["Referencia", "OEM, codigo alternativo o foto de la pieza"],
  ["Sintoma", "Ruido, vibracion, fuelle roto, fuga o juego"],
  ["Uso", "Taller, distribuidor o vehiculo particular"],
  ["Zona", "Ciudad o comuna para coordinar entrega/servicio"],
];

const APPLICATIONS = [
  "Toyota Hilux",
  "Mitsubishi L200",
  "Ford Ranger",
  "Nissan X-Trail",
  "Hyundai Tucson",
  "Hyundai Santa Fe",
  "Subaru Forester",
  "Honda CR-V",
];

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}

function SectionTitle({ kicker, title, desc }: { kicker?: string; title: string; desc?: string }) {
  return (
    <div>
      {kicker ? <div className="kicker">{kicker}</div> : null}
      <h2 className="h2">{title}</h2>
      {desc ? <p className="p" style={{ marginTop: 10 }}>{desc}</p> : null}
    </div>
  );
}

function TechBlock({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="box">
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <div
          style={{
            border: "1px solid var(--line)",
            borderRadius: 12,
            padding: 8,
            marginTop: 2,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>{title}</div>
          <div style={{ fontSize: 14, color: "#4b5563", marginTop: 4, lineHeight: 1.5 }}>{desc}</div>
        </div>
      </div>
    </div>
  );
}

function DataRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="row">
      <div className="row-k">{k}</div>
      <div className={"row-v font-mono"}>{v}</div>
    </div>
  );
}

export default function Page() {
  const [query, setQuery] = useState("");
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryHoverPaused, setGalleryHoverPaused] = useState(false);
  const [galleryManualPaused, setGalleryManualPaused] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filtrado = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTOS;
    return PRODUCTOS.map((cat) => ({
      ...cat,
      items: cat.items.filter((i) => (i.nombre + " " + i.desc).toLowerCase().includes(q)),
    })).filter((cat) => cat.items.length > 0);
  }, [query]);

  const activeSlide = GALLERY_SLIDES[galleryIndex];

  useEffect(() => {
    if (galleryHoverPaused || galleryManualPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setGalleryIndex((current) => (current + 1) % GALLERY_SLIDES.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [galleryHoverPaused, galleryManualPaused]);

  const showPreviousSlide = () => {
    setGalleryManualPaused(true);
    setGalleryIndex((current) => (current - 1 + GALLERY_SLIDES.length) % GALLERY_SLIDES.length);
  };
  const showNextSlide = () => {
    setGalleryManualPaused(true);
    setGalleryIndex((current) => (current + 1) % GALLERY_SLIDES.length);
  };

  return (
    <>
      <header className="header">
  <div
    className="header-row"
    style={{
      minHeight: 96,
      alignItems: "center",
    }}
  >
    <Logo />

    <nav className="nav">
  <a href="#sintomas">Síntomas</a>
  <a href="#productos">Productos</a>
  <a href="#estandar">Estándar</a>
  <a href="#galeria">Galería</a>
  <a href="#servicios">Servicios</a>          
  <a href="#origen">Origen</a>
  <a href="#cotizar">Cotizar</a>
  <a href="#faq">FAQ</a>
  <a href="#contacto">Contacto</a>
</nav>


    <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noreferrer">
      WhatsApp <MessageCircle size={16} />
    </a>
  </div>
</header>

      <a href={WHATSAPP_URL} className="whatsapp-float" target="_blank" rel="noreferrer">
        <MessageCircle size={18} />
        <span>WhatsApp: cotizar ahora</span>
      </a>


     {/* Intro */}
<section className="container" style={{ paddingTop: 72, paddingBottom: 56 }}>
    <div className="grid-12" style={{ alignItems: "start", rowGap: 24 }}>
    <div className="col-7">
      <div className="tags" style={{ marginBottom: 18 }}>
        <Tag>Pick-ups & SUVs</Tag>
        <Tag>NVH · Ajuste · Consistencia</Tag>
        <Tag>Concepción · Chile</Tag>
      </div>

<h1 className="h1" style={{ maxWidth: 760, lineHeight: 1.12 }}>
          Homocinéticas, semiejes y dirección hidráulica
        <br />
        en Concepción
      </h1>

      <div style={{ marginTop: 16, maxWidth: 720 }}>
        <p className="p" style={{ margin: 0 }}>
          Venta, diagnóstico y servicio técnico para pick-ups, SUVs, talleres y particulares.
        </p>

        <p className="p" style={{ marginTop: 10 }}>
          Cuando importamos, seleccionamos y validamos referencias núcleo bajo el estándar Montefuji:{" "}
          <span style={{ fontWeight: 600 }}>
  NVH · Ajuste · Consistencia lote a lote
</span>
        </p>
      </div>

      <div className="spec-list" aria-label="Puntos fuertes Montefuji">
        <div>
          <Gauge size={18} />
          <span>Diagnóstico NVH y comportamiento real</span>
        </div>
        <div>
          <Ruler size={18} />
          <span>Control de medidas, ajuste y tolerancias</span>
        </div>
        <div>
          <ClipboardCheck size={18} />
          <span>Referencias seleccionadas antes de ofrecer</span>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 22 }}>
        <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noreferrer">
          Cotizar por WhatsApp <MessageCircle size={16} />
        </a>
        <a href="#productos" className="btn">
          Ver portafolio <ChevronRight size={16} />
        </a>
        <a href="#estandar" className="btn">
          Estándar <ShieldCheck size={16} />
        </a>
      </div>
    </div>

    <div className="col-5">
      <div className="card hero-card">
        <figure className="hero-technical">
          <Image
            src="/montefuji-cv-axle.webp"
            alt="Semieje completo con juntas homocinéticas"
            width={1800}
            height={554}
            sizes="(min-width: 900px) 420px, 100vw"
          />
        </figure>

        <div className="kicker">ENFOQUE</div>

        <div className="stack" style={{ marginTop: 14 }}>
          <TechBlock
  icon={<Wrench size={18} />}
  title="Validación práctica y NVH"
  desc="Evaluamos ruido, vibración y aspereza (NVH), ajuste y comportamiento real en vehículo antes de aprobar una referencia."
/>
          <TechBlock
            icon={<Boxes size={18} />}
            title="Referencias núcleo"
            desc="Forester, Hilux, L200, Ranger, X-Trail, Tucson, Santa Fe, CR-V y otros núcleos."
          />
          <TechBlock
  icon={<ShieldCheck size={18} />}
  title="Consistencia lote a lote"
  desc="La referencia que validamos debe repetirse en cada lote: mismo ajuste, mismo comportamiento y mismo desempeño NVH."
/>
        </div>

        <div className="panel-soft" style={{ marginTop: 16 }}>
          <DataRow k="CONTACTO" v="info@montefuji.org" />
          <DataRow k="TEL" v="+56 9 5099 5385" />
          <DataRow k="VENTAS" v={SALES_ADDRESS} />
          <DataRow k="TALLER" v={WORKSHOP_ADDRESS} />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Síntomas */}
<section id="sintomas" className="section symptom-section">
  <div className="container">
    <div className="grid-12" style={{ alignItems: "start" }}>
      <div className="col-5">
        <SectionTitle
          kicker="DIAGNÓSTICO RÁPIDO"
          title="¿Tu vehículo presenta?"
          desc="Estos síntomas suelen anticipar fallas de homocinética, semieje, fuelle o dirección hidráulica. Mientras antes se revise, menor es el riesgo de dañar el conjunto."
        />
        <a href={WHATSAPP_URL} className="btn btn-primary symptom-main-cta" target="_blank" rel="noreferrer">
          Consultar síntoma por WhatsApp <MessageCircle size={16} />
        </a>
      </div>

      <div className="col-7">
        <div className="symptom-grid">
          {SYMPTOMS.map((symptom) => (
            <div className="symptom-item" key={symptom.title}>
              <Wrench size={17} />
              <div>
                <strong>{symptom.title}</strong>
                <span>{symptom.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="symptom-cta">
          <div>
            <strong>Envía modelo, año, lado y una foto si la tienes.</strong>
            <span>Con eso podemos orientar si corresponde fuelle, junta, semieje o revisión de dirección.</span>
          </div>
          <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noreferrer">
            Cotizar ahora <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Lámina técnica */}
<section className="section technical-band">
  <div className="container">
    <div className="technical-layout">
      <div>
        <SectionTitle
          kicker="LECTURA TÉCNICA"
          title="Medidas, aplicación y criterio antes de vender"
          desc="La selección correcta no parte por precio: parte por medidas, posición, estrías, fuelles, retenes y comportamiento en montaje real."
        />

        <div className="technical-points">
          <TechBlock
            icon={<Ruler size={18} />}
            title="Dimensiones y geometría"
            desc="Revisamos diámetros, largo efectivo, estrías y puntos de fijación para evitar montajes forzados."
          />
          <TechBlock
            icon={<ClipboardCheck size={18} />}
            title="Aplicación verificada"
            desc="Cruce por OEM, modelo, año, motor y posición antes de recomendar una referencia."
          />
        </div>
      </div>

      <figure className="technical-plate">
        <Image
          src="/montefuji-cv-joint-tech.webp"
          alt="Plano técnico de junta homocinética Montefuji"
          width={837}
          height={279}
          sizes="(min-width: 900px) 620px, 100vw"
        />
      </figure>
    </div>
  </div>
</section>

      {/* Productos / Portafolio */}
<section id="productos" className="section white">
  <div className="container">
    <div className="grid-12" style={{ alignItems: "end" }}>
      <div className="col-7">
        <SectionTitle
  kicker="PORTAFOLIO"
  title="Catálogo seleccionado"
  desc="Experiencia de taller aplicada al portafolio. Referencias núcleo: lo que funciona y se repite."
/>
      </div>

      <div className="col-5">
        <div className="search-wrap">
          <Search size={16} className="search-ico" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar (OEM / modelo / fuelle / semieje)"
            className="search font-mono"
          />
        </div>
        <div style={{ marginTop: 8, fontSize: 12, color: "var(--muted)" }}>
          Tip: usa códigos OEM. Ej.: <span className="font-mono">43405</span>,{" "}
          <span className="font-mono">Hilux</span>.
        </div>
      </div>
    </div>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 16,
    marginTop: 18,
  }}
>
  {filtrado.map((cat, index) => (
    <div key={cat.categoria} className="panel-soft">
      <figure className="product-visual">
        <Image
          src={PRODUCT_VISUALS[index % PRODUCT_VISUALS.length].src}
          alt={PRODUCT_VISUALS[index % PRODUCT_VISUALS.length].alt}
          width={PRODUCT_VISUALS[index % PRODUCT_VISUALS.length].width}
          height={PRODUCT_VISUALS[index % PRODUCT_VISUALS.length].height}
          sizes="(min-width: 900px) 320px, 100vw"
        />
      </figure>

      <div style={{ fontSize: 14, fontWeight: 600 }}>
        {cat.categoria}
      </div>

      <div className="stack" style={{ marginTop: 12 }}>
        {cat.items.map((i) => (
          <div key={i.nombre} className="item">
            <p className="item-title">{i.nombre}</p>
            <p className="item-desc">{i.desc}</p>
            <div className="item-data font-mono">
              OEM/REF · aplicación verificada
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

    <div className="applications-block">
      <div className="kicker">APLICACIONES FRECUENTES</div>
      <div className="application-tags" aria-label="Modelos frecuentes">
        {APPLICATIONS.map((application) => (
          <Tag key={application}>{application}</Tag>
        ))}
      </div>
    </div>

    <div className="local-seo-block">
      <div>
        <div className="kicker">BÚSQUEDAS FRECUENTES</div>
        <h3>Soluciones específicas</h3>
        <p className="p">
          Páginas rápidas para quienes llegan buscando una aplicación o síntoma concreto en Concepción.
        </p>
      </div>

      <div className="local-seo-links">
        {SEO_LANDING_PAGES.map((page) => (
          <Link key={page.slug} href={`/${page.slug}`}>
            {page.metaTitle} <ChevronRight size={14} />
          </Link>
        ))}
      </div>
    </div>

    <div id="cotizar" className="catalog-support">
      <div className="panel-soft quote-panel">
        <div className="quote-head">
          <FileText size={18} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>Datos para cotizar</div>
            <p className="p" style={{ marginTop: 4 }}>
              Mientras más completa llega la información, más precisa es la respuesta.
            </p>
          </div>
        </div>

        <div className="quote-grid">
          {QUOTE_FIELDS.map(([label, value]) => (
            <div key={label} className="quote-row">
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="panel-soft warranty-panel technical-copy">
        <div className="quote-head">
          <ShieldCheck size={18} />
          <div>
            <div className="warranty-title">Garantía legal y respaldo técnico</div>
            <p className="p warranty-text" style={{ marginTop: 4 }}>
              Todos nuestros productos cuentan con garantía legal conforme a la Ley N.º 19.496 de Protección de los Derechos del Consumidor, aplicable a fallas atribuibles a defectos de fabricación.
            </p>
            <p className="p warranty-text" style={{ marginTop: 8 }}>
              La garantía no cubre daños derivados de instalación incorrecta, adaptación o modificación de componentes, contaminación, lubricación inadecuada, impactos, ni fallas originadas por desgaste o mal estado del sistema asociado, incluyendo componentes del tren delantero, transmisión y soportes de motor.
            </p>
            <p className="p warranty-text" style={{ marginTop: 8 }}>
              Seleccionamos proveedores con procesos de fabricación orientados a estándares de calidad de la industria automotriz.
            </p>
            <p className="p warranty-text" style={{ marginTop: 8 }}>
              Adicionalmente, ofrecemos acompañamiento y respaldo técnico de hasta 12 meses o 15.000 km, lo que ocurra primero, para homocinéticas instaladas en nuestro taller autorizado, previa comprobación gratuita del estado general del sistema asociado.
            </p>
          </div>
        </div>

        <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noreferrer">
          Enviar datos por WhatsApp <MessageCircle size={16} />
        </a>
      </div>
    </div>

  </div>
</section>

      {/* Estándar */}
      <section id="estandar" className="section soft">
        <div className="container">
          <SectionTitle
            kicker="CRITERIO"
            title="Estándar Montefuji"
            desc="Reglas internas para proteger la marca y al taller. El estándar se endurece con el tiempo; nunca se relaja."
          />

          <div className="grid-2" style={{ marginTop: 18 }}>
            <TechBlock icon={<ShieldCheck size={18} />} title="NVH" desc="Sin ruidos anómalos, sin vibración indebida, sensación uniforme." />
            <TechBlock icon={<Wrench size={18} />} title="Ajuste y tolerancias" desc="Juego y montaje dentro de rango. Movimiento fluido, sin forzar." />
            <TechBlock icon={<Boxes size={18} />} title="Consistencia" desc="Muestra = repuesto. Cero cambios sin aviso y trazabilidad mínima." />
          </div>

          <div className="card" style={{ marginTop: 18 }}>
            <div className="kicker">REGLA FUNDACIONAL</div>
            <p className="p" style={{ marginTop: 10, color: "#111" }}>
              El criterio Montefuji nace en el banco desarmando una homocinética y en el torno produciendo o ajustando una.
            </p>
          </div>
        </div>
      </section>

      {/* Galería */}
<section id="galeria" className="section white">
  <div className="container">
    <h2 className="h2">Galería</h2>

      <div
        className="gallery-stage"
        onMouseEnter={() => setGalleryHoverPaused(true)}
        onMouseLeave={() => setGalleryHoverPaused(false)}
        onFocusCapture={() => setGalleryHoverPaused(true)}
        onBlurCapture={() => setGalleryHoverPaused(false)}
      >
        <button
          type="button"
          className="gallery-arrow gallery-arrow-left"
          onClick={showPreviousSlide}
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={20} />
        </button>

        <figure className="gallery-figure">
          <Image
            key={activeSlide.src}
            src={activeSlide.src}
            alt={activeSlide.alt}
            width={activeSlide.width}
            height={activeSlide.height}
            sizes="(min-width: 900px) 680px, 100vw"
            priority={galleryIndex === 0}
          />
        </figure>

        <button
          type="button"
          className="gallery-arrow gallery-arrow-right"
          onClick={showNextSlide}
          aria-label="Imagen siguiente"
        >
          <ChevronRight size={20} />
        </button>

        <div className="gallery-controls">
          <button
            type="button"
            className="gallery-toggle"
            onClick={() => setGalleryManualPaused((paused) => !paused)}
            aria-label={galleryManualPaused ? "Reproducir galería" : "Pausar galería"}
            title={galleryManualPaused ? "Reproducir galería" : "Pausar galería"}
          >
            {galleryManualPaused ? <Play size={14} /> : <Pause size={14} />}
          </button>
          <div className="gallery-count font-mono">
            {galleryIndex + 1}/{GALLERY_SLIDES.length}
          </div>
        </div>
      </div>

      <div className="gallery-thumbs" aria-label="Seleccionar imagen">
        {GALLERY_SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={`gallery-thumb ${index === galleryIndex ? "is-active" : ""}`}
            onClick={() => {
              setGalleryManualPaused(true);
              setGalleryIndex(index);
            }}
            aria-label={slide.label}
            aria-pressed={index === galleryIndex}
          >
            <Image
              src={slide.src}
              alt=""
              width={120}
              height={90}
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
</section>

            {/* Servicios */}
      <section id="servicios" className="section white">
        <div className="container">
        <SectionTitle
          kicker="SERVICIOS"
          title="Servicios técnicos y taller"
          desc="Soporte práctico para talleres y distribuidores: validación, benchmarking y montaje enfocado en transmisión, dirección y tren delantero."
        />

            <div className="grid-12" style={{ marginTop: 18 }}>
            {/* Servicios técnicos */}
            <div className="col-6">
            <div className="panel-soft">
          <div style={{ fontSize: 14, fontWeight: 600 }}>Servicios técnicos</div>

            <div className="stack" style={{ marginTop: 12 }}>
             <TechBlock
              icon={<Search size={18} />}
              title="Validación de referencias"
              desc="Verificación por aplicación (OEM / modelo / año / posición). Confirmamos compatibilidad real antes del montaje."
            />
            <TechBlock
              icon={<Boxes size={18} />}
              title="Comparación y benchmarking"
              desc="Comparación contra original u otra referencia: ajuste, construcción y comportamiento NVH."
            />
            <TechBlock
              icon={<Wrench size={18} />}
              title="Desarrollo bajo estándar"
              desc="Referencias nuevas solo si cumplen el estándar Montefuji. Si no cumple, no se ofrece."
            />
            <TechBlock
              icon={<ShieldCheck size={18} />}
              title="Referencias seleccionadas"
              desc="Trabajadas con el mismo criterio que usamos en el taller: ajuste correcto, funcionamiento real y consistencia en el tiempo."
            />
          </div>
        </div>
      </div>

      {/* Taller */}
      <div className="col-6">
        <div className="card">
          <div style={{ fontSize: 14, fontWeight: 600 }}>Taller Montefuji</div>
          <p className="p" style={{ marginTop: 8 }}>
            Instalación y diagnóstico enfocados en transmisión, dirección y tren delantero. Trabajo limpio, sin improvisación.
          </p>

          <div className="stack" style={{ marginTop: 12 }}>
            <TechBlock
              icon={<Wrench size={18} />}
              title="Instalación de juntas (inner/outer)"
              desc="Montaje con torque, fijación, verificación de juego y prueba final."
            />
            <TechBlock
              icon={<Boxes size={18} />}
              title="Servicio de semieje / eje completo"
              desc="Revisión de estrías, retención, vibración y montaje correcto por lado/posición."
            />
           <TechBlock
  icon={<ShieldCheck size={18} />}
  title="Reparación de cremalleras de dirección hidráulica"
  desc="Recuperación de vástago, reemplazo de sellos y prueba hidráulica bajo carga (+100 bar)."
/>
            <TechBlock
              icon={<MapPin size={18} />}
              title="Revisión tren delantero y dirección (en contexto)"
              desc="Rótulas, terminales, bujes y rodamientos: solo lo que afecta el síntoma y la seguridad."
            />
          </div>

          <div className="panel-soft" style={{ marginTop: 14 }}>
            <div style={{ fontSize: 12, color: "#374151", lineHeight: 1.5 }}>
              <span style={{ fontWeight: 600 }}>Regla Montefuji:</span> No hacemos “mecánica general”. Nos enfocamos en transmisión,
              dirección y tren delantero porque ahí se juega el NVH, el ajuste y la seguridad.
            </div>
          </div>

          <a href="#contacto" className="btn btn-primary" style={{ marginTop: 14 }}>
            Agendar diagnóstico <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Origen */}
      <section id="origen" className="section white">
        <div className="container">
          <SectionTitle
            kicker="ORIGEN"
            title="Nacido del taller"
            desc="Montefuji no nace en un catálogo. Nace con torno, grasa y oficio. Importar vino después: el criterio estaba antes."
          />

          <div className="grid-2" style={{ marginTop: 18 }}>
            <div className="panel-soft">
              <div style={{ fontSize: 14, fontWeight: 600 }}>Cómo trabajamos</div>
              <ul style={{ marginTop: 10, marginBottom: 0, paddingLeft: 18, color: "#374151", lineHeight: 1.6 }}>
                <li>Selección de referencias núcleo (pick-ups y SUVs).</li>
<li>Validación práctica y comparación con benchmark.</li>
<li>Primero revisamos, luego decidimos y lo comunicamos con claridad.</li>
<li>Relación de largo plazo con proveedores y clientes.</li>
              </ul>
            </div>

            <div className="card">
              <figure className="real-photo">
                <Image
                  src="/montefuji-real-cv-joints.webp"
                  alt="Juntas homocinéticas en taller Montefuji"
                  width={425}
                  height={283}
                  sizes="(min-width: 900px) 520px, 100vw"
                />
              </figure>

              <div style={{ fontSize: 14, fontWeight: 600 }}>Para quienes estamos</div>

<p className="p" style={{ marginTop: 8 }}>
  Para talleres y distribuidores que cuidan su clientela y priorizan funcionamiento real.
</p>

<p className="p" style={{ marginTop: 8 }}>
  Para dueñ@s de vehículos que buscan diagnóstico preciso y soluciones duraderas.
</p>

              <div className="client-types">
                <div>
                  <strong>Talleres multimarca</strong>
                  <span>Soluciones en sistemas de tracción, dirección y tren delantero.</span>
                </div>
                <div>
                  <strong>Público general</strong>
                  <span>Reparar y aprender a mantener el tren delantero sin fallas.</span>
                </div>
              </div>
              
              <div className="tags" style={{ marginTop: 12 }}>
                <Tag>Transparencia</Tag>
                <Tag>Disciplina</Tag>
                <Tag>Servicio</Tag>
                <Tag>Calma</Tag>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section soft">
        <div className="container">
          <div className="faq-layout">
            <div className="faq-aside">
              <SectionTitle
                kicker="PREGUNTAS"
                title="Compatibilidad y diagnóstico"
                desc="Compatibilidad, transmisión y diagnóstico real de taller."
              />

              <figure className="faq-photo">
                <Image
                  src="/montefuji-faq-compatibilidad.jpg"
                  alt="Conjunto de homocinéticas, fuelles, sellos y componentes de dirección"
                  width={1672}
                  height={941}
                  sizes="(min-width: 900px) 360px, 100vw"
                />
              </figure>

              <div className="faq-statement">
                <div className="kicker">CRITERIO DE TALLER</div>
                <p>Transmisión, dirección y compatibilidad real de taller.</p>
              </div>
            </div>

            <div className="faq-content">
              <div className="faq-list">
                {FAQ.map((item) => (
                  <div key={item.q} className="faq-item">
                    <h3>{item.q}</h3>
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {"list" in item && item.list ? (
                      <ul>
                        {item.list.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : null}
                    {"afterList" in item && item.afterList ? <p>{item.afterList}</p> : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Contacto */}
<section id="contacto" className="section white">
  <div className="container">
    <div className="grid-12">
      {/* Columna izquierda: info */}
      <div className="col-6">
        <SectionTitle
          kicker="CONTACTO"
          title="Contacto"
          desc="Cuéntanos tu necesidad. Te orientamos con criterio técnico."
        />

        <div className="stack" style={{ marginTop: 16 }}>
          <div className="iconline">
            <Mail size={16} style={{ color: "#6b7280" }} /> info@montefuji.org
          </div>
          <div className="iconline">
            <Phone size={16} style={{ color: "#6b7280" }} /> +56 9 5099 5385
          </div>
          <a className="iconline" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle size={16} style={{ color: "#6b7280" }} /> Cotizar por WhatsApp
          </a>
          <div className="iconline">
            <MapPin size={16} style={{ color: "#6b7280" }} /> Concepción · Chile
          </div>
          <div className="iconline">
            <Clock size={16} style={{ color: "#6b7280" }} /> {BUSINESS_HOURS}
          </div>
          <div className="iconline">
            <MapPin size={16} style={{ color: "#6b7280" }} /> Ventas: {SALES_ADDRESS}
          </div>
          <div className="iconline">
            <MapPin size={16} style={{ color: "#6b7280" }} /> Taller: {WORKSHOP_ADDRESS}
          </div>
        </div>

        <div className="contact-locations">
          <div className="location-card">
            <strong>Ventas y atención comercial</strong>
            <span>{SALES_ADDRESS}, Concepción</span>
            <a href={SALES_MAP_URL} target="_blank" rel="noreferrer">
              Ver mapa <ChevronRight size={14} />
            </a>
          </div>
          <div className="location-card">
            <strong>Taller técnico</strong>
            <span>{WORKSHOP_ADDRESS}, Concepción</span>
            <a href={WORKSHOP_MAP_URL} target="_blank" rel="noreferrer">
              Ver mapa <ChevronRight size={14} />
            </a>
          </div>
        </div>

        <div className="map-frame" aria-label="Mapa de ubicación Montefuji">
          <iframe
            title="Mapa Montefuji en Concepción"
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

      {/* Columna derecha: formulario */}
      <div className="col-6">
        <div className="panel-soft">
          <div style={{ fontSize: 14, fontWeight: 600 }}>Formulario</div>

          <form
            className="stack"
            style={{ marginTop: 14 }}
            onSubmit={async (e) => {
              e.preventDefault();
              setSending(true);
              setSent(false);
              setError(null);

              const form = e.currentTarget;
              const formData = new FormData(form);

              try {
                const res = await fetch("https://formspree.io/f/xlgwqrla", {
                  method: "POST",
                  headers: { Accept: "application/json" },
                  body: formData,
                });

                if (res.ok) {
                  setSent(true);
                  form.reset();
                } else {
                  const data = await res.json().catch(() => null);
                  setError(data?.error || "No se pudo enviar. Intenta nuevamente.");
                }
              } catch {
                setError("Error de conexión. Revisa tu internet e intenta nuevamente.");
              } finally {
                setSending(false);
              }
            }}
          >
            <label className="field">
              <div className="label">NOMBRE</div>
              <input name="nombre" className="input" placeholder="Tu nombre" required />
            </label>

            <label className="field">
              <div className="label">EMPRESA / TALLER</div>
              <input name="empresa" className="input" placeholder="Nombre de empresa" />
            </label>

            <label className="field">
              <div className="label">EMAIL</div>
              <input
                name="email"
                type="email"
                className="input font-mono"
                placeholder="correo@ejemplo.com"
                required
              />
            </label>

            <label className="field">
              <div className="label">MENSAJE</div>
              <textarea
                name="mensaje"
                className="textarea"
                rows={6}
                placeholder="Ej.: Hilux 2016 4x4 · junta exterior RH · OEM 43405-0K020"
                required
              />
            </label>

            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? "Enviando..." : "Enviar consulta"} <ChevronRight size={16} />
            </button>

            {sent ? (
              <div style={{ fontSize: 12, color: "var(--muted)" }}>
                ✅ Enviado correctamente. Te responderemos a tu correo.
              </div>
            ) : error ? (
              <div style={{ fontSize: 12, color: "var(--muted)" }}>
                ❗ {error}
              </div>
            ) : (
              <div style={{ fontSize: 12, color: "var(--muted)" }}>
                * Te responderemos a tu correo.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>

    <footer className="footer">
      <div>© {new Date().getFullYear()} Montefuji. Todos los derechos reservados.</div>
      <div>Hecho con criterio. Sin ruido.</div>
    </footer>
  </div>
</section>
    </>
  );
}

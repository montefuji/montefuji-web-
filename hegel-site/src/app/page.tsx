"use client";

import Image from "next/image";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { BookOpen, CheckCircle2, ChevronDown, CircleHelp, FileVideo, Lightbulb, PlayCircle, RotateCcw, Sparkles } from "lucide-react";

const INFOGRAPHICS = [
  {
    src: "/infografias/estado-idea-etica.png",
    title: "El Estado como realidad efectiva de la idea ética",
    caption: "La idea ética pasa de ser un bien pensado a existir como mundo común, instituciones y prácticas compartidas.",
  },
  {
    src: "/infografias/familia-sociedad-estado.png",
    title: "De la familia y la sociedad civil al Estado",
    caption: "El Estado no aparece de inmediato: conserva, supera e integra los momentos previos de la eticidad.",
  },
  {
    src: "/infografias/voluntad-sustancial.png",
    title: "La voluntad sustancial",
    caption: "No es una voluntad individual ni un acuerdo privado: es lo universal que está en lo particular y que cada individuo reconoce como propio.",
  },
  {
    src: "/infografias/bien-comun-musico.png",
    title: "Mi bien y el bien común: el ejemplo del músico",
    caption: "El proyecto individual solo puede realizarse en un mundo común donde también puedan realizarse los proyectos de los demás.",
  },
];

const SHAREPOINT_CLASS_URL = "https://udeconce.sharepoint.com/:u:/r/sites/TesisFilosofadelDerecho/SitePages/Clase-parte1.aspx?csf=1&web=2&share=IQDsel2uiuFBS7oPBl4YdnzjAXH5xa-u7ejZtZ8zxiSYABg&e=IeyhR8";
const SECOND_VIDEO_SHARE_URL = "https://udeconce.sharepoint.com/:v:/s/TesisFilosofadelDerecho/IQDwhFa-xF8XTqGye7Yu7sxNATB-iL3aX0zHasSwMv3T9qo?e=pqAC4o&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D";

const KEY_IDEAS = [
  ["01", "El Estado es realidad efectiva", "La idea ética se vuelve concreta en instituciones, costumbres, leyes y prácticas de la vida común."],
  ["02", "Lo universal está en lo particular", "El bien común no elimina al individuo: se realiza en individuos que lo reconocen y actúan libremente."],
  ["03", "La eticidad tiene momentos", "Familia, sociedad civil y Estado forman un desarrollo en el que cada momento es conservado e integrado."],
  ["04", "El bien común hace posible mi bien", "La libertad y el proyecto personal necesitan condiciones sociales que dependen también de otros."],
];

const SECOND_PART_IDEAS = [
  ["01", "Costumbres e instituciones", "Las costumbres son la forma inmediata en que la voluntad sustancial se objetiva; sobre ellas se construyen la constitución, las leyes y la institucionalidad."],
  ["02", "Reconocimiento y autoconciencia", "El individuo puede reconocerse en las costumbres, saberlas, quererlas y actuar de acuerdo con ellas, en vez de vivirlas como un poder extraño."],
  ["03", "Pertenencia y sentimiento", "El vínculo con el pueblo aparece primero como sentimiento de pertenencia y fraternidad: no solo quiero que me vaya bien, sino que nos vaya bien a todos."],
  ["04", "Virtud política", "La virtud política consiste en querer conscientemente el bien general y contribuir libremente a la obra común, sin abandonar los fines particulares."],
  ["05", "El Estado como vida del espíritu", "El Estado es una totalidad viva: existe en las acciones, vidas y productos de los individuos que lo componen."],
  ["06", "La libertad más alta", "La libertad se amplía cuando el individuo comprende que su realización particular también contribuye a la realización de la comunidad."],
  ["07", "El deber de ser miembro", "El deber de ser miembro del Estado no significa obediencia ciega, sino participar conscientemente en una vida común orientada al bien general."],
  ["08", "Dos extremos criticados", "Hegel cuestiona tanto el contractualismo de Rousseau como la visión conservadora de von Haller como fundamentos suficientes del Estado."],
];

function VideoSlot() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");

  useEffect(() => () => { if (videoUrl) URL.revokeObjectURL(videoUrl); }, [videoUrl]);

  function onVideoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (videoUrl) URL.revokeObjectURL(videoUrl);
    setVideoUrl(URL.createObjectURL(file));
    setFileName(file.name);
  }

  return (
    <div className="study-video-card">
      <div className="study-video-head">
        <div>
          <span className="study-eyebrow">PRIMERA PARTE DE LA CLASE</span>
          <h2>Ver la explicación de la clase</h2>
          <p>Sube aquí el video para verlo dentro de esta guía. El archivo se reproduce localmente en tu navegador.</p>
        </div>
        <FileVideo aria-hidden="true" size={32} />
      </div>
      {videoUrl ? (
        <div className="study-video-player">
          <video controls src={videoUrl} />
          <div className="study-file-row"><span>{fileName}</span><button type="button" onClick={() => { setVideoUrl(null); setFileName(""); }}>Cambiar video</button></div>
        </div>
      ) : (
        <>
          <a className="study-button" href={SHAREPOINT_CLASS_URL} target="_blank" rel="noreferrer" style={{ marginTop: 22 }}>
            <PlayCircle size={18} /> Abrir el video en SharePoint
          </a>
          <label className="study-upload-zone">
            <PlayCircle size={42} strokeWidth={1.5} />
            <strong>O seleccionar un video desde el equipo</strong>
            <span>MP4, WebM o MOV · se reproduce solo en este navegador</span>
            <input type="file" accept="video/*" onChange={onVideoChange} />
          </label>
        </>
      )}
    </div>
  );
}

function SecondVideoSlot() {
  return (
    <div className="study-video-card">
      <div className="study-video-head">
        <div>
          <span className="study-eyebrow">SEGUNDA PARTE DE LA CLASE</span>
          <h2>Costumbres, pertenencia y virtud política</h2>
          <p>Este espacio queda preparado para incorporar el nuevo video. Mientras tanto, puedes seleccionar el archivo desde tu equipo para revisarlo.</p>
        </div>
        <FileVideo aria-hidden="true" size={32} />
      </div>
      <div className="study-video-player study-share-video"><a className="study-button" href={SECOND_VIDEO_SHARE_URL} target="_blank" rel="noreferrer"><PlayCircle size={20} /> Abrir la segunda parte en SharePoint</a><p>El video se abrirá en una pestaña nueva. La estudiante debe tener permiso de acceso al archivo en SharePoint.</p></div>
    </div>
  );
}

function Reflection() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const questions = [
    "¿Qué diferencia hay entre una opinión moral individual y la idea ética como bien universal?",
    "¿Por qué el Estado no es simplemente la suma de individuos o familias?",
    "Explica con tus palabras qué significa que la voluntad sustancial no sea una imposición externa.",
    "En el ejemplo del músico, ¿qué condiciones sociales hacen posible su proyecto individual?",
  ];

  return (
    <div className="study-reflection">
      <div className="study-section-title"><CircleHelp size={24} /><div><span className="study-eyebrow">PARA COMPROBAR LA COMPRENSIÓN</span><h2>Piensa y responde</h2></div></div>
      <p className="study-muted">No busques repetir frases: intenta relacionar cada respuesta con la tesis central del video.</p>
      <div className="study-questions">
        {questions.map((question, index) => (
          <label key={question} className="study-question"><span>{index + 1}</span><strong>{question}</strong><textarea value={answers[index] ?? ""} onChange={(event) => setAnswers({ ...answers, [index]: event.target.value })} placeholder="Escribe aquí tu idea…" /></label>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  const [activeInfo, setActiveInfo] = useState(0);
  const [showGlossary, setShowGlossary] = useState(false);
  const progress = useMemo(() => Math.round(((activeInfo + 1) / INFOGRAPHICS.length) * 100), [activeInfo]);

  return (
    <main className="study-page">
      <header className="study-header">
        <div className="study-brand"><div className="study-mark">H</div><div><span>GUÍA DE ESTUDIO</span><strong>Hegel · Filosofía del derecho</strong></div></div>
        <a href="#infografias" className="study-header-link">Ir a las infografías ↓</a>
      </header>

      <section className="study-hero">
        <div className="study-hero-copy">
          <span className="study-pill"><Sparkles size={15} /> CLASE 1 · EL CONCEPTO DE ESTADO</span>
          <h1>El Estado como <em>realidad efectiva</em> de la idea ética</h1>
          <p className="study-lead">Una guía para acompañar la primera parte de la clase y comprender cómo Hegel piensa la relación entre individuo, sociedad civil y Estado.</p>
          <div className="study-hero-actions"><a className="study-button" href="#video">Comenzar la clase <span>→</span></a><a className="study-text-link" href="#ruta">Ver la ruta de aprendizaje</a></div>
        </div>
        <aside className="study-quote"><span>§257</span><blockquote>“El Estado es la realidad efectiva de la idea ética.”</blockquote><cite>G. W. F. Hegel, <i>Filosofía del derecho</i></cite></aside>
      </section>

      <section id="ruta" className="study-route"><div><span className="study-eyebrow">RUTA DE APRENDIZAJE</span><h2>Cuatro pasos para seguir la clase</h2></div><div className="study-route-grid">{[["01", "Mira", "el video"], ["02", "Observa", "las conexiones"], ["03", "Relaciona", "las ideas"], ["04", "Responde", "las preguntas"]].map(([number, title, detail]) => <div className="study-route-step" key={number}><b>{number}</b><strong>{title}</strong><span>{detail}</span></div>)}</div></section>

      <section id="video" className="study-section"><VideoSlot /></section>

      <section id="segunda-parte" className="study-section study-second-part">
        <div className="study-section-title"><BookOpen size={24} /><div><span className="study-eyebrow">CONTINUACIÓN DE LA CLASE</span><h2>Segunda parte: el Estado como vida común</h2><p className="study-muted">En esta parte, Hegel profundiza en cómo la voluntad sustancial se vuelve costumbre, institución, pertenencia y virtud política.</p></div></div>
        <SecondVideoSlot />
        <div className="study-idea-grid study-second-ideas">{SECOND_PART_IDEAS.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="study-section study-ideas"><div className="study-section-title"><Lightbulb size={24} /><div><span className="study-eyebrow">ANTES DE CONTINUAR</span><h2>Cuatro ideas para tener presentes</h2></div></div><div className="study-idea-grid">{KEY_IDEAS.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section id="infografias" className="study-section"><div className="study-section-title study-section-title-between"><div><span className="study-eyebrow">MAPA VISUAL DE LA CLASE</span><h2>Infografías para acompañar el video</h2><p className="study-muted">Avanza una por una. Después de cada bloque, intenta explicar la idea principal sin mirar la pantalla.</p></div><div className="study-progress"><strong>{progress}%</strong><span>recorrido visual</span></div></div><div className="study-tabs">{INFOGRAPHICS.map((item, index) => <button type="button" className={activeInfo === index ? "is-active" : ""} onClick={() => setActiveInfo(index)} key={item.title}><span>{index + 1}</span>{item.title}</button>)}</div><article className="study-infographic-card"><div className="study-infographic-image"><Image src={INFOGRAPHICS[activeInfo].src} alt={INFOGRAPHICS[activeInfo].title} width={1024} height={1536} priority={activeInfo === 0} /></div><div className="study-infographic-copy"><span className="study-eyebrow">INFOGRAFÍA {activeInfo + 1} DE {INFOGRAPHICS.length}</span><h3>{INFOGRAPHICS[activeInfo].title}</h3><p>{INFOGRAPHICS[activeInfo].caption}</p><div className="study-observe"><strong>Mientras observas, pregúntate:</strong><p>{activeInfo === 0 ? "¿Cómo pasa la idea ética de lo abstracto a una forma de vida común?" : activeInfo === 1 ? "¿Qué conserva e integra el Estado de la familia y la sociedad civil?" : activeInfo === 2 ? "¿Por qué la voluntad sustancial no equivale a un acuerdo entre intereses privados?" : "¿Qué personas, instituciones y condiciones hacen posible un proyecto individual?"}</p></div><div className="study-nav"><button type="button" disabled={activeInfo === 0} onClick={() => setActiveInfo(activeInfo - 1)}>← Anterior</button><button type="button" disabled={activeInfo === INFOGRAPHICS.length - 1} onClick={() => setActiveInfo(activeInfo + 1)}>Siguiente →</button></div></div></article></section>

      <section className="study-section study-glossary"><button type="button" className="study-glossary-toggle" onClick={() => setShowGlossary(!showGlossary)}><span><BookOpen size={22} /> Glosario mínimo</span><ChevronDown className={showGlossary ? "rotate" : ""} /></button>{showGlossary && <div className="study-glossary-content"><div><strong>Eticidad</strong><p>La vida ética concreta: costumbres, instituciones y formas compartidas en las que la libertad se realiza.</p></div><div><strong>Realidad efectiva</strong><p>Lo que llega a existir concretamente como resultado de un proceso y expresa plenamente su concepto.</p></div><div><strong>Voluntad sustancial</strong><p>La voluntad universal que se objetiva en prácticas e instituciones y que el individuo reconoce como propia.</p></div></div>}</section>

      <section className="study-section"><Reflection /></section>

      <section className="study-finish"><CheckCircle2 size={30} /><div><span className="study-eyebrow">CIERRE DE LA PRIMERA PARTE</span><h2>La pregunta que queda abierta</h2><p>Si el Estado es el espacio donde mi libertad puede realizarse con otros, ¿qué instituciones y prácticas de nuestra vida actual hacen posible —o dificultan— ese bien común?</p></div><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><RotateCcw size={16} /> Volver al inicio</button></section>
      <footer className="study-footer">Guía de acompañamiento · Hegel, <i>Filosofía del derecho</i>, §257</footer>
    </main>
  );
}

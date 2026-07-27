"use client";

import Image from "next/image";
import { ArrowDown, BookOpen, CheckCircle2, PlayCircle, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

type Infographic = { src: string; title: string; caption: string; question: string };

const CLASS_1_VIDEO = "https://udeconce.sharepoint.com/:u:/r/sites/TesisFilosofadelDerecho/SitePages/Clase-parte1.aspx?csf=1&web=2&share=IQDsel2uiuFBS7oPBl4YdnzjAXH5xa-u7ejZtZ8zxiSYABg&e=IeyhR8";
const CLASS_2_VIDEO = "https://udeconce.sharepoint.com/:v:/s/TesisFilosofadelDerecho/IQDwhFa-xF8XTqGye7Yu7sxNATB-iL3aX0zHasSwMv3T9qo?e=pqAC4o&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D";

const CLASS_1_IDEAS = [
  ["01", "El Estado es realidad efectiva", "La idea ética se vuelve concreta en instituciones, costumbres, leyes y prácticas de la vida común."],
  ["02", "Lo universal está en lo particular", "El bien común no elimina al individuo: se realiza en individuos que lo reconocen y actúan libremente."],
  ["03", "La eticidad tiene momentos", "Familia, sociedad civil y Estado forman un desarrollo en el que cada momento es conservado e integrado."],
  ["04", "Mi bien y el bien común", "La libertad y el proyecto personal necesitan condiciones sociales que dependen también de otros."],
];

const CLASS_2_IDEAS = [
  ["01", "Costumbres e instituciones", "Las costumbres son la forma inmediata de la voluntad sustancial; sobre ellas se construyen las leyes, la constitución y la institucionalidad."],
  ["02", "Reconocimiento", "El individuo puede saberse, quererse y actuar en las instituciones, en lugar de vivirlas como un poder extraño."],
  ["03", "Pertenencia", "El vínculo ético aparece primero como sentimiento de pertenencia, filiación y fraternidad."],
  ["04", "Virtud política", "Querer conscientemente el bien general y contribuir libremente a la obra común."],
  ["05", "Libertad sustancial", "La particularidad no desaparece: se eleva al participar en la libertad de todos."],
  ["06", "Universal verdadero", "El bien común debe ser efectivo y no encubrir el privilegio de una parte."],
];

const CLASS_1_INFOGRAPHICS: Infographic[] = [
  { src: "/infografias/estado-idea-etica.png", title: "El Estado como realidad efectiva de la idea ética", caption: "La idea ética deja de ser abstracción y existe en instituciones, prácticas y vida común.", question: "¿Cómo pasa la idea ética de lo abstracto a una forma de vida común?" },
  { src: "/infografias/familia-sociedad-estado.png", title: "De la familia y la sociedad civil al Estado", caption: "El Estado conserva, supera e integra los momentos previos de la eticidad.", question: "¿Qué conserva e integra el Estado de la familia y la sociedad civil?" },
  { src: "/infografias/voluntad-sustancial.png", title: "La voluntad sustancial", caption: "Lo universal está presente en las voluntades particulares que lo reconocen como propio.", question: "¿Por qué la voluntad sustancial no equivale a un acuerdo entre intereses privados?" },
  { src: "/infografias/bien-comun-musico.png", title: "Mi bien y el bien común", caption: "El ejemplo del músico muestra que un proyecto individual depende de condiciones sociales compartidas.", question: "¿Qué condiciones sociales hacen posible un proyecto de vida individual?" },
];

const CLASS_2_INFOGRAPHICS: Infographic[] = [
  { src: "/infografias/clase-2/02_vida_etica_de_un_pueblo.png", title: "La vida ética de un pueblo", caption: "Costumbres, instituciones y constitución forman un mundo ético histórico compartido.", question: "¿Por qué el Estado no comienza con individuos aislados que firman un pacto?" },
  { src: "/infografias/clase-2/03_libertad_particular_y_sustancial.png", title: "De la libertad particular a la sustancial", caption: "Lo universal no suprime la individualidad: libera la libertad de su encierro egoísta.", question: "¿Cómo puede el fin universal hacer posible la realización particular?" },
  { src: "/infografias/clase-2/04_impuesto_y_virtud_politica.png", title: "El impuesto y la virtud política", caption: "El ejemplo del comerciante distingue el cálculo privado de la contribución libremente querida al patrimonio común.", question: "¿Qué cambia cuando el aporte al Estado se comprende como contribución a lo universal?" },
  { src: "/infografias/clase-2/05_dos_formas_de_la_idea_etica.png", title: "Dos formas de existencia de la idea ética", caption: "La idea ética existe objetivamente en costumbres e instituciones, y subjetivamente en el saber, querer y actuar del individuo.", question: "¿Por qué ambas formas son necesarias para que el Estado sea efectivamente ético?" },
  { src: "/infografias/clase-2/06_piedad_filiacion_fraternidad.png", title: "Piedad, filiación y fraternidad", caption: "La pertenencia ética se siente primero como vínculo con una comunidad y se eleva al deseo del bien de todos.", question: "¿Qué significa aquí piedad, y por qué no es simplemente compasión?" },
  { src: "/infografias/clase-2/07_pertenencia_y_virtud_politica.png", title: "De la pertenencia sentida a la virtud política", caption: "Sentir, saber, querer y actuar forman el desarrollo mediante el cual el vínculo ético se vuelve efectivo.", question: "¿Qué diferencia hay entre obedecer por miedo y actuar según la virtud política?" },
  { src: "/infografias/clase-2/08_voluntad_sustancial_en_cada_individuo.png", title: "La voluntad sustancial vive en cada individuo", caption: "La voluntad universal no es una entidad externa: existe concretamente en personas que se saben parte, quieren y actúan.", question: "¿Por qué el Estado necesita existir también en los individuos?" },
  { src: "/infografias/clase-2/09_sociedad_civil_y_estado.png", title: "Sociedad civil y Estado", caption: "La sociedad civil se guía por la particularidad; el Estado, por la universalidad concreta que conserva y eleva los fines particulares.", question: "¿Por qué no se puede explicar el Estado solo con la lógica del interés privado?" },
  { src: "/infografias/clase-2/10_universal_verdadero_y_apariencia.png", title: "Lo universal verdadero y su apariencia", caption: "El bien general debe ser efectivo y no encubrir privilegios de un sector como si fueran interés común.", question: "¿Qué criterio permite distinguir un universal concreto de una universalidad aparente?" },
];

function VideoCard({ classNumber, title, description, url }: { classNumber: string; title: string; description: string; url: string }) {
  return <div className="study-video-card study-video-card--link"><div className="study-video-head"><div><span className="study-eyebrow">CLASE {classNumber} · VIDEO</span><h2>{title}</h2><p>{description}</p></div><PlayCircle aria-hidden="true" size={32} /></div><a className="study-button" href={url} target="_blank" rel="noreferrer"><PlayCircle size={18} /> Abrir video en SharePoint</a><p className="study-video-note">Se abrirá en una pestaña nueva. La estudiante debe iniciar sesión con su cuenta institucional si SharePoint se lo solicita.</p></div>;
}

function IdeaGrid({ ideas }: { ideas: string[][] }) {
  return <div className="study-idea-grid">{ideas.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>;
}

function InfographicGallery({ items, label }: { items: Infographic[]; label: string }) {
  const [active, setActive] = useState(0);
  const item = items[active];
  const progress = useMemo(() => Math.round(((active + 1) / items.length) * 100), [active, items.length]);
  return <div className="study-gallery"><div className="study-gallery-head"><div><span className="study-eyebrow">MAPA VISUAL · {label}</span><h2>Infografías para acompañar el video</h2><p className="study-muted">Míralas en orden y trata de explicar la idea central antes de avanzar.</p></div><div className="study-progress"><strong>{progress}%</strong><span>recorrido visual</span></div></div><div className="study-tabs">{items.map((entry, index) => <button type="button" className={active === index ? "is-active" : ""} onClick={() => setActive(index)} key={entry.title}><span>{index + 1}</span>{entry.title}</button>)}</div><article className="study-infographic-card"><div className="study-infographic-image"><Image src={item.src} alt={item.title} width={2048} height={1536} priority={active === 0} /></div><div className="study-infographic-copy"><span className="study-eyebrow">INFOGRAFÍA {active + 1} DE {items.length}</span><h3>{item.title}</h3><p>{item.caption}</p><div className="study-observe"><strong>Mientras observas, pregúntate:</strong><p>{item.question}</p></div><div className="study-nav"><button type="button" disabled={active === 0} onClick={() => setActive(active - 1)}>← Anterior</button><button type="button" disabled={active === items.length - 1} onClick={() => setActive(active + 1)}>Siguiente →</button></div></div></article></div>;
}

export default function Page() {
  return <main className="study-page"><header className="study-header"><div className="study-brand"><div className="study-mark">H</div><div><span>GUÍA DE ESTUDIO</span><strong>Hegel · Filosofía del derecho</strong></div></div><nav className="study-class-nav"><a href="#clase-1">Clase 1</a><a href="#clase-2">Clase 2</a></nav></header><section className="study-hero"><div className="study-hero-copy"><span className="study-pill"><Sparkles size={15} /> HEGEL · EL ESTADO Y LA VIDA ÉTICA</span><h1>El Estado como <em>realidad efectiva</em> de la idea ética</h1><p className="study-lead">Una guía de aprendizaje organizada en dos clases: primero, el concepto de Estado; después, las costumbres, el reconocimiento y la virtud política.</p><div className="study-hero-actions"><a className="study-button" href="#clase-1">Comenzar con la clase 1 <ArrowDown size={17} /></a><a className="study-text-link" href="#clase-2">Ir a la clase 2</a></div></div><aside className="study-quote"><span>§257</span><blockquote>“El Estado es la realidad efectiva de la idea ética.”</blockquote><cite>G. W. F. Hegel, <i>Filosofía del derecho</i></cite></aside></section><section id="clase-1" className="study-class"><div className="study-class-banner"><span>CLASE 1</span><div><h2>El concepto de Estado y la idea ética</h2><p>Del bien universal a su realización en las instituciones y en la vida común.</p></div></div><div className="study-section"><VideoCard classNumber="1" title="El Estado como idea ética" description="Abre la primera parte de la clase en SharePoint y luego revisa sus ideas e infografías." url={CLASS_1_VIDEO} /><div className="study-section-title"><BookOpen size={24} /><div><span className="study-eyebrow">IDEAS CENTRALES</span><h2>Claves para seguir la primera clase</h2></div></div><IdeaGrid ideas={CLASS_1_IDEAS} /><InfographicGallery items={CLASS_1_INFOGRAPHICS} label="CLASE 1" /></div></section><section id="clase-2" className="study-class study-class--second"><div className="study-class-banner"><span>CLASE 2</span><div><h2>Costumbres, pertenencia y virtud política</h2><p>Cómo la voluntad sustancial se vuelve mundo ético, autoconciencia y acción común.</p></div></div><div className="study-section"><VideoCard classNumber="2" title="El Estado como vida común" description="Abre la segunda parte de la clase en SharePoint y acompáñala con las infografías de este módulo." url={CLASS_2_VIDEO} /><div className="study-section-title"><BookOpen size={24} /><div><span className="study-eyebrow">IDEAS CENTRALES</span><h2>Claves para seguir la segunda clase</h2></div></div><IdeaGrid ideas={CLASS_2_IDEAS} /><InfographicGallery items={CLASS_2_INFOGRAPHICS} label="CLASE 2" /></div></section><section className="study-finish"><CheckCircle2 size={30} /><div><span className="study-eyebrow">CIERRE DEL RECORRIDO</span><h2>Una pregunta para continuar pensando</h2><p>¿Cuándo una institución expresa realmente el bien común y cuándo presenta como universal el interés de una parte?</p></div></section><footer className="study-footer">Guía de acompañamiento · Hegel, <i>Filosofía del derecho</i>, §257</footer></main>;
}

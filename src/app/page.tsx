"use client";

import React, { useMemo, useState } from "react";
import { Mail, Phone, MapPin, ShieldCheck, Wrench, Boxes, ChevronRight, Search } from "lucide-react";

function Logo() {
  return (
    <img
      src="/montefuji-logo.png"
      alt="Montefuji"
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
        desc: "Kit completo (guardapolvo, grasa, abrazaderas, tuerca). Referencias núcleo para pick-ups y SUVs.",
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
    categoria: "CV Boots y Abrazaderas",
    items: [
      {
        nombre: "Guardapolvos (boots)",
        desc: "NBR / TPE / TPU con validación térmica y consistencia de compuesto.",
      },
      {
        nombre: "Abrazaderas",
        desc: "Cierre firme, retención estable y sin deformación.",
      },
      {
        nombre: "Grasa técnica para cambio de fuelle",
        desc: "Formulación compatible con aplicaciones CV. Estabilidad térmica y adherencia adecuadas para trabajos de reemplazo de guardapolvo.",
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
    q: "¿Qué hace diferente a Montefuji?",
    a: "Marca técnica nacida del taller. Priorizamos NVH, ajuste y consistencia. No vendemos lo que no entendemos.",
  },
  {
    q: "¿Venden por catálogo completo?",
    a: "No. Trabajamos por referencias núcleo (pick-ups y SUVs) y ampliamos solo cuando el estándar se cumple.",
  },
  {
    q: "¿Ofrecen marca privada (private label)?",
    a: "Sí, para clientes alineados con el estándar y proceso de validación.",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}

function SectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div>
      {kicker ? <div className="kicker">{kicker}</div> : null}
      <h2 className="h2">{title}</h2>
      {desc ? (
        <p className="p" style={{ marginTop: 10 }}>
          {desc}
        </p>
      ) : null}
    </div>
  );
}

function TechBlock({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
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
          <div
            style={{
              fontSize: 14,
              color: "#4b5563",
              marginTop: 4,
              lineHeight: 1.5,
            }}
          >
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}

function DataRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="row">
      <div className="row-k">{k}</div>
      <div className="row-v font-mono">{v}</div>
    </div>
  );
}

export default function Page() {
  const [query, setQuery] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filtrado = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTOS;

    return PRODUCTOS.map((cat) => ({
      ...cat,
      items: cat.items.filter((i) =>
        (i.nombre + " " + i.desc).toLowerCase().includes(q)
      ),
    })).filter((cat) => cat.items.length > 0);
  }, [query]);

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
            <a href="#productos">Productos</a>
            <a href="#estandar">Estándar</a>
            <a href="#servicios">Servicios</a>
            <a href="#origen">Origen</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a href="#contacto" className="btn">
            Cotizar <ChevronRight size={16} />
          </a>
        </div>
      </header>

      <section className="container" style={{ paddingTop: 72, paddingBottom: 56 }}>
        <div className="grid-12" style={{ alignItems: "start", rowGap: 24 }}>
          <div className="col-7">
            <div className="tags" style={{ marginBottom: 18 }}>
              <Tag>Pick-ups & SUVs</Tag>
              <Tag>NVH · Ajuste · Consistencia</Tag>
              <Tag>Concepción · Chile</Tag>
            </div>

            <h1 className="h1" style={{ maxWidth: 760, lineHeight: 1.12 }}>
              Homocinéticas, semiejes y dirección
              <br />
              para pick-ups y SUVs
            </h1>

            <div style={{ marginTop: 16, maxWidth: 720 }}>
              <p className="p" style={{ margin: 0 }}>
                Taller especializado en homocinéticas, semiejes y dirección para
                pick-ups y SUVs.
              </p>

              <p className="p" style={{ marginTop: 10 }}>
                Seleccionamos y validamos referencias núcleo bajo el estándar
                Montefuji:{" "}
                <span style={{ fontWeight: 600 }}>
                  NVH · Ajuste · Consistencia lote a lote
                </span>
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 22,
              }}
            >
              <a href="#productos" className="btn btn-primary">
                Ver portafolio <ChevronRight size={16} />
              </a>
              <a href="#estandar" className="btn">
                Estándar <ShieldCheck size={16} />
              </a>
            </div>
          </div>

    <div className="col-5">
  <div className="card" style={{ display: "flex", gap: 16 }}>

    {/* IZQUIERDA → IMAGEN */}
    <div style={{ width: "40%" }}>
      <img
        src="/montefuji-tech.png"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.2,
        }}
      />
    </div>

    {/* DERECHA → CONTENIDO */}
    <div style={{ width: "60%" }}>
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
        <DataRow k="TEL" v="+56 9 40018651" />
        <DataRow k="ZONA" v="Centro-sur de Chile" />
      </div>
    </div>

  </div>
</div>
      </section>

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
                  placeholder="Buscar (OEM / modelo / boot / semieje)"
                  className="search font-mono"
                />
              </div>
              <div style={{ marginTop: 8, fontSize: 12, color: "var(--muted)" }}>
                Tip: usa códigos OEM. Ej.:{" "}
                <span className="font-mono">43405</span>,{" "}
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
            {filtrado.map((cat) => (
              <div key={cat.categoria} className="panel-soft">
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

          <div className="panel-soft" style={{ marginTop: 18 }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>
              ¿Necesitas una referencia o un servicio específico?
            </div>
            <p className="p" style={{ marginTop: 6 }}>
              Cuéntanos modelo/año/motor, posición (LH/RH · inner/outer) y/o
              número OEM, o el síntoma que estás diagnosticando. Revisamos el caso
              y te orientamos con claridad.
            </p>
            <a href="#contacto" className="btn btn-primary" style={{ marginTop: 12 }}>
              Contactar <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="estandar" className="section soft">
        <div className="container">
          <SectionTitle
            kicker="CRITERIO"
            title="Estándar Montefuji"
            desc="Reglas internas para proteger la marca y al taller. El estándar se endurece con el tiempo; nunca se relaja."
          />

          <div className="grid-2" style={{ marginTop: 18 }}>
            <TechBlock
              icon={<ShieldCheck size={18} />}
              title="NVH"
              desc="Sin ruidos anómalos, sin vibración indebida, sensación uniforme."
            />
            <TechBlock
              icon={<Wrench size={18} />}
              title="Ajuste y tolerancias"
              desc="Juego y montaje dentro de rango. Movimiento fluido, sin forzar."
            />
            <TechBlock
              icon={<Boxes size={18} />}
              title="Consistencia"
              desc="Muestra = repuesto. Cero cambios sin aviso y trazabilidad mínima."
            />
          </div>

          <div className="card" style={{ marginTop: 18 }}>
            <div className="kicker">REGLA FUNDACIONAL</div>
            <p className="p" style={{ marginTop: 10, color: "#111" }}>
              El criterio Montefuji nace en el banco desarmando una homocinética y
              en el torno produciendo o ajustando una.
            </p>
          </div>
        </div>
      </section>

      <section id="servicios" className="section white">
        <div className="container">
          <SectionTitle
            kicker="SERVICIOS"
            title="Servicios técnicos y taller"
            desc="Soporte práctico para talleres y distribuidores: validación, benchmarking y montaje enfocado en transmisión, dirección y tren delantero."
          />

          <div className="grid-12" style={{ marginTop: 18 }}>
            <div className="col-6">
              <div className="panel-soft">
                <div style={{ fontSize: 14, fontWeight: 600 }}>
                  Servicios técnicos
                </div>

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

            <div className="col-6">
              <div className="card">
                <div style={{ fontSize: 14, fontWeight: 600 }}>
                  Taller Montefuji
                </div>
                <p className="p" style={{ marginTop: 8 }}>
                  Instalación y diagnóstico enfocados en transmisión, dirección y
                  tren delantero. Trabajo limpio, sin improvisación.
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
                    <span style={{ fontWeight: 600 }}>Regla Montefuji:</span> No
                    hacemos “mecánica general”. Nos enfocamos en transmisión,
                    dirección y tren delantero porque ahí se juega el NVH, el ajuste
                    y la seguridad.
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
              <ul
                style={{
                  marginTop: 10,
                  marginBottom: 0,
                  paddingLeft: 18,
                  color: "#374151",
                  lineHeight: 1.6,
                }}
              >
                <li>Selección de referencias núcleo (pick-ups y SUVs).</li>
                <li>Validación práctica y comparación con benchmark.</li>
                <li>Primero revisamos, luego decidimos y lo comunicamos con claridad.</li>
                <li>Relación de largo plazo con proveedores y clientes.</li>
              </ul>
            </div>

            <div className="card">
              <div style={{ fontSize: 14, fontWeight: 600 }}>
                Para quienes estamos
              </div>

              <p className="p" style={{ marginTop: 8 }}>
                Para talleres y distribuidores que cuidan su clientela y priorizan
                funcionamiento real por sobre precio.
              </p>

              <p className="p" style={{ marginTop: 8 }}>
                Para dueñ@s de vehículos que buscan diagnóstico preciso y soluciones
                duraderas.
              </p>

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

      <section id="contacto" className="section white">
        <div className="container">
          <div className="grid-12">
            <div className="col-6">
              <SectionTitle
                kicker="CONTACTO"
                title="Contacto"
                desc="Cuéntanos tu necesidad (modelo/año/OEM) y zona. Te orientamos con criterio técnico."
              />

              <div className="stack" style={{ marginTop: 16 }}>
                <div className="iconline">
                  <Mail size={16} style={{ color: "#6b7280" }} /> info@montefuji.org
                </div>
                <div className="iconline">
                  <Phone size={16} style={{ color: "#6b7280" }} /> +56 9 40018651
                </div>
                <div className="iconline">
                  <MapPin size={16} style={{ color: "#6b7280" }} /> Concepción ·
                  Chile
                </div>
              </div>

              <div className="panel-soft" style={{ marginTop: 18 }}>
                <div className="kicker">DATOS RECOMENDADOS</div>
                <div style={{ marginTop: 8 }}>
                  <DataRow k="MODELO/AÑO/MOTOR" v="Ej.: Hilux 2016 2.8" />
                  <DataRow k="POSICIÓN" v="LH/RH · INNER/OUTER" />
                  <DataRow k="OEM" v="Ej.: 43405-0K020" />
                  <DataRow
                    k="SERVICIO"
                    v="Ej.: Cambio de fuelle / Diagnóstico / Cremallera / Bomba"
                  />
                </div>
              </div>
            </div>

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
                    <input
                      name="nombre"
                      className="input"
                      placeholder="Tu nombre"
                      required
                    />
                  </label>

                  <label className="field">
                    <div className="label">EMPRESA / TALLER</div>
                    <input
                      name="empresa"
                      className="input"
                      placeholder="Nombre de empresa"
                    />
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

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={sending}
                  >
                    {sending ? "Enviando..." : "Enviar consulta"}{" "}
                    <ChevronRight size={16} />
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

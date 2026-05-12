import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronRight, ClipboardCheck, MessageCircle, Search, ShieldCheck, Wrench } from "lucide-react";
import { getSeoLandingPage, SEO_LANDING_PAGES } from "../seo-pages";

type PageParams = {
  params: Promise<{ slug: string }>;
};

const WHATSAPP_PHONE = "56950995385";

export const dynamicParams = false;

function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message.replaceAll("%0A", "\n"))}`;
}

export function generateStaticParams() {
  return SEO_LANDING_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "es_CL",
      url: `/${page.slug}`,
      siteName: "Montefuji",
      title: `${page.metaTitle} | Montefuji`,
      description: page.metaDescription,
      images: [
        {
          url: "/montefuji-product-cv-kit.webp",
          width: 1086,
          height: 1448,
          alt: "Repuestos Montefuji para homocinéticas, fuelles y semiejes",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.metaTitle} | Montefuji`,
      description: page.metaDescription,
      images: ["/montefuji-product-cv-kit.webp"],
    },
  };
}

export default async function SeoLandingPage({ params }: PageParams) {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    notFound();
  }

  const quoteUrl = whatsappUrl(page.whatsappText);

  return (
    <>
      <header className="header">
        <div className="header-row" style={{ minHeight: 96, alignItems: "center" }}>
          <Link href="/" aria-label="Ir al inicio">
            <Image
              src="/montefuji-logo.png"
              alt="Montefuji"
              width={302}
              height={151}
              priority
              style={{ height: 76, width: "auto", display: "block" }}
            />
          </Link>

          <nav className="nav">
            <Link href="/">Inicio</Link>
            <Link href="/#productos">Productos</Link>
            <Link href="/#contacto">Contacto</Link>
          </nav>

          <a href={quoteUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
            WhatsApp <MessageCircle size={16} />
          </a>
        </div>
      </header>

      <a href={quoteUrl} className="whatsapp-float" target="_blank" rel="noreferrer">
        <MessageCircle size={18} />
        <span>Cotizar por WhatsApp</span>
      </a>

      <main>
        <section className="container landing-page-hero">
          <div className="grid-12" style={{ alignItems: "center" }}>
            <div className="col-7">
              <div className="kicker">{page.eyebrow}</div>
              <h1 className="h1" style={{ maxWidth: 760 }}>{page.title}</h1>
              <p className="p landing-intro">{page.intro}</p>

              <div className="landing-alert">
                <Search size={18} />
                <span>{page.vehicle}</span>
              </div>

              <div className="landing-actions">
                <a href={quoteUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Cotizar por WhatsApp <MessageCircle size={16} />
                </a>
                <Link href="/#contacto" className="btn">
                  Ver ubicación <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            <div className="col-5">
              <figure className="landing-photo">
                <Image
                  src="/montefuji-product-cv-kit.webp"
                  alt="Kit de junta homocinética Montefuji"
                  width={1086}
                  height={1448}
                  priority
                  sizes="(min-width: 900px) 420px, 100vw"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="section white">
          <div className="container">
            <div className="grid-12">
              <div className="col-5">
                <div className="kicker">SÍNTOMAS</div>
                <h2 className="h2">¿Tu vehículo presenta?</h2>
                <p className="p" style={{ marginTop: 10 }}>
                  Si aparece uno de estos síntomas, conviene revisar antes de que el daño avance.
                </p>
              </div>

              <div className="col-7">
                <div className="symptom-grid">
                  {page.symptoms.map((symptom) => (
                    <div className="symptom-item" key={symptom}>
                      <Wrench size={17} />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>

                <div className="symptom-cta">
                  <div>
                    <strong>Envíanos el síntoma y una foto.</strong>
                    <span>Con eso podemos orientar mejor la cotización y evitar una referencia dudosa.</span>
                  </div>
                  <a href={quoteUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                    Consultar ahora <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="landing-columns">
              <div className="panel-soft">
                <div className="quote-head">
                  <ClipboardCheck size={18} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>Qué revisamos</div>
                    <p className="p" style={{ marginTop: 4 }}>
                      Validamos aplicación antes de vender o recomendar el servicio.
                    </p>
                  </div>
                </div>
                <ul className="landing-list">
                  {page.checks.map((check) => (
                    <li key={check}>{check}</li>
                  ))}
                </ul>
              </div>

              <div className="panel-soft">
                <div className="quote-head">
                  <ShieldCheck size={18} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>Datos para cotizar</div>
                    <p className="p" style={{ marginTop: 4 }}>
                      Mientras más completa llegue la información, más precisa será la respuesta.
                    </p>
                  </div>
                </div>
                <ul className="landing-list">
                  {page.quoteData.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="related-pages">
              <div>
                <div className="kicker">TAMBIÉN PUEDE SERVIRTE</div>
                <div className="related-links">
                  {page.related.map((relatedSlug) => {
                    const related = getSeoLandingPage(relatedSlug);
                    if (!related) return null;

                    return (
                      <Link key={related.slug} href={`/${related.slug}`}>
                        {related.metaTitle} <ChevronRight size={14} />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <a href={quoteUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                Cotizar por WhatsApp <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

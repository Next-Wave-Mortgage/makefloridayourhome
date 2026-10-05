import { Fragment, type ComponentProps, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { PageCTA } from "@/components/shared/PageCTA";
import { DataTable } from "@/components/shared/DataTable";
import { StepProcess } from "@/components/shared/StepProcess";
import { ExpertGuidesRow } from "@/components/shared/ExpertGuidesRow";
import { organizationId } from "@/lib/entity";
import { siteConfig } from "@/lib/site";

/**
 * Shared template for loan product ("money") pages under /home-loan.
 *
 * A product page is a config object: hero, an ordered list of body sections,
 * FAQs, and the final CTA. The template renders the sections, alternates the
 * white / green-tint backgrounds automatically, and generates the FAQ, HowTo,
 * BreadcrumbList (and optional LoanOrCredit) JSON-LD from the same data, so
 * visible content and structured data cannot drift apart.
 */

type HeroFeature = NonNullable<
  ComponentProps<typeof PageHero>["features"]
>[number];
type GuideArticle = ComponentProps<typeof ExpertGuidesRow>["articles"][number];
type Bg = "white" | "green-tint";

export interface ProductStep {
  title: string;
  description: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export type ProductSection =
  | {
      type: "table";
      heading: ReactNode;
      intro?: ReactNode;
      headers: string[];
      rows: string[][];
      caption: string;
    }
  | {
      type: "cards";
      heading: ReactNode;
      cards: { title: string; description: string }[];
    }
  | {
      type: "steps";
      heading: ReactNode;
      steps: ProductStep[];
      /** Emitted as HowTo JSON-LD. Only one steps section per page should set this. */
      howTo?: { name: string; description: string };
    }
  /** Solid brand-green band linking to a tool or related page. Not part of the bg alternation. */
  | {
      type: "promo";
      heading: ReactNode;
      body: ReactNode;
      href: string;
      linkText: string;
    }
  | { type: "guides"; heading: ReactNode; articles: GuideArticle[] }
  /** Escape hatch for one-off content. Receives the background it should use. */
  | { type: "custom"; render: (bg: Bg) => ReactNode };

export interface ProductPageConfig {
  /** Canonical path, e.g. "/home-loan/dscr-loan". */
  path: string;
  /** Trail after Home, e.g. [{ name: "Home Loans", path: "/home-loan" }, { name: "DSCR Loans", path: "/home-loan/dscr-loan" }]. */
  breadcrumbs: { name: string; path: string }[];
  hero: {
    title: ReactNode;
    subtitle: ReactNode;
    features: HeroFeature[];
    image: string;
    imageAlt: string;
  };
  /** Primary conversion target, used by the hero and the closing CTA. */
  cta: { href: string; text: string };
  sections: ProductSection[];
  faqs: ProductFAQ[];
  closing: { heading: string; subtitle: string };
  /** Optional LoanOrCredit schema linking the product to the MortgageBroker entity. */
  loanProduct?: { name: string; description: string; loanType?: string };
  /**
   * Optional "Reviewed by" byline shown under the hero, emitted as WebPage
   * reviewedBy / lastReviewed JSON-LD. Use a licensed loan officer.
   */
  review?: { reviewer: ProductReviewer; lastReviewed: string };
}

export interface ProductReviewer {
  name: string;
  role: string;
  nmls: string;
  /** Bio page path, e.g. "/team/phil-ganz". */
  href: string;
  photo: string;
  /** Person @id from src/lib/entity.ts. */
  personId: string;
}

/* ------------------------------------------------------------------ */
/*  Hero feature icons                                                 */
/* ------------------------------------------------------------------ */

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export const productIcons = {
  dollar: (
    <Icon>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </Icon>
  ),
  check: (
    <Icon>
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </Icon>
  ),
  home: (
    <Icon>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </Icon>
  ),
  shield: (
    <Icon>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </Icon>
  ),
} as const;

/* ------------------------------------------------------------------ */
/*  Section renderers                                                  */
/* ------------------------------------------------------------------ */

const bgClass = (bg: Bg) =>
  bg === "green-tint" ? "bg-green-tint" : "bg-white";

function SectionShell({
  bg,
  heading,
  intro,
  children,
}: {
  bg: Bg;
  heading: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className={`${bgClass(bg)} py-16 sm:py-20 lg:py-24`}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
          {heading}
        </h2>
        {intro && (
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

function PromoBand({
  heading,
  body,
  href,
  linkText,
}: Extract<ProductSection, { type: "promo" }>) {
  return (
    <section className="bg-brand-green py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[28px] font-bold leading-tight text-white sm:text-[36px]">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-white/70">
            {body}
          </p>
          <Link
            href={href}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[16px] font-bold text-dark-green transition-all duration-300 hover:shadow-[0_4px_20px_rgba(255,255,255,0.25)]"
          >
            {linkText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function renderSection(section: ProductSection, bg: Bg) {
  switch (section.type) {
    case "table":
      return (
        <SectionShell bg={bg} heading={section.heading} intro={section.intro}>
          <div className="mt-10">
            <DataTable
              headers={section.headers}
              rows={section.rows}
              caption={section.caption}
            />
          </div>
        </SectionShell>
      );
    case "cards":
      return (
        <SectionShell bg={bg} heading={section.heading}>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
            {section.cards.map((card) => (
              <div
                key={card.title}
                className={`rounded-xl border border-border-gray/60 ${bg === "white" ? "bg-green-tint" : "bg-white"} p-6 transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_4px_16px_rgba(0,105,72,0.08)]`}
              >
                <h3 className="text-[17px] font-bold text-dark-green">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </SectionShell>
      );
    case "steps":
      return (
        <StepProcess heading={section.heading} steps={section.steps} bg={bg} />
      );
    case "promo":
      return <PromoBand {...section} />;
    case "guides":
      return (
        <ExpertGuidesRow
          heading={section.heading}
          articles={section.articles}
          bg={bg}
        />
      );
    case "custom":
      return section.render(bg);
  }
}

/* ------------------------------------------------------------------ */
/*  Structured data                                                    */
/* ------------------------------------------------------------------ */

function buildSchemas(config: ProductPageConfig) {
  const url = `${siteConfig.url}${config.path}`;
  const schemas: { id: string; data: object }[] = [];

  if (config.faqs.length > 0) {
    schemas.push({
      id: "faq-schema",
      data: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: config.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    });
  }

  const howToSection = config.sections.find(
    (s): s is Extract<ProductSection, { type: "steps" }> =>
      s.type === "steps" && Boolean(s.howTo),
  );
  if (howToSection?.howTo) {
    schemas.push({
      id: "howto-schema",
      data: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: howToSection.howTo.name,
        description: howToSection.howTo.description,
        step: howToSection.steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.description,
        })),
      },
    });
  }

  schemas.push({
    id: "breadcrumb-schema",
    data: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ name: "Home", path: "/" }, ...config.breadcrumbs].map(
        (crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: `${siteConfig.url}${crumb.path}`,
        }),
      ),
    },
  });

  if (config.loanProduct) {
    schemas.push({
      id: "loan-product-schema",
      data: {
        "@context": "https://schema.org",
        "@type": "LoanOrCredit",
        name: config.loanProduct.name,
        description: config.loanProduct.description,
        ...(config.loanProduct.loanType && {
          loanType: config.loanProduct.loanType,
        }),
        url,
        areaServed: { "@type": "State", name: "Florida" },
        provider: { "@id": organizationId },
      },
    });
  }

  if (config.review) {
    const { reviewer, lastReviewed } = config.review;
    schemas.push({
      id: "webpage-schema",
      data: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        lastReviewed,
        dateModified: lastReviewed,
        reviewedBy: {
          "@type": "Person",
          "@id": reviewer.personId,
          name: reviewer.name,
          url: `${siteConfig.url}${reviewer.href}`,
        },
        publisher: { "@id": organizationId },
      },
    });
  }

  return schemas;
}

function ReviewBar({
  reviewer,
  lastReviewed,
}: NonNullable<ProductPageConfig["review"]>) {
  const date = new Date(`${lastReviewed}T12:00:00`).toLocaleDateString(
    "en-US",
    { month: "long", day: "numeric", year: "numeric" },
  );
  return (
    <div className="border-t border-border-gray/60 bg-green-tint">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-3 gap-y-1 px-5 py-4 text-[14px] text-dark-green/70 sm:px-8">
        <Image
          src={reviewer.photo}
          alt={reviewer.name}
          width={36}
          height={36}
          className="h-9 w-9 rounded-full object-cover"
        />
        <span>
          Reviewed by{" "}
          <Link
            href={reviewer.href}
            className="font-bold text-dark-green underline decoration-brand-green/30 underline-offset-2 hover:decoration-brand-green"
          >
            {reviewer.name}
          </Link>
          , {reviewer.role} · NMLS #{reviewer.nmls}
        </span>
        <span aria-hidden="true" className="hidden sm:inline">
          ·
        </span>
        <span>
          Updated <time dateTime={lastReviewed}>{date}</time>
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Template                                                           */
/* ------------------------------------------------------------------ */

/**
 * Alternate backgrounds after the green-tint hero, starting with white.
 * Promo bands sit outside the rhythm (null). The FAQ takes the next slot.
 */
function assignBackgrounds(sections: ProductSection[]) {
  const bgAt = (slot: number): Bg => (slot % 2 === 0 ? "white" : "green-tint");
  const slots = sections.map(
    (_, i) => sections.slice(0, i).filter((s) => s.type !== "promo").length,
  );
  return {
    sections: sections.map((s, i) =>
      s.type === "promo" ? null : bgAt(slots[i]),
    ),
    faq: bgAt(sections.filter((s) => s.type !== "promo").length),
  };
}

export function ProductPage({ config }: { config: ProductPageConfig }) {
  const backgrounds = assignBackgrounds(config.sections);
  const faqBg = backgrounds.faq;
  const sections = config.sections.map((section, i) => ({
    section,
    bg: backgrounds.sections[i],
  }));

  return (
    <>
      {buildSchemas(config).map((schema) => (
        <JsonLd key={schema.id} id={schema.id} data={schema.data} />
      ))}

      <PageHero
        title={config.hero.title}
        subtitle={config.hero.subtitle}
        features={config.hero.features}
        image={config.hero.image}
        imageAlt={config.hero.imageAlt}
        ctaHref={config.cta.href}
        ctaText={config.cta.text}
      />

      {config.review && <ReviewBar {...config.review} />}

      {sections.map(({ section, bg }, i) => (
        <Fragment key={i}>{renderSection(section, bg ?? "white")}</Fragment>
      ))}

      <PageFAQ faqs={config.faqs} bg={faqBg} />

      <PageCTA
        heading={config.closing.heading}
        subtitle={config.closing.subtitle}
        ctaHref={config.cta.href}
        ctaText={config.cta.text}
      />
    </>
  );
}

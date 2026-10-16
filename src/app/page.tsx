import { bhajans } from "@/content/bhajans";
import HeroBanner from "@/components/HeroBanner";
import { SITE_URL } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "तुलसीदास भजन",
    url: SITE_URL,
    hasPart: bhajans.map((bhajan) => ({
      "@type": "CreativeWork",
      name: bhajan.title,
      url: `${SITE_URL}/#${bhajan.slug}`,
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroBanner
        eyebrow="॥ जय श्री राम ॥"
        title="तुलसीदास भजन"
        description="गोस्वामी तुलसीदास रचित प्रमुख भजनों का संग्रह — नीचे किसी भी शीर्षक पर जाकर पाठ करें।"
      />

      <nav className="mt-8 flex flex-wrap justify-center gap-3">
        {bhajans.map((bhajan) => (
          <a
            key={bhajan.slug}
            href={`#${bhajan.slug}`}
            className="font-devanagari rounded-full border border-border-muted bg-surface px-5 py-2.5 text-sm font-semibold text-orange-900 shadow-sm transition-colors hover:brightness-110 sm:text-base"
          >
            {bhajan.title}
          </a>
        ))}
      </nav>

      <div className="mt-10 flex flex-col gap-10">
        {bhajans.map((bhajan) => (
          <section
            key={bhajan.slug}
            id={bhajan.slug}
            className="scroll-mt-24 rounded-[24px] border border-border-muted bg-surface px-5 py-6 shadow-[var(--shadow)] sm:px-8 sm:py-8"
          >
            <div className="text-center">
              <p className="font-devanagari text-sm font-semibold tracking-wide text-orange-900/70 uppercase">
                {bhajan.subtitle}
              </p>
              <h2 className="font-devanagari mt-1 text-2xl font-bold text-orange-900 sm:text-3xl">
                {bhajan.title}
              </h2>
            </div>

            <div className="mt-6 flex flex-col divide-y divide-border-muted/60">
              {bhajan.verses.map((verse) => (
                <div key={verse.id} className="py-2">
                  <p className="font-devanagari text-lg leading-loose text-foreground sm:text-xl">
                    {verse.text.split("\n").map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

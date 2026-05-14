import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationBlessedMarriage() {
  return (
    <GenerationSimplePage
      title="Blessed Marriage"
      lead="Biblically-centered support for couples to understand God’s purpose and pursue oneness."
      ctas={[{ label: "Learn More", href: "https://generation.church/blessed-marriage" }]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed">
        <p>
          Blessed Marriage provides guidance and practical equipping to help couples pursue a healthy
          and faith-filled relationship.
        </p>
      </div>
    </GenerationSimplePage>
  );
}


import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationBoldMen() {
  return (
    <GenerationSimplePage
      title="Bold Men"
      lead="A ministry for men that helps them lead and become the man of God they were made to be."
      ctas={[{ label: "Learn More", href: "https://generation.church/bold-men" }]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed">
        <p>
          Bold Men focuses on building strong spiritual leadership through biblical teaching, community, and
          meaningful steps toward maturity.
        </p>
      </div>
    </GenerationSimplePage>
  );
}


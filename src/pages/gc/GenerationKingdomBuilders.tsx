import { ArrowRight } from "lucide-react";
import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationKingdomBuilders() {
  return (
    <GenerationSimplePage
      title="Kingdom Builders"
      lead="Help bring the Good News of Jesus Christ to our community and around the world."
      ctas={[
        {
          label: "Learn More",
          href: "https://generation.church/kingdom-builders-pdf",
        },
      ]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed space-y-4">
        <p>
          When you give as a Kingdom Builder, you support local outreach, global missions, church planting,
          and more—so people can experience the hope of Jesus.
        </p>
        <p>
          This page is a static clone destination. You can link your real giving initiative as needed.
        </p>
        <a
          href="https://generation.church/kingdom-builders-pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-church-orange font-medium hover:text-church-gold transition-colors"
        >
          Download brochure <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </GenerationSimplePage>
  );
}


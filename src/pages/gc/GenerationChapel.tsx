import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationChapel() {
  return (
    <GenerationSimplePage
      title="chapel"
      lead="Traditional worship option with familiar hymns, choruses, and a softer style of music."
      ctas={[{ label: "Learn More", href: "https://generation.church/chapel" }]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed">
        Chapel services offer a warm, inviting setting with an engaging message from God’s Word.
      </div>
    </GenerationSimplePage>
  );
}


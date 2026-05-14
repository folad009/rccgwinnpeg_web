import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationBeautifulGirl() {
  return (
    <GenerationSimplePage
      title="beautiful girl"
      lead="A ministry for women in every stage of life to grow closer to Jesus and to each other."
      ctas={[{ label: "Learn More", href: "https://generation.church/beautiful-girl" }]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed">
        <p>
          beautiful girl is designed to help you connect with others, deepen your walk with Jesus, and
          find encouragement for the season you’re in.
        </p>
      </div>
    </GenerationSimplePage>
  );
}


import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationYoungAdults() {
  return (
    <GenerationSimplePage
      title="Young Adults"
      lead="Build lasting friendships, serve together, and study God’s Word."
      ctas={[{ label: "Learn More", href: "https://generation.church/young-adults" }]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed">
        <p>
          Generation Young Adults is a place to connect with others and grow spiritually while making
          lifelong relationships.
        </p>
      </div>
    </GenerationSimplePage>
  );
}


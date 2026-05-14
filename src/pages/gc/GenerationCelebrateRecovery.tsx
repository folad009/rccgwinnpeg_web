import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationCelebrateRecovery() {
  return (
    <GenerationSimplePage
      title="Celebrate Recovery"
      lead="A Christ-centered, 12-step recovery program."
      ctas={[
        {
          label: "Learn More",
          href: "https://generation.church/celebrate-recovery",
        },
      ]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed">
        <p>
          Step into community with others as you overcome hurts, habits, and hang-ups. Celebrate Recovery helps
          you find hope, healing, and support.
        </p>
      </div>
    </GenerationSimplePage>
  );
}


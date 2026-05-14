import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationYouth() {
  return (
    <GenerationSimplePage
      title="Youth"
      lead="GEN YTH is an energetic environment for students in grades 6 through 12."
      ctas={[
        {
          label: "Join a Life Group",
          href: "https://generationaz.churchcenter.com/people/forms/282932",
        },
      ]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed">
        <p className="mb-4">
          GEN YTH combines passionate worship, relatable messages, and relational community. Students connect
          with peers, hear the gospel, and share together in small groups.
        </p>
        <p>
          GenZ helps students transition into GEN YTH with a smooth, age-appropriate service experience and
          discussion time that reinforces what they learn.
        </p>
      </div>
    </GenerationSimplePage>
  );
}


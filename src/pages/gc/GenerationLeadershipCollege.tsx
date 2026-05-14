import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationLeadershipCollege() {
  return (
    <GenerationSimplePage
      title="Generation Leadership College"
      lead="Build your leadership skills with hands-on ministry experience."
      ctas={[
        {
          label: "Learn More",
          href: "https://generation.church/leadership-college",
        },
      ]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed">
        <p>
          Through a partnership with Southeastern University, you can build practical leadership skills and
          work toward completing a degree.
        </p>
      </div>
    </GenerationSimplePage>
  );
}


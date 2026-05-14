import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationLifeGroups() {
  return (
    <GenerationSimplePage
      title="Life Groups"
      lead="We can’t do life alone. Find community and grow in your relationship with Jesus."
      ctas={[
        {
          label: "Find a Life Group",
          href: "https://generationaz.churchcenter.com/groups/life-groups",
        },
      ]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed">
        <p className="mb-4">
          Life Groups meet throughout the week in homes, coffee shops, and on our campuses. Choose from
          sermon-based groups, Grow Groups, interest groups, and care groups.
        </p>
        <p>
          You’ll build friendships, deepen community, and walk together through every season of life.
        </p>
      </div>
    </GenerationSimplePage>
  );
}


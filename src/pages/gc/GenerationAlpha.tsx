import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationAlpha() {
  return (
    <GenerationSimplePage
      title="Alpha"
      lead="Explore the Christian faith in a fun, informal, and engaging environment."
      ctas={[
        {
          label: "Sign Up Now",
          href: "https://generationaz.churchcenter.com/groups/life-groups?enrollment=open_signup%2Crequest_to_join&filter=enrollment&where[name]=Alpha",
        },
      ]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed">
        <p className="mb-4">
          Alpha is a series of interactive sessions exploring faith in Jesus. Each session looks at a
          different question around faith and opens up engaging conversations.
        </p>
        <p>
          Alpha includes interactive talks followed by discussion time in a small group setting.
        </p>
      </div>
    </GenerationSimplePage>
  );
}


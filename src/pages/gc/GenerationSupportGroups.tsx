import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationSupportGroups() {
  return (
    <GenerationSimplePage
      title="CARE MINISTRIES"
      lead="Supportive groups where you can find encouragement and walk in victory."
      ctas={[{ label: "Learn More", href: "https://generation.church/support-groups" }]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed">
        <p>
          Care groups are safe places for support and encouragement through anxiety, depression, addiction,
          grief, and more. Join a community that will walk with you.
        </p>
      </div>
    </GenerationSimplePage>
  );
}


import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationG101() {
  return (
    <GenerationSimplePage
      title="G101"
      lead="Get Involved at Generation Church. This is your next step!"
      ctas={[
        {
          label: "Reserve Your Spot",
          href: "https://generationaz.churchcenter.com/registrations/events/category/24972",
        },
      ]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed">
        <p className="mb-4">
          Being new to a church family can be overwhelming. G101 gives you a chance to get answers,
          learn how to benefit from the ministries in our church, meet leaders, and understand how to get
          plugged in.
        </p>
        <p>
          You’ll leave with a clear picture of the next steps so you can jump into community with confidence.
        </p>
      </div>
    </GenerationSimplePage>
  );
}


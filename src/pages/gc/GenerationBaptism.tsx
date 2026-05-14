import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationBaptism() {
  return (
    <GenerationSimplePage
      title="Baptism"
      lead="Take Your Next Step in Following Jesus."
      ctas={[
        {
          label: "Sign Up to Get Baptized",
          href: "https://generationaz.churchcenter.com/registrations/events/category/30458",
        },
      ]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed space-y-4">
        <p>
          Baptism is a public confession of your faith in Jesus Christ and a declaration of your commitment to
          follow Him. It symbolizes your new life in Him.
        </p>
        <p>
          At Generation Church, baptism is available for anyone who has accepted Jesus as their Lord and Savior.
        </p>
      </div>
    </GenerationSimplePage>
  );
}


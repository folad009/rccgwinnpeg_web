import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationKids() {
  return (
    <GenerationSimplePage
      title="Kids"
      lead="Jesus is the most important person our children should know and learn about."
      ctas={[
        {
          label: "Register My Child",
          href: "https://generationaz.churchcenter.com/people/forms/450015?open-in-church-center-modal=true",
        },
      ]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed space-y-6">
        <div>
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">little g’s</h3>
          <p>
            Birth to preschool learning through Bible stories and fun, interactive experiences.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">gKids</h3>
          <p>
            Kindergarten to 5th grade with high-energy worship, games, storytelling, small groups, and prayer.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Safety & Check-in</h3>
          <p>
            Children are checked in using a secure system. Team members serving in kids’ programs are background checked.
          </p>
        </div>
      </div>
    </GenerationSimplePage>
  );
}


import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationChosen() {
  return (
    <GenerationSimplePage
      title="Chosen"
      lead="Change the world by changing the life of a child. Foster care and adoption ministry."
      ctas={[
        {
          label: "I Want to Serve With Chosen",
          href: "https://generationaz.churchcenter.com/people/forms/520098",
        },
      ]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed space-y-4">
        <p>
          Following the Bible’s command to care for the fatherless, Chosen equips families to show
          the love of Jesus to children and teens in need of foster care and adoption in Arizona.
        </p>
        <p>
          Generation Church also provides support to foster group homes in partnership with OCJ Kids.
        </p>
      </div>
    </GenerationSimplePage>
  );
}


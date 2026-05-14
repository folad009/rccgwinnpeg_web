import { Accordion } from "@/pages/gc/parts/Accordion";
import {
  aboutBeliefs,
  aboutMandate,
  aboutPastor,
  aboutStory,
  aboutValues,
  aboutVision,
} from "@/pages/gc/aboutContent";

const beliefAccordionItems = aboutBeliefs.map((b) => ({
  title: b.title,
  content: `${b.body}\n\n${b.scripture}`,
}));

export function ChurchProfileSections() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">{aboutStory.heading}</h2>
          <p className="text-slate-700 leading-relaxed mb-6">{aboutStory.p1}</p>
          <p className="text-slate-700 leading-relaxed mb-12">{aboutStory.p2}</p>

          <div className="bg-church-bg rounded-3xl border border-slate-100 p-8 mb-16">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 uppercase tracking-wide text-center">
              {aboutMandate.heading}
            </h3>
            <ul className="space-y-3 text-slate-800 font-semibold text-sm tracking-wide max-w-xl mx-auto">
              {aboutMandate.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-church-orange" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">{aboutVision.heading}</h2>
          <p className="text-xl font-semibold text-orange-600 mb-6">{aboutVision.lead}</p>
          <p className="text-slate-700 leading-relaxed mb-16">{aboutVision.body}</p>

          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">{aboutValues.heading}</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {aboutValues.items.map((v) => (
              <span
                key={v}
                className="px-5 py-2.5 rounded-full bg-church-bg border border-slate-200 text-slate-900 font-bold text-sm tracking-wide"
              >
                {v}
              </span>
            ))}
          </div>

          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">OUR BELIEF</h2>
          <Accordion items={beliefAccordionItems} />
        </div>
      </section>

      <section className="py-16 bg-church-bg border-t border-slate-200/80">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 text-center">{aboutPastor.heading}</h2>
          <p className="text-slate-700 leading-relaxed mb-6 text-lg">{aboutPastor.p1}</p>
          <p className="text-slate-700 leading-relaxed text-lg">{aboutPastor.p2}</p>
        </div>
      </section>
    </>
  );
}

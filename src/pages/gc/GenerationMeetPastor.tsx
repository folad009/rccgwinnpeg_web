import { ChurchProfileSections } from "@/pages/gc/ChurchProfileSections";
import { lscSite } from "@/pages/gc/lscSiteContent";

export function GenerationMeetPastor() {
  return (
    <div className="pt-24 min-h-screen bg-church-bg">
      <div className="bg-slate-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Meet Our Pastors</h1>
          <p className="text-slate-300 max-w-2xl mx-auto px-6">{lscSite.pastors}</p>
          <p className="text-slate-400 text-sm mt-4 max-w-xl mx-auto">
            Servant-leaders of {lscSite.churchName} in {lscSite.cityLine}.
          </p>
        </div>
      </div>

      <ChurchProfileSections />
    </div>
  );
}

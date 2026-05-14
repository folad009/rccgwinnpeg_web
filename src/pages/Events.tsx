import { Events as EventsSection } from "@/components/Events";

export function Events() {
  return (
    <div className="pt-20">
      <div className="bg-slate-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Upcoming Events</h1>
        <p className="text-slate-300 max-w-xl mx-auto px-6">
          Stay up to date with what's happening in our church family.
        </p>
      </div>
      <EventsSection />
    </div>
  );
}

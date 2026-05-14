import { CalendarDays, Clock, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Worship Night: Encounter",
    date: "March 15, 2024",
    time: "7:00 PM",
    location: "Main Sanctuary",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Community Outreach",
    date: "March 22, 2024",
    time: "10:00 AM",
    location: "Downtown Winnipeg",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Easter Sunday Celebration",
    date: "March 31, 2024",
    time: "10:00 AM",
    location: "Main Sanctuary",
    image: "https://images.unsplash.com/photo-1533226458520-6f71cffe36aa?q=80&w=2670&auto=format&fit=crop"
  }
];

export function Events() {
  return (
    <section id="events" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-2 block">Upcoming</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Events Calendar</h2>
          </div>
          <a href="#" className="text-slate-900 font-medium hover:text-orange-600 flex items-center gap-2 group">
            View Full Calendar <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide text-slate-900">
                  Upcoming
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">{event.title}</h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="w-4 h-4 text-orange-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

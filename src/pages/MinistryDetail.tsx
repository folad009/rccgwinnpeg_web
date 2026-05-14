import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Mail, MapPin } from "lucide-react";
import { ministries } from "@/data/ministries";
import { useEffect } from "react";

export function MinistryDetail() {
  const { slug } = useParams();
  const ministry = ministries.find((m) => m.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!ministry) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Ministry not found</h1>
        <Link to="/ministries" className="text-orange-600 hover:underline mt-4 inline-block">
          Back to Ministries
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-[#fdfbf7]">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <Link to="/ministries" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Ministries
          </Link>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-sm text-white">
              <ministry.icon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">{ministry.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">About this Ministry</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {ministry.fullDescription}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Leadership</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {ministry.leaders.map((leader) => (
                  <div key={leader.name} className="flex items-center gap-4">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-slate-100"
                    />
                    <div>
                      <h3 className="font-bold text-slate-900">{leader.name}</h3>
                      <p className="text-sm text-orange-600 font-medium">{leader.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Meeting Schedule</h3>
              <div className="space-y-4">
                {ministry.schedule.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                    <Calendar className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">{item.day}</p>
                      <p className="text-sm text-slate-600">{item.time}</p>
                      <div className="flex items-center gap-1 mt-1 text-xs text-slate-500">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Want to Join?</h3>
              <p className="text-slate-300 mb-6 text-sm">
                We would love to have you be a part of the {ministry.title}. Reach out to us for more information.
              </p>
              <a 
                href={`mailto:${ministry.contactEmail}`}
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" /> Email Leader
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

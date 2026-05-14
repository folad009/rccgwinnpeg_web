import { Play } from "lucide-react";

export function Live() {
  return (
    <div className="pt-20 min-h-screen bg-slate-900">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">Live Service</h1>
          </div>
          
          <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-2xl mb-8 relative group">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/live_stream?channel=UCxxxxxxxxxxxx" 
              title="Live Service" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
            {/* Placeholder overlay if no stream */}
            <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center text-white z-10 pointer-events-none">
               <Play className="w-16 h-16 mb-4 opacity-50" />
               <p className="text-lg font-medium">Waiting for live stream...</p>
               <p className="text-sm text-slate-400">Sundays at 10:00 AM</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Service Notes</h2>
            <p className="text-slate-300 leading-relaxed">
              Welcome to our online service! We are so glad you joined us today. 
              Feel free to engage in the chat and let us know where you are watching from.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

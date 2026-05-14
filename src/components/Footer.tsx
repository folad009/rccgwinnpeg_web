import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="text-2xl font-serif font-bold text-white tracking-tight mb-6 block">
              RCCG <span className="text-orange-500">Living Seed</span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6">
              A place where God's love transforms lives. Join us as we grow together in faith and community.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/ministries" className="hover:text-orange-500 transition-colors">Ministries</Link></li>
              <li><Link to="/events" className="hover:text-orange-500 transition-colors">Events</Link></li>
              <li><Link to="/sermons" className="hover:text-orange-500 transition-colors">Sermons</Link></li>
              <li><Link to="/give" className="hover:text-orange-500 transition-colors">Give Online</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Service Times</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Sunday Service</span>
                <span className="text-white">10:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Bible Study (Wed)</span>
                <span className="text-white">7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Prayer (Fri)</span>
                <span className="text-white">7:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact & Connect</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <span>123 Church Street,<br />Winnipeg, MB R3C 1A1</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>(204) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>info@rccglivingseedwpg.com</span>
              </li>
            </ul>
            
            <h5 className="text-white font-bold mb-3 text-sm">Subscribe to Newsletter</h5>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors text-sm"
              />
              <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} RCCG Living Seed Winnipeg. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

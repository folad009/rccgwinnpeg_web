import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import { lscSite } from "@/pages/gc/lscSiteContent";

export function GenerationFooter() {
  const { social, socialHandle } = lscSite;

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 container mx-auto px-6">
      <div className=" border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} {lscSite.copyrightName}. All rights
          reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
      
    </footer>
  );
}

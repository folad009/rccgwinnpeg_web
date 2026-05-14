import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GenerationNavbar } from "@/components/gc/GenerationNavbar";
import { GenerationFooter } from "@/components/gc/GenerationFooter";
import { GenerationHome } from "@/pages/gc/GenerationHome";
import { GenerationAbout } from "@/pages/gc/GenerationAbout";
import { GenerationMeetPastor } from "@/pages/gc/GenerationMeetPastor";
import { GenerationVisit } from "@/pages/gc/GenerationVisit";
import { GenerationSermons } from "@/pages/gc/GenerationSermons";
import { GenerationConnect } from "@/pages/gc/GenerationConnect";
import { GenerationGive } from "@/pages/gc/GenerationGive";
import { GenerationVisitUs } from "@/pages/gc/GenerationVisitUs";
import { GenerationWatch } from "@/pages/gc/GenerationWatch";
import { GenerationEaster } from "@/pages/gc/GenerationEaster";
import { GenerationG101 } from "@/pages/gc/GenerationG101";
import { GenerationKids } from "@/pages/gc/GenerationKids";
import { GenerationYouth } from "@/pages/gc/GenerationYouth";
import { GenerationLifeGroups } from "@/pages/gc/GenerationLifeGroups";
import { GenerationAlpha } from "@/pages/gc/GenerationAlpha";
import { GenerationChosen } from "@/pages/gc/GenerationChosen";
import { GenerationBaptism } from "@/pages/gc/GenerationBaptism";
import { GenerationQueenCreekLaunch } from "@/pages/gc/GenerationQueenCreekLaunch";
import { GenerationKingdomBuilders } from "@/pages/gc/GenerationKingdomBuilders";
import { GenerationBeautifulGirl } from "@/pages/gc/GenerationBeautifulGirl";
import { GenerationBoldMen } from "@/pages/gc/GenerationBoldMen";
import { GenerationBlessedMarriage } from "@/pages/gc/GenerationBlessedMarriage";
import { GenerationSupportGroups } from "@/pages/gc/GenerationSupportGroups";
import { GenerationCelebrateRecovery } from "@/pages/gc/GenerationCelebrateRecovery";
import { GenerationChapel } from "@/pages/gc/GenerationChapel";
import { GenerationLeadershipCollege } from "@/pages/gc/GenerationLeadershipCollege";
import { GenerationYoungAdults } from "@/pages/gc/GenerationYoungAdults";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen font-sans text-slate-900 bg-[#fdfbf7]">
        <GenerationNavbar />
        <main>
          <Routes>
            <Route path="/" element={<GenerationHome />} />
            <Route path="/about" element={<GenerationAbout />} />
            <Route path="/meet-the-pastor" element={<GenerationMeetPastor />} />
            <Route path="/visit" element={<GenerationVisit />} />
            <Route path="/visit-us" element={<GenerationVisitUs />} />
            <Route path="/watch" element={<GenerationWatch />} />
            <Route path="/easter" element={<GenerationEaster />} />
            <Route path="/sermons" element={<GenerationSermons />} />
            <Route path="/connect" element={<GenerationConnect />} />
            <Route path="/give" element={<GenerationGive />} />

            {/* Connect destination pages */}
            <Route path="/generation-101" element={<GenerationG101 />} />
            <Route path="/kids" element={<GenerationKids />} />
            <Route path="/youth" element={<GenerationYouth />} />
            <Route path="/life-groups" element={<GenerationLifeGroups />} />
            <Route path="/alpha" element={<GenerationAlpha />} />
            <Route path="/chosen" element={<GenerationChosen />} />
            <Route path="/baptism" element={<GenerationBaptism />} />
            <Route path="/queen-creek-launch" element={<GenerationQueenCreekLaunch />} />
            <Route path="/kingdom-builders" element={<GenerationKingdomBuilders />} />

            {/* Additional Connect links */}
            <Route path="/beautiful-girl" element={<GenerationBeautifulGirl />} />
            <Route path="/bold-men" element={<GenerationBoldMen />} />
            <Route path="/blessed-marriage" element={<GenerationBlessedMarriage />} />
            <Route path="/support-groups" element={<GenerationSupportGroups />} />
            <Route path="/celebrate-recovery" element={<GenerationCelebrateRecovery />} />
            <Route path="/chapel" element={<GenerationChapel />} />
            <Route path="/leadership-college" element={<GenerationLeadershipCollege />} />
            <Route path="/young-adults" element={<GenerationYoungAdults />} />
          </Routes>
        </main>
        <GenerationFooter />
      </div>
    </BrowserRouter>
  );
}

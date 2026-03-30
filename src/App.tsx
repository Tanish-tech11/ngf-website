import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import AdmissionsApply from "./pages/AdmissionsApply";
import CampusLifePage from "./pages/CampusLifePage";
import PlacementsPage from "./pages/PlacementsPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import SportsPage from "./pages/SportsPage";
import ClubsPage from "./pages/ClubsPage";

// ✅ Placement pages
import PlacementCellPage from "./pages/PlacementCellPage";
import COEPage from "./pages/COEPage";
import PlacementPolicyPage from "./pages/PlacementPolicyPage";
import PlacementRecordsPage from "./pages/PlacementRecordPage";
import CorporateTieUpsPage from "./pages/CorporateTieUpsPage";
import JobFestPage from "./pages/JobFestPage";
import IndustrialVisitPage from "./pages/Industrial VisitPage";
import OnTheJobTrainingPage from "./pages/OnTheJobTrainingPage";
import GuestLecturePage from './pages/GuestLecturePage';
//import GuestLecturePage from "./pages/GuestLecturePage";
import AlumniClubPage from "./pages/AlumniClubPage";
import ForCorporatePage from "./pages/ForCorporatePage";

// About sub-pages
import HistoryPage from "./pages/about/HistoryPage";
import MissionVisionPage from "./pages/about/MissionVisionPage";
import InfrastructurePage from "./pages/about/InfrastructurePage";
import ChairpersonPage from "./pages/about/ChairpersonPage";
import CeoPage from "./pages/about/CeoPage";
import DirectorPrincipalPage from "./pages/about/DirectorPrincipalPage";
import DeanAcademicsPage from "./pages/about/DeanAcademicsPage";
import BoardOfGovernorsPage from "./pages/about/BoardOfGovernorsPage";
import FacultiesPage from "./pages/about/FacultiesPage";
import AffiliationsPage from "./pages/about/AffiliationsPage";
import AchievementsPage from "./pages/about/AchievementsPage";
import RadioNGFPage from "./pages/about/RadioNGFPage";

// B.Tech
import CSEPage from "./pages/departments/btech/CSEPage";
import CSEAIMLPage from "./pages/departments/btech/CSEAIMLPage";
import CSECyberSecurityPage from "./pages/departments/btech/CSECyberSecurityPage";
import ECEPage from "./pages/departments/btech/ECEPage";
import MechanicalPage from "./pages/departments/btech/MechanicalPage";
import ElectricalPage from "./pages/departments/btech/ElectricalPage";
import FashionApparelPage from "./pages/departments/btech/FashionApparelPage";

// M.Tech
import CSEMTechPage from "./pages/departments/mtech/CSEMTechPage";

// Management
import BBAGeneralPage from "./pages/departments/management/BBAGeneralPage";
import BBADigitalMarketingPage from "./pages/departments/management/BBADigitalMarketingPage";
import MBAPage from "./pages/departments/management/MBAPage";

// Computer Application
import BCAGeneralPage from "./pages/departments/computer-application/BCAGeneralPage";
import BCADataSciencePage from "./pages/departments/computer-application/BCADataSciencePage";
import MCAPage from "./pages/departments/computer-application/MCAPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>

          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* About */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/history" element={<HistoryPage />} />
          <Route path="/about/mission-vision" element={<MissionVisionPage />} />
          <Route path="/about/infrastructure" element={<InfrastructurePage />} />
          <Route path="/about/management/chairperson" element={<ChairpersonPage />} />
          <Route path="/about/management/ceo" element={<CeoPage />} />
          <Route path="/about/management/director-principal" element={<DirectorPrincipalPage />} />
          <Route path="/about/management/dean-academics" element={<DeanAcademicsPage />} />
          <Route path="/about/management/board-of-governors" element={<BoardOfGovernorsPage />} />
          <Route path="/about/faculties" element={<FacultiesPage />} />
          <Route path="/about/affiliations" element={<AffiliationsPage />} />
          <Route path="/about/achievements" element={<AchievementsPage />} />
          <Route path="/about/radio-ngf" element={<RadioNGFPage />} />

          {/* Departments */}
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/departments/btech/cse" element={<CSEPage />} />
          <Route path="/departments/btech/cse-aiml" element={<CSEAIMLPage />} />
          <Route path="/departments/btech/cse-cyber-security" element={<CSECyberSecurityPage />} />
          <Route path="/departments/btech/ece" element={<ECEPage />} />
          <Route path="/departments/btech/mechanical" element={<MechanicalPage />} />
          <Route path="/departments/btech/electrical" element={<ElectricalPage />} />
          <Route path="/departments/btech/fashion-apparel" element={<FashionApparelPage />} />

          {/* M.Tech */}
          <Route path="/departments/mtech/cse" element={<CSEMTechPage />} />

          {/* Management */}
          <Route path="/departments/management/bba-general" element={<BBAGeneralPage />} />
          <Route path="/departments/management/bba-digital-marketing" element={<BBADigitalMarketingPage />} />
          <Route path="/departments/management/mba" element={<MBAPage />} />

          {/* Computer Application */}
          <Route path="/departments/computer-application/bca-general" element={<BCAGeneralPage />} />
          <Route path="/departments/computer-application/bca-data-science" element={<BCADataSciencePage />} />
          <Route path="/departments/computer-application/mca" element={<MCAPage />} />

          {/* Admissions */}
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/admissions/apply" element={<AdmissionsApply />} />

          {/* Campus Life */}
          <Route path="/campus-life" element={<CampusLifePage />} />
          <Route path="/campus-life/sports" element={<SportsPage />} />
          <Route path="/campus-life/clubs" element={<ClubsPage />} />

          {/* Placements */}
          <Route path="/placements" element={<PlacementsPage />} />
          <Route path="/placements/policy" element={<PlacementPolicyPage />} />
          <Route path="/placements/record" element={<PlacementRecordsPage />} />
          <Route path="/placement-cell" element={<PlacementCellPage />} />
          <Route path="/coe" element={<COEPage />} />
          <Route path="/corporate-tieups" element={<CorporateTieUpsPage />} />
          <Route path="/placements/job-fest" element={<JobFestPage />} />
          <Route path="/placements/industrial-visit" element={<IndustrialVisitPage />} />
          <Route path="/placements/ojt" element={<OnTheJobTrainingPage />} />
          <Route path="/placements/guest-lecture" element={<GuestLecturePage />} />
          <Route path="/alumni-club" element={<AlumniClubPage />} />
          <Route path="/placements/for-corporate" element={<ForCorporatePage />} />

          {/* Other */}
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
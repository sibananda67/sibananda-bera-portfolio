import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { AutomationLab } from './components/AutomationLab';
import { ProblemToSystem } from './components/ProblemToSystem';
import { SystemMap } from './components/SystemMap';
import { CaseStudy } from './components/CaseStudy';
import { PricingSection } from './components/PricingSection';
import { AboutMe } from './components/AboutMe';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CursorGlow } from './components/CursorGlow';
import { AIPortfolioAssistant } from './components/AIPortfolioAssistant';
import { NotFoundPage } from './components/NotFoundPage';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [selectedServiceForBrief, setSelectedServiceForBrief] = useState<string | undefined>(undefined);
  const [selectedTierForBrief, setSelectedTierForBrief] = useState<string | undefined>(undefined);

  useEffect(() => {
    const checkRoute = () => {
      const hash = window.location.hash;
      // Explicit 404 triggers via hash '#404' or when navigating to undefined simulated paths
      if (hash === '#404') {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    };

    checkRoute();
    window.addEventListener('popstate', checkRoute);
    window.addEventListener('hashchange', checkRoute);
    return () => {
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('hashchange', checkRoute);
    };
  }, []);

  const handleReturnToSystem = () => {
    if (window.location.hash === '#404') {
      window.location.hash = '';
    }
    setIsNotFound(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isNotFound) {
    return (
      <ThemeProvider>
        <NotFoundPage onReturnToSystem={handleReturnToSystem} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#080a10] text-[#e2e8f0] relative selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Subtle Desktop Cursor Follower */}
        <CursorGlow />

        {/* Sticky Header Navigation */}
        <Navigation onOpenResume={() => setResumeOpen(true)} />

        {/* Main Information Architecture */}
        <main id="main-content" className="relative z-10">
          {/* 1. Hero (#hero) */}
          <Hero />

          {/* 2. Services (#services) - WHAT WE BUILD */}
          <ServicesSection onSelectService={(srv) => setSelectedServiceForBrief(srv)} />

          {/* 3. Solutions (#solutions) - By Industry & Scale */}
          <SolutionsSection />

          {/* 4. Interactive Problem to System Architecture Mapper */}
          <ProblemToSystem />

          {/* 5. Projects (#projects) - Real Production Systems */}
          <ProjectShowcase />

          {/* 6. Case Study: IngrediaMart Transformation */}
          <CaseStudy />

          {/* 7. Automation Lab (#automation-lab) - Live Interactive Simulator */}
          <AutomationLab />

          {/* 8. Interactive System Architecture Topology */}
          <SystemMap />

          {/* 9. Pricing (#pricing) - Engagement Models */}
          <PricingSection onSelectTier={(tier) => setSelectedTierForBrief(tier)} />

          {/* 10. About (#about) - Scalvtek Practice & Sibananda Bera */}
          <AboutMe />

          {/* 11. Contact (#contact) - Interactive Project Brief Builder */}
          <ContactSection 
            initialService={selectedServiceForBrief} 
            initialTier={selectedTierForBrief} 
          />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating AI Copilot (Scalvtek AI) */}
        <AIPortfolioAssistant />

        {/* Minimalist Structured Resume Modal */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </ThemeProvider>
  );
}

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AskPortfolioSearch } from './components/AskPortfolioSearch';
import { Introduction } from './components/Introduction';
import { SkillUniverse } from './components/SkillUniverse';
import { AIProjectRecommender } from './components/AIProjectRecommender';
import { ProjectShowcase } from './components/ProjectShowcase';
import { AutomationLab } from './components/AutomationLab';
import { ProblemToSystem } from './components/ProblemToSystem';
import { AIBusinessConsultant } from './components/AIBusinessConsultant';
import { SystemMap } from './components/SystemMap';
import { AISystemVisualizer } from './components/AISystemVisualizer';
import { CaseStudy } from './components/CaseStudy';
import { Timeline } from './components/Timeline';
import { AIResumeAssistant } from './components/AIResumeAssistant';
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

        {/* Main Sections Content */}
        <main id="main-content" className="relative z-10">
          <Hero />
          <AskPortfolioSearch />
          <Introduction />
          <SkillUniverse />
          <AIProjectRecommender />
          <ProjectShowcase />
          <AutomationLab />
          <ProblemToSystem />
          <AIBusinessConsultant />
          <SystemMap />
          <AISystemVisualizer />
          <CaseStudy />
          <Timeline />
          <AIResumeAssistant onOpenFullResume={() => setResumeOpen(true)} />
          <AboutMe />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating AI Assistant (SB AI) */}
        <AIPortfolioAssistant />

        {/* Minimalist Structured Resume Modal */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </ThemeProvider>
  );
}

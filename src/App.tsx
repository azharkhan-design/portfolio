import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from './data/projects';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { WorkSection } from './components/sections/WorkSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { AwardsSection } from './components/sections/AwardsSection';
import { ExpertiseSection } from './components/sections/ExpertiseSection';
import { LeadershipSection } from './components/sections/LeadershipSection';
// import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';
import { CaseStudyView } from './components/casestudy/CaseStudyView';
import { AboutPageView } from './components/about/AboutPageView';
import { FloatingCVButton } from './components/ui/FloatingCVButton';
import { CustomCursor } from './components/ui/CustomCursor';
import { ThemeProvider } from './context/ThemeContext';
import { SmoothScrollProvider, useSmoothScroll } from './context/SmoothScroll';

export const PortfolioApp: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isAboutView, setIsAboutView] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const { scrollTo, resize } = useSmoothScroll();
  const pendingSectionRef = useRef<string | null>(null);
  const isNavigatingRef = useRef<boolean>(false);

  // When switching from separate view (About / Case Study) to Home view,
  // scroll smoothly to target section once the DOM elements have mounted and rendered
  useEffect(() => {
    if (selectedProjectId || isAboutView) return;

    if (pendingSectionRef.current) {
      const targetId = pendingSectionRef.current;
      pendingSectionRef.current = null;
      isNavigatingRef.current = true;
      setActiveSection(targetId);

      // Reset scroll position instantly to top so the smooth animation glides gracefully to the target
      window.scrollTo({ top: 0, behavior: 'instant' });

      let rafId: number;
      const startTime = performance.now();

      const attemptScroll = (time: number) => {
        const el = targetId === 'hero' ? document.getElementById('hero') : document.getElementById(targetId);
        if ((targetId === 'hero') || (el && el.offsetHeight > 0)) {
          resize();
          if (targetId === 'hero') {
            scrollTo(0, { offset: 0, duration: 1.35 });
          } else if (el) {
            scrollTo(el, { offset: -70, duration: 1.45 });
          }
          setTimeout(() => {
            isNavigatingRef.current = false;
          }, 1500);
        } else if (time - startTime < 1600) {
          rafId = requestAnimationFrame(attemptScroll);
        } else {
          isNavigatingRef.current = false;
        }
      };

      rafId = requestAnimationFrame(attemptScroll);
      return () => cancelAnimationFrame(rafId);
    }
  }, [selectedProjectId, isAboutView, scrollTo, resize]);

  // Handle URL hash changes for deep linking (e.g. #project/big-language-solutions, #about, or #work)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('project/')) {
        const pId = hash.replace('project/', '');
        const exists = PROJECTS.find((p) => p.id === pId);
        if (exists) {
          pendingSectionRef.current = null;
          setSelectedProjectId(pId);
          setIsAboutView(false);
        } else {
          setSelectedProjectId(null);
        }
      } else if (hash === 'about') {
        pendingSectionRef.current = null;
        setSelectedProjectId(null);
        setIsAboutView(true);
        setActiveSection('about');
        scrollTo(0, { immediate: false, duration: 1.0 });
      } else {
        const wasOnSeparateView = !!selectedProjectId || isAboutView;
        setSelectedProjectId(null);
        setIsAboutView(false);
        if (hash) {
          setActiveSection(hash);
          if (wasOnSeparateView) {
            pendingSectionRef.current = hash;
          } else {
            if (hash === 'hero') {
              scrollTo(0, { offset: 0, duration: 1.35 });
            } else {
              const el = document.getElementById(hash);
              if (el) {
                scrollTo(el, { offset: -70, duration: 1.35 });
              }
            }
          }
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, [selectedProjectId, isAboutView, scrollTo]);

  // Update active section on scroll (when on home view)
  useEffect(() => {
    if (selectedProjectId || isAboutView) return;

    const sections = [
      'hero',
      'work',
      'experience',
      'awards',
      'expertise',
      'leadership',
      'contact'
    ];
    
    const handleScroll = () => {
      if (isNavigatingRef.current || pendingSectionRef.current) return;

      // 1. Bottom of page detection (Contact is the terminal section)
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 70;

      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      // 2. Iterate reverse so lowest scrolled-to section takes precedence
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top - 60) {
            if (sectionId === 'hero') {
              setActiveSection('hero');
            } else if (sectionId === 'work') {
              setActiveSection('work');
            } else if (['experience', 'awards', 'expertise', 'leadership'].includes(sectionId)) {
              setActiveSection('experience');
            } else if (sectionId === 'contact') {
              setActiveSection('contact');
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProjectId, isAboutView]);

  const handleNavigate = (sectionId: string) => {
    isNavigatingRef.current = true;
    setActiveSection(sectionId);

    if (sectionId === 'about') {
      pendingSectionRef.current = null;
      setSelectedProjectId(null);
      setIsAboutView(true);
      window.history.pushState(null, '', '#about');
      scrollTo(0, { immediate: false, duration: 1.0 });
      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 1100);
    } else {
      const wasOnSeparateView = !!selectedProjectId || isAboutView;
      if (wasOnSeparateView) {
        pendingSectionRef.current = sectionId;
        setSelectedProjectId(null);
        setIsAboutView(false);
        window.history.pushState(null, '', `#${sectionId}`);
      } else {
        window.history.pushState(null, '', `#${sectionId}`);
        if (sectionId === 'hero') {
          scrollTo(0, { offset: 0, duration: 1.35 });
        } else {
          const el = document.getElementById(sectionId);
          if (el) {
            scrollTo(el, { offset: -70, duration: 1.35 });
          }
        }
        setTimeout(() => {
          isNavigatingRef.current = false;
        }, 1500);
      }
    }
  };

  const handleSelectProject = (projectId: string) => {
    pendingSectionRef.current = null;
    setSelectedProjectId(projectId);
    setIsAboutView(false);
    window.history.pushState(null, '', `#project/${projectId}`);
    scrollTo(0, { immediate: true, duration: 0.1 });
  };

  const handleBackToHome = () => {
    pendingSectionRef.current = null;
    setSelectedProjectId(null);
    setIsAboutView(false);
    setActiveSection('hero');
    window.history.pushState(null, '', window.location.pathname);
    scrollTo(0, { immediate: false, duration: 1.2 });
  };

  const currentProject = selectedProjectId
    ? PROJECTS.find((p) => p.id === selectedProjectId)
    : null;

  return (
    <div className="min-h-screen bg-primary text-primary selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black flex flex-col justify-between">
      <Header
        onNavigate={handleNavigate}
        activeSection={activeSection}
        isCaseStudy={!!currentProject}
        isAboutPage={isAboutView}
        onBackToHome={handleBackToHome}
      />

      <main className="flex-1">
        {currentProject ? (
          <CaseStudyView
            project={currentProject}
            allProjects={PROJECTS}
            onSelectProject={handleSelectProject}
            onBackToHome={handleBackToHome}
          />
        ) : isAboutView ? (
          <AboutPageView
            onBackToHome={handleBackToHome}
            onNavigate={handleNavigate}
          />
        ) : (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <WorkSection
              projects={PROJECTS}
              onSelectProject={handleSelectProject}
            />
            <ExperienceSection />
            <AwardsSection />
            <ExpertiseSection />
            <LeadershipSection />
            {/* <TestimonialsSection /> */}
            <ContactSection onNavigate={handleNavigate} />
          </>
        )}
      </main>

      <FloatingCVButton />
      <CustomCursor />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <PortfolioApp />
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}

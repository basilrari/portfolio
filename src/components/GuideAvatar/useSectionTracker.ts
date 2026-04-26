'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface SectionInfo {
  id: string;
  message: string;
}

const sections: SectionInfo[] = [
  { id: 'hero', message: "Hey there! 👋 Nice to meet you!" },
  { id: 'about', message: "Want to know more about me?" },
  { id: 'projects', message: "Check out what I've built! 🚀" },
  { id: 'skills', message: "Here's my tech stack ⚡" },
  { id: 'contact', message: "Ready to work together? 🤝" },
];

export function useSectionTracker() {
  const [currentSection, setCurrentSection] = useState(0);
  const [bubbleVisible, setBubbleVisible] = useState(true);
  const bubbleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showBubble = useCallback((index: number) => {
    if (bubbleTimeoutRef.current) {
      clearTimeout(bubbleTimeoutRef.current);
    }
    setCurrentSection(index);
    setBubbleVisible(true);

    bubbleTimeoutRef.current = setTimeout(() => {
      setBubbleVisible(false);
    }, 4000);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((s) => s.id === entry.target.id);
            if (index !== -1 && index !== currentSection) {
              showBubble(index);
            }
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    // Show initial bubble
    showBubble(0);

    return () => {
      observer.disconnect();
      if (bubbleTimeoutRef.current) {
        clearTimeout(bubbleTimeoutRef.current);
      }
    };
  }, [currentSection, showBubble]);

  return {
    currentSection,
    currentMessage: sections[currentSection]?.message || '',
    bubbleVisible,
  };
}

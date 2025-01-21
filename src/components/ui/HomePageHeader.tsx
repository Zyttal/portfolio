"use client"

import Image from 'next/image';
import white_logo from "../../../public/logos/white_logo.svg";
import black_logo from "../../../public/logos/black_logo.svg";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const HomePageHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [menuOption, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    )

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => { window.removeEventListener('scroll', handleScroll); observer.disconnect(); }
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  }

  return <header className={`w-full py-2 fixed top-0 z-50 transition-all duration-300 ease-in-out
    ${scrolled || activeSection === 'experience' ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
    <div className='w-full px-6 sm:px-6 lg:px-12 py-4 flex items-center justify-between'>
      <div className='flex items-center'>
        <Image
          src={scrolled || activeSection === 'experience' ? black_logo : white_logo}
          alt={"Icon"}
          width={50}
          className="transition-opacity duration-300 ease-in-out"
        />
        <div className={`ml-8 font-bold transition-colors duration-300 ease-in-out text-lg 
      ${scrolled || activeSection === 'experience' ? 'text-primaryBlack' : 'text-primaryWhite'}`}>
          <p>Dev</p>
          <p>Zyttal</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {["about", "experience", "projects", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`text-xl font-bold px-4 py-2 transition-all ${scrolled || activeSection === 'experience'
              ? activeSection === section
                ? "scale-110 drop-shadow-lg shadow-black"
                : "text-primaryBlack"
              : activeSection === section
                ? "scale-110 drop-shadow-lg shadow-black"
                : "text-primaryWhite"
              }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
    </div>
  </header>;
}
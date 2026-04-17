import { useState, useEffect } from 'react';
import { Navbar } from './components/Layout';
import { Hero } from './components/Hero';
import { AboutExpertise } from './components/AboutExpertise';
import { Appointments } from './components/Appointments';
import { SocialProof } from './components/SocialProof';
import { Footer } from './components/Footer';
import { DOCTOR } from './data';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDarkSet = localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setIsDark(isDarkSet);
      if (isDarkSet) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextBool = !isDark;
    setIsDark(nextBool);
    if (nextBool) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-trust/30">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      
      <main>
        <Hero />
        <AboutExpertise />
        <Appointments />
        <SocialProof />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${DOCTOR.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block">
          Chat with us
        </span>
      </motion.a>
    </div>
  );
}

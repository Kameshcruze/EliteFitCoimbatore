import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';

const Layout: React.FC = () => {
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-dark">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      
      {/* Mobile Sticky CTA Bar */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-[100] flex gap-3 pointer-events-none">
        <a 
          href="tel:+917339472219" 
          className="flex-1 bg-white text-dark py-4 rounded-2xl flex items-center justify-center gap-2 font-black uppercase text-xs tracking-widest shadow-2xl pointer-events-auto active:scale-95 transition-transform"
        >
          <Phone size={18} /> Call Now
        </a>
        <a 
          href="https://wa.me/917339472219" 
          target="_blank"
          className="flex-1 bg-[#25D366] text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-black uppercase text-xs tracking-widest shadow-2xl pointer-events-auto active:scale-95 transition-transform"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>

      {/* Desktop Global Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/917339472219" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden lg:flex fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group ring-4 ring-white/10"
      >
        <MessageCircle className="text-white w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-dark px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          WhatsApp Inquiry
        </span>
      </a>
    </div>
  );
};

export default Layout;

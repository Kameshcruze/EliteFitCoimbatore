import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Dumbbell } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Membership', path: '/membership' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reviews', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-[9998] transition-all duration-500 py-4 px-6 md:px-12',
        isScrolled ? 'bg-dark/90 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="flex items-center space-x-2 group relative z-[9999]"
        >
          <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <Dumbbell className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-xl tracking-tighter leading-none">ELITE FIT</span>
            <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-brand uppercase">COIMBATORE</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors hover:text-brand relative truncate',
                location.pathname === link.path ? 'text-brand' : 'text-gray-300'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
          <Link
            to="/membership"
            className="bg-brand text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-alt transition-colors duration-300"
          >
            JOIN NOW
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2 relative z-[9999]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-dark z-[9999] flex flex-col p-8 lg:hidden overflow-y-auto h-screen w-screen"
          >
            <div className="flex justify-between items-center mb-12 flex-shrink-0">
              <Link to="/" onClick={handleLogoClick} className="flex items-center space-x-2">
                <Dumbbell className="text-brand w-8 h-8" />
                <span className="font-heading font-black text-2xl tracking-tighter">ELITE FIT</span>
              </Link>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'text-3xl font-heading font-bold',
                      location.pathname === link.path ? 'text-brand' : 'text-white'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-white/10">
               <a href="tel:+917339472219" className="flex items-center space-x-3 text-xl font-bold mb-8">
                 <Phone className="text-brand" />
                 <span>+91 73394 72219</span>
               </a>
               <Link
                to="/membership"
                className="block w-full bg-brand text-white text-center py-4 rounded-xl text-lg font-black uppercase tracking-wider"
              >
                Start Transformation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

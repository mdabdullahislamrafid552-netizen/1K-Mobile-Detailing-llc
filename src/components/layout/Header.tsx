import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { business } from '../../data/business';
import { assets } from '../../data/assets';
import { Button } from '../ui/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Memberships', path: '/memberships' },
    { name: 'Process', path: '/#process' },
    { name: 'Service Area', path: '/#service-area' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 md:top-[35px] ${
        isScrolled ? 'bg-page-black/90 backdrop-blur-md border-b border-soft-border' : 'bg-page-black/40 md:bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-[18px] md:px-[32px] py-4 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0 relative z-50">
          <img src={assets.logoMain} alt={business.name} className="h-[54px] md:h-[64px] lg:h-[72px] w-auto drop-shadow-lg" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-sm font-semibold tracking-wide text-ivory hover:text-gold-primary transition-colors uppercase">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href={business.textLink} className="text-ivory hover:text-gold-primary transition-colors p-2" aria-label="Text Us">
            <MessageSquare size={20} />
          </a>
          <Button asChild>
            <Link to="/book">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-ivory relative z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-0 left-0 w-full h-[100dvh] bg-page-black/95 backdrop-blur-xl flex flex-col pt-28 px-6 z-40"
            >
              <nav className="flex flex-col space-y-6 text-3xl font-serif">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.path} className="text-ivory hover:text-gold-primary transition-colors">
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pb-12 flex flex-col space-y-4">
                <a href={business.textLink} className="flex items-center justify-center space-x-2 py-4 border border-soft-border rounded-lg text-ivory">
                  <MessageSquare size={20} />
                  <span>Text Us</span>
                </a>
                <Link to="/book" className="flex justify-center py-4 bg-gold-primary text-black rounded-lg font-medium text-lg">
                  Book Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

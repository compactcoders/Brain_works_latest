import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from "@/assets/logo.png"; // or .svg


const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Our AI Models', href: '#solutions' },
  { name: 'Success Stories', href: '#trusted' },
  { name: 'Careers', href: '#careers' },
  { name: 'About Us', href: '#about' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
<motion.a
  href="#home"
  className="flex items-center gap-2"
  whileHover={{ scale: 1.05 }}
>
  <img
    src={logo}
    alt="BrainVoice AI Logo"
    className="w-8 h-8 object-contain"
    draggable="false"
  />

  <span className="font-display font-bold text-xl">
    BrainVoice.AI
  </span>
</motion.a>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-1 bg-muted/50 backdrop-blur-sm rounded-full px-2 py-1 border border-white/5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link px-4 py-2 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="hidden md:block btn-outline text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="btn-primary text-center mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

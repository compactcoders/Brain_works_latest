import { motion } from 'framer-motion';
import logo from "@/assets/logo.png"; // or .svg

export const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Case Studies', 'Documentation'],
    Company: ['About Us', 'Careers', 'Blog', 'Press'],
    Resources: ['Community', 'API Reference', 'Partners', 'Support'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  return (
    <footer className="py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
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
            <p className="text-sm text-muted-foreground">
              Architecting the neural pathways of the future enterprise.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 BrainVoice.AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

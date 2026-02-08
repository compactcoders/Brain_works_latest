import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Github } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-card/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Get in Touch
            </span>
            <h2 className="section-title mt-4 mb-6">
              Let's Build{' '}
              <span className="text-gradient-primary">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to transform your business with custom AI? Our team is here to help you 
              architect the perfect solution.
            </p>

            <div className="space-y-6">
              <motion.a
                href="mailto:hello@brainvoice.ai"
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">hello@brainvoice.ai</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+1234567890"
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+1 (234) 567-890</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">San Francisco, CA</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-10">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Github, href: '#' },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-white/5 focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-white/5 focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-white/5 focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-white/5 focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-white/5 focus:border-primary/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your AI needs..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

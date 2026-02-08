import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const companies = [
  { name: 'Adobe', size: 'lg' },
  { name: 'Square', size: 'md' },
  { name: '1Password', size: 'sm' },
  { name: 'NBA', size: 'lg' },
  { name: 'Motive', size: 'md' },
  { name: 'Checkr', size: 'sm' },
  { name: 'Twilio', size: 'lg' },
  { name: 'Broadcom', size: 'md' },
  { name: 'Sendoso', size: 'sm' },
  { name: 'Brex', size: 'lg' },
  { name: 'Univision', size: 'md' },
  { name: 'Stripe', size: 'sm' },
];

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'lg': return 'w-20 h-20 text-sm';
    case 'md': return 'w-16 h-16 text-xs';
    case 'sm': return 'w-12 h-12 text-[10px]';
    default: return 'w-16 h-16 text-xs';
  }
};

export const TrustedBySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} id="trusted" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-6">
              Trusted by companies that demand{' '}
              <span className="text-gradient-primary">AI excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              From manufacturing giants to tech innovators, leading enterprises choose 
              BrainVoice AI for custom solutions that integrate seamlessly and deliver 
              exceptional ROI.
            </p>
            
            {/* Success Rate Badge */}
            <motion.div
              className="glass-card inline-flex items-center gap-4 p-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-display font-bold text-gradient-primary">
                98%
              </div>
              <div className="text-muted-foreground">
                Project success rate
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Floating Logos Circle */}
          <motion.div 
            className="relative h-[500px] flex items-center justify-center"
            style={{ y }}
          >
            {/* Central Circle */}
            <div className="absolute w-64 h-64 rounded-full border border-white/10 animate-spin-slow" />
            <div className="absolute w-80 h-80 rounded-full border border-white/5 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
            
            {/* Floating Logos */}
            {companies.map((company, index) => {
              const angle = (index / companies.length) * 2 * Math.PI;
              const radius = 120 + (index % 3) * 40;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={company.name}
                  className={`absolute glass-card flex items-center justify-center font-semibold ${getSizeClasses(company.size)}`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, Math.sin(index) * 15, 0],
                    x: [0, Math.cos(index) * 10, 0],
                  }}
                  transition={{
                    y: { duration: 2 + index * 0.2, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 2.5 + index * 0.2, repeat: Infinity, ease: "easeInOut" },
                    opacity: { delay: index * 0.1, duration: 0.5 },
                    scale: { delay: index * 0.1, duration: 0.5 },
                  }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                >
                  <span className="text-muted-foreground">{company.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

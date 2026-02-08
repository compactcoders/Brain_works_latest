import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Settings, ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 hero-grid opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      {/* Glow Effects */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(175 80% 50% / 0.2), transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Processing Card - Left */}
      <motion.div
        className="absolute left-[5%] top-1/3 hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={{ y }}
      >
        <motion.div
          className="floating-card flex items-center gap-3"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
            <Settings className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-sm text-foreground">Processing...</p>
            <div className="w-32 h-1.5 bg-muted rounded-full mt-1 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-accent/50 rounded-full"
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Latency Card - Right */}
      <motion.div
        className="absolute right-[5%] bottom-1/3 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{ y }}
      >
        <motion.div
          className="floating-card"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Latency</span>
            <span className="text-sm text-success font-mono">12ms</span>
          </div>
          <div className="flex gap-1">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-6 rounded-sm"
                style={{
                  backgroundColor: i < 5 ? 'hsl(145 80% 45%)' : 'hsl(145 80% 45% / 0.3)',
                }}
                animate={i < 5 ? {
                  height: [24, 16, 24],
                } : {}}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ y, opacity, scale }}
      >
        {/* Large Typography Hero */}
        <motion.h1
          className="font-display text-[clamp(4rem,15vw,14rem)] font-bold leading-[0.85] tracking-tight cursor-pointer group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-gradient block transition-all duration-500 group-hover:drop-shadow-[0_0_60px_rgba(0,200,180,0.8)] group-hover:text-white">BRAIN</span>
          <span className="text-gradient block transition-all duration-500 group-hover:drop-shadow-[0_0_60px_rgba(50,220,120,0.8)] group-hover:text-white">VOICE</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-light italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Architecting the neural pathways of the future enterprise.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.a
            href="#solutions"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get your custom AI blueprint
          </motion.a>
          <motion.a
            href="#about"
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs text-muted-foreground tracking-[0.3em] uppercase">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

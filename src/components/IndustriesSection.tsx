import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const industries = [
  {
    title: 'AI x Healthcare',
    description: 'Revolutionizing patient care with predictive diagnostics and personalized treatment plans.',
    gradient: 'from-secondary to-secondary/50',
  },
  {
    title: 'Manufacturing',
    description: 'Smart factories powered by predictive maintenance and quality control AI.',
    gradient: 'from-primary to-primary/50',
  },
  {
    title: 'Banking',
    description: 'Intelligent fraud detection and automated risk assessment systems.',
    gradient: 'from-accent to-accent/50',
  },
  {
    title: 'Retail',
    description: 'Personalized shopping experiences and inventory optimization.',
    gradient: 'from-success to-success/50',
  },
];

const CARD_WIDTH = 360;
const GAP = 24;
const AUTO_DELAY = 3500;
const RESUME_DELAY = 400;

/* Infinite loop setup */
const LOOPED = [...industries, ...industries, ...industries];
const START_INDEX = industries.length;

export const IndustriesSection = () => {
  const [index, setIndex] = useState(START_INDEX);
  const [animate, setAnimate] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  /* ---------- Autoplay (controlled) ---------- */
  const startAutoplay = () => {
    stopAutoplay();
    timerRef.current = setTimeout(() => {
      setIndex((i) => i + 1);
    }, AUTO_DELAY);
  };

  const stopAutoplay = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  useEffect(() => {
    if (!isHovering) startAutoplay();
    return stopAutoplay;
  }, [index, isHovering]);

  /* ---------- Seamless infinite reset ---------- */
  useEffect(() => {
    if (index >= START_INDEX + industries.length) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(START_INDEX);
      }, 450);
    }

    if (index < START_INDEX) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(START_INDEX + industries.length - 1);
      }, 450);
    }
  }, [index]);

  useEffect(() => {
    if (!animate) requestAnimationFrame(() => setAnimate(true));
  }, [animate]);

  /* ---------- Manual navigation ---------- */
  const goNext = () => {
    stopAutoplay();
    setIndex((i) => i + 1);
    setTimeout(startAutoplay, RESUME_DELAY);
  };

  const goPrev = () => {
    stopAutoplay();
    setIndex((i) => i - 1);
    setTimeout(startAutoplay, RESUME_DELAY);
  };

  const centerOffset = CARD_WIDTH + GAP;
  const x = -(index * (CARD_WIDTH + GAP)) + centerOffset;

  return (
    <section id="industries" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            AI Meets{' '}
            <span className="text-gradient-primary">Manufacturing Floor</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforming industries with intelligent automation
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Arrows */}
          <motion.button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          {/* Track */}
          <div className="overflow-hidden max-w-[1200px] mx-auto">
            <motion.div
              className="flex gap-6"
              animate={{ x }}
              transition={
                animate
                  ? { type: 'spring', stiffness: 170, damping: 24 }
                  : { duration: 0 }
              }
            >
              {LOOPED.map((industry, i) => {
                const isActive = i === index;

                return (
                  <motion.div
  key={`${industry.title}-${i}`}
  style={{ width: CARD_WIDTH }}
  className="flex-shrink-0 relative"
  whileHover={
    isActive
      ? { scale: 1.02 }
      : {}
  }
  transition={{ duration: 0.25, ease: 'easeOut' }}
  animate={{
    scale: isActive ? 1 : 0.82,
    opacity: isActive ? 1 : 0.4,
    filter: isActive ? 'blur(0px)' : 'blur(2px)',
  }}
>

                    <div className="glass-card p-6 h-full cursor-pointer">
                      <div
                        className={`h-44 rounded-xl bg-gradient-to-br ${industry.gradient} mb-6 flex items-center justify-center`}
                      >
                        <Play className="w-12 h-12 text-background/50" />
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        {industry.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-display font-bold">
                          {industry.title}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {industries.map((_, i) => {
              const realIndex = index % industries.length;
              return (
                <motion.button
                  key={i}
                  onClick={() => setIndex(START_INDEX + i)}
                  className="w-2.5 h-2.5 rounded-full"
                  animate={{
                    backgroundColor:
                      realIndex === i
                        ? 'hsl(var(--primary))'
                        : 'hsl(var(--muted))',
                    scale: realIndex === i ? 1.3 : 1,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Play } from 'lucide-react';
import { useRef, useState } from 'react';

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

export const IndustriesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section id="industries" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
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

        {/* Industry Cards Carousel with Arrow Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <motion.button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center transition-opacity ${canScrollLeft ? 'opacity-100' : 'opacity-30 cursor-not-allowed'}`}
            whileHover={canScrollLeft ? { scale: 1.1 } : {}}
            whileTap={canScrollLeft ? { scale: 0.95 } : {}}
            disabled={!canScrollLeft}
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center transition-opacity ${canScrollRight ? 'opacity-100' : 'opacity-30 cursor-not-allowed'}`}
            whileHover={canScrollRight ? { scale: 1.1 } : {}}
            whileTap={canScrollRight ? { scale: 0.95 } : {}}
            disabled={!canScrollRight}
          >
            <ArrowRight className="w-5 h-5 text-foreground" />
          </motion.button>

          <div 
            ref={scrollRef}
            onScroll={checkScrollButtons}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-14"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                className="flex-shrink-0 w-80 snap-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="glass-card p-6 h-full group cursor-pointer"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Card Image Placeholder */}
                  <div className={`h-40 rounded-xl bg-gradient-to-br ${industry.gradient} mb-6 flex items-center justify-center overflow-hidden relative`}>
                    <motion.div
                      className="absolute inset-0 bg-background/20"
                      whileHover={{ opacity: 0 }}
                    />
                    <Play className="w-12 h-12 text-background/50" />
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    {industry.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-display font-bold">{industry.title}</h3>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

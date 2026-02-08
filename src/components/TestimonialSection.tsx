import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "BrainVoice AI transformed our manufacturing process completely. Their custom AI models reduced our defect rate by 94% and saved us millions in quality control costs. The team's expertise is unmatched.",
    name: 'Jacob Thompson',
    role: 'CEO, Manufacturing Corp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote: "Working with BrainVoice was a game-changer for our IT infrastructure. Their AI-powered solutions automated 80% of our routine tasks, allowing our team to focus on innovation and strategic initiatives.",
    name: 'Sarah Martinez',
    role: 'CTO, IT Solutions Company',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote: "The predictive analytics platform they built for us has revolutionized how we approach customer retention. We've seen a 340% increase in customer lifetime value since implementation.",
    name: 'Michael Chen',
    role: 'VP of Data, FinTech Startup',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
];

export const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="section-title mt-4">
            Voices of Trust: Client Stories,{' '}
            <span className="text-gradient-primary">Testimonials</span> That Illuminate Our Shared Success.
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

              <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 relative z-10 pl-8">
                "{testimonials[current].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <motion.img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <h4 className="font-display font-bold text-lg">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-muted/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'w-8 bg-primary'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-muted/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

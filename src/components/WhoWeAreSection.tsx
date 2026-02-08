import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const metrics = [
  { value: '200+', label: 'Custom AI Models' },
  { value: '50+', label: 'Industries Served' },
  { value: '340%', label: 'Average ROI Increase' },
  { value: '72 hrs', label: 'Proof of Concept' },
];

export const WhoWeAreSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <section ref={ref} id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        style={{
          background: 'radial-gradient(circle at 70% 30%, hsl(175 80% 50% / 0.3), transparent 60%)',
          y: y1,
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Image with Parallax */}
          <motion.div
            className="relative"
            style={{ y: y2 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-card flex items-center justify-center">
                <motion.div
                  className="text-6xl font-display font-bold text-gradient opacity-30"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                >
                  AI
                </motion.div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-3xl font-display font-bold text-gradient-primary">98%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div style={{ opacity }}>
            <motion.span
              className="text-primary font-medium tracking-wider uppercase text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Who We Are
            </motion.span>

            <motion.h2
              className="section-title mt-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              We are{' '}
              <span className="text-gradient-primary">"AI Architects"</span>
            </motion.h2>

            <motion.h3
              className="text-2xl font-display mb-4 text-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We build what others can't.
            </motion.h3>

            <motion.p
              className="text-muted-foreground mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Our team of machine learning experts, data scientists, and industry specialists 
              creates custom AI models that solve real business problems—not generic ones.
            </motion.p>

            <motion.p
              className="text-muted-foreground mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              From computer vision and natural language processing to predictive analytics 
              and process automation, we engineer AI solutions that integrate perfectly with 
              your existing systems and deliver measurable impact.
            </motion.p>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-semibold group mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ x: 5 }}
            >
              Know more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Metrics Boxes - Right side below Know more */}
            <motion.div
              className="grid grid-cols-4 gap-2 mt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="metric-box p-2 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="text-lg font-display font-bold text-gradient-primary">
                    {metric.value}
                  </div>
                  <div className="text-[10px] text-muted-foreground leading-tight">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

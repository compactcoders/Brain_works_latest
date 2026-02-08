import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Cpu, Shield, Zap, Network } from 'lucide-react';

const solutions = [
  {
    id: 'neural',
    title: 'Neural Architecture',
    description: 'Designing the brain of your enterprise. We build custom neural networks that map specifically to your business logic, not generic pre-trained models.',
    icon: Cpu,
    color: 'from-accent to-accent/50',
    details: [
      'Custom neural network design',
      'Business-specific model training',
      'Seamless integration with existing systems',
      'Real-time inference capabilities',
    ],
  },
  {
    id: 'generative',
    title: 'Generative Ecosystems',
    description: 'Create intelligent content generation systems that understand your brand voice and produce high-quality outputs at scale.',
    icon: Network,
    color: 'from-primary to-primary/50',
    details: [
      'Content generation at scale',
      'Brand-aware AI systems',
      'Multi-modal output support',
      'Quality assurance automation',
    ],
  },
  {
    id: 'security',
    title: 'Cognitive Security',
    description: 'Deploy AI-powered security systems that learn and adapt to new threats in real-time, protecting your digital assets 24/7.',
    icon: Shield,
    color: 'from-secondary to-secondary/50',
    details: [
      'Threat detection & prevention',
      'Anomaly recognition',
      'Adaptive security protocols',
      'Compliance automation',
    ],
  },
  {
    id: 'inference',
    title: 'Real-time Inference',
    description: 'Lightning-fast AI predictions with sub-millisecond latency. Deploy models that respond instantly to your business needs.',
    icon: Zap,
    color: 'from-success to-success/50',
    details: [
      'Sub-millisecond response times',
      'Edge deployment ready',
      'Auto-scaling infrastructure',
      'High availability guarantee',
    ],
  },
];

export const SolutionsSection = () => {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id);

  const active = solutions.find((s) => s.id === activeSolution)!;
  const Icon = active.icon;

  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            AI Solutions
          </span>
          <h2 className="section-title mt-4">
            Our <span className="text-gradient-primary">Solutions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Solution List */}
          <div className="space-y-2">
            {solutions.map((solution, index) => {
              const isActive = activeSolution === solution.id;
              
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setActiveSolution(solution.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? 'bg-card border border-white/10'
                        : 'hover:bg-card/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${solution.color} transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                      <h3
                        className={`text-2xl md:text-3xl font-display font-bold transition-colors ${
                          isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground/80'
                        }`}
                      >
                        {solution.title}
                      </h3>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 ml-4 text-muted-foreground leading-relaxed">
                            {solution.description}
                          </p>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 ml-4 mt-4 text-primary font-semibold group/link"
                          >
                            EXPLORE
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Right - Dynamic Visual */}
          <motion.div
            className="sticky top-32"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 rounded-2xl relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 hero-grid" />
                </div>

                {/* Floating dots */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full bg-foreground/50"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-accent/50"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />

                {/* Icon Display */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${active.color} p-[1px]`}
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  >
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                      <Icon className="w-10 h-10 text-foreground" />
                    </div>
                  </motion.div>
                </div>

                {/* Status Console */}
                <div className="space-y-2 font-mono text-sm">
                  <motion.div
                    className="text-accent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {'>'} INITIATING SEQUENCE...
                  </motion.div>
                  <motion.div
                    className="text-accent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {'>'} LOADING MODULE: {active.title.toUpperCase()}
                  </motion.div>
                  <motion.div
                    className="text-success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {'>'} STATUS: OPTIMAL
                  </motion.div>
                </div>

                {/* Feature List */}
                <div className="mt-8 space-y-3">
                  {active.details.map((detail, index) => (
                    <motion.div
                      key={detail}
                      className="flex items-center gap-3 text-muted-foreground"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${active.color}`} />
                      {detail}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

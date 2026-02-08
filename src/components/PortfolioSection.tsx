import { motion } from "framer-motion";
import { BrainNetworkGraphic } from "@/components/portfolio/BrainNetworkGraphic";

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Portfolio
          </span>
          <h2 className="section-title mt-4">
            <span className="text-gradient-primary">Technologies</span> We Master
          </h2>
        </motion.div>

        {/* Brain image (from your reference) + effects */}
        <BrainNetworkGraphic />

        {/* Featured Project */}
        <motion.div
          className="glass-card p-8 mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs text-primary uppercase tracking-wider">Category</span>
          <h3 className="text-2xl md:text-3xl font-display font-bold mt-2 mb-4">
            Dave Financial CRM
          </h3>
          <p className="text-muted-foreground">
            A comprehensive AI-powered CRM solution that revolutionized client management
            with predictive analytics and automated workflows.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, ArrowRight, Send } from 'lucide-react';

const jobs = [
  {
    title: 'Senior Machine Learning Engineer',
    location: 'Remote / Chennai',
    type: 'Full-time',
    department: 'Engineering',
  },
  {
    title: 'AI Research Scientist',
    location: 'Chennai, India',
    type: 'Full-time',
    department: 'Research',
  },
  {
    title: 'Data Engineer',
    location: 'Remote',
    type: 'Full-time',
    department: 'Engineering',
  },
  {
    title: 'AI Product Manager',
    location: 'Chennai, India',
    type: 'Full-time',
    department: 'Product',
  },
];

export const CareerSection = () => {
  return (
    <section id="careers" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-grid opacity-30" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Header & Newsletter */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Careers
              </span>
              <h2 className="section-title mt-4 mb-6">
                Be a part of futuristic{' '}
                <span className="text-gradient-primary">AI automations</span>{' '}
                implementation in the industry
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                The first financial tool you'll love. And the last one you'll ever need.
              </p>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-4">Join the newsletter</h3>
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-muted/50 border border-white/5 focus:border-primary/50 focus:outline-none transition-colors"
                />
                <motion.button
                  type="submit"
                  className="btn-primary px-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Right - Job Listings */}
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                className="glass-card p-6 group cursor-pointer hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    className="flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

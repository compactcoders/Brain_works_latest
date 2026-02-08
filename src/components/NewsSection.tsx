import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

const articles = [
  {
    title: 'The Future of Enterprise AI: Trends to Watch in 2024',
    excerpt: 'Discover the emerging AI technologies that will reshape how businesses operate and compete in the coming year.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    category: 'AI Trends',
    author: 'Alex Turner',
    date: 'January 15, 2024',
  },
  {
    title: 'Building Scalable ML Pipelines: A Complete Guide',
    excerpt: 'Learn best practices for designing and deploying machine learning pipelines that scale with your business needs.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    category: 'Engineering',
    author: 'Sarah Chen',
    date: 'January 10, 2024',
  },
  {
    title: 'How Neural Networks Are Transforming Healthcare',
    excerpt: 'Explore real-world applications of deep learning in medical diagnosis and patient care optimization.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
    category: 'Healthcare',
    author: 'Michael Ross',
    date: 'January 5, 2024',
  },
];

export const NewsSection = () => {
  return (
    <section id="news" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Browse our <span className="text-gradient-primary">latest news</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in AI and machine learning.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              className="glass-card overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

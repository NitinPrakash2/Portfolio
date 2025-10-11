import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    description: 'Modern shopping experience with Next.js and Stripe integration',
    image: '/projects/project1.jpg',
  },
  {
    id: 2,
    name: 'Portfolio Dashboard',
    description: 'Interactive analytics dashboard with real-time data visualization',
    image: '/projects/project2.jpg',
  },
  {
    id: 3,
    name: 'Social Media App',
    description: 'Full-stack social platform with real-time messaging',
    image: '/projects/project3.jpg',
  },
];

export default function Projects() {
  return (
    <section data-aos="fade-up" className="bg-black py-16 sm:py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 sm:mb-16">
          Featured Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 1.05, backgroundColor: '#F3F4F6' }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
              className="group relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer"
            >
              <div className="aspect-video bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold text-lg">View Project →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

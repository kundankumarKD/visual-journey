import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Neon E-Commerce',
        category: 'E-Commerce',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'A futuristic fashion store with 3D product previews and AI recommendations.',
        tags: ['React', 'Three.js', 'Shopify'],
    },
    {
        title: 'FinTech Dashboard',
        category: 'Web App',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Real-time financial analytics platform for crypto trading and asset management.',
        tags: ['Next.js', 'Tailwind', 'Recharts'],
    },
    {
        title: 'HealthAI Chatbot',
        category: 'AI & Chatbot',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Conversational AI assistant for preliminary medical diagnosis and appointment scheduling.',
        tags: ['Python', 'OpenAI', 'React'],
    },
    {
        title: 'Travel Companion App',
        category: 'Mobile App',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Social travel planner app with itinerary sharing and local guide booking.',
        tags: ['React Native', 'Firebase', 'Maps'],
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-slate-400 max-w-xl">
                            Explore our latest work across different industries and technologies.
                        </p>
                    </div>
                    <button className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium">
                        View All Projects
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/5"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <button className="p-3 rounded-full bg-white text-slate-900 hover:bg-blue-50 transition-colors">
                                        <ExternalLink size={20} />
                                    </button>
                                    <button className="p-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors">
                                        <Github size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-xs font-medium text-blue-400 mb-2 block">{project.category}</span>
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-sm mb-6">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/5 text-slate-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

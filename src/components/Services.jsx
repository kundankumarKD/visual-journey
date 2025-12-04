import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Smartphone, Globe, MessageSquare, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: <ShoppingCart className="w-8 h-8 text-blue-400" />,
        title: 'Ecommerce Solutions',
        description: 'Custom online stores built for conversion. We specialize in Shopify, WooCommerce, and headless commerce architectures.',
        color: 'from-blue-500/20 to-blue-600/5',
    },
    {
        icon: <Smartphone className="w-8 h-8 text-purple-400" />,
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.',
        color: 'from-purple-500/20 to-purple-600/5',
    },
    {
        icon: <Globe className="w-8 h-8 text-cyan-400" />,
        title: 'Custom Web Development',
        description: 'Tailor-made web applications using the latest technologies like React, Next.js, and Node.js to solve complex business problems.',
        color: 'from-cyan-500/20 to-cyan-600/5',
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-green-400" />,
        title: 'AI & Chatbots',
        description: 'Intelligent conversational agents and AI integration to automate support and enhance user engagement 24/7.',
        color: 'from-green-500/20 to-green-600/5',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        We deliver cutting-edge digital solutions tailored to your business needs, from storefronts to intelligent automation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            <div className="relative z-10">
                                <div className="mb-6 inline-block p-3 rounded-xl bg-slate-800/50 border border-white/5">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <a href="#" className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

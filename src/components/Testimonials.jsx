import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, TechStart',
        content: 'Xenecomm transformed our e-commerce platform. Their attention to detail and modern design approach increased our conversion rates by 40%.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
        name: 'Michael Chen',
        role: 'Founder, DataFlow',
        content: 'The AI chatbot solution they built for us is incredible. It handles 80% of our customer queries automatically. Highly recommended!',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
        name: 'Emily Davis',
        role: 'Marketing Director, StyleHub',
        content: 'Professional, creative, and timely. The custom web application they developed has streamlined our entire workflow.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our partners have to say about working with Xenecomm.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 relative"
                        >
                            <Quote className="absolute top-8 right-8 text-blue-500/20 w-10 h-10" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>

                            <p className="text-slate-300 mb-8 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/20"
                                />
                                <div>
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

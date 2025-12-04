import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Clock } from 'lucide-react';

const stats = [
    { icon: <Users className="w-6 h-6 text-blue-400" />, value: '50+', label: 'Happy Clients' },
    { icon: <Target className="w-6 h-6 text-purple-400" />, value: '100+', label: 'Projects Delivered' },
    { icon: <Award className="w-6 h-6 text-cyan-400" />, value: '15+', label: 'Awards Won' },
    { icon: <Clock className="w-6 h-6 text-green-400" />, value: '5+', label: 'Years Experience' },
];

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Innovating for the <span className="text-blue-500">Digital Era</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                            Founded in 2020, Xenecomm Software Technology has been at the forefront of digital transformation. We are a team of passionate developers, designers, and strategists dedicated to building software that matters.
                        </p>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Our mission is to empower businesses with scalable, secure, and intelligent technology solutions. From simple websites to complex AI-driven ecosystems, we bring your vision to life with precision and creativity.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="p-4 rounded-xl bg-slate-900/50 border border-white/5">
                                    <div className="flex items-center gap-3 mb-2">
                                        {stat.icon}
                                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                                    </div>
                                    <p className="text-sm text-slate-500">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <p className="text-white font-bold text-xl">Our Team</p>
                                <p className="text-slate-300">Building the future, together.</p>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

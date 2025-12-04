import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Bot } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" />
                <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm text-slate-300">Available for new projects</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Building the <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                            Future of Digital
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        At <strong>Xenecomm Software Technology</strong>, we craft premium ecommerce experiences, custom web applications, and intelligent AI chatbots that drive growth and engagement.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-200 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group">
                            View Our Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-semibold transition-all duration-200 backdrop-blur-sm">
                            Contact Us
                        </button>
                    </div>
                </motion.div>

                {/* Floating Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute top-1/2 left-10 hidden lg:block"
                >
                    <div className="p-4 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl animate-float-slow">
                        <Code className="w-8 h-8 text-blue-400" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="absolute bottom-20 right-10 hidden lg:block"
                >
                    <div className="p-4 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl animate-float-delayed">
                        <Bot className="w-8 h-8 text-purple-400" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

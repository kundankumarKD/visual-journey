import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

import Testimonials from './components/Testimonials';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <footer className="py-8 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Xenecomm Software Technology. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}

export default App;

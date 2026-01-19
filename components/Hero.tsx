import React, { useEffect, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Product3D from './Product3D';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-brand-cream flex items-center">

      {/* Background Parallax Elements */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-orange-200/40 rounded-full blur-[100px] animate-pulse-slow pointer-events-none mix-blend-multiply"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-brand-vanilla/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"
        style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 z-10 lg:pr-12 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-100 px-4 py-2 rounded-full mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex -space-x-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-5 h-5 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                    <span className="text-[6px]">👤</span>
                  </div>
                ))}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Trusted by 500+ Teams</span>
            </div>

            <h1 className="text-6xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] mb-8 text-brand-black animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              FUEL YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-black to-gray-500">TEAM.</span>
            </h1>

            <p className="text-gray-600 text-lg lg:text-xl font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              The high-protein pudding designed for modern workforces. <br className="hidden lg:block" />
              Real ingredients. Zero compromise. Delightfully simple.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-brand-black text-white px-8 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('flavors')}
                className="bg-white border border-gray-200 text-brand-black px-8 py-5 rounded-full font-bold uppercase tracking-widest hover:border-black hover:bg-gray-50 transition-all"
              >
                View Flavors
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 border-t border-gray-200/60 pt-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-center lg:text-left">
                <div className="font-black text-3xl text-brand-black">30g</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Net Protein</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-black text-3xl text-brand-black">0g</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Refined Sugar</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-black text-3xl text-brand-black">4.9</div>
                <div className="flex items-center justify-center lg:justify-start space-x-1 mt-1">
                  <Star size={10} className="fill-brand-black text-brand-black" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="w-full lg:w-1/2 mt-20 lg:mt-0 relative flex justify-center perspective-1000 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>

            {/* 3D Product Simulation with Image */}
            <div
              className="relative z-10 transform transition-transform duration-100 ease-out"
            >
              <div className="animate-float">
                <Product3D
                  colorFrom="#6b584d"
                  colorTo="#46362e"
                  accentColor="#382b24"
                  imageSrc="https://i.ibb.co/ksrZ9v6x/Gemini-Generated-Image-4v3azw4v3azw4v3a-Photoroom.png"
                  scale={1}
                  rotation={-10 + (scrollY * 0.05)} // Scroll Rotate Link
                />
              </div>
            </div>

            {/* Decorative Elements around product */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-orange-200/30 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-dashed border-gray-900/5 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none"></div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <div className="w-[1px] h-12 bg-gray-400"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Leaf, Dumbbell, Ban, ShieldCheck, Heart, Zap } from 'lucide-react';

const Ingredients: React.FC = () => {
  const benefits = [
    { icon: <Leaf size={24} />, title: "CLEAN INGREDIENTS", desc: "No artificial flavors, colors, or preservatives" },
    { icon: <Dumbbell size={24} />, title: "30G PROTEIN", desc: "Complete amino acid profile for steady energy" },
    { icon: <Ban size={24} />, title: "NO REFINED SUGAR", desc: "Zero sugar added policy." },
    { icon: <ShieldCheck size={24} />, title: "GLUTEN FREE", desc: "Easily digestigle." },
    { icon: <Heart size={24} />, title: "GUT FRIENDLY", desc: "Made only with natural ingredients" },
    { icon: <Zap size={24} />, title: "READY TO EAT", desc: "No prep, no mess, grab and go" },
  ];

  const features = [
    "GLUTEN\nFREE",
    "GOOD SOURCE\nOF FIBER",
    "NO REFINED\nSUGAR",
    "PROTEIN\nPACKED",
    "READY\nTO EAT"
  ];

  return (
    <section id="ingredients" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 uppercase">
            OUR SECRET INGREDIENT?<br/>REAL ONES.
          </h2>
          <p className="text-gray-400 text-lg">
            We believe high-performance nutrition should taste incredible without compromise. Every ingredient is carefully selected for quality and efficacy.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24 px-4 lg:px-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 border border-gray-700 rounded-full flex items-center justify-center mb-6 text-white bg-gray-900">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 tracking-wide uppercase">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Feature Boxes */}
        <div className="flex flex-wrap justify-center gap-6 mb-24">
            {features.map((feature, i) => (
                <div key={i} className="border border-white rounded-md px-6 py-4 text-center min-w-[150px] flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                    <span className="font-bold text-sm tracking-widest whitespace-pre-line leading-relaxed font-mono">{feature}</span>
                </div>
            ))}
        </div>

        {/* Big Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-800 pt-12">
            <div>
                <div className="text-4xl md:text-6xl font-black mb-2">30G</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Protein</div>
            </div>
            <div>
                <div className="text-4xl md:text-6xl font-black mb-2">0G</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Added Sugar</div>
            </div>
            <div>
                <div className="text-4xl md:text-6xl font-black mb-2">25+</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Vitamins</div>
            </div>
            <div>
                <div className="text-4xl md:text-6xl font-black mb-2">5B</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Probiotics</div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Ingredients;
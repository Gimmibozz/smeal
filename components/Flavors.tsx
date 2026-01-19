import React from 'react';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Flavors: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="flavors" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 uppercase">
            Three Flavors. Zero Compromise.
          </h2>
          <p className="text-gray-600 text-lg">
            Each flavor crafted with premium ingredients for peak performance and indulgent taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link to="/products/belgian-chocolate">
            <ProductCard
              name="CHOCOLATE PUNCH"
              description="Rich & Decadent"
              colorFrom="from-[#5d4037]"
              colorTo="from-[#3e2b25]"
              accentColor="border-[#2b1e1a]"
              calories={280}
              sugar={2}
              textColor="text-[#5d4037]"
              imageSrc="https://i.ibb.co/ksrZ9v6x/Gemini-Generated-Image-4v3azw4v3azw4v3a-Photoroom.png"
            />
          </Link>
          <Link to="/products/cold-brew-coffee">
            <ProductCard
              name="COFFEE KICK"
              description="Smooth & Energizing"
              colorFrom="from-[#8d6e63]"
              colorTo="from-[#5d4037]"
              accentColor="border-[#4e342e]"
              calories={280}
              sugar={1}
              textColor="text-[#8d6e63]"
              imageSrc="https://i.ibb.co/mrJYWCTn/Gemini-Generated-Image-y479jmy479jmy479-Photoroom.png"
            />
          </Link>
          <Link to="/products/madagascar-vanilla">
            <ProductCard
              name="CINNAMON LIFT"
              description="Classic & Creamy"
              colorFrom="from-[#e6cca0]"
              colorTo="from-[#cbb085]"
              accentColor="border-[#bfa276]"
              calories={260}
              sugar={3}
              textColor="text-[#c7a672]"
              imageSrc="https://i.ibb.co/G3QRnFsQ/Gemini-Generated-Image-lmblexlmblexlmbl-Photoroom.png"
            />
          </Link>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={scrollToContact}
            className="border-2 border-gray-200 hover:border-black text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all hover:bg-black hover:text-white group"
          >
            Order a Sample for Your Team
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Flavors;
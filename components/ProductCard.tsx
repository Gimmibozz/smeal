import React from 'react';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  colorFrom: string;
  colorTo: string;
  accentColor: string;
  calories: number;
  sugar: number;
  textColor: string;
  imageSrc?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  description, 
  colorFrom, 
  colorTo, 
  accentColor, 
  calories, 
  sugar,
  textColor,
  imageSrc
}) => {
  return (
    <div className="group relative bg-white rounded-[2rem] p-8 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col">
      
      {/* Background Gradient Blob (Subtle) */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${colorFrom}, transparent)` }}
      ></div>

      {/* Floating Badge */}
      <div className="absolute top-6 right-6 bg-brand-black text-white text-[10px] font-bold px-3 py-1.5 rounded-full z-20 tracking-widest uppercase">
        30g Protein
      </div>

      {/* Image Container */}
      <div className="relative h-[320px] flex items-center justify-center mb-6 mt-4 perspective-1000">
         <div className="relative w-full h-full flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-3">
             {imageSrc ? (
                 <img 
                    src={imageSrc} 
                    alt={name} 
                    className="h-full w-auto object-contain drop-shadow-xl z-10" 
                 />
             ) : (
                 // Fallback CSS Mockup
                 <div className="relative w-36 h-52">
                     <div className="absolute top-0 left-[-4%] w-[108%] h-6 bg-[#1a1a1a] rounded-sm z-20 shadow-md"></div>
                     <div className={`absolute top-5 w-full h-[180px] bg-gradient-to-br ${colorFrom} ${colorTo} z-10`} style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}>
                         <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[70%] h-[60%] bg-white rounded-sm shadow-sm flex flex-col items-center justify-center p-2">
                             <div className="text-[10px] font-black text-black mb-1">SMEAL</div>
                             <div className="text-[8px] font-serif italic text-gray-400 mb-1">Pudding</div>
                             <div className="text-xl font-serif font-bold">30<span className="text-xs">g</span></div>
                         </div>
                     </div>
                 </div>
             )}
         </div>
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col items-center text-center relative z-10">
        <h3 className="text-3xl font-black mb-2 tracking-tighter leading-none uppercase text-brand-black group-hover:text-brand-accent transition-colors duration-300">
          {name}
        </h3>
        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">{description}</p>
        
        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-2 w-full border-t border-gray-100 pt-6 mt-auto">
          <div className="flex flex-col items-center">
             <span className="font-black text-lg text-brand-black">30g</span>
             <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Protein</span>
          </div>
          <div className="flex flex-col items-center border-l border-r border-gray-100 px-2">
             <span className="font-black text-lg text-brand-black">{calories}</span>
             <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Cals</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="font-black text-lg text-brand-black">{sugar}g</span>
             <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Sugar</span>
          </div>
        </div>
      </div>

       {/* Quick Add Button (Slide Up) */}
       <div className="absolute bottom-0 left-0 w-full bg-brand-black text-white py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 cursor-pointer font-bold uppercase tracking-widest text-xs z-30">
        <span>View Details</span>
        <Plus size={14} />
       </div>
    </div>
  );
};

export default ProductCard;
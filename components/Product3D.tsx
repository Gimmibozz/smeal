import React from 'react';

interface Product3DProps {
  colorFrom: string;
  colorTo: string;
  accentColor: string; // Used for rim/border or accent
  scale?: number;
  rotation?: number;
  imageSrc?: string; // URL to the product image
}

const Product3D: React.FC<Product3DProps> = ({ 
  colorFrom, 
  colorTo, 
  accentColor,
  scale = 1,
  rotation = -5,
  imageSrc
}) => {
  return (
    <div 
      className={`relative flex flex-col items-center justify-center transition-transform duration-700 ease-out drop-shadow-2xl ${imageSrc ? 'w-[90vw] h-[90vw] max-w-[500px] max-h-[500px] md:max-w-none md:max-h-none md:w-[900px] md:h-[900px]' : 'w-72 h-[450px]'}`}
      style={{
        transform: `scale(${scale}) rotate(${rotation}deg)`,
      }}
    >
      {imageSrc ? (
        // Real Image Mode - Clean, Square, Centered
        <div className="relative w-full h-full flex items-center justify-center">
           <img 
             src={imageSrc} 
             alt="Smeal Protein Pudding" 
             className="w-full h-full object-contain"
           />
        </div>
      ) : (
        // CSS Fallback Mode (Tapered Cup)
        <>
            {/* Lid */}
            <div className="absolute top-4 w-[90%] h-12 bg-[#1a1a1a] rounded-md z-20 shadow-lg flex flex-col justify-end">
               <div className="w-full h-[1px] bg-white/20 mb-1"></div>
               <div className="w-full h-2 bg-black/40 rounded-b-md"></div>
            </div>
            
            {/* Cup Body */}
            <div 
              className="absolute top-14 w-[85%] h-[360px] z-10 rounded-b-3xl"
              style={{
                 backgroundImage: `linear-gradient(to right bottom, ${colorFrom}, ${colorTo})`,
                 boxShadow: 'inset -10px -10px 30px rgba(0,0,0,0.3), inset 10px 10px 30px rgba(255,255,255,0.1)'
              }}
            >
                {/* Shine */}
                <div className="absolute top-0 left-4 w-16 h-full bg-white/5 skew-x-[-5deg] blur-md pointer-events-none"></div>
            </div>

            {/* Label Overlay - Only for CSS mode */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-3xl shadow-lg flex flex-col items-center justify-center p-4 z-30 transform hover:scale-105 transition-transform duration-300">
                <div className="font-black text-3xl tracking-tighter text-black mb-1 font-sans">SMEAL</div>
                <div className="font-bold text-[10px] tracking-[0.15em] text-gray-400 uppercase mb-4">Protein Pudding</div>
                <div className="bg-black text-white px-5 py-2 rounded-full">
                   <span className="font-bold text-sm tracking-wide">30g PROTEIN</span>
                </div>
            </div>
        </>
      )}
    </div>
  );
};

export default Product3D;
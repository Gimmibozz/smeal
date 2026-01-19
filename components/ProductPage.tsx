import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Plus, Minus, Leaf, Zap, Heart, ArrowLeft, Star, ArrowRight } from 'lucide-react';
import Product3D from './Product3D';
import FAQ from './FAQ';

interface ProductData {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  colorFrom: string;
  colorTo: string;
  accentColor: string;
  hex: string;
  imageSrc: string;
  ingredients: string[];
  nutrition: { label: string; value: string }[];
}

const products: Record<string, ProductData> = {
  'belgian-chocolate': {
    id: 'belgian-chocolate',
    name: 'BELGIAN CHOCOLATE',
    subtitle: 'Rich & Decadent',
    description: 'Juicy sweet and delightfully simple. Made with real grass-fed whey, organic cacao, and a touch of sea salt, SMEAL Belgian Chocolate delivers a balanced, rich breakfast with big benefits and a pudding-like texture. 30g of protein, 2g of sugar, and none of the artificial junk you\'d expect inside something that tastes so dreamy.',
    colorFrom: '#5d4037',
    colorTo: '#3e2b25',
    accentColor: '#2b1e1a',
    hex: '#5d4037',
    imageSrc: 'https://i.ibb.co/ksrZ9v6x/Gemini-Generated-Image-4v3azw4v3azw4v3a-Photoroom.png',
    ingredients: ['Grass-Fed Whey Protein', 'Organic Cacao', 'Coconut Cream', 'Monk Fruit Extract', 'Sea Salt', 'Probiotic Blend'],
    nutrition: [
      { label: 'Calories', value: '280' },
      { label: 'Protein', value: '30g' },
      { label: 'Sugar', value: '2g' },
      { label: 'Fat', value: '12g' },
      { label: 'Carbs', value: '8g' },
    ]
  },
  'cold-brew-coffee': {
    id: 'cold-brew-coffee',
    name: 'COFFEE KICK',
    subtitle: 'Smooth & Energizing',
    description: 'Wake up and win. Real cold brew coffee concentrate meets our signature protein blend. It\'s the perfect morning kick without the jitters. 30g of protein to keep you full, plus 100mg of natural caffeine to keep you focused.',
    colorFrom: '#8d6e63',
    colorTo: '#5d4037',
    accentColor: '#4e342e',
    hex: '#8d6e63',
    imageSrc: 'https://i.ibb.co/mrJYWCTn/Gemini-Generated-Image-y479jmy479jmy479-Photoroom.png',
    ingredients: ['Grass-Fed Whey Protein', 'Cold Brew Coffee Concentrate', 'Coconut Cream', 'Monk Fruit Extract', 'Sea Salt', 'Probiotic Blend'],
    nutrition: [
      { label: 'Calories', value: '280' },
      { label: 'Protein', value: '30g' },
      { label: 'Sugar', value: '1g' },
      { label: 'Fat', value: '12g' },
      { label: 'Carbs', value: '8g' },
    ]
  },
  'madagascar-vanilla': {
    id: 'madagascar-vanilla',
    name: 'CINNAMON LIFT',
    subtitle: 'Classic & Creamy',
    description: 'Simplicity at its finest. We use real Madagascar vanilla beans for a complex, floral flavor that pairs perfectly with our creamy base. It\'s a blank canvas of deliciousness that\'s perfect on its own or topped with berries.',
    colorFrom: '#e6cca0',
    colorTo: '#cbb085',
    accentColor: '#bfa276',
    hex: '#e6cca0',
    imageSrc: 'https://i.ibb.co/G3QRnFsQ/Gemini-Generated-Image-lmblexlmblexlmbl-Photoroom.png',
    ingredients: ['Grass-Fed Whey Protein', 'Madagascar Vanilla Beans', 'Coconut Cream', 'Monk Fruit Extract', 'Sea Salt', 'Probiotic Blend'],
    nutrition: [
      { label: 'Calories', value: '260' },
      { label: 'Protein', value: '30g' },
      { label: 'Sugar', value: '3g' },
      { label: 'Fat', value: '10g' },
      { label: 'Carbs', value: '9g' },
    ]
  }
};

const Accordion: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold uppercase tracking-wide group-hover:text-brand-orange transition-colors">{title}</span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-brand-gray leading-relaxed text-base pl-2 border-l-2 border-brand-black/5">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = products[slug || 'belgian-chocolate'];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) return <div>Product not found</div>;

  const handleOrderSample = () => {
    const flavor = product.name
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    navigate('/', {
      state: {
        scrollTo: 'contact',
        prefillFlavor: flavor
      }
    });
  };

  return (
    <div className="bg-brand-cream min-h-screen">

      {/* Back Button (Fixed or Sticky usually, but here placing inline for simplicity) */}
      <div className="fixed top-24 left-6 z-40 hidden lg:block">
        <Link to="/" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <ArrowLeft size={20} />
        </Link>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-24 relative">

          {/* Left: Sticky Image Section */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 h-fit">
            <div className="relative bg-white rounded-[3rem] aspect-square flex items-center justify-center p-8 overflow-hidden shadow-2xl shadow-brand-black/5 group">
              {/* Background Blob */}
              <div
                className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-30"
                style={{ background: `radial-gradient(circle at center, ${product.colorFrom}, transparent 70%)` }}
              ></div>

              <div className="relative z-10 w-full h-full flex items-center justify-center transform transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-2">
                <Product3D
                  colorFrom={product.colorFrom}
                  colorTo={product.colorTo}
                  accentColor={product.accentColor}
                  imageSrc={product.imageSrc}
                  scale={1.1}
                />
              </div>

              {/* Rating Badge */}
              <div className="absolute  top-8 left-8 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-1 shadow-sm">
                <Star size={14} className="fill-brand-black" />
                <span className="text-xs font-bold">4.9/5.0</span>
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center animate-fade-in-up">
            <div className="mb-2">
              <Link to="/#flavors" className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] hover:text-black transition-colors">
                Back to Flavors
              </Link>
            </div>

            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-4 text-brand-black">
              {product.name}
            </h1>

            <div className="text-xl font-medium text-gray-500 mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-gray-300"></span>
              {product.subtitle}
            </div>

            <div className="flex gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide">
              {Object.values(products).map(p => (
                <Link key={p.id} to={`/products/${p.id}`}>
                  <div
                    className={`w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ease-out border-2 ${slug === p.id ? 'border-brand-black scale-105 shadow-md' : 'border-transparent hover:scale-105 hover:border-gray-200'}`}
                    style={{ backgroundColor: p.hex }}
                    title={p.name}
                  >
                    {slug === p.id && <div className="w-2 h-2 bg-white rounded-full shadow-sm"></div>}
                  </div>
                </Link>
              ))}
            </div>

            <p className="text-lg text-brand-gray leading-relaxed mb-10 border-l-4 border-gray-100 pl-6">
              {product.description}
            </p>

            <button
              onClick={handleOrderSample}
              className="w-full bg-brand-black text-white py-6 rounded-full font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all hover:shadow-xl hover:-translate-y-1 mb-12 flex items-center justify-center gap-3 group"
            >
              Order Free Sample
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="space-y-2 border-t border-gray-200 pt-6">
              <Accordion title="Ingredients" defaultOpen={true}>
                <p className="text-sm font-medium">{product.ingredients.join(', ')}.</p>
              </Accordion>
              <Accordion title="Nutrition Facts">
                <div className="space-y-3">
                  {product.nutrition.map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm border-b border-dashed border-gray-200 pb-2 last:border-0">
                      <span className="text-gray-500 uppercase font-bold tracking-wider">{item.label}</span>
                      <span className="font-black text-brand-black">{item.value}</span>
                    </div>
                  ))}
                </div>
              </Accordion>
              <Accordion title="Shipping">
                <p className="text-sm">Free office delivery for all enterprise accounts. Next day shipping available for orders placed before 2pm ET.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Break / Marquee-ish */}
      <div className="bg-brand-black text-white py-12 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="text-8xl font-black uppercase opacity-20 mx-8">Fuel Your Work.</span>
          <span className="text-8xl font-black uppercase opacity-20 mx-8">Fuel Your Work.</span>
          <span className="text-8xl font-black uppercase opacity-20 mx-8">Fuel Your Work.</span>
          <span className="text-8xl font-black uppercase opacity-20 mx-8">Fuel Your Work.</span>
        </div>
      </div>

      <FAQ />

    </div>
  );
};

export default ProductPage;
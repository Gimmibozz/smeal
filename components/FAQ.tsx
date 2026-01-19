import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const Accordion: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-4 flex items-center justify-between text-left font-bold uppercase hover:text-gray-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </button>
      {isOpen && <div className="pb-4 text-sm text-gray-600 leading-relaxed">{children}</div>}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 max-w-4xl">
         <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-16">Frequently Asked Questions</h2>
         <div className="border-t border-gray-200">
            <Accordion title="What are protein puddings?">
              They are ready-to-eat, high-protein snacks made with real ingredients. Think of it as a dessert that works as hard as you do.
            </Accordion>
            <Accordion title="How do I store them?">
              Keep them refrigerated! They are made with fresh dairy and real ingredients, so the fridge is their happy place.
            </Accordion>
            <Accordion title="Are the containers recyclable?">
              Yes! Our containers are 100% recyclable. Just give them a quick rinse and toss them in the blue bin.
            </Accordion>
            <Accordion title="Where can I find the expiration date?">
              You can find the best-by date printed on the bottom of every cup.
            </Accordion>
         </div>
      </div>
    </section>
  );
};

export default FAQ;
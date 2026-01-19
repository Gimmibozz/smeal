import React from 'react';
import { Package, ClipboardList, SlidersHorizontal, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    { 
      id: "01", 
      icon: <Package size={24} />, 
      title: "Request Samples", 
      desc: "Fill out the sample form below and tell us about your team size and preferences." 
    },
    { 
      id: "02", 
      icon: <ClipboardList size={24} />, 
      title: "Taste Test", 
      desc: "We'll ship a sample pack directly to your office within 2 business days." 
    },
    { 
      id: "03", 
      icon: <SlidersHorizontal size={24} />, 
      title: "Customize Your Plan", 
      desc: "We will reach out to collect your feedback, in case your team liked it you pick a delivery schedule." 
    },
    { 
      id: "04", 
      icon: <RefreshCw size={24} />, 
      title: "Fuel Your Team", 
      desc: "Enjoy hassle-free deliveries with flexible quantities and mothly billing." 
    },
  ];

  return (
    <section id="enterprise" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span>For Enterprise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 uppercase">
            HOW IT WORKS
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Getting premium protein snacks for your team has never been easier. We handle everything from sampling to recurring deliveries.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="absolute top-8 left-8 text-xs font-bold text-gray-300 border border-gray-200 px-2 py-1 rounded">
                {step.id}
              </div>
              <div className="mt-10 mb-6 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-black">
                {step.icon}
              </div>
              <h3 className="font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Enterprise Benefits + Trusted By */}
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Benefits */}
            <div className="flex-1 bg-white rounded-[40px] p-10 md:p-14 border border-gray-100">
                <h3 className="text-2xl font-black uppercase mb-8">Enterprise Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                    {[
                        "Volume discounts for 50+ units",
                        "Flexible delivery schedules",
                        "Dedicated account manager",
                        "Custom branding available",
                        "No long-term contracts",
                        "Cancel anytime"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center space-x-3">
                            <CheckCircle size={20} className="text-black fill-current" />
                            <span className="text-sm font-medium text-gray-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Social Proof */}
            <div className="lg:w-96 bg-white rounded-[40px] p-10 border border-gray-100 flex flex-col justify-center items-center text-center shadow-lg">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Trusted By</div>
                <div className="text-6xl font-black mb-4">100+</div>
                <p className="text-gray-600 text-sm mb-8 font-medium">High-perfoming teams</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
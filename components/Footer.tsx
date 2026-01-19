import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <footer className="bg-[#fcfbf7] pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="font-extrabold text-2xl tracking-tighter mb-6">SMEAL</div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
              Premium protein nutrition designed for high-performance teams. Real ingredients, ready to eat, delivered to your office.
            </p>
            <div className="flex space-x-4">
            </div>
          </div>
      

          <div>
            <h4 className="font-bold text-sm uppercase mb-6">Enterprise</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a 
                  href="#enterprise" 
                  onClick={(e) => handleNavClick(e, 'enterprise')} 
                  className="hover:text-black transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, 'contact')} 
                  className="hover:text-black transition-colors"
                >
                  Request Samples
                </a>
              </li>
              <li>
                <a 
                  href="mailto:smeal-info@gbozzelli.com?subject=Bulk%20Pricing%20Inquiry&body=Hello%2C%20I%20would%20like%20to%20inquire%20about%20bulk%20pricing%20information." 
                  className="hover:text-black transition-colors"
                >
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SMEAL Protein. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
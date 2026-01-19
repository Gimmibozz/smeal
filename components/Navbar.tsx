import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-extrabold text-2xl tracking-tighter">
          SMEAL
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <a href="#flavors" onClick={(e) => handleNavClick(e, 'flavors')} className="hover:text-black transition-colors">Products</a>
          <a href="#ingredients" onClick={(e) => handleNavClick(e, 'ingredients')} className="hover:text-black transition-colors">Ingredients</a>
          <a href="#enterprise" onClick={(e) => handleNavClick(e, 'enterprise')} className="hover:text-black transition-colors">For Enterprise</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Order Samples
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-xl h-screen">
          <div className="flex flex-col space-y-4 text-center">
            <a href="#flavors" onClick={(e) => handleNavClick(e, 'flavors')} className="text-lg font-medium">Products</a>
            <a href="#ingredients" onClick={(e) => handleNavClick(e, 'ingredients')} className="text-lg font-medium">Ingredients</a>
            <a href="#enterprise" onClick={(e) => handleNavClick(e, 'enterprise')} className="text-lg font-medium">For Enterprise</a>
            <button 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="bg-black text-white px-6 py-3 rounded-full font-semibold w-full"
            >
              Order Samples
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-kubernetes-blue mr-1">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#326CE5" fillOpacity="0.1"/>
              <path d="M16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26Z" stroke="#326CE5" strokeWidth="2"/>
              <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" fill="#326CE5"/>
            </svg>
          </div>
          <span className="text-kubernetes-navy font-bold text-xl">KubeHelm</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-kubernetes-blue font-medium transition-colors">Features</a>
          <a href="#get-started" className="text-gray-700 hover:text-kubernetes-blue font-medium transition-colors">Get Started</a>
          <a href="#documentation" className="text-gray-700 hover:text-kubernetes-blue font-medium transition-colors">Documentation</a>
          <a href="#case-studies" className="text-gray-700 hover:text-kubernetes-blue font-medium transition-colors">Case Studies</a>
          <Button className="bg-kubernetes-blue hover:bg-kubernetes-navy text-white">Try Now</Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-kubernetes-navy focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-white border-t">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-kubernetes-blue font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#get-started" 
              className="text-gray-700 hover:text-kubernetes-blue font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
            <a 
              href="#documentation" 
              className="text-gray-700 hover:text-kubernetes-blue font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </a>
            <a 
              href="#case-studies" 
              className="text-gray-700 hover:text-kubernetes-blue font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </a>
            <Button className="bg-kubernetes-blue hover:bg-kubernetes-navy text-white w-full">
              Try Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

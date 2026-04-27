import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar = ({ actions }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isBuilder = location.pathname === '/builder';

  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary-600 p-2 rounded-lg">
            <Sparkles className="text-white" size={20} />
          </div>
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">
            CareerForge <span className="text-primary-600">Pro</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium ${location.pathname === '/' ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'} transition`}>
            Home
          </Link>
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition">
            Features
          </a>
          <div className="flex items-center gap-3">
            {actions}
            {!isBuilder && (
              <Link 
                to="/builder" 
                className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-full transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Build My Resume
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-2 space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
          <Link 
            to="/" 
            className="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <a 
            href="#features" 
            className="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <div className="px-4 py-2">
            {actions}
          </div>
          {!isBuilder && (
            <Link 
              to="/builder" 
              className="block px-4 py-2 text-base font-semibold text-primary-600 hover:bg-primary-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Build My Resume
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

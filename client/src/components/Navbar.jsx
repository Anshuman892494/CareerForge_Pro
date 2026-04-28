import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar = ({ actions }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isBuilder = location.pathname === '/builder';

  return (
    <nav className="bg-[#fafafa]/80 backdrop-blur-md px-6 py-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-slate-900 p-1.5 rounded text-white group-hover:rotate-12 transition-transform">
            <Sparkles size={16} />
          </div>
          <span className="text-xl font-serif italic text-slate-900 tracking-tight">
            CareerForge Pro
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link 
            to="/" 
            className={`text-sm font-light tracking-wide ${location.pathname === '/' ? 'text-slate-900 font-medium' : 'text-slate-500 hover:text-slate-900'} transition-colors`}
          >
            Home
          </Link>
          <div className="flex items-center gap-4">
            {actions}
            {!isBuilder && (
              <Link 
                to="/builder" 
                className="px-6 py-2 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all"
              >
                Start Building
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 space-y-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <Link 
            to="/" 
            className="block text-lg font-serif italic text-slate-900"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <div className="pt-4 border-t border-slate-50">
            {actions}
            {!isBuilder && (
              <Link 
                to="/builder" 
                className="block w-full text-center px-6 py-3 bg-slate-900 text-white font-medium rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Start Building
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

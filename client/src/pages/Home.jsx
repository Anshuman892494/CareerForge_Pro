import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {
  ArrowRight,
  Sparkles,
  FileText,
  Zap,
  Shield,
  Clock,
  Layout,
  Download
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h1 className="text-6xl md:text-8xl font-serif italic leading-[0.9] tracking-tight text-slate-900">
            Write your next <br />
            <span className="text-slate-400">chapter with clarity.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            A simple tool designed to help you build a professional resume without the clutter. Focused on content, powered by quiet intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/builder"
              className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-medium overflow-hidden transition-all hover:bg-slate-800"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Building <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Minimal Image/Mockup */}
      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-2 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm">
            <div className="overflow-hidden rounded-[2rem] border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=2000"
                alt="Clean Interface Preview"
                className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Simple Features */}
      <section id="features" className="py-32 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100">
                <Sparkles size={18} />
              </div>
              <h3 className="text-2xl font-serif italic text-slate-900">Quiet Intelligence</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Our AI doesn't write for you—it helps you find your own voice. Subtle suggestions that make your experience shine.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100">
                <Layout size={18} />
              </div>
              <h3 className="text-2xl font-serif italic text-slate-900">Timeless Design</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Templates that prioritize readability and professionalism. No gimmicks, just clean typography that recruiters love.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100">
                <Shield size={18} />
              </div>
              <h3 className="text-2xl font-serif italic text-slate-900">Privately Yours</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Your data is yours alone. We don't sell your information. We just provide the tools to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-serif italic text-slate-900">
            Ready to build something <br /> meaningful?
          </h2>
          <p className="text-xl text-slate-500 font-light max-w-xl mx-auto">
            Join thousands of professionals who trust CareerForge Pro for their career journey.
          </p>
          <div className="pt-4">
            <Link
              to="/builder"
              className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
            >
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-200 pt-10">
          <div className="flex items-center gap-2 opacity-80">
            <div className="bg-slate-900 p-1.5 rounded text-white">
              <Sparkles size={16} />
            </div>
            <span className="text-lg font-serif italic text-slate-900">CareerForge Pro</span>
          </div>

          <div className="flex gap-10 text-sm font-light text-slate-500">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <Link to="/builder" className="hover:text-slate-900 transition-colors">Builder</Link>
          </div>

          <p className="text-xs text-slate-400 font-light">
            © 2026 CareerForge Pro. Made for humans.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;


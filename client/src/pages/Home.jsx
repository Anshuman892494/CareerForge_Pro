import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  Sparkles, 
  FileText, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle2,
  Clock,
  Layout,
  Download
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-primary-50 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
              <Sparkles size={16} />
              <span>AI-Powered Resume Builder</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900">
              Forge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Professional</span> Future
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              Create a job-winning resume in minutes. CareerForge Pro combines professional design with AI intelligence to help you stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/builder" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-2xl transition shadow-xl hover:shadow-primary-200 transform hover:-translate-y-1"
              >
                Create My Resume <ArrowRight size={20} />
              </Link>
              <a 
                href="#features" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl transition"
              >
                See Features
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <CheckCircle2 size={16} className="text-green-500" /> Free to start
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={16} className="text-green-500" /> No credit card
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={16} className="text-green-500" /> ATS-friendly
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform hover:rotate-2 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1000" 
                alt="Resume Preview" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60 pointer-events-none" />
            </div>
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 animate-bounce shadow-primary-100">
              <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                <FileText size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Templates</p>
                <p className="text-sm font-bold text-slate-800">50+ Professional</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 shadow-blue-100">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <Zap size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI Suggestions</p>
                <p className="text-sm font-bold text-slate-800">Real-time Feedback</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-primary-600 font-bold uppercase tracking-widest text-sm">Why CareerForge Pro?</h2>
            <p className="text-4xl lg:text-5xl font-extrabold text-slate-900">Features built for success</p>
            <p className="text-slate-600 max-w-2xl mx-auto">Everything you need to build a resume that gets you hired by top companies.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">Build your professional resume in 3 easy steps</h2>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-primary-200">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-[3rem] p-4 shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent pointer-events-none" />
               <div className="bg-slate-800 rounded-[2.5rem] p-8 border border-slate-700 aspect-square flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="inline-block p-6 bg-slate-700/50 rounded-full animate-pulse">
                      <Sparkles className="text-primary-400" size={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Interactive Editor</h3>
                    <p className="text-slate-400">See changes in real-time with our intuitive split-screen interface.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-primary-600 rounded-full blur-[100px] opacity-30" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">Ready to land your <br /> dream job?</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">Join thousands of job seekers who used CareerForge Pro to get hired at world-class companies.</p>
            <Link 
              to="/builder" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-slate-900 font-extrabold rounded-2xl hover:bg-primary-50 transition transform hover:-translate-y-1 shadow-2xl shadow-white/10"
            >
              Build My Resume Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-primary-600 p-2 rounded-lg text-white">
                <Sparkles size={20} />
              </div>
              <span className="text-xl font-bold text-slate-800">CareerForge Pro</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-500">
              <Link to="/" className="hover:text-primary-600">Home</Link>
              <a href="#features" className="hover:text-primary-600">Features</a>
              <Link to="/builder" className="hover:text-primary-600">Builder</Link>
            </div>
            <p className="text-sm text-slate-400">© 2026 CareerForge Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: <Sparkles className="text-primary-600" />,
    color: "bg-primary-50",
    title: "AI Smart Content",
    description: "Get smart suggestions for your job descriptions and skills based on your target role."
  },
  {
    icon: <Layout className="text-blue-600" />,
    color: "bg-blue-50",
    title: "Premium Templates",
    description: "Choose from a curated selection of ATS-friendly templates designed by career experts."
  },
  {
    icon: <Download className="text-purple-600" />,
    color: "bg-purple-50",
    title: "Instant PDF Export",
    description: "Download your resume in high-quality PDF format, ready to be sent to recruiters."
  },
  {
    icon: <Clock className="text-teal-600" />,
    color: "bg-teal-50",
    title: "Real-time Preview",
    description: "See exactly how your resume looks as you type with our side-by-side preview."
  },
  {
    icon: <Zap className="text-orange-600" />,
    color: "bg-orange-50",
    title: "Fast & Efficient",
    description: "Built for speed. Generate a professional resume in less than 10 minutes."
  },
  {
    icon: <Shield className="text-indigo-600" />,
    color: "bg-indigo-50",
    title: "Data Secure",
    description: "Your professional data is encrypted and secure. We value your privacy."
  }
];

const steps = [
  {
    title: "Choose your template",
    description: "Select from our range of professional, ATS-optimized designs."
  },
  {
    title: "Fill in your details",
    description: "Enter your experience, education, and skills with AI-powered assistance."
  },
  {
    title: "Download and Apply",
    description: "Export your polished resume as a PDF and start landing interviews."
  }
];

export default Home;

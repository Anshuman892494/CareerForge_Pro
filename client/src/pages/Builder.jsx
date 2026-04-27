import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';
import { ResumeProvider } from '../context/ResumeContext';
import { Download, Loader2 } from 'lucide-react';

const BuilderContent = () => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = async () => {
    try {
      setIsExporting(true);
      
      const previewElement = document.getElementById('resume-preview-content');
      if (!previewElement) {
        alert("Preview not found");
        return;
      }
      
      const htmlContent = previewElement.outerHTML;
      
      const response = await fetch('http://localhost:5000/api/saas/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ html: htmlContent }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }
      
      const blob = await response.blob();
      
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'CareerForge_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
    } catch (error) {
      console.error('Export Error:', error);
      alert('Failed to export PDF. Please ensure the backend is running.');
    } finally {
      setIsExporting(false);
    }
  };

  const exportAction = (
    <button 
      onClick={handleExportPDF}
      disabled={isExporting}
      className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium rounded-lg transition shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {isExporting ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
      {isExporting ? 'Exporting...' : 'Export PDF'}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Navbar actions={exportAction} />

      {/* Main Content: Split Screen */}
      <main className="flex-1 overflow-hidden flex flex-col lg:flex-row">
        {/* Left Pane: Form */}
        <div className="w-full lg:w-1/2 p-6 overflow-y-auto">
          <ResumeForm />
        </div>

        {/* Right Pane: Preview */}
        <div className="w-full lg:w-1/2 bg-slate-200 p-6 overflow-y-auto flex justify-center items-start">
          <div className="scale-[0.6] sm:scale-75 md:scale-90 lg:scale-[0.8] xl:scale-100 origin-top shadow-2xl transition-transform duration-300">
            <ResumePreview />
          </div>
        </div>
      </main>
    </div>
  );
};

const Builder = () => {
  return (
    <ResumeProvider>
      <BuilderContent />
    </ResumeProvider>
  );
};

export default Builder;

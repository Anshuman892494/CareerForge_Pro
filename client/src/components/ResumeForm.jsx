import React, { useState, useEffect } from 'react';
import { useResume } from '../context/ResumeContext';
import { Plus, Trash2, Sparkles, Loader2, Target } from 'lucide-react';
import { analyzeJD, rewriteBullet, calculateATSScore } from '../services/api';

const ResumeForm = () => {
  const {
    resumeData,
    updatePersonalInfo,
    updateSummary,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    addProject,
    updateProject,
    removeProject,
    updateSkills,
    jobDescription,
    setJobDescription,
    jdKeywords,
    setJdKeywords,
    atsScore,
    setAtsScore
  } = useResume();

  const { personalInfo, summary, experience, education, skills, projects } = resumeData;

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [rewritingId, setRewritingId] = useState(null); // Track which item is rewriting

  // Calculate ATS Score whenever resume data or keywords change
  useEffect(() => {
    const calculateScore = async () => {
      if (jdKeywords.length === 0) {
        setAtsScore(0);
        return;
      }
      
      const resumeText = JSON.stringify(resumeData);
      try {
        const { score } = await calculateATSScore(resumeText, jdKeywords);
        setAtsScore(score);
      } catch (error) {
        console.error("Score calculation error", error);
      }
    };
    
    // Debounce it slightly
    const timer = setTimeout(() => {
      calculateScore();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [resumeData, jdKeywords, setAtsScore]);

  const handleSkillsChange = (e) => {
    const skillsArray = e.target.value.split(',').map(skill => skill.trim());
    updateSkills(skillsArray);
  };

  const handleAnalyzeJD = async () => {
    if (!jobDescription) return;
    setIsAnalyzing(true);
    try {
      const { keywords } = await analyzeJD(jobDescription);
      setJdKeywords(keywords || []);
    } catch (error) {
      alert("Failed to analyze Job Description.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleRewriteExperience = async (id, currentText) => {
    if (!currentText) return;
    setRewritingId(id);
    try {
      const { rewritten } = await rewriteBullet(currentText, jdKeywords);
      updateExperience(id, 'description', rewritten);
    } catch (error) {
      alert("Failed to rewrite. Try again.");
    } finally {
      setRewritingId(null);
    }
  };

  const handleRewriteProject = async (id, currentText) => {
    if (!currentText) return;
    setRewritingId(`proj_${id}`);
    try {
      const { rewritten } = await rewriteBullet(currentText, jdKeywords);
      updateProject(id, 'description', rewritten);
    } catch (error) {
      alert("Failed to rewrite. Try again.");
    } finally {
      setRewritingId(null);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-full overflow-y-auto space-y-8">
      
      {/* AI Job Optimizer Section */}
      <section className="bg-primary-50 p-5 rounded-xl border border-primary-100">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-primary-900 flex items-center">
            <Sparkles size={18} className="mr-2 text-primary-600" /> AI Resume Optimizer
          </h2>
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-200">
            <Target size={16} className={atsScore > 70 ? "text-green-500" : "text-amber-500"} />
            <span className="text-sm font-bold text-slate-700">ATS Score:</span>
            <span className={`text-sm font-extrabold ${atsScore > 70 ? "text-green-600" : "text-amber-600"}`}>{atsScore}%</span>
          </div>
        </div>
        
        <label className="block text-sm font-medium text-primary-800 mb-1">Target Job Description</label>
        <textarea 
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          rows="3"
          className="w-full p-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-sm bg-white mb-3"
          placeholder="Paste the job description here to extract keywords and optimize your resume..."
        />
        
        <div className="flex justify-between items-start">
          <button 
            onClick={handleAnalyzeJD}
            disabled={isAnalyzing || !jobDescription}
            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition disabled:opacity-60"
          >
            {isAnalyzing ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
            {isAnalyzing ? "Analyzing..." : "Analyze JD"}
          </button>
          
          {jdKeywords.length > 0 && (
            <div className="ml-4 flex-1">
              <p className="text-xs font-semibold text-primary-800 mb-1">Extracted Keywords:</p>
              <div className="flex flex-wrap gap-1 max-h-20 overflow-y-auto">
                {jdKeywords.map((kw, i) => (
                  <span key={i} className="text-[10px] bg-white border border-primary-200 text-primary-700 px-2 py-0.5 rounded-full">{kw}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Personal Info Section */}
      <section>
        <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
            <input type="text" value={personalInfo.firstName} onChange={(e) => updatePersonalInfo('firstName', e.target.value)} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
            <input type="text" value={personalInfo.lastName} onChange={(e) => updatePersonalInfo('lastName', e.target.value)} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Job Title</label>
            <input type="text" value={personalInfo.jobTitle} onChange={(e) => updatePersonalInfo('jobTitle', e.target.value)} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input type="email" value={personalInfo.email} onChange={(e) => updatePersonalInfo('email', e.target.value)} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
            <input type="text" value={personalInfo.phone} onChange={(e) => updatePersonalInfo('phone', e.target.value)} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
            <input type="text" value={personalInfo.address} onChange={(e) => updatePersonalInfo('address', e.target.value)} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition" />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section>
        <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b">Professional Summary</h2>
        <textarea 
          value={summary} 
          onChange={(e) => updateSummary(e.target.value)} 
          rows="4" 
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition"
          placeholder="Write a brief professional summary..."
        />
      </section>

      {/* Experience Section */}
      <section>
        <div className="flex justify-between items-center mb-4 pb-2 border-b">
          <h2 className="text-xl font-bold text-slate-800">Experience</h2>
          <button onClick={addExperience} className="flex items-center text-sm bg-primary-50 text-primary-600 px-3 py-1 rounded-md hover:bg-primary-100 transition">
            <Plus size={16} className="mr-1" /> Add
          </button>
        </div>
        <div className="space-y-6">
          {experience.map((exp) => (
            <div key={exp.id} className="p-4 bg-slate-50 border rounded-lg relative">
              <button onClick={() => removeExperience(exp.id)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition">
                <Trash2 size={18} />
              </button>
              <div className="grid grid-cols-2 gap-4 mb-3 pr-8">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Job Title</label>
                  <input type="text" value={exp.title} onChange={(e) => updateExperience(exp.id, 'title', e.target.value)} className="w-full p-2 text-sm border rounded-md" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Company</label>
                  <input type="text" value={exp.company} onChange={(e) => updateExperience(exp.id, 'company', e.target.value)} className="w-full p-2 text-sm border rounded-md" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Start Date</label>
                  <input type="text" placeholder="MM/YYYY" value={exp.startDate} onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)} className="w-full p-2 text-sm border rounded-md" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">End Date</label>
                  <input type="text" placeholder="MM/YYYY or Present" value={exp.endDate} onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)} className="w-full p-2 text-sm border rounded-md" />
                </div>
              </div>
              <div className="relative">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-medium text-slate-600">Description</label>
                  <button 
                    onClick={() => handleRewriteExperience(exp.id, exp.description)}
                    disabled={rewritingId === exp.id || !exp.description}
                    className="flex items-center text-[10px] font-medium bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded shadow-sm hover:from-purple-600 hover:to-indigo-600 transition disabled:opacity-50"
                  >
                    {rewritingId === exp.id ? <Loader2 size={12} className="animate-spin mr-1" /> : <Sparkles size={12} className="mr-1" />}
                    AI Rewrite
                  </button>
                </div>
                <textarea rows="4" value={exp.description} onChange={(e) => updateExperience(exp.id, 'description', e.target.value)} className="w-full p-2 text-sm border rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <div className="flex justify-between items-center mb-4 pb-2 border-b">
          <h2 className="text-xl font-bold text-slate-800">Projects</h2>
          <button onClick={addProject} className="flex items-center text-sm bg-primary-50 text-primary-600 px-3 py-1 rounded-md hover:bg-primary-100 transition">
            <Plus size={16} className="mr-1" /> Add
          </button>
        </div>
        <div className="space-y-6">
          {projects.map((proj) => (
            <div key={proj.id} className="p-4 bg-slate-50 border rounded-lg relative">
              <button onClick={() => removeProject(proj.id)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition">
                <Trash2 size={18} />
              </button>
              <div className="grid grid-cols-2 gap-4 mb-3 pr-8">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Project Title</label>
                  <input type="text" value={proj.title} onChange={(e) => updateProject(proj.id, 'title', e.target.value)} className="w-full p-2 text-sm border rounded-md" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Link</label>
                  <input type="text" value={proj.link} onChange={(e) => updateProject(proj.id, 'link', e.target.value)} className="w-full p-2 text-sm border rounded-md" />
                </div>
              </div>
              <div className="relative">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-medium text-slate-600">Description</label>
                  <button 
                    onClick={() => handleRewriteProject(proj.id, proj.description)}
                    disabled={rewritingId === `proj_${proj.id}` || !proj.description}
                    className="flex items-center text-[10px] font-medium bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded shadow-sm hover:from-purple-600 hover:to-indigo-600 transition disabled:opacity-50"
                  >
                    {rewritingId === `proj_${proj.id}` ? <Loader2 size={12} className="animate-spin mr-1" /> : <Sparkles size={12} className="mr-1" />}
                    AI Rewrite
                  </button>
                </div>
                <textarea rows="3" value={proj.description} onChange={(e) => updateProject(proj.id, 'description', e.target.value)} className="w-full p-2 text-sm border rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <div className="flex justify-between items-center mb-4 pb-2 border-b">
          <h2 className="text-xl font-bold text-slate-800">Education</h2>
          <button onClick={addEducation} className="flex items-center text-sm bg-primary-50 text-primary-600 px-3 py-1 rounded-md hover:bg-primary-100 transition">
            <Plus size={16} className="mr-1" /> Add
          </button>
        </div>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="p-4 bg-slate-50 border rounded-lg relative">
              <button onClick={() => removeEducation(edu.id)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition">
                <Trash2 size={18} />
              </button>
              <div className="grid grid-cols-2 gap-4 mb-3 pr-8">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Degree/Course</label>
                  <input type="text" value={edu.degree} onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)} className="w-full p-2 text-sm border rounded-md" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Institution</label>
                  <input type="text" value={edu.school} onChange={(e) => updateEducation(edu.id, 'school', e.target.value)} className="w-full p-2 text-sm border rounded-md" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Start Date</label>
                  <input type="text" placeholder="YYYY" value={edu.startDate} onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)} className="w-full p-2 text-sm border rounded-md" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">End Date</label>
                  <input type="text" placeholder="YYYY" value={edu.endDate} onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)} className="w-full p-2 text-sm border rounded-md" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b">Skills</h2>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Comma separated skills</label>
          <input 
            type="text" 
            value={skills.join(', ')} 
            onChange={handleSkillsChange} 
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition"
            placeholder="React, Node.js, Python, Project Management..."
          />
        </div>
      </section>
    </div>
  );
};

export default ResumeForm;

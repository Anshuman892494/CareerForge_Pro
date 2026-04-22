import React from 'react';
import { useResume } from '../context/ResumeContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const ResumePreview = () => {
  const { resumeData } = useResume();
  const { personalInfo, summary, experience, education, skills, projects } = resumeData;

  return (
    <div className="bg-white h-[842px] w-[595px] mx-auto shadow-xl transform origin-top left-0 overflow-hidden font-sans text-slate-800 flex flex-col p-8" id="resume-preview-content">
      {/* Header */}
      <header className="border-b-2 border-slate-800 pb-4 mb-4">
        <h1 className="text-3xl font-bold uppercase tracking-wider">{personalInfo.firstName} {personalInfo.lastName}</h1>
        <h2 className="text-lg text-primary-600 font-medium mb-3">{personalInfo.jobTitle}</h2>
        
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
          {personalInfo.email && <div className="flex items-center"><Mail size={12} className="mr-1" /> {personalInfo.email}</div>}
          {personalInfo.phone && <div className="flex items-center"><Phone size={12} className="mr-1" /> {personalInfo.phone}</div>}
          {personalInfo.address && <div className="flex items-center"><MapPin size={12} className="mr-1" /> {personalInfo.address}</div>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-4">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide border-b border-slate-300 mb-2 pb-1">Professional Summary</h3>
          <p className="text-xs leading-relaxed text-slate-700">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-4">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide border-b border-slate-300 mb-2 pb-1">Experience</h3>
          <div className="space-y-3">
            {experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-sm font-semibold">{exp.title}</h4>
                  <span className="text-xs text-slate-500 font-medium">{exp.startDate} - {exp.endDate}</span>
                </div>
                <div className="text-xs font-medium text-primary-600 mb-1">{exp.company} {exp.location && `| ${exp.location}`}</div>
                <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="mb-4">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide border-b border-slate-300 mb-2 pb-1">Projects</h3>
          <div className="space-y-3">
            {projects.map(proj => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-sm font-semibold">{proj.title}</h4>
                </div>
                {proj.link && <a href={proj.link} className="text-xs text-primary-600 hover:underline mb-1 inline-block">{proj.link}</a>}
                <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-line">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-4">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide border-b border-slate-300 mb-2 pb-1">Education</h3>
          <div className="space-y-3">
            {education.map(edu => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-sm font-semibold">{edu.degree}</h4>
                  <span className="text-xs text-slate-500 font-medium">{edu.startDate} - {edu.endDate}</span>
                </div>
                <div className="text-xs text-slate-700">{edu.school} {edu.location && `| ${edu.location}`}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && skills[0] !== "" && (
        <section>
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide border-b border-slate-300 mb-2 pb-1">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md font-medium border border-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ResumePreview;

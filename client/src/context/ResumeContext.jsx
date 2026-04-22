import React, { createContext, useState, useContext } from 'react';

const ResumeContext = createContext();

const initialResumeState = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    jobTitle: 'Software Engineer',
    address: 'New York, NY',
    linkedin: '',
    github: '',
    portfolio: ''
  },
  summary: 'Passionate and results-driven Software Engineer with experience in building scalable web applications. Strong background in modern JavaScript frameworks and cloud technologies.',
  experience: [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      startDate: '2021-01',
      endDate: 'Present',
      description: 'Led the frontend team in migrating legacy React application to Next.js. Improved performance by 40% and implemented robust testing strategies.'
    }
  ],
  education: [
    {
      id: '1',
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      location: 'Boston, MA',
      startDate: '2016-09',
      endDate: '2020-05',
      description: 'Graduated with Honors. Member of the Computer Science Society.'
    }
  ],
  skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'AWS'],
  projects: [
    {
      id: '1',
      title: 'E-commerce Platform',
      link: 'https://github.com/johndoe/ecommerce',
      description: 'Built a full-stack e-commerce platform using MERN stack with Stripe integration. Handled over 10k monthly active users.'
    }
  ]
};

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(initialResumeState);
  const [jobDescription, setJobDescription] = useState('');
  const [jdKeywords, setJdKeywords] = useState([]);
  const [atsScore, setAtsScore] = useState(0);

  const updatePersonalInfo = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const updateSummary = (value) => {
    setResumeData(prev => ({ ...prev, summary: value }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, { id: Date.now().toString(), title: '', company: '', location: '', startDate: '', endDate: '', description: '' }]
    }));
  };

  const updateExperience = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => exp.id === id ? { ...exp, [field]: value } : exp)
    }));
  };

  const removeExperience = (id) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, { id: Date.now().toString(), degree: '', school: '', location: '', startDate: '', endDate: '', description: '' }]
    }));
  };

  const updateEducation = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu)
    }));
  };

  const removeEducation = (id) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };
  
  const addProject = () => {
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, { id: Date.now().toString(), title: '', link: '', description: '' }]
    }));
  };

  const updateProject = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(proj => proj.id === id ? { ...proj, [field]: value } : proj)
    }));
  };

  const removeProject = (id) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(proj => proj.id !== id)
    }));
  };

  const updateSkills = (skillsArray) => {
    setResumeData(prev => ({ ...prev, skills: skillsArray }));
  };

  return (
    <ResumeContext.Provider value={{
      resumeData,
      setResumeData,
      jobDescription,
      setJobDescription,
      jdKeywords,
      setJdKeywords,
      atsScore,
      setAtsScore,
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
      updateSkills
    }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);

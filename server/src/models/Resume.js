const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  startDate: String,
  endDate: String,
  description: String
});

const EducationSchema = new mongoose.Schema({
  degree: String,
  school: String,
  location: String,
  startDate: String,
  endDate: String,
  description: String
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  link: String,
  description: String
});

const ResumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // Set to true when Auth is fully implemented
  },
  personalInfo: {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    jobTitle: String,
    address: String,
    linkedin: String,
    github: String,
    portfolio: String
  },
  summary: String,
  experience: [ExperienceSchema],
  education: [EducationSchema],
  projects: [ProjectSchema],
  skills: [String],
  themeColor: {
    type: String,
    default: '#14b8a6'
  }
}, { timestamps: true });

module.exports = mongoose.model('Resume', ResumeSchema);

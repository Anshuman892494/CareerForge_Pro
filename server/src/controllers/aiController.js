const aiService = require('../services/aiService');

exports.analyzeJD = async (req, res) => {
  try {
    const { jobDescription } = req.body;
    if (!jobDescription) {
      return res.status(400).json({ error: 'Job description is required' });
    }
    
    const keywords = await aiService.analyzeJD(jobDescription);
    res.json({ keywords });
  } catch (error) {
    res.status(500).json({ error: 'Failed to analyze JD' });
  }
};

exports.rewriteBullet = async (req, res) => {
  try {
    const { bulletPoint, keywords } = req.body;
    if (!bulletPoint) {
      return res.status(400).json({ error: 'Bullet point is required' });
    }
    
    const rewritten = await aiService.rewriteBullet(bulletPoint, keywords || []);
    res.json({ rewritten });
  } catch (error) {
    res.status(500).json({ error: 'Failed to rewrite bullet point' });
  }
};

exports.calculateScore = async (req, res) => {
  try {
    const { resumeText, jdKeywords } = req.body;
    const score = aiService.calculateATSScore(resumeText, jdKeywords || []);
    res.json({ score });
  } catch (error) {
    res.status(500).json({ error: 'Failed to calculate ATS score' });
  }
};

exports.generateCoverLetter = async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;
    if (!resumeText || !jobDescription) {
      return res.status(400).json({ error: 'Resume text and job description are required' });
    }
    
    const coverLetter = await aiService.generateCoverLetter(resumeText, jobDescription);
    res.json({ coverLetter });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate cover letter' });
  }
};

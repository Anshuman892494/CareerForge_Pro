const Groq = require('groq-sdk');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const MODEL = 'llama-3.3-70b-versatile';

const analyzeJD = async (jobDescription) => {
  try {
    const prompt = `
      Analyze the following Job Description and extract the most important keywords and skills (e.g., React, Node.js, Project Management).
      Return the result as a JSON array of strings ONLY. No markdown, no explanations, no quotes outside the array.
      
      Job Description:
      ${jobDescription}
    `;
    
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: MODEL,
      response_format: { type: 'json_object' }
    });
    
    const content = response.choices[0].message.content;
    const data = JSON.parse(content);
    // Groq might return { "keywords": [...] } or just the array if forced, 
    // but with json_object it usually needs a key.
    // Let's assume it returns an object and extract the array if it exists.
    return Array.isArray(data) ? data : (data.keywords || data.skills || Object.values(data)[0]);
  } catch (error) {
    console.error("JD Analysis Error (Groq):", error);
    return [];
  }
};

const rewriteBullet = async (bulletPoint, keywords) => {
  try {
    const prompt = `
      Rewrite the following resume bullet point to sound highly professional, impactful, and results-oriented.
      Incorporate as many of the provided keywords as naturally possible.
      Return ONLY the rewritten bullet point text, no quotes or additional text.
      
      Original Bullet: ${bulletPoint}
      Keywords to include: ${keywords.join(', ')}
    `;
    
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: MODEL,
    });
    
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Rewrite Error (Groq):", error);
    return bulletPoint;
  }
};

const calculateATSScore = (resumeText, jdKeywords) => {
  if (!jdKeywords || jdKeywords.length === 0) return 0;
  
  const textLower = resumeText.toLowerCase();
  let matchedCount = 0;
  
  jdKeywords.forEach(keyword => {
    if (textLower.includes(keyword.toLowerCase())) {
      matchedCount++;
    }
  });
  
  return Math.round((matchedCount / jdKeywords.length) * 100);
};

const generateCoverLetter = async (resumeText, jobDescription) => {
  try {
    const prompt = `
      Write a professional, compelling cover letter based on the following Resume and Job Description.
      Format it in clean paragraphs. Do not include placeholder brackets like [Your Name] if the information is available in the resume.
      Keep it to 3-4 paragraphs.
      
      Resume Information:
      ${resumeText}
      
      Job Description:
      ${jobDescription}
    `;
    
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: MODEL,
    });
    
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Cover Letter Generation Error (Groq):", error);
    return "Error generating cover letter. Please try again.";
  }
};

module.exports = {
  analyzeJD,
  rewriteBullet,
  calculateATSScore,
  generateCoverLetter
};

const API_BASE_URL = 'http://localhost:5000/api';

export const analyzeJD = async (jobDescription) => {
  const response = await fetch(`${API_BASE_URL}/ai/analyze-jd`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jobDescription }),
  });
  if (!response.ok) throw new Error('Failed to analyze JD');
  return response.json();
};

export const rewriteBullet = async (bulletPoint, keywords) => {
  const response = await fetch(`${API_BASE_URL}/ai/rewrite-bullet`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ bulletPoint, keywords }),
  });
  if (!response.ok) throw new Error('Failed to rewrite bullet');
  return response.json();
};

export const calculateATSScore = async (resumeText, jdKeywords) => {
  const response = await fetch(`${API_BASE_URL}/ai/calculate-score`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ resumeText, jdKeywords }),
  });
  if (!response.ok) throw new Error('Failed to calculate ATS score');
  return response.json();
};

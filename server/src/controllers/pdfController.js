const pdfService = require('../services/pdfService');

exports.generateResumePDF = async (req, res) => {
  try {
    const { html } = req.body;
    if (!html) {
      return res.status(400).json({ error: 'HTML content is required' });
    }
    
    // In production, you might want to prepend Tailwind CSS or external stylesheets
    // to the HTML before sending it to Puppeteer to ensure styles are rendered correctly.
    const fullHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body style="margin: 0; padding: 0;">
          ${html}
        </body>
      </html>
    `;
    
    const pdfBuffer = await pdfService.generatePDF(fullHtml);
    
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Length': pdfBuffer.length,
      'Content-Disposition': 'attachment; filename="resume.pdf"'
    });
    
    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
};

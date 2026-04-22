# 🚀 CareerForge Pro: AI-Powered Career Suite

CareerForge Pro is a high-performance, modern AI-driven career suite designed to empower job seekers with state-of-the-art tools for resume building, optimization, and job application tracking. Built with the latest web technologies, it provides a seamless, real-time experience for creating ATS-friendly resumes and cover letters.


## ✨ Features

- **🎯 AI Resume Builder**: A professional, real-time split-screen builder where you can see your resume update as you type.
- **🪄 AI Bullet Optimization**: Powered by Google Gemini & Groq, transform weak job descriptions into high-impact, achievement-oriented bullet points.
- **📊 ATS Compatibility Scoring**: Get an instant score on how well your resume matches a specific job description.
- **📝 AI Cover Letter Generator**: Generate tailored, professional cover letters based on your resume and the target job description.
- **📄 Pro PDF Export**: High-fidelity PDF generation using Puppeteer, ensuring your resume looks perfect in every recruiter's inbox.
- **🎨 Modern Design System**: A sleek, dark-themed UI built with Tailwind CSS 4 and fluid animations powered by Framer Motion.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express 5](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (via Mongoose)
- **AI Engines**: [Google Gemini AI](https://deepmind.google/technologies/gemini/) & [Groq SDK](https://groq.com/)
- **PDF Engine**: [Puppeteer](https://pptr.dev/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)
- API Keys for Google Gemini or Groq

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anshuman892494/CareerForge_Pro.git
   cd CareerForge_Pro
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   GEMINI_API_KEY=your_gemini_api_key
   GROQ_API_KEY=your_groq_api_key
   ```

3. **Setup Frontend**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the Backend**
   ```bash
   cd server
   npm run dev
   ```

2. **Start the Frontend**
   ```bash
   cd client
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

---

Built with ❤️ by [Anshuman](https://github.com/Anshuman892494)

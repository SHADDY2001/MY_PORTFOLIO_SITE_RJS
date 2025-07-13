














// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     document.body.style.overflowX = "hidden";
//     document.documentElement.style.overflowX = "hidden";
//   }, []);

//   return (
//     <div className="app-container">
//       {/* NAVBAR */}
//       <nav className="navbar navbar-expand-lg navbar-dark fixed-top neon-navbar px-4 py-3">
//         <div className="container-fluid d-flex justify-content-between align-items-center">
//           <span className="navbar-brand fw-bold fs-3 neon-glow-text">
//             🚀 PORTFOLIO
//           </span>
//           <div className="d-flex fs-4 gap-4">
//             <a
//               href="https://github.com/SHADDY2001?tab=repositories"
//               target="_blank"
//               className="neon-icon text-light"
//               rel="noreferrer"
//               title="GitHub"
//             >
//               <i className="fab fa-github"></i>
//             </a>
//             <a
//               href="https://www.linkedin.com/in/muhammad-shadab-ahmed-170460225"
//               target="_blank"
//               className="neon-icon text-info"
//               rel="noreferrer"
//               title="LinkedIn"
//             >
//               <i className="fab fa-linkedin"></i>
//             </a>
//             <a
//               href="https://www.linkedin.com/in/muhammad-shadab-ahmed-170460225/details/certifications/"
//               className="neon-icon text-warning"
//               target="_blank"
//               rel="noreferrer"
//               title="Certifications"
//             >
//               <i className="fas fa-award"></i>
//             </a>
//             <a
//               href="mailto:shadab@example.com"
//               className="neon-icon text-danger"
//               title="Email"
//             >
//               <i className="fas fa-envelope"></i>
//             </a>
//             <a
//               href="tel:+923001234567"
//               className="neon-icon text-success"
//               title="Phone"
//             >
//               <i className="fas fa-phone"></i>
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <div className="hero-section d-flex align-items-center justify-content-center min-vh-100">
//         <div className="text-center animate-slide">
//           <h1 className="fw-bold display-3 mb-4 neon-glow-text">
//             Hi, I'm Shadab Ahmed
//           </h1>
//           <h4 className="typewriter mb-4">
//             👨‍💻 MERN Stack Dev | DevOps Engineer | Cloud | IT | Cybersecurity
//           </h4>
//           <p className="lead text-white-50 px-4">
//             I build lightning-fast MERN stack apps, automate DevOps workflows, and make infrastructure dance with Docker, Jenkins, Kubernetes & AWS — all while monitoring performance in real time with Prometheus & Grafana.
//             <p className="lead text-white-50 px-4">
//               ⚛️ React • 🟩 Node.js • 🚀 Express • 🍃 MongoDB • 🐳 Docker • ⚙️ Jenkins • ☁️ AWS • 📈 Prometheus • 📊 Grafana
//             </p>
//           </p>
//           <div className="d-flex gap-4 justify-content-center flex-wrap mt-4">
//             <a
//               href="https://docs.google.com/document/d/1ZOjOOH7I6pf2VaOlnKIgnGuXizzKEmFe/edit"
//               target="_blank"
//               rel="noreferrer"
//               className="btn micdrop-btn px-5 py-3 btn-lg"
//             >
//               🚀 Explore My Work
//             </a>
//             <a
//               href="/cv.pdf"
//               download
//               className="btn micdrop-outline-btn px-5 py-3 btn-lg"
//             >
//               <i className="fas fa-download me-2"></i> Download CV
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* FOOTER */}
//       <footer className="text-center py-4 bg-black text-white-50">
//         🔥 {new Date().getFullYear()} · Designed & Engineered by Shadab Ahmed
//       </footer>

//       {/* 💅 MIC DROP STYLES */}
//       <style>{`
//         html, body {
//           overflow-x: hidden;
//           margin: 0;
//           padding: 0;
//           scroll-behavior: smooth;
//           background: #000;
//           font-family: 'Poppins', sans-serif;
//         }

//         .app-container {
//           background: radial-gradient(circle, #000000 0%, #111111 100%);
//           color: white;
//         }

//         .neon-navbar {
//           background: rgba(0, 0, 0, 0.8);
//           backdrop-filter: blur(16px);
//           border-bottom: 1px solid #0ff;
//           box-shadow: 0 0 15px #0ff30;
//         }

//         .neon-icon {
//           transition: transform 0.3s ease, text-shadow 0.3s ease;
//         }

//         .neon-icon:hover {
//           transform: scale(1.3);
//           text-shadow: 0 0 12px #0ff, 0 0 24px #00f6ff;
//         }

//         .neon-glow-text {
//           color: #0ff;
//           text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #00f6ff;
//         }

//         .hero-section {
//           background: linear-gradient(120deg, #000000, #121212);
//           padding: 100px 20px 50px;
//         }

//         .typewriter {
//           color: #0ff;
//           font-weight: 600;
//           font-size: 1.5rem;
//           white-space: nowrap;
//           border-right: 2px solid #0ff;
//           overflow: hidden;
//           width: 0;
//           animation: typing 4s steps(50, end) forwards, blink 0.8s step-end infinite;
//         }

//         @keyframes typing {
//           from { width: 0; }
//           to { width: 100%; }
//         }

//         @keyframes blink {
//           from, to { border-color: transparent }
//           50% { border-color: #0ff; }
//         }

//         .micdrop-btn {
//           background: linear-gradient(135deg, #0ff, #00f6ff);
//           border: none;
//           color: black;
//           box-shadow: 0 0 15px #0ff;
//           transition: 0.3s ease;
//         }

//         .micdrop-btn:hover {
//           background: linear-gradient(135deg, #00f6ff, #0ff);
//           transform: scale(1.05);
//           box-shadow: 0 0 25px #0ff;
//         }

//         .micdrop-outline-btn {
//           background: transparent;
//           border: 2px solid #0ff;
//           color: #0ff;
//           transition: 0.3s ease;
//         }

//         .micdrop-outline-btn:hover {
//           background: #0ff;
//           color: black;
//           transform: scale(1.05);
//           box-shadow: 0 0 20px #0ff;
//         }

//         .animate-slide {
//           animation: slideUp 1.2s ease-out;
//         }

//         @keyframes slideUp {
//           from { transform: translateY(40px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default App;




import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
  }, []);

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top neon-navbar px-4 py-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <span className="navbar-brand fw-bold fs-3 neon-glow-text portfolio-hover cursor-rocket">
            🚀 PORTFOLIO
          </span>
          <div className="d-flex fs-4 gap-4">
            <a
              href="https://github.com/SHADDY2001?tab=repositories"
              target="_blank"
              className="neon-icon text-light"
              rel="noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-shadab-ahmed-170460225"
              target="_blank"
              className="neon-icon text-info"
              rel="noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-shadab-ahmed-170460225/details/certifications/"
              className="neon-icon text-warning"
              target="_blank"
              rel="noreferrer"
              title="Certifications"
            >
              <i className="fas fa-award"></i>
            </a>
           
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="hero-section d-flex align-items-center justify-content-center min-vh-100">
        <div className="text-center animate-slide">
          <h1 className="fw-bold display-3 mb-4 neon-glow-text">
            Hi, I'm Shadab Ahmed
          </h1>
          <h4 className="typewriter mb-4">
            👨‍💻 MERN Stack Dev | DevOps Engineer | Cloud | IT | Cybersecurity
          </h4>
          <p className="lead text-white-50 px-4">
            I build lightning-fast MERN stack apps, automate DevOps workflows, and make infrastructure dance with Docker, Jenkins, Kubernetes & AWS — all while monitoring performance in real time with Prometheus & Grafana.
            <p className="lead text-white-50 px-4">
              ⚛️ React • 🟩 Node.js • 🚀 Express • 🍃 MongoDB • 🐳 Docker • ⚙️ Jenkins • ☁️ AWS • 📈 Prometheus • 📊 Grafana
            </p>
          </p>
          <div className="d-flex gap-4 justify-content-center flex-wrap mt-4">
            <a
              href="https://docs.google.com/document/d/1ZOjOOH7I6pf2VaOlnKIgnGuXizzKEmFe/edit"
              target="_blank"
              rel="noreferrer"
              className="btn micdrop-btn px-5 py-3 btn-lg"
            >
              🚀 Explore My Work
            </a>
            <a
              href="/cv.pdf"
              download
              className="btn micdrop-outline-btn px-5 py-3 btn-lg"
            >
              <i className="fas fa-download me-2"></i> Download CV
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center py-4 bg-black text-white-50">
        🔥 {new Date().getFullYear()} · Designed & Engineered by Shadab Ahmed
      </footer>

      {/* 💅 MIC DROP STYLES */}
      <style>{`
        html, body {
          overflow-x: hidden;
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
          background: #000;
          font-family: 'Poppins', sans-serif;
        }

        .app-container {
          background: radial-gradient(circle, #000000 0%, #111111 100%);
          color: white;
        }

        .neon-navbar {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid #0ff;
          box-shadow: 0 0 15px #0ff30;
        }

        .neon-icon {
          transition: transform 0.3s ease, text-shadow 0.3s ease;
        }

        .neon-icon:hover {
          transform: scale(1.3);
          text-shadow: 0 0 12px #0ff, 0 0 24px #00f6ff;
        }

        .neon-glow-text {
          color: #0ff;
          text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #00f6ff;
        }

        .portfolio-hover {
          transition: 0.3s ease;
        }

        .portfolio-hover:hover {
          text-shadow: 0 0 20px #ff0, 0 0 40px #f0f, 0 0 60px #0ff;
          transform: scale(1.1);
        }

        .cursor-rocket:hover {
          cursor: url('https://cdn-icons-png.flaticon.com/512/3212/3212608.png') 16 16, auto;
        }

        .hero-section {
          background: linear-gradient(120deg, #000000, #121212);
          padding: 100px 20px 50px;
        }

        .typewriter {
          color: #0ff;
          font-weight: 600;
          font-size: 1.5rem;
          white-space: nowrap;
          border-right: 2px solid #0ff;
          overflow: hidden;
          width: 0;
          animation: typing 4s steps(50, end) forwards, blink 0.8s step-end infinite;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: #0ff; }
        }

        .micdrop-btn {
          background: linear-gradient(135deg, #0ff, #00f6ff);
          border: none;
          color: black;
          box-shadow: 0 0 15px #0ff;
          transition: 0.3s ease;
        }

        .micdrop-btn:hover {
          background: linear-gradient(135deg, #00f6ff, #0ff);
          transform: scale(1.05);
          box-shadow: 0 0 25px #0ff;
        }

        .micdrop-outline-btn {
          background: transparent;
          border: 2px solid #0ff;
          color: #0ff;
          transition: 0.3s ease;
        }

        .micdrop-outline-btn:hover {
          background: #0ff;
          color: black;
          transform: scale(1.05);
          box-shadow: 0 0 20px #0ff;
        }

        .animate-slide {
          animation: slideUp 1.2s ease-out;
        }

        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default App;

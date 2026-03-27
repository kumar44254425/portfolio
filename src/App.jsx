import bg from "./assets/bg.jpg";
import profile from "./assets/profile.jpeg";

function App() {
  const skills = [
    "Java", "SQL", "JavaScript", "React",
    "Spring Boot", "HTML", "CSS", "Git"
  ];

  const projects = [
    {
      title: "Detection of Fake Online Reviews",
      desc: "Developed a Java-based system using supervised and semi-supervised learning to detect fake and genuine reviews.",
      github: "https://github.com/kumar44254425"
    },
    {
      title: "Ticket Booking System",
      desc: "Web app for booking bus, train, and flight tickets with dynamic UI.",
      github: "https://github.com/kumar44254425/ticket-booking-app",
      live: "https://zippy-lollipop-7b9a34.netlify.app/"
    },
    {
      title: "SME AI Business Insights",
      desc: "AI-based system for analyzing business data and generating insights using Python.",
      github: "https://github.com/kumar44254425/sme-ai-business-insights"
    },
    {
      title: "Smart Kisan",
      desc: "Java-based agriculture system to support farmers with smart solutions.",
      github: "https://github.com/kumar44254425/smart-kisan"
    }
  ];

  return (
    <div className="text-white font-sans">

      {/* HERO */}
      <section className="h-screen relative">

        <img
          src={bg}
          alt="background"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute w-full h-full bg-black/70 flex flex-col items-center justify-center text-center px-4">

          <img
            src={profile}
            alt="profile"
            className="w-40 h-40 rounded-full border-4 border-cyan-400 object-cover shadow-lg"
          />

          <h1 className="text-5xl md:text-6xl font-bold mt-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Gosukula Kumar
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Java Developer | Web Developer | QA Enthusiast
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">

            
                    <a
                href="https://drive.google.com/file/d/171JnstEBM0p8qTSfnbpo2sA1UyYkkD4t/preview"
                       target="_blank"
                     rel="noopener noreferrer"
                   className="px-4 py-2 sm:px-6 sm:py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                        >
                     View Resume
                       </a>
                 target="_blank"
                   rel="noopener noreferrer"
              className="px-4 py-2 sm:px-6 sm:py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
               >
             View Resume
                  </a>

            <a
              href="https://www.linkedin.com/in/kumargosukula/"
              target="_blank"
              className="px-6 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black"
            >
              LinkedIn
            </a>

            <a
              href="mailto:kumargosukula55@gmail.com"
              className="px-6 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black"
            >
              Email
            </a>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-gray-900 py-20 px-6 text-center">

        <h2 className="text-4xl font-bold text-yellow-400">About Me</h2>

        <p className="mt-6 max-w-3xl mx-auto text-gray-300 leading-relaxed">
          I'm Gosukula Kumar, a passionate software developer who loves building smart systems 
          and clean web applications. I enjoy solving real-world problems and learning new technologies.
        </p>

      </section>

      {/* SKILLS */}
      <section className="bg-black py-20 px-6 text-center">

        <h2 className="text-4xl font-bold text-yellow-400">Skills</h2>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {skills.map((s, i) => (
            <span
              key={i}
              className="px-5 py-3 bg-gray-800 rounded-lg shadow hover:bg-cyan-500 transition"
            >
              {s}
            </span>
          ))}
        </div>

      </section>

      {/* PROJECTS */}
      <section className="bg-gray-900 py-20 px-6 text-center">

        <h2 className="text-4xl font-bold text-yellow-400">Projects</h2>

        <div className="mt-10 grid md:grid-cols-2 gap-8">

          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 hover:shadow-cyan-500/30 transition"
            >
              <h3 className="text-xl font-bold text-cyan-400">
                {p.title}
              </h3>

              <p className="mt-3 text-gray-300">{p.desc}</p>

              {/* BUTTONS */}
              <div className="mt-4 flex gap-4 justify-center">

                <a
                  href={p.github}
                  target="_blank"
                  className="px-4 py-2 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-black"
                >
                  GitHub
                </a>

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    className="px-4 py-2 border border-green-400 rounded hover:bg-green-400 hover:text-black"
                  >
                    Live
                  </a>
                )}

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section className="bg-gray-900 py-20 text-center">

        <h2 className="text-4xl font-bold text-yellow-400">Contact</h2>

        <p className="mt-6 text-gray-300">📧 kumargosukula55@gmail.com</p>
        <p className="text-gray-300">📍 Karimnagar, Telangana</p>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-gray-700 text-gray-400">
        © 2026 Gosukula Kumar
      </footer>

    </div>
  );
}

export default App;
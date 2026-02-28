import { motion, useScroll, useTransform } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Database, 
  Palette, 
  ChevronDown,
  GraduationCap,
  Briefcase,
  Layers
} from "lucide-react";
import { useRef } from "react";

const PROJECTS = [
  {
    title: "32mmstudios.com",
    description: "Developed a production company website using HTML, CSS, JavaScript, and PHP. Hosted on Hostinger.",
    date: "Jul 2025",
    link: "https://github.com/Amaro07Luz",
    tags: ["HTML", "CSS", "JS", "PHP"]
  },
  {
    title: "Namira Paintball Website",
    description: "Designed and developed the company's website with responsive design and performance optimization.",
    date: "May 2025",
    link: "https://github.com/Amaro07Luz",
    tags: ["HTML", "CSS", "JS", "Responsive"]
  },
  {
    title: "Data Analysis Project",
    description: "Analyzed customer and sales data using spreadsheets and Tableau to identify seasonal trends for Namira Paintball.",
    date: "Jun 2025",
    link: "https://github.com/Amaro07Luz",
    tags: ["Tableau", "Data Analysis", "Excel"]
  }
];

const SKILLS = {
  technical: ["HTML/CSS", "Python", "JavaScript", "C", "SQL", "R", "Figma"],
  languages: ["English", "Portuguese", "Creole"]
};

const EXPERIENCE = [
  {
    company: "Blueprint | Stevens Institute of Technology",
    role: "Project Team Member",
    period: "Oct 2025 - Present",
    description: [
      "Accepted into a highly competitive student organization that builds pro bono technical solutions for nonprofit partners.",
      "Collaborating on UX/UI and visual design initiatives.",
      "Contributing to a website redesign for GenXL, a youth-focused nonprofit.",
      "Leading design improvements for Blueprint’s internal website."
    ]
  },
  {
    company: "Namira Paintball",
    role: "Owner & Digital Marketing Manager",
    period: "Jun 2023 - Sep 2025",
    description: [
      "Oversaw daily operations including staffing, scheduling, and event coordination.",
      "Implemented data-driven marketing campaigns that doubled bookings in one month.",
      "Increased reach and accounts engaged by over 3,000% in a single month.",
      "Successfully scaled the business and ensured long-term sustainability."
    ]
  }
];

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="bg-space min-h-screen selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass border-b-0 bg-transparent backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold tracking-tighter"
        >
          AMARO<span className="text-indigo-500">.</span>
        </motion.div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400 items-center">
          {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#" 
            download="Amaro_da_Luz_Resume.pdf"
            className="px-4 py-2 rounded-lg bg-indigo-500 text-white text-xs font-bold hover:bg-indigo-600 transition-colors flex items-center gap-2"
          >
            Resume <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="input_file_1.png" 
            alt="Amaro working" 
            className="w-full h-full object-cover opacity-30 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/50 to-[#030303]" />
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-6">
              Computer Science @ Stevens
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 leading-none">
              AMARO DA LUZ
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
              Self-taught programmer and engineer crafting digital experiences with code and creativity.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-zinc-500 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-display font-bold mb-12 flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-indigo-500" />
            The Journey
            <span className="w-12 h-[1px] bg-indigo-500" />
          </h2>
          <div className="space-y-8 text-zinc-400 leading-relaxed text-lg text-left md:text-center">
            <p>
              I always had a special place in my heart for STEM. My father saw that from a very young age and always encouraged it, buying me books about great inventors and tech. In one of those books, <span className="text-white">“Think Like a Programmer: An Introduction to Creative Problem Solving,”</span> my passion and curiosity for programming was born.
            </p>
            <p>
              Although initially intimidated, I started educating myself more on the matter. I started buying books, watching videos and tutorials online, and doing all the free online courses I could find. Suddenly, for the first time, I felt like I had an aspiration that I was passionate about and willing to go out of my way to succeed.
            </p>
            <p>
              Fast forward to today, I have intermediate/advanced knowledge of <span className="text-white">Python, CSS, SQL, HTML, Javascript, R</span>, and some knowledge in many other tech roles. I'm a self-taught programmer who is open and eager to learn more.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Experience</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold">Stevens Institute of Technology</h4>
                  <p className="text-sm text-zinc-400">Bachelor of Engineering in Computer Science</p>
                  <p className="text-xs text-indigo-400 mt-1">Expected May 2029 • GPA: 3.5</p>
                </div>
              </div>
            </motion.div>

            {/* Work */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Work History</h3>
              </div>
              <div className="space-y-8">
                {EXPERIENCE.map((exp, i) => (
                  <div key={i} className="relative pl-6 border-l border-zinc-800">
                    <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-zinc-700" />
                    <h4 className="text-white font-semibold">{exp.role}</h4>
                    <p className="text-sm text-zinc-400 mb-2">{exp.company} • {exp.period}</p>
                    <ul className="text-sm text-zinc-500 space-y-2 list-disc list-inside">
                      {exp.description.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
            <p className="text-zinc-400">A selection of my recent work and experiments.</p>
          </div>
          <motion.a 
            href="https://github.com/Amaro07Luz" 
            target="_blank"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
          >
            View GitHub <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-white/5 text-zinc-400 group-hover:text-indigo-400 transition-colors">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-500">{project.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
              <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-zinc-800 text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:gap-3 transition-all"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Technical Arsenal</h2>
              <p className="text-zinc-400 mb-12 max-w-md">
                Over the years, I've built a diverse set of skills ranging from web development to data analysis and systems programming.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-indigo-400">
                    <Code2 className="w-5 h-5" />
                    <span className="font-semibold">Web Dev</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-400">
                    <Terminal className="w-5 h-5" />
                    <span className="font-semibold">Scripting</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-purple-400">
                    <Database className="w-5 h-5" />
                    <span className="font-semibold">Data</span>
                  </div>
                  <div className="flex items-center gap-3 text-pink-400">
                    <Palette className="w-5 h-5" />
                    <span className="font-semibold">Design</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 content-start">
              {SKILLS.technical.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 rounded-full glass hover:border-indigo-500/50 transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
              <div className="w-full mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-sm font-mono text-zinc-500 mb-4 uppercase tracking-widest">Languages</h4>
                <div className="flex gap-6">
                  {SKILLS.languages.map((lang) => (
                    <span key={lang} className="text-zinc-300 font-medium">{lang}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
            LET'S BUILD <br /> SOMETHING <span className="text-indigo-500">GREAT.</span>
          </h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, or just a friendly chat about tech.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a 
              href="mailto:adaluz@stevens.edu" 
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors"
            >
              <Mail className="w-5 h-5" /> adaluz@stevens.edu
            </a>
            <a 
              href="tel:+12019209770" 
              className="flex items-center gap-3 px-8 py-4 rounded-full glass font-bold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" /> +1 (201) 920 9770
            </a>
          </div>

          <div className="flex justify-center gap-8 text-zinc-500">
            <a href="https://www.linkedin.com/in/amaro-da-luz-070940346" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="https://github.com/Amaro07Luz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900 text-center text-zinc-600 text-sm">
        <div className="mb-6">
          <a 
            href="#" 
            download="Amaro_da_Luz_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-white/5 transition-colors text-zinc-300 font-semibold"
          >
            Download Full Resume (PDF) <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Amaro da Luz. Built with passion and code.</p>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-widest">Hoboken, NJ • Stevens Institute of Technology</p>
      </footer>
    </div>
  );
}

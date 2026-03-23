import React, { useMemo, useState } from "react"; import { ArrowRight, Briefcase, Download, ExternalLink, Github, Instagram, Linkedin, Mail, MessageCircle, Phone, Sparkles, User, X, } from "lucide-react";

export default function AdrianPortfolio() { const [showContact, setShowContact] = useState(false);
const resumeFile = "/Adrian_Adams_Resume.pdf";

const profileImage = "/profile-photo.jpg"; // Replace with your professional photo in the public folder const resumeFile = "/Adrian_Adams_Resume.pdf"; // Put your generated resume PDF in the public folder

const contact = useMemo( () => ({ email: "adrikenadams@gmail.com", phone: "+254757631288", whatsapp: "https://wa.me/254757631288", linkedin: "https://www.linkedin.com/in/adrian-adams-627901337/", instagram: "https://instagram.com/adams.effect", github: "https://github.com/adriken-tech", }), [] );

const heroStats = [ { label: "AI-first builds", value: "3" }, { label: "Live flagship product", value: "2" }, { label: "Focus", value: "Products that solve real problems" }, ];

const projects = [ { id: "01", title: "Adriken AI Assistant", category: "Project 1 · AI Service Discovery Prototype", summary: "Built the first Adriken version as a local-first AI assistant that helped users get business ideas, practical guidance, and curated professional direction through a conversational interface.", problem: "People often know they need help but do not know where to begin or which direction to take.", solution: "Created a streamlined AI assistant experience that translated user intent into clear recommendations and useful next steps.", stack: ["Python", "Streamlit", "Ollama", "Prompt Design", "GitHub"], status: "Built & deployed", accent: "from-orange-500/20 to-amber-400/10", linkLabel: "View Adriken concept", link: "#", }, { id: "02", title: "Adriken Marketplace", category: "Project 2 · Marketplace Product Evolution", summary: "Evolved Adriken into a broader marketplace where people can find services or offer theirs, while entrepreneurs and professionals get discovered by customers actively searching for them.", problem: "Finding the right service is fragmented, and providers still struggle to be discovered at the moment demand exists.", solution: "Turned Adriken into an AI-powered marketplace centered on simple intent: find services or offer yours, with a cleaner product direction and market-ready positioning.", stack: ["Product Strategy", "AI Workflow Design", "Marketplace Thinking", "UI Direction", "Brand Positioning"], status: "Latest live product direction", accent: "from-sky-500/20 to-orange-500/10", linkLabel: "View latest Adriken", link: "https://adriken.com", }, {
  id: "03",
  title: "Sameta Diaspora Benevolent",
  category: "Project 3 · Community Platform Website",
  summary:
    "Designed and built a modern benevolent community website for Sameta Diaspora Benevolent, focused on trust, clarity, and fast access to membership, support, and leadership contacts.",
  problem:
    "The organization needed a professional digital presence that could clearly communicate its mission, organize member onboarding, and make support information easily accessible in a respectful and dependable way.",
  solution:
    "Built a community-friendly website with clear membership requirements, support pathways, leadership contact access, and document-ready infrastructure for registration, bylaws, and bereavement reporting.",
  stack: ["React", "Vite", "Tailwind CSS", "UI/UX", "Vercel"],
  status: "Live",
  accent: "from-emerald-500/15 to-orange-500/10",
  linkLabel: "View live site",
  link: "https://sameta-benevolent.vercel.app",
},];


const skills = [
  "Web Development",
  "AI Product Building",
  "Prompt Engineering",
  "Data Analytics",
  "Data Entry",
  "Technical Support",
  "Analytical Reasoning",
  "Python",
  "Streamlit",
  "Product Strategy",
  "Marketplace Design",
  "GitHub",
  "Rapid Prototyping",
];

const aboutPoints = [
  "I build AI-driven and web-based products with real-world application.",
  "My work combines software, data, and strategy to solve practical problems.",
  "I have experience in IT systems, technical support, and analytical problem-solving.",
];
return ( <div className="min-h-screen bg-[#06070b] text-white"> <div className="pointer-events-none absolute inset-0 overflow-hidden"> <div className="absolute left-[-10%] top-[-5%] h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" /> <div className="absolute right-[-8%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-sky-500/15 blur-3xl" /> <div className="absolute bottom-[-10%] left-[30%] h-[24rem] w-[24rem] rounded-full bg-orange-400/10 blur-3xl" /> </div>

<main className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
    <header className="sticky top-4 z-30 mb-10 rounded-full border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Adrian Adams</div>
          <div className="mt-1 text-lg font-semibold text-white">AI Product Builder</div>
        </div>
        <nav className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <button onClick={() => setShowContact(true)} className="transition hover:text-white">Contact</button>
        </nav>
      </div>
    </header>

    <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-200">
          <Sparkles className="h-4 w-4" />
          Focused on building products people actually use
        </div>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl xl:text-[5.4rem]">
          I design and build
          <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-amber-300 bg-clip-text text-transparent">
            {" "}AI-driven products
          </span>
          {" "}with market-level ambition.
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
          I’m Adrian Adams — a builder focused on turning ideas into usable products. I work at the intersection of AI, software, and strategy, with a growing track record of building tools that connect people, services, and opportunity.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-medium text-zinc-950 transition hover:scale-[1.02]"
          >
            View My Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={resumeFile}
            download
            className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-6 py-3.5 font-medium text-white transition hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <button
            onClick={() => setShowContact(true)}
            className="inline-flex items-center gap-2 rounded-2xl border border-orange-400/20 bg-orange-500/10 px-6 py-3.5 font-medium text-orange-100 transition hover:bg-orange-500/15"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </button>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {heroStats.map((item) => (
            <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-2xl font-semibold text-white">{item.value}</div>
              <div className="mt-1 text-sm leading-6 text-zinc-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-[2.4rem] bg-gradient-to-br from-orange-500/20 via-transparent to-sky-500/20 blur-2xl" />
        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Portfolio Profile</div>
              <div className="mt-1 text-xl font-semibold">Adrian Adams</div>
            </div>
            <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
              Open to opportunities
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-4">
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-zinc-900">
              <img
                src={profileImage}
                alt="Professional portrait of Adrian Adams"
                className="h-[24rem] w-full object-cover"
              />
            </div>
           <div className="mt-4 text-sm text-zinc-400">
  AI Product Builder · Focused on real-world solutions
  </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="mt-24 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">About</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Builder mindset. Product instinct. Market-level ambition.
        </h2>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <p className="text-lg leading-8 text-zinc-300">
          I’m a product-minded builder focused on creating AI-driven software that solves real problems. I move fast, think in systems, and care deeply about turning rough ideas into products people can actually use.
        </p>
        <div className="mt-8 space-y-4">
          {aboutPoints.map((point) => (
            <div key={point} className="flex gap-3 text-zinc-300">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-400" />
              <span className="leading-7">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="projects" className="mt-24">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Projects</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Selected product work</h2>
        </div>
        <div className="max-w-xl text-sm leading-7 text-zinc-400">
          From conversational AI prototypes to broader marketplace thinking, my work is centered on building products with real-world use cases and clear market direction.
        </div>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70`} />
            <div className="relative">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm text-orange-200">{project.category}</div>
                  <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-zinc-300">
                  {project.status}
                </div>
              </div>

              <p className="text-zinc-200/95 leading-7">{project.summary}</p>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Problem</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{project.problem}</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Solution</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{project.solution}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-zinc-200">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/15"
                >
                  {project.linkLabel}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
    
    <section className="mt-24">
  <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Experience</div>
  <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
    Professional experience
  </h2>

  <div className="mt-8 grid gap-6 md:grid-cols-2">

    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">IT Systems Intern</h3>
      <p className="mt-2 text-sm text-zinc-400">
        Maintained and supported IT systems, troubleshooting hardware, software, and network issues while ensuring operational efficiency.
      </p>
    </div>

    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">Remote IT Support & Technical Analyst</h3>
      <p className="mt-2 text-sm text-zinc-400">
        Delivered remote technical support, resolved system issues, and analyzed recurring problems to improve user experience and system reliability.
      </p>
    </div>

  </div>
</section>

    <section id="skills" className="mt-24 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Capabilities</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">What I bring</h2>
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-zinc-200 transition hover:border-orange-400/30 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>

    <section className="mt-24 rounded-[2rem] border border-orange-400/15 bg-gradient-to-br from-orange-500/12 to-white/[0.03] p-8 backdrop-blur-xl md:p-10">
      <div className="max-w-4xl">
        <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Positioning</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          I’m not interested in building demoware. I’m interested in building products that can survive the market.
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
          My work is guided by one principle: the best products are not just technically possible — they are usable, relevant, and strategically positioned to win attention in the real world.
        </p>
      </div>
    </section>

    <section id="contact" className="mt-24 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Contact</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Let’s build something people care about.</h2>
        </div>
        <button
          onClick={() => setShowContact(true)}
          className="inline-flex items-center gap-2 self-start rounded-2xl bg-white px-5 py-3 font-medium text-zinc-950 transition hover:scale-[1.02]"
        >
          Open Contact Card
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <a href={`mailto:${contact.email}`} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 transition hover:bg-black/30">
          <Mail className="h-5 w-5 text-orange-300" />
          <div className="mt-4 text-sm text-zinc-500">Email</div>
          <div className="mt-1 text-sm font-medium text-zinc-200 break-all">{contact.email}</div>
        </a>
        <a href={`tel:${contact.phone}`} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 transition hover:bg-black/30">
          <Phone className="h-5 w-5 text-orange-300" />
          <div className="mt-4 text-sm text-zinc-500">Phone</div>
          <div className="mt-1 text-sm font-medium text-zinc-200">{contact.phone}</div>
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 transition hover:bg-black/30">
          <Linkedin className="h-5 w-5 text-orange-300" />
          <div className="mt-4 text-sm text-zinc-500">LinkedIn</div>
          <div className="mt-1 text-sm font-medium text-zinc-200">View profile</div>
        </a>
        <a href={contact.instagram} target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 transition hover:bg-black/30">
          <Instagram className="h-5 w-5 text-orange-300" />
          <div className="mt-4 text-sm text-zinc-500">Instagram</div>
          <div className="mt-1 text-sm font-medium text-zinc-200">@adams.effect</div>
        </a>
      </div>
    </section>
  </main>

  {showContact && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[#0d1016] p-7 shadow-2xl">
        <button
          onClick={() => setShowContact(false)}
          className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Contact Card</div>
        <h3 className="mt-3 text-3xl font-semibold">Adrian Adams</h3>
        <p className="mt-3 max-w-xl leading-7 text-zinc-400">
          Open to product, software, AI, and collaboration opportunities. If you want someone who thinks like a builder and executes like a founder, let’s talk.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <a href={`mailto:${contact.email}`} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-orange-300" />
              <span className="font-medium">Email</span>
            </div>
            <div className="mt-3 text-zinc-300 break-all">{contact.email}</div>
          </a>

          <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-orange-300" />
              <span className="font-medium">WhatsApp</span>
            </div>
            <div className="mt-3 text-zinc-300">{contact.phone}</div>
          </a>

          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-orange-300" />
              <span className="font-medium">LinkedIn</span>
            </div>
            <div className="mt-3 text-zinc-300">Professional profile</div>
          </a>

          <a href={contact.instagram} target="_blank" rel="noreferrer" className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
            <div className="flex items-center gap-3">
              <Instagram className="h-5 w-5 text-orange-300" />
              <span className="font-medium">Instagram</span>
            </div>
            <div className="mt-3 text-zinc-300">@adams.effect</div>
          </a>
        </div>
      </div>
    </div>
  )}
</div>

); }
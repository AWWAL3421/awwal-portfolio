import LexiconShowcase from './components/LexiconShowcase';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-700 p-8 md:p-24 font-sans selection:bg-slate-200">
      {/* We widened the container to max-w-6xl to fit two columns side-by-side */}
      <div className="max-w-6xl mx-auto space-y-32">
        
        {/* Intro Section (Restricted width so it doesn't stretch too far) */}
        <section className="space-y-6 pt-12 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Hi, I'm Awwal.
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            I'm a <b>Software Engineer and Systems Administrator</b> based in Lagos, West Africa. Occasionally, <span className="underline underline-offset-4 decoration-slate-400">I write <a href="https://dev.to/awwal3421" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:text-emerald-600 transition-colors">here</a></span>. If you're building a startup in the consumer technology space, need robust IT infrastructure, or just want to get a coffee, please reach out.
          </p>
          
          <div className="pt-4">
            <a 
              href="mailto:awwaltemidire@gmail.com" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors text-base font-bold shadow-md"
            >
              Contact me
            </a>
          </div>
        </section>

        {/* RTCom Experience - SIDE BY SIDE GRID */}
        <section className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          {/* Left Side: Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Recently, I started working at R T Communication Defence.
              </h2>
              <p className="text-lg text-slate-800 font-medium">
                I joined RTCom as a Member of Technical Staff, where we build and maintain critical communication and naval defense infrastructure.
              </p>
            </div>
            <p className="text-base text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Server Administration.</strong> I manage Windows and Linux servers, configure VMware ESXi on HP ProLiant and Fujitsu Primergy hardware, and design enterprise CCTV network systems. A large part of my role involves building bare-metal servers from scratch and ensuring their absolute reliability.
            </p>
          </div>
          
          {/* Right Side: Image */}
          <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-sm sticky top-24">
             {/* Note: Ensure server-rack.jpg is in your public/ folder */}
             <Image 
                src="/server-rack.jpg" 
                alt="Bare-metal server infrastructure setup" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
              />
          </div>
        </section>

        {/* The Quran Encyclopedia Project - SIDE BY SIDE GRID */}
        <section className="grid lg:grid-cols-[1fr_450px] gap-12 items-start">
          {/* Left Side: Text & API Component */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Before that, I was building the Quran Encyclopedia.
              </h2>
              <p className="text-lg text-slate-800 font-medium">
                An ecosystem designed to aggregate and organize classical literature and linguistic matrices at a massive scale.
              </p>
            </div>
            <p className="text-base text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Database Architecture.</strong> Earlier this year, two friends and I built a massive aggregation tool during a hackathon. Under the hood, it is a complex, large-scale database engineering challenge that processes downstream APIs instantly.
            </p>
            
          
            {/* The upgraded tabbed API Dashboard */}
            <details className="group border border-slate-800 rounded-xl bg-slate-900 overflow-hidden mt-4 shadow-lg">
              <summary className="cursor-pointer px-6 py-4 font-bold text-white hover:bg-slate-800 list-none flex justify-between items-center transition-colors">
                <span className="text-base tracking-wide flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Test the Live API Matrix
                </span>
                <span className="transition-transform duration-300 group-open:rotate-180 text-emerald-400 font-bold text-lg">↓</span>
              </summary>
              {/* Removed the extra padding so the dark component fuses perfectly with the dark bar */}
              <div className="p-0 border-t border-slate-800">
                <LexiconShowcase />
              </div>
            </details>
          </div>

          {/* Right Side: Video Demo */}
          <div className="space-y-3 sticky top-24">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-right">
              App Demo
            </p>
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-900 shadow-sm relative">
              {/* Note: Ensure quran-demo.mp4 is in your public/ folder */}
              <video 
                controls 
                controlsList="nodownload"
                className="w-full h-auto object-cover"
              >
                <source src="/quran-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Freelance Section (Kept max-w-3xl so it doesn't stretch too wide) */}
        <section className="max-w-3xl">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              I spent 3½ years building a variety of tools as a freelancer.
            </h2>
            <p className="text-lg text-slate-800 font-medium">
              From 2018 to 2024, I worked independently as a full-stack engineer leading efforts across the entire hosting and deployment experience.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-base text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Phoenix Digital Banking Core.</strong> A secure, high-performance fintech banking backend built with Node.js, Prisma ORM, and PostgreSQL designed to handle sensitive financial transactions. <a href="https://github.com/AWWAL3421/AWL-DIGITAL-BANKING-BANKING-#awl-digital-banking-banking-" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-600 font-bold uppercase tracking-wider hover:underline ml-1">View Source</a>
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Marketplace & Dashboards.</strong> I engineered the backend for a comprehensive marketplace system inspired by <a href="https://github.com/SE-Faith/marketplace-system-group16" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline font-medium">Jiji</a>, as well as the administrative dashboard for <a href="https://nurul-uhdah.web.app/admin" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline font-medium">Nurul-Uhdah</a>.
            </p>
          </div>
        </section>

        {/* Nomba Fintech Section (Kept max-w-3xl) */}
        <section className="max-w-3xl">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              And before that, I worked at Nomba Fintech.
            </h2>
            <p className="text-lg text-slate-800 font-medium">
              I spent a year at Nomba, starting in sales before joining the product team for Nombank.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-base text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Product & Customer Success.</strong> I was responsible for ensuring users had a frictionless experience with the software. I resolved critical technical issues, optimized how users interacted with the search and filter features, and guided the rollout of updates for new capabilities.
            </p>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="pt-12 pb-8 flex items-center justify-between border-t border-slate-200 max-w-3xl">
          <p className="text-sm text-slate-500 font-medium">
            Building in Lagos.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/AWWAL3421" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/awwal-yahya-35a442367" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0a66c2] transition-colors" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </footer>

      </div>
    </main>
  );
}
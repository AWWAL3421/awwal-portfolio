import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-3xl mx-auto py-4 flex items-center justify-between">
        
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-extrabold text-slate-900 tracking-tight hover:text-emerald-600 transition-colors">
          Awwal<span className="text-emerald-600">.dev</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <a 
            href="https://github.com/AWWAL3421" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://dev.to/awwal3421" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            Articles
          </a>
        </div>

        {/* CTA Button */}
        <a 
          href="mailto:awwaltemidire@gmail.com" 
          className="px-4 py-2 bg-slate-50 text-slate-700 border border-slate-200 rounded-lg text-sm font-bold hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}
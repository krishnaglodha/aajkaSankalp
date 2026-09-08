import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60 relative z-10 flex flex-col items-center text-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 shadow-xl border-4 border-white">
          <Image
            src="/me.jpeg"
            alt="Krishna Lodha"
            fill
            className="object-cover"
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-sans">
          Jai Jinendra
        </h1>
        
        <div className="text-lg text-gray-600 space-y-4 leading-relaxed font-sans">
          <p>
            My name is <strong>Krishna Lodha</strong>. I run a software company{" "}
            <Link 
              href="https://rottengrapes.tech" 
              target="_blank" 
              className="text-orange-500 hover:text-orange-600 font-medium underline underline-offset-4 decoration-orange-200 transition-colors"
            >
              rottengrapes.tech
            </Link>{" "}
            from Nashik, India.
          </p>
          <p>
            I created this website to make it easy for anyone to take a sankalp quickly in their everyday life.
          </p>
          <p className="pt-4">
            For any suggestions, please reach out at{" "}
            <a 
              href="mailto:krishna@rottengrapes.tech"
              className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
            >
              krishna@rottengrapes.tech
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white/50 backdrop-blur-md border-b border-white/40 sticky top-0 z-50 shadow-sm">
      <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-orange-600 transition-colors">
        Aaj Ka Sankalp
      </Link>
      
      <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
        About Us
      </Link>
    </nav>
  );
}

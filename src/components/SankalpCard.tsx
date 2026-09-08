"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface SankalpCardProps {
  sankalp: string;
  onReset: () => void;
}

export default function SankalpCard({ sankalp, onReset }: SankalpCardProps) {
  const handleShare = () => {
    const text = `🙏 *My Sankalp for today is* -- ${sankalp} ✨\n\n🎯 You can take your daily sankalp at: https://aajkasankalp.vercel.app/`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-white/30 backdrop-blur-sm" onClick={onReset}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -50 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="max-w-md w-full mx-auto p-8 rounded-3xl bg-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/60 text-center relative overflow-hidden"
      >
        {/* Decorative mandalas/circles */}
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 pointer-events-none"></div>
        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-xl font-medium text-gray-400 tracking-widest uppercase mb-4">आज का संकल्प</h2>
          
          <p className="text-3xl md:text-4xl text-gray-800 font-bold mb-8 leading-tight">
            "{sankalp}"
          </p>

          <div className="flex flex-col gap-4">
            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#128C7E] text-white font-medium text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle size={24} />
              Share on WhatsApp
            </button>
            
            <button
              onClick={onReset}
              className="text-gray-500 hover:text-gray-800 text-sm mt-2 transition-colors underline underline-offset-4"
            >
              Take another Sankalp
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

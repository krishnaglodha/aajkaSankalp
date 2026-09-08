"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import BubbleField from "@/components/BubbleField";
import SankalpCard from "@/components/SankalpCard";
import sankalpsData from "@/data/sankalps.json";

export default function Home() {
  const [selectedSankalp, setSelectedSankalp] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSelect = () => {
    const randomIndex = Math.floor(Math.random() * sankalpsData.length);
    setSelectedSankalp(sankalpsData[randomIndex].text);
  };

  const handleReset = () => {
    setSelectedSankalp(null);
  };

  if (!mounted) return null;

  return (
    <main className="flex-1 relative flex items-center justify-center p-4 selection:bg-orange-200 overflow-hidden">
      <AnimatePresence mode="wait">
        {!selectedSankalp ? (
          <BubbleField key="bubbles" onSelect={handleSelect} />
        ) : (
          <SankalpCard key="card" sankalp={selectedSankalp} onReset={handleReset} />
        )}
      </AnimatePresence>
    </main>
  );
}

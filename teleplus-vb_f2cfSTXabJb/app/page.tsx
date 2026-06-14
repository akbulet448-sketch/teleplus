'use client';
import { useEffect } from 'react';
import { TelePulsApp } from "@/components/telepuls/telepuls-app";

export default function HomePage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // @ts-ignore
        if (window.Pi) {
          // @ts-ignore
          window.Pi.init({ version: "2.0" });
        }
      } catch (error) {
        console.error("Pi SDK init failed", error);
      }
    }
  }, []);

  return <TelePulsApp />;
}

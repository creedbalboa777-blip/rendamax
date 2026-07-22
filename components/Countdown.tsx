"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [time, setTime] = useState(2 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
  <div className="mt-8">

    <p className="text-center text-red-400 font-bold text-lg animate-pulse">
      ⏰ ESTA OFERTA TERMINA EM:
    </p>

    <div className="mt-5 flex justify-center gap-4">

      <div className="bg-zinc-900 border border-green-500 rounded-xl px-6 py-4 shadow-[0_0_20px_rgba(34,197,94,.25)]">
        <div className="text-4xl font-extrabold text-green-400">
          {hours}
        </div>
        <div className="text-xs text-gray-400 mt-1">
          HORAS
        </div>
      </div>

      <div className="bg-zinc-900 border border-green-500 rounded-xl px-6 py-4 shadow-[0_0_20px_rgba(34,197,94,.25)]">
        <div className="text-4xl font-extrabold text-green-400">
          {minutes}
        </div>
        <div className="text-xs text-gray-400 mt-1">
          MIN
        </div>
      </div>

      <div className="bg-zinc-900 border border-green-500 rounded-xl px-6 py-4 shadow-[0_0_20px_rgba(34,197,94,.25)]">
        <div className="text-4xl font-extrabold text-green-400">
          {seconds}
        </div>
        <div className="text-xs text-gray-400 mt-1">
          SEG
        </div>
      </div>

    </div>

  </div>
);

}
"use client";

import { Star, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
  <section
  id="inicio"
className="relative min-h-screen flex items-center overflow-hidden px-6 pt-20 md:pt-16"
>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#22c55e20,transparent_60%)]" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center mt-8">

        {/* TEXTO */}
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2">
            <span className="text-sm font-semibold text-green-400">
              🚀 MÉTODO ATUALIZADO 2026
            </span>
          </div>

          <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
  className="text-5xl md:text-7xl font-extrabold text-green-400 drop-shadow-[0_0_50px_rgba(34,197,94,0.8)]"
>
  RENDA MAX
</motion.h1>

          <p className="mt-6 text-3xl md:text-4xl font-bold text-white leading-tight">
            Transforme seu tempo em renda usando IA
          </p>

          <p className="mt-6 text-xl text-gray-400 leading-9 max-w-2xl">
            Descubra um método prático para criar novas fontes de renda
            utilizando Inteligência Artificial, ferramentas modernas e
            estratégias simples, mesmo começando do zero.
          </p>

          <div className="mt-10 flex flex-wrap gap-10 text-gray-300">

            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>+2.000 alunos</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span>Garantia de 7 dias</span>
            </div>

            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-green-400" />
              <span>Acesso imediato</span>
            </div>

          </div>

          <motion.a
            href="https://pay.kiwify.com.br/nXeX75F"
target="_blank"
rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
             transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
          className="inline-block mt-10 px-12 py-6 rounded-xl text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-400 text-black shadow-[0_0_40px_rgba(34,197,94,0.55)] hover:shadow-[0_0_60px_rgba(34,197,94,0.8)] transition-all duration-300"
          >
            QUERO MEU ACESSO AGORA
          </motion.a>
        </div>

        {/* IMAGEM */}
       <motion.div
  initial={{ opacity: 0, x: 80 }}
 animate={{
  opacity: 1,
  x: 0,
  y: [0, -10, 0],
}}
  whileHover={{ scale: 1.05 }}
  transition={{
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
}}
  className="relative flex justify-center lg:scale-110"
>
  <div className="absolute w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <Image
  src="/mockup-rendamax.png"
  alt="Curso Renda Max"
width={1200}
height={1200}
  priority
  className="w-full max-w-[900px] h-auto drop-shadow-[0_0_60px_rgba(34,197,94,0.45)]"
/>
        </motion.div>

      </div>
    </section>
  );
}
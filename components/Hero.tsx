"use client";

import { Star, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-6 pt-32 pb-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#22c55e20,transparent_60%)]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <div>

          <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 mb-6">
            <span className="text-green-400 text-sm font-semibold">
              🚀 MÉTODO ATUALIZADO 2026
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-green-400 leading-none"
          >
            RENDA MAX
          </motion.h1>

          <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white leading-tight">
            Transforme seu tempo em renda usando IA
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-400 leading-9 max-w-xl">
            Descubra um método prático para criar novas fontes de renda
            utilizando Inteligência Artificial, ferramentas modernas e
            estratégias simples, mesmo começando do zero.
          </p>

          <div className="flex flex-wrap gap-8 mt-10 text-gray-300">

            <div className="flex items-center gap-2">
              <Star className="text-yellow-400 w-5 h-5" />
              +2.000 alunos
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="text-green-400 w-5 h-5" />
              Garantia de 7 dias
            </div>

            <div className="flex items-center gap-2">
              <Zap className="text-green-400 w-5 h-5" />
              Acesso imediato
            </div>

          </div>

          <motion.a
            href="https://pay.kiwify.com.br/nXeX75F"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-12 bg-gradient-to-r from-green-500 to-emerald-400 text-black font-bold text-xl px-10 py-5 rounded-xl shadow-[0_0_40px_rgba(34,197,94,.5)]"
          >
            QUERO MEU ACESSO AGORA
          </motion.a>

        </div>

        {/* IMAGEM */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center"
        >
          <Image
            src="/mockup-rendamax.png"
            alt="Curso Renda Max"
            width={900}
            height={900}
            priority
            className="w-full max-w-[850px] h-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}
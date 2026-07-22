"use client";

import { DollarSign, Rocket, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Benefits() {
  return (
    <motion.section
  id="vantagens"
  className="py-24 px-8 max-w-7xl mx-auto"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8 }}
>
     <h2 className="text-5xl md:text-6xl font-extrabold text-center text-white mb-6">
  Por que escolher o
  <span className="text-green-400"> Renda Max?</span>
</h2>

<p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
  Um método moderno para quem deseja criar novas fontes de renda usando Inteligência Artificial, mesmo começando do zero.
</p>

     <div className="grid md:grid-cols-3 gap-8">

  {/* Caixa 1 */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1, duration: 0.6 }}
    whileHover={{ scale: 1.05, y: -8 }}
    className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 transition-all duration-500 hover:border-green-400 hover:bg-zinc-800 hover:shadow-[0_0_45px_rgba(34,197,94,0.35)]"
  >
    <motion.div
      className="mb-5"
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <DollarSign
        size={55}
        className="text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,.8)]"
      />
    </motion.div>

    <h3 className="text-green-400 text-2xl font-bold">
      Renda Extra
    </h3>

    <p className="mt-4 text-gray-400">
      Descubra formas inteligentes de aumentar sua renda.
    </p>
  </motion.div>

  {/* Caixa 2 */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.6 }}
    whileHover={{ scale: 1.05, y: -8 }}
    className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 transition-all duration-500 hover:border-green-400 hover:bg-zinc-800 hover:shadow-[0_0_45px_rgba(34,197,94,0.35)]"
  >
    <motion.div
      className="mb-5"
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.3,
      }}
    >
      <Rocket
        size={55}
        className="text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,.8)]"
      />
    </motion.div>

    <h3 className="text-green-400 text-2xl font-bold">
      Método Simples
    </h3>

    <p className="mt-4 text-gray-400">
      Passo a passo fácil para quem está começando.
    </p>
  </motion.div>

  {/* Caixa 3 */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5, duration: 0.6 }}
    whileHover={{ scale: 1.05, y: -8 }}
    className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 transition-all duration-500 hover:border-green-400 hover:bg-zinc-800 hover:shadow-[0_0_45px_rgba(34,197,94,0.35)]"
  >
    <motion.div
      className="mb-5"
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.6,
      }}
    >
      <TrendingUp
        size={55}
        className="text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,.8)]"
      />
    </motion.div>

    <h3 className="text-green-400 text-2xl font-bold">
      Resultados
    </h3>

    <p className="mt-4 text-gray-400">
      Estratégias atualizadas para acelerar seus resultados.
    </p>
   </motion.div>

</div>

</motion.section>
  );
}

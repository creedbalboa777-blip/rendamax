"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-5xl md:text-6xl font-extrabold text-center text-white mb-6">
  O que nossos
  <span className="text-green-400"> alunos dizem</span>
</h2>

<p className="text-center text-gray-400 text-lg max-w-3xl mx-auto mb-16">
  Veja a opinião de pessoas que já começaram a aplicar o método Renda Max.
</p>
      <div className="grid md:grid-cols-3 gap-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0 }}
          whileHover={{ y: -10 }}
          className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all duration-300"
        >
         <div className="relative w-16 h-16 mb-5">

  <div className="absolute inset-0 rounded-full bg-green-500/25 blur-lg"></div>

  <div className="relative w-16 h-16 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center text-2xl font-bold text-green-400">
    J
  </div>

</div>

          <h3 className="text-xl font-bold text-green-400">
            João Silva
          </h3>

<div className="flex gap-1 text-yellow-400 text-xl mt-3">
  ⭐ ⭐ ⭐ ⭐ ⭐
</div>
          <p className="mt-4 text-gray-400">
            Em poucas semanas consegui gerar minha primeira renda online.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -10 }}
          className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all duration-300"
        >
         <div className="relative w-16 h-16 mb-5">

  <div className="absolute inset-0 rounded-full bg-green-500/25 blur-lg"></div>

  <div className="relative w-16 h-16 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center text-2xl font-bold text-green-400">
    M
  </div>

</div>

          <h3 className="text-xl font-bold text-green-400">
            Maria Souza
          </h3>

<div className="flex gap-1 text-yellow-400 text-xl mt-3">
  ⭐ ⭐ ⭐ ⭐ ⭐
</div>
          <p className="mt-4 text-gray-400">
            O método é simples, direto e muito fácil de aplicar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -10 }}
          className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all duration-300"
        >
         <div className="relative w-16 h-16 mb-5">

  <div className="absolute inset-0 rounded-full bg-green-500/25 blur-lg"></div>

  <div className="relative w-16 h-16 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center text-2xl font-bold text-green-400">
    C
  </div>

</div>

          <h3 className="text-xl font-bold text-green-400">
            Carlos Lima
          </h3>

<div className="flex gap-1 text-yellow-400 text-xl mt-3">
  ⭐ ⭐ ⭐ ⭐ ⭐
</div>
          <p className="mt-4 text-gray-400">
            Foi o melhor investimento que fiz para aprender renda online.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
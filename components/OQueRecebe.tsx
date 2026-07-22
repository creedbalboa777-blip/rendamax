"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Gift,
  Infinity,
  Smartphone,
  ShieldCheck,
  MonitorSmartphone,
} from "lucide-react";

const itens = [
  {
    icon: <BookOpen className="w-8 h-8 text-green-400" />,
    titulo: "Curso Completo Renda Max",
    descricao:
      "Aprenda passo a passo como utilizar Inteligência Artificial para criar novas fontes de renda.",
  },
  {
    icon: <Gift className="w-8 h-8 text-green-400" />,
    titulo: "Bônus: Prompt Book Premium",
    descricao:
      "Coleção de prompts prontos para acelerar seus resultados utilizando IA.",
  },
  {
    icon: <Infinity className="w-8 h-8 text-green-400" />,
    titulo: "Atualizações Futuras",
    descricao:
      "Sempre que houver novidades, você receberá novas atualizações sem custo adicional.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-green-400" />,
    titulo: "Acesso Imediato",
    descricao:
      "Pagamento aprovado? O acesso é liberado na hora.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
    titulo: "Garantia de 7 Dias",
    descricao:
      "Você pode solicitar reembolso dentro do prazo caso o curso não atenda às suas expectativas.",
  },

  {
  icon: <MonitorSmartphone className="w-8 h-8 text-green-400" />,
  titulo: "Acesso em Qualquer Dispositivo",
  descricao:
    "Estude pelo computador, notebook, tablet ou celular quando e onde quiser.",
},
];

export default function OQueRecebe() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center text-white mb-6">
  Tudo que você recebe no
  <span className="text-green-400"> Renda Max</span>
</h2>

<p className="text-center text-gray-400 text-lg max-w-3xl mx-auto mb-16">
  Um pacote completo com treinamento, bônus exclusivos e atualizações para você começar a faturar utilizando Inteligência Artificial.
</p>

      <div className="grid md:grid-cols-2 gap-8">
        {itens.map((item, index) => (
          <motion.div
            key={index}
           className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_35px_rgba(34,197,94,0.20)]"
          >
            <motion.div
  className="mb-5 relative flex items-center justify-center w-16 h-16"
  animate={{ y: [0, -6, 0] }}
  transition={{
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
    delay: index * 0.2,
  }}
>
  <div className="absolute w-12 h-12 bg-green-500/20 rounded-full blur-xl"></div>

  <div className="relative z-10">
    {item.icon}
  </div>
</motion.div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {item.titulo}
            </h3>

            <p className="text-gray-400">
              {item.descricao}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const perguntas = [
  {
    pergunta: "Como recebo o acesso?",
    resposta:
      "Após a confirmação do pagamento, o acesso é liberado imediatamente no seu e-mail.",
  },
  {
    pergunta: "Preciso ter experiência?",
    resposta:
      "Não. O método foi criado para quem está começando do zero.",
  },
  {
    pergunta: "Como funciona a garantia?",
    resposta:
      "Você possui 7 dias para solicitar o reembolso caso o curso não atenda às suas expectativas.",
  },
  {
    pergunta: "Posso acessar pelo celular?",
    resposta:
      "Sim. Você poderá acessar pelo computador, notebook, tablet ou celular.",
  },
];

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 px-8 max-w-4xl mx-auto"
    >
      <h2 className="text-5xl md:text-6xl font-extrabold text-center text-white mb-6">
        Perguntas
        <span className="text-green-400"> Frequentes</span>
      </h2>

      <p className="text-center text-gray-400 text-lg max-w-3xl mx-auto mb-16">
        Tire suas principais dúvidas antes de começar e tenha total segurança na sua compra.
      </p>

      <div className="space-y-5">

        {perguntas.map((item, index) => (

          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            className="bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-green-500 transition-all duration-300 overflow-hidden"
          >

            <button
              onClick={() =>
                setAberto(aberto === index ? null : index)
              }
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.pergunta}
              </h3>

              <motion.div
                animate={{
                  rotate: aberto === index ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-green-400" />
              </motion.div>

            </button>

            <AnimatePresence>

              {aberto === index && (

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-gray-400">
                    {item.resposta}
                  </p>
                </motion.div>

              )}

            </AnimatePresence>

          </motion.div>

        ))}

      </div>
    </section>
  );
}
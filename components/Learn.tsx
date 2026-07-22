import { CheckCircle } from "lucide-react";

export default function Learn() {
  const itens = [
    "Como utilizar Inteligência Artificial para aumentar sua produtividade",
    "Como criar fontes de renda online mesmo começando do zero",
    "Ferramentas recomendadas para acelerar seus resultados",
    "Estratégias práticas para gerar renda de forma organizada",
    "Como evitar os erros mais comuns de iniciantes",
    "Atualizações futuras incluídas sem custo adicional",
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white">
        O que você vai aprender
      </h2>

      <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
        Um conteúdo organizado para ajudar você a dar os primeiros passos e
        desenvolver novas formas de gerar renda utilizando tecnologia e IA.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-14">
        {itens.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-300"
          >
            <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0 mt-1" />

            <p className="text-gray-300">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
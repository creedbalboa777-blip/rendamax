import { Gift } from "lucide-react";

export default function Bonus() {
  const bonus = [
    "🎁 Pack de Prompts para Inteligência Artificial",
    "📄 Checklist para organizar sua rotina",
    "📚 Atualizações futuras gratuitas",
    "⚡ Lista de ferramentas recomendadas",
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white">
        Bônus Exclusivos
      </h2>

      <p className="text-center text-gray-400 mt-4">
        Além do conteúdo principal, você também receberá:
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {bonus.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-2xl border border-green-500/20 bg-zinc-900 p-6 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-300"
          >
            <Gift className="text-green-400 w-7 h-7" />

            <span className="text-gray-300 text-lg">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
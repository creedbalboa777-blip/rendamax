export default function CTA() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-green-500/20 to-green-900/20 border border-green-500/20 p-12 text-center">

        <span className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
          🚀 Comece hoje mesmo
        </span>

        <h2 className="text-5xl font-bold mt-6">
          Transforme seu conhecimento em renda
        </h2>

        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
          Aprenda um método moderno para gerar renda online utilizando
          inteligência artificial, organização e estratégias práticas.
        </p>

        <button
         className="shine-button mt-10 bg-green-500 hover:bg-green-400
          px-10 py-5 rounded-xl text-xl font-bold
          hover:scale-105 active:scale-95
          transition-all duration-300
          shadow-lg shadow-green-500/40"
        >
          QUERO COMEÇAR AGORA
        </button>

      </div>
    </section>
  );
}
import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Learn from "../components/Learn";
import Bonus from "../components/Bonus";
import Testimonials from "../components/Testimonials";
import OQueRecebe from "../components/OQueRecebe";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <Hero />

      {/* BENEFÍCIOS */}
      <Benefits />

      {/* O QUE VOCÊ VAI APRENDER */}
      <Learn />

      {/* BÔNUS */}
      <Bonus />

      {/* DEPOIMENTOS */}
      <Testimonials />

      {/* O QUE VOCÊ RECEBE */}
      <OQueRecebe />

      {/* FAQ */}
      <FAQ />

      {/* CHAMADA PARA AÇÃO */}
      <CTA />

      {/* OFERTA */}
      <Pricing />

      {/* RODAPÉ */}
      <footer
        id="contato"
        className="border-t border-zinc-800 py-10 text-center text-gray-500"
      >
        © 2026 Renda Max • Todos os direitos reservados
      </footer>
    </main>
  );
}


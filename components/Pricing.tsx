import {
  CheckCircle,
  ShieldCheck,
  Lock,
  CreditCard,
  Smartphone,
  Landmark,
  ArrowRight
} from "lucide-react";
import Countdown from "./Countdown";

export default function Pricing() {
  return (
    <section
      id="preco"
      className="py-24 px-6 bg-zinc-950 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Garanta seu acesso ao <span className="text-green-400">Renda Max</span>
      </h2>

      <p className="mt-4 text-lg text-gray-400">
        Comece hoje mesmo sua jornada utilizando Inteligência Artificial para criar novas fontes de renda.
      </p>

<div className="w-full max-w-xl mx-auto mt-12 rounded-3xl bg-zinc-900 border border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.25)] p-6 md:p-10 overflow-hidden animate-glow-border">
        <div className="flex justify-center">
  <span className="animate-pulse inline-block bg-green-500 text-black font-bold px-6 py-3 rounded-full shadow-[0_0_20px_rgba(34,197,94,.6)]">
    🔥 OFERTA ESPECIAL POR TEMPO LIMITADO
  </span>
</div>

<Countdown />

        <p className="mt-8 text-gray-500 line-through text-2xl">
          De R$127,90
        </p>

        <h3 className="mt-2 text-8xl font-extrabold text-green-400 drop-shadow-[0_0_40px_rgba(34,197,94,0.9)]">
  R$68,99
</h3>

        <p className="text-gray-400 mt-2">
          ou até <strong>12x</strong> no cartão
        </p>

        <div className="mt-10 space-y-6 text-left">

          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-400 w-7 h-7" />
            <span>Curso Completo Renda Max</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-400 w-7 h-7" />
            <span>Bônus: Prompt Book Premium</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-400 w-7 h-7" />
            <span>Atualizações futuras gratuitas</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-400 w-7 h-7" />
            <span>Acesso imediato</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-400 w-7 h-7" />
            <span>Garantia de 7 dias</span>
          </div>

        </div>

        <a
         href="https://pay.kiwify.com.br/nXeX75F"
target="_blank"
rel="noopener noreferrer"
       className="shine-button relative overflow-hidden block mt-10 w-full rounded-xl bg-gradient-to-r from-green-500 to-emerald-400 py-6 text-xl font-bold text-black shadow-[0_0_30px_rgba(34,197,94,.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(34,197,94,.8)] active:scale-95"
        >
         <span className="relative z-10 flex items-center justify-center gap-2">
  QUERO MEU ACESSO AGORA
  <ArrowRight className="w-6 h-6" />
</span>
        </a>

        <div className="mt-8 flex justify-center gap-8 text-gray-300">

  <div className="flex flex-col items-center">
    <CreditCard className="w-8 h-8 text-green-400" />
    <span className="text-sm mt-2">Cartão</span>
  </div>

  <div className="flex flex-col items-center">
    <Smartphone className="w-8 h-8 text-green-400" />
    <span className="text-sm mt-2">Pix</span>
  </div>

  <div className="flex flex-col items-center">
    <Landmark className="w-8 h-8 text-green-400" />
    <span className="text-sm mt-2">Boleto</span>
  </div>

  </div>

  <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-5">
  <div className="flex items-center justify-center gap-3">
    <ShieldCheck className="w-8 h-8 text-green-400" />

    <div className="text-left">
      <p className="font-bold text-white">
        Compra 100% Segura
      </p>

      <p className="text-sm text-gray-400">
        Ambiente protegido com criptografia SSL.
      </p>
    </div>
  </div>
</div>

<div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
  <Lock className="w-5 h-5" />
  <span>Pagamento 100% seguro</span>
</div>

<div className="mt-5 flex justify-center text-yellow-400 text-2xl">
  ⭐⭐⭐⭐⭐
</div>

<p className="mt-2 text-gray-400 text-sm">
  Mais de <span className="font-bold text-green-400">2.000 alunos</span> já começaram sua jornada com o Renda Max.
</p>

</div>
    </section>
  );
}
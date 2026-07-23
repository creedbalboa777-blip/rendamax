import Image from "next/image";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
<div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-2 md:py-5">
      <a href="#inicio" className="flex items-center">
       <Image
  src="/logo-rendamax.png"
  alt="Renda Max"
  width={500}
  height={140}
  priority
  className="w-[180px] md:w-[340px] h-auto"
/>
        </a>

        <nav className="hidden md:flex gap-8 text-gray-300">
  <a href="#inicio" className="hover:text-green-400 transition">
    Início
  </a>

  <a href="#vantagens" className="hover:text-green-400 transition">
    Vantagens
  </a>

  <a href="#preco" className="hover:text-green-400 transition">
    Oferta
  </a>

  <a href="#faq" className="hover:text-green-400 transition">
    FAQ
  </a>
</nav>

        <a
  href="https://pay.kiwify.com.br/nXeX75F"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 px-3 py-2 md:px-5 md:py-2 rounded-lg font-semibold transition text-sm md:text-base"
>
  Começar
</a>

      </div>
    </header>
  );
}
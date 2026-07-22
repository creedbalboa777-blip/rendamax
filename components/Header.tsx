import Image from "next/image";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

         <a href="#inicio" className="flex items-center">
        <Image
  src="/logo-rendamax.png"
  alt="Renda Max"
 width={260}
height={70}
  priority
  className="h-14 w-auto"
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
  href="#preco"
  className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg font-semibold transition"
>
  Começar
</a>

      </div>
    </header>
  );
}
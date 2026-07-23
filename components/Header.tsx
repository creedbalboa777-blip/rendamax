"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <Image
            src="/logo-rendamax.png"
            alt="Renda Max"
            width={250}
            height={70}
            priority
            className="w-[170px] lg:w-[220px] h-auto"
          />
        </a>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-10 text-white font-medium">
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

        {/* Botão */}
        <a
          href="https://pay.kiwify.com.br/nXeX75F"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3 rounded-lg transition duration-300"
        >
          Começar
        </a>

      </div>
    </header>
  );
}
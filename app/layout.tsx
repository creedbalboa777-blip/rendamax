import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renda Max | Transforme seu tempo em renda usando IA",
  description:
    "Aprenda como gerar renda online utilizando Inteligência Artificial, ferramentas modernas e estratégias práticas. Método Renda Max.",

    verification: {
  google: "Ekvj5etsirGtjGXE",
},
  keywords: [
    "renda extra",
    "ganhar dinheiro online",
    "inteligência artificial",
    "IA",
    "marketing digital",
    "renda max",
    "trabalhar pela internet",
    "empreendedorismo",
    "negócios online",
  ],
  authors: [
    {
      name: "Creed Balboa",
    },
  ],
  creator: "Creed Balboa",
  publisher: "Renda Max",

  openGraph: {
    title: "Renda Max",
    description:
      "Transforme seu tempo em renda utilizando Inteligência Artificial.",
    url: "https://rendamax.vercel.app",
    siteName: "Renda Max",
    images: [
      {
        url: "/mockup-rendamax.png",
        width: 1200,
        height: 630,
        alt: "Renda Max",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Renda Max",
    description:
      "Transforme seu tempo em renda utilizando Inteligência Artificial.",
    images: ["/mockup-rendamax.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <Script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-44KPG1G9KD"
  />

  <Script id="google-analytics">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-44KPG1G9KD');
    `}
  </Script>

  {children}
</body>
    </html>
  );
}
import "./globals.css";

import localFont from "@next/font/local";
const grobold = localFont({ src: "../../public/font/GROBOLD.ttf" });

export const metadata = {
  title: "Driano.css | Portifólio",
  description: "Meu portifólio pessoal :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="bg-bg-black">
      <body className={grobold.className}>{children}</body>
    </html>
  );
}

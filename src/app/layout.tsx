import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Classificados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <main className="mx-auto text-lg max-w-5xl pb-28">
          {children}
        </main>
      </body>
    </html>
  );
}

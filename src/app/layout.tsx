import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeuralArc - Where Intelligence Meets Enterprise Elegance",
  description: "Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps and AI automation systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        <div className="max-w-[1920px] mx-auto">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

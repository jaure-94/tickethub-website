import type { Metadata } from "next";
import { Pacifico, Kanit, Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '600', '700', '800', '900']
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ['400']
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "TicketHub ZW",
  description: "The premier e-ticketing website for concerts in Zimbabwe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body
          className={`${kanit.variable} ${poppins.variable} ${pacifico.variable} antialiased`}
        >
            {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

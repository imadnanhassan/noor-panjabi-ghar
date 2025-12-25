import "./globals.css";
import { DM_Sans, Geist_Mono, Noto_Sans_Bengali } from "next/font/google";
import { Providers } from "./providers";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn">
      <body
        className={`${dmSans.variable} ${geistMono.variable} ${notoBengali.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

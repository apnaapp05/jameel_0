import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// 1. Load Fonts
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

// 2. Define SEO Metadata
export const metadata: Metadata = {
  title: "Dental Intelligence System",
  description: "Autonomous Agentic AI for Dental Clinics",
  icons: {
    icon: "/favicon.ico", // Ensure you have a favicon
  },
};

// 3. Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans h-full bg-background text-foreground antialiased selection:bg-primary/20`}
      >
        {/* We will add Providers (Theme, Auth) here later */}
        <main className="h-full w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Use Inter font with specific subsets
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata = {
  title: "Dashboard - Learning Platform",
  description: "Learning platform dashboard for tracking progress and courses",
};

// Root layout that wraps all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-gray-900 font-sans antialiased",
        inter.variable
      )}>
        {children}
      </body>
    </html>
  );
}
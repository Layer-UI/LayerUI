
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "next-themes";
import { constructMetadata } from "@/lib/utils";


const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata()



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics></Analytics>
      </body>
    </html>
  );
}

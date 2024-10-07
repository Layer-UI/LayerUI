
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import NavigationBar from "@/components/NavigationBar";
import { ThemeProvider } from "next-themes";
import TwoColumnFooter from "@/components/Footer";
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
          <NavigationBar></NavigationBar>
          {children}
          <TwoColumnFooter></TwoColumnFooter>
        </ThemeProvider>
        <Analytics></Analytics>
      </body>
    </html>
  );
}

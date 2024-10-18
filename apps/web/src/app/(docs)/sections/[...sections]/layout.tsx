import { Metadata } from "next";
import React from "react";

export function generateMetadata({ params }: { params: { sections: string[] } }): Metadata {

  const [tag, componentName] = params.sections;
  const title = `Layerui ${componentName} Section - ${tag} Design`;
  const description = `Explore the ${componentName} section designed using TailwindCSS. Perfect for building ${tag} components with smooth animations and responsive layouts.`;
  const keywords = [
    "TailwindCSS components",
    `${componentName} section`,
    `${componentName} framermotin`,
    `${componentName} ract`,
    `${componentName} tailwindcss`,
    `animated ${componentName} section`,
    `tailwindcss ${componentName} section`,
    `react ${componentName} section`,
    `framer ${componentName} section`,
    `${tag} design`,
    "responsive UI components",
    "pricing section with TailwindCSS",
    "animated UI sections",
    "open-source component library",
    "Framer Motion components",
  ].join(", ");

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      siteName: "LayerUI",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@Maheshwarreddy",
    },
    metadataBase: new URL("https://www.layerui.com"),
    themeColor: "#0F172A",
    icons: {
      icon: "/logo.png",
      apple: "/logo.png",
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

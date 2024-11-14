import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "LayerUI - Build 10x Faster with TailwindCSS & Framer Motion",
  description =
    "Accelerate your development with LayerUI, a React component library powered by TailwindCSS and Framer Motion. Enjoy modern, pre-built UI components for fast, scalable, and smooth web experiences.",
  image = "/screenshot.png",
  icons = "/logo.png",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const keywords = [
    "LayerUI",
    "TailwindCSS components",
    "Framer Motion UI library",
    "React UI components",
    "pre-built UI elements",
    "UI component library",
    "developer productivity tools",
    "responsive design components",
    "animated UI components",
    "React animations",
    "open-source UI library",
    "web development tools",
  ].join(", ");

  return {
    title,
    description,
    keywords, // SEO keywords for search engines
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "LayerUI Component Library Screenshot",
        },
      ],
      siteName: "LayerUI",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@Maheshwarreddy",
    },
    icons: {
      icon: icons,
      apple: icons,
    },
    metadataBase: new URL("https://www.layerui.com"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

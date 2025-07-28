import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Moon Lab Pilates Studio",
  description:
    "Reformer Pilates stúdió Budapesten. Órarend, árak, oktatók, és minden fontos információ egy helyen. Foglalj időpontot most a Moon Lab Pilatesnél!",
  keywords: [
    "Pilates",
    "Reformer Pilates",
    "Budapest Pilates",
    "Pilates stúdió",
    "Moon Lab",
    "Pilates órarend",
    "Pilates árak",
    "Pilates oktató",
  ],
  authors: [{ name: "Bui Krisztián", url: "https://moonlabpilates.com" }],
  creator: "Moon Lab Pilates Studio",
  openGraph: {
    title: "Moon Lab Pilates Studio",
    description:
      "Reformer Pilates stúdió Budapesten. Órarend, árak, oktatók, és minden fontos információ egy helyen.",
    url: "https://moonlab.hu",
    siteName: "Moon Lab Pilates Studio",
    locale: "hu_HU",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.variable}>{children}</body>
    </html>
  );
}

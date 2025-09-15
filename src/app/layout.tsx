import type { Metadata, Viewport } from "next";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Raushan Kumar | Full Stack Developer",
  description: "Portfolio of Raushan Kumar, a Full Stack Developer specializing in modern web technologies.",
  keywords: ["Raushan Kumar", "Full Stack Developer", "Web Developer", "Portfolio", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Raushan Kumar" }],
  creator: "Raushan Kumar",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raushankumar.vercel.app",
    title: "Raushan Kumar | Full Stack Developer",
    description: "Portfolio of Raushan Kumar, a Full Stack Developer specializing in modern web technologies.",
    siteName: "Raushan Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raushan Kumar | Full Stack Developer",
    description: "Portfolio of Raushan Kumar, a Full Stack Developer specializing in modern web technologies.",
    creator: "@raushankumar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

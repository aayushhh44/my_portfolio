import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aayush Poudel - Full Stack Developer | Web & Mobile Development",
  description:
    "Experienced Full Stack Developer specializing in modern web applications, React, Node.js, and cloud solutions. View my portfolio and contact me for collaboration.",
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "React Developer",
    "Node.js",
    "JavaScript Expert",
    "Aayush Poudel",
    "Poudel",
    "aaymongush",
  ],
  authors: [{ name: "Aayush Poudel" }],
  creator: "Aayush Poudel",
  publisher: "Aayush Poudel",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    title: "Aayush Poudel - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in modern web applications, React, Node.js, and cloud solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Aayush Poudel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Poudel - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in modern web applications",
    creator: "@aaymongush",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://aayushpoudel44.com.np",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="../aayush.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-[#1a1a1a] dark:text-white`}
      >
        {/* <Navbar /> */}
        
        <main>{children}</main>
        <Toaster/>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

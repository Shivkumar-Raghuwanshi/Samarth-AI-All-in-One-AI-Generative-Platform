import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ModalProvider } from "@/components/ModalProvider";
import { ToasterProvider } from "@/components/ToasterProvider";
import { CrispProvider } from "@/components/crisp-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samarth AI",
  description: `Welcome to our AI-powered SaaS platform, a one-stop solution for all your creative needs. 
  **Conversations**: Engage in dynamic, intelligent conversations with our AI, capable of understanding and responding in multiple languages. Whether you're looking for a friendly chat or need assistance with a complex topic, our AI is here to help.
  **Audio Generation**: Transform your text into lifelike speech with our state-of-the-art audio generation feature. Ideal for creating podcasts, narrations, and more, our AI can generate audio in a variety of voices and languages.
  **Video Generation**: Bring your ideas to life with our AI-powered video generation tool. From explainer videos to animations, our platform makes it easy to create high-quality videos without any technical expertise.
  **Code Generation**: Speed up your development process with our AI's code generation capability. Whether you're building a website, an app, or a complex algorithm, our AI can generate code snippets in multiple programming languages, helping you save time and effort.
  Experience the future of creativity with our AI-powered platform. Start creating today!`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

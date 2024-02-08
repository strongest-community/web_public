import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "@/styles/globals.css";

const noto = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "史上最強コミュニティ",
  description: "Qiita Hackathon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={noto.className}>{children}</body>
    </html>
  );
}

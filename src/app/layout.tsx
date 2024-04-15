import "./global.css";
import Script from "next/script";
import { generateMetadata } from "@/ui/template/HomePage/HomePage";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <Script
        src={"https://kit.fontawesome.com/e1693a6581.js"}
        crossOrigin={"anonymous"}
      />
      <body className="">{children}</body>
    </html>
  );
}

import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shotaijo",
  description:
    "Kamu bisa belajar , mencari info seputar games, anime, dan teknologi",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppStatusBarStyle: "#f0f0f0",
};

export const viewport = {
  themeColor: "#f0f0f0",
  appleStatusBarStyle: "black-translucent",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",

  userZoom: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={comfortaa.className}>
        <div className="dialog"></div>
        {children}
      </body>
    </html>
  );
}

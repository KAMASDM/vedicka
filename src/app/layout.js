import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  icons: {
    icon: [
      { url: "/vedicka.png" },
      { url: "/vedicka.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/vedicka.png", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

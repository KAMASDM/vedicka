import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Vedicka: Your Partner in Digital Detox and Mindful Living",
  description:
    "Vedicka helps you embrace a healthier, more mindful lifestyle through digital detox guidance, wellness insights, and tools for tech-life balance.",
  icons: {
    icon: [
      { url: "/vedicka.png" },
      { url: "/vedicka.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/vedicka.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "Vedicka: Your Partner in Digital Detox and Mindful Living",
    description:
      "Vedicka helps you embrace a healthier, more mindful lifestyle through digital detox guidance, wellness insights, and tools for tech-life balance.",
    images: [
      {
        url: "https://vedicka.com/vedicka.png",
        width: 800,
        height: 600,
        alt: "Vedicka Logo",
      },
    ],
    siteName: "Vedicka",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedicka: Your Partner in Digital Detox and Mindful Living",
    description:
      "Vedicka helps you embrace a healthier, more mindful lifestyle through digital detox guidance, wellness insights, and tools for tech-life balance.",
    images: [
      {
        url: "https://vedicka.com/vedicka.png",
        width: 800,
        height: 600,
        alt: "Vedicka Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7W690RFNT3"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-7W690RFNT3');
            `,
          }}
        ></Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2283636579212292"
          crossorigin="anonymous"
        ></Script>
        <meta
          name="google-site-verification"
          content="0rIZNvRLsBB4bDR0dwv6vOF7vvCfgwVTpgjuxqSZZeI"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-2283636579212292"
        ></meta>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

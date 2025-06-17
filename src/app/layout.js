import "./globals.css";
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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

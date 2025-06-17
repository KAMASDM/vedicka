export const metadata = {
  title: "About Us | Vedicka – Empowering Mindful Living & Digital Wellness",
  description:
    "Discover Vedicka, your companion in digital detox, astrology-based insights, and mental well-being. Learn how we guide you to live a more mindful, balanced, and conscious life.",
  openGraph: {
    title: "About Us | Vedicka – Empowering Mindful Living & Digital Wellness",
    description:
      "Discover Vedicka, your companion in digital detox, astrology-based insights, and mental well-being. Learn how we guide you to live a more mindful, balanced, and conscious life.",
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
    title: "About Us | Vedicka – Empowering Mindful Living & Digital Wellness",
    description:
      "Discover Vedicka, your companion in digital detox, astrology-based insights, and mental well-being. Learn how we guide you to live a more mindful, balanced, and conscious life.",
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

import AboutUs from "@/components/AboutUs/AboutUs";

export default function AboutPage() {
  return <AboutUs />;
}

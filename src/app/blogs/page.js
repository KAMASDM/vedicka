export const metadata = {
  title: "Vedicka Blog | Digital Detox, Mindfulness & Holistic Wellness",
  description:
    "Read the Vedicka blog for powerful insights on digital detox, emotional well-being, and spiritual growth. Discover mindful habits, expert advice, and stories to help you live a balanced life.",
  openGraph: {
    title: "Vedicka Blog | Digital Detox, Mindfulness & Holistic Wellness",
    description:
      "Read the Vedicka blog for powerful insights on digital detox, emotional well-being, and spiritual growth. Discover mindful habits, expert advice, and stories to help you live a balanced life.",
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
    title: "Vedicka Blog | Digital Detox, Mindfulness & Holistic Wellness",
    description:
      "Read the Vedicka blog for powerful insights on digital detox, emotional well-being, and spiritual growth. Discover mindful habits, expert advice, and stories to help you live a balanced life.",
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

import Blog from "@/components/Blogs/Blog";

export default function Blogs() {
  return <Blog />;
}

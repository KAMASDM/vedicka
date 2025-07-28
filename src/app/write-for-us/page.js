export const metadata = {
  title: "Write for Us - Guest Post Guidelines | Vedicka.com",
  description:
    "Share your wisdom on Vedic astrology, spiritual growth, and life path guidance. Contribute to AstroGuru by Vedicka.com and inspire seekers worldwide.",

  openGraph: {
    title: "Write for Us - Guest Post Guidelines | Vedicka.com",
    description:
      "Share your wisdom on Vedic astrology, spiritual growth, and life path guidance. Contribute to AstroGuru and inspire seekers worldwide.",
    images: [
      {
        url: "https://vedicka.com/vedicka.png",
        alt: "Vedicka.com",
        width: 800,
        height: 600,
      },
    ],
    siteName: "Vedicka",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Write for Us - Guest Post Guidelines | Vedicka.com",
    description:
      "Looking to share your insights on Vedic astrology and personal transformation? Submit your guest post to AstroGuru by Vedicka.com.",
    images: [
      {
        url: "https://vedicka.com/vedicka.png",
        alt: "Vedicka.com",
        width: 800,
        height: 600,
      },
    ],
  },
};

import WriteForUs from "@/components/WriteForUs/WriteForUs";

export default function writeForUsPage() {
  return <WriteForUs />;
}

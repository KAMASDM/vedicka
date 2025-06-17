export const metadata = {
  title: "Contact Us | Vedicka – Reach Out for Mindful Living Support",
  description:
    "Have questions about digital wellness or mindful living? Connect with the Vedicka team today. We’re here to support your journey toward balance, clarity, and intentional living.",
  openGraph: {
    title: "Contact Us | Vedicka – Reach Out for Mindful Living Support",
    description:
      "Have questions about digital wellness or mindful living? Connect with the Vedicka team today. We’re here to support your journey toward balance, clarity, and intentional living.",
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
    title: "Contact Us | Vedicka – Reach Out for Mindful Living Support",
    description:
      "Have questions about digital wellness or mindful living? Connect with the Vedicka team today. We’re here to support your journey toward balance, clarity, and intentional living.",
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

import ContactUs from "@/components/ContactUs/ContactUs";

export default function contactUs() {
  return <ContactUs />;
}

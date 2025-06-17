export const metadata = {
  title: "Vedicka Blog: Your Guide to Digital Wellness and Mindful Tech Use",
  description:
    "Discover actionable strategies for digital balance, self-care practices, and mindful engagement with technology on the Vedicka blog. Start your journey to a healthier digital life today.",
};

import Hero from "@/components/Hero/Hero";
import TrendingBlogs from "@/components/TrendingBlogs/TrendingBlogs";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vedicka",
    url: "https://vedicka.com",
    logo: "https://vedicka.com/vedicka.png",
    sameAs: [
      "https://www.facebook.com/vedicka/",
      "https://www.instagram.com/vedicka/",
      "https://x.com/vedicka",
    ],
    description:
      "Vedicka empowers individuals to reconnect with life through digital detox practices, wellness insights, and tools for mindful living and mental clarity.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <div className="blob-container">
        <Hero />
        <TrendingBlogs />
        <LatestBlogs />
        <NewsLetter />
      </div>
    </>
  );
}

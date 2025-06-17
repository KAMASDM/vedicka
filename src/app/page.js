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
  return (
    <div className="blob-container">
      <Hero />
      <TrendingBlogs />
      <LatestBlogs />
      <NewsLetter />
    </div>
  );
}

"use client";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Moon,
  Sun,
  Telescope,
  BookOpen,
  CalendarDays,
  LampDesk,
  Compass,
} from "lucide-react";

const coreBenefits = [
  {
    icon: <Telescope className="h-5 w-5 text-amber-600" />,
    label: "Celestial Insights",
  },
  {
    icon: <Moon className="h-5 w-5 text-amber-600" />,
    label: "Vedic Astrology",
  },
  {
    icon: <Sun className="h-5 w-5 text-amber-600" />,
    label: "Planetary Guidance",
  },
];

const features = [
  {
    icon: <Star className="h-6 w-6 text-amber-600" />,
    bgColor: "bg-amber-100",
    title: "Daily Horoscopes",
    description:
      "Personalized astrological predictions tailored to your zodiac sign.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-amber-600" />,
    bgColor: "bg-amber-100",
    title: "Astrology Guides",
    description:
      "Comprehensive resources to understand planetary movements and their effects.",
  },
  {
    icon: <CalendarDays className="h-6 w-6 text-amber-600" />,
    bgColor: "bg-amber-100",
    title: "Monthly Forecasts",
    description: "Detailed predictions for your sign each month.",
  },
  {
    icon: <LampDesk className="h-6 w-6 text-amber-600" />,
    bgColor: "bg-amber-100",
    title: "Remedial Solutions",
    description: "Effective remedies to overcome planetary challenges.",
  },
  {
    icon: <Compass className="h-6 w-6 text-amber-600" />,
    bgColor: "bg-amber-100",
    title: "Birth Chart Analysis",
    description: "In-depth interpretation of your natal chart.",
  },
  {
    icon: <Telescope className="h-6 w-6 text-amber-600" />,
    bgColor: "bg-amber-100",
    title: "Astronomy Updates",
    description: "Latest celestial events and their astrological significance.",
  },
];

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-amber-50 py-20 lg:py-28">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
          <Star
            className="absolute text-amber-200 floating-animation"
            style={{
              width: "45px",
              height: "45px",
              top: "10%",
              left: "15%",
              animationDuration: "8s",
              animationDelay: "0s",
              transform: "rotate(15deg)",
            }}
          />
          <Moon
            className="absolute text-amber-200 floating-animation-alt"
            style={{
              width: "35px",
              height: "35px",
              top: "30%",
              right: "10%",
              animationDuration: "10s",
              animationDelay: "1s",
            }}
          />
          <BookOpen
            className="absolute text-amber-200 floating-animation"
            style={{
              width: "55px",
              height: "55px",
              top: "55%",
              left: "5%",
              animationDuration: "7s",
              animationDelay: "2.5s",
              transform: "rotate(-25deg)",
            }}
          />
          <Sun
            className="absolute text-amber-200 floating-animation-alt"
            style={{
              width: "30px",
              height: "30px",
              bottom: "15%",
              right: "20%",
              animationDuration: "9s",
              animationDelay: "4s",
            }}
          />
          <Telescope
            className="absolute text-amber-200 floating-animation"
            style={{
              width: "50px",
              height: "50px",
              bottom: "25%",
              left: "30%",
              animationDuration: "11s",
              animationDelay: "5.5s",
              transform: "rotate(5deg)",
            }}
          />
          <Star
            className="absolute text-amber-200 floating-animation-alt"
            style={{
              width: "25px",
              height: "25px",
              top: "75%",
              right: "8%",
              animationDuration: "6s",
              animationDelay: "1.5s",
              transform: "rotate(60deg) scaleX(-1)",
            }}
          />
        </div>
        <div className="relative container mx-auto px-6 pt-12 pb-12 text-center z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 mb-6 shadow-sm">
              <Star className="h-4 w-4 text-amber-600 mr-2" />
              <span className="text-sm font-medium">Vedic Astrology</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Discover Your Cosmic Blueprint
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Astro Guru provides authentic Vedic astrology insights to help you
              navigate life's challenges and unlock your true potential through
              planetary wisdom.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="/blogs"
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center shadow hover:shadow-md"
              >
                Explore Your Horoscope
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about-us"
                className="px-8 py-3 border border-amber-600 text-amber-700 rounded-lg font-medium hover:bg-amber-100 transition-colors duration-300"
              >
                Our Astrologers
              </Link>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4 text-gray-600">
              {coreBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  {benefit.icon}
                  <span className="text-sm font-medium">{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="content-section" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Astrological Resources & Guidance
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Authentic Vedic astrology content to illuminate your life path.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-amber-200/60 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`${feature.bgColor} p-3 rounded-lg w-12 h-12 flex features-center justify-center mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link
                  href="/blogs"
                  className="inline-flex items-center text-amber-600 hover:text-amber-800 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

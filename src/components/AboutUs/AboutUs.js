"use client";
import React, { useState, useEffect } from "react";
import {
  Star,
  Moon,
  Sun,
  Telescope,
  CalendarCheck,
  Compass,
  Globe,
  Orbit,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    id: 1,
    number: "50K+",
    label: "Cosmic Seekers",
    icon: <Star className="h-6 w-6 text-amber-600" />,
    bgColor: "bg-amber-100",
  },
  {
    id: 2,
    number: "1M+",
    label: "Horoscopes Read",
    icon: <Moon className="h-6 w-6 text-amber-600" />,
    bgColor: "bg-amber-100",
  },
  {
    id: 3,
    number: "100+",
    label: "Vedic Astrologers",
    icon: <Sun className="h-6 w-6 text-amber-600" />,
    bgColor: "bg-amber-100",
  },
  {
    id: 4,
    number: "12",
    label: "Zodiac Signs Covered",
    icon: <Orbit className="h-6 w-6 text-amber-600" />,
    bgColor: "bg-amber-100",
  },
];

const resources = [
  {
    id: 1,
    IconComponent: Telescope,
    title: "Daily Horoscopes",
    description:
      "Personalized astrological predictions tailored to your zodiac sign.",
  },
  {
    id: 2,
    IconComponent: Compass,
    title: "Birth Chart Analysis",
    description:
      "Detailed interpretations of your natal chart and planetary positions.",
  },
  {
    id: 3,
    IconComponent: CalendarCheck,
    title: "Planetary Transit Guides",
    description:
      "Understand how celestial movements affect your life path and decisions.",
  },
];

const values = [
  {
    id: 1,
    IconComponent: Star,
    title: "Ancient Vedic Wisdom",
    description:
      "We preserve and share authentic Vedic astrology knowledge passed down through generations.",
  },
  {
    id: 2,
    IconComponent: Globe,
    title: "Celestial Guidance",
    description:
      "Our astrologers combine traditional methods with modern interpretations for today's world.",
  },
  {
    id: 3,
    IconComponent: Moon,
    title: "Cosmic Community",
    description:
      "Join thousands who are discovering their destiny through planetary wisdom.",
  },
];

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-12 min-h-screen bg-gray-50">
      <section
        aria-labelledby="about-hero-heading"
        className="relative py-20 bg-gradient-to-b from-amber-100 to-amber-50"
      >
        <div
          className="absolute inset-0 bg-grid-white/[0.05]"
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              id="about-hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Discover Your Cosmic Blueprint
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              At Astro Guru, we illuminate your life path through authentic
              Vedic astrology, helping you navigate challenges and unlock your
              true potential.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="stats-heading" className="py-16 bg-white">
        <h2 id="stats-heading" className="sr-only">
          Our Impact in Numbers
        </h2>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`text-center p-6 bg-amber-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`mx-auto mb-4 w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center`}
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-800 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="mission-heading" className="py-20 bg-amber-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2
                id="mission-heading"
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-600 bg-clip-text text-transparent mb-6"
              >
                Our Celestial Mission
              </h2>
              <p className="text-gray-800 text-lg mb-8">
                In a universe governed by planetary movements, we decode cosmic
                patterns to help you:
              </p>
              <div className="space-y-6">
                {values.map(
                  ({ id, IconComponent, title, description }, index) => (
                    <div key={id} className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div
                          className="w-12 h-12 rounded-lg bg-amber-200 flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <IconComponent className="h-6 w-6 text-amber-700" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-700 mb-2">
                          {title}
                        </h3>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Astrologer reading birth chart"
                  className="w-full h-auto rounded-2xl object-cover transition-all duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent opacity-60"
                  aria-hidden="true"
                ></div>
              </div>
              <div
                className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-200 rounded-2xl -z-10 opacity-50 blur-lg"
                aria-hidden="true"
              ></div>
              <div
                className="absolute -top-6 -right-6 w-32 h-32 bg-amber-200 rounded-full -z-10 opacity-50 blur-lg"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="offerings-heading" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2
            id="offerings-heading"
            className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-600 bg-clip-text text-transparent mb-4"
          >
            Our Astrological Resources
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Celestial knowledge and tools to help you understand your cosmic
            journey
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map(
              ({ id, IconComponent, title, description }, index) => (
                <div
                  key={id}
                  className={`bg-amber-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100 flex flex-col ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div
                    className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center mb-5"
                    aria-hidden="true"
                  >
                    <IconComponent className="h-7 w-7 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-600 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-5 flex-grow">{description}</p>
                  <Link
                    href="/blogs"
                    className="inline-flex items-center text-gray-700 hover:text-amber-600 font-medium transition-colors mt-auto group"
                    aria-label={`Learn more about ${title}`}
                  >
                    Learn more
                    <ArrowRight
                      className="w-5 h-5 ml-1 transition-transform transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="cta-heading"
        className="py-20 bg-gradient-to-b from-amber-100 to-amber-50"
      >
        <div className="container mx-auto px-6 text-center">
          <h2
            id="cta-heading"
            className="text-3xl font-bold text-amber-800 mb-6"
          >
            Ready to Discover Your Cosmic Path?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our celestial community and unlock the secrets of your stars
            today.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold transition-colors duration-300"
          >
            Begin Your Astro Journey
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;

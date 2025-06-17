"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, ArrowUpCircle } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ],
  resources: [
    { name: "Blogs", href: "/blogs" },
    { name: "Categories", href: "/categories" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/vedicka/",
  },
  { name: "Twitter", icon: Twitter, href: "https://x.com/vedicka" },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/vedicka/",
  },
];

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-amber-100 text-gray-700 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link
              href="/"
              className="flex items-center space-x-2"
              aria-label="Vedicka homepage"
            >
              <img
                src="/vedicka.png"
                alt="Vedicka logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold md:inline-block ml-2">
                Vedicka
              </span>
            </Link>
            <p className="mt-4 text-gray-600">
              Helping you cultivate a healthier relationship with technology
              through mindfulness and intentional living.
            </p>
            <div
              className="flex space-x-4 mt-6"
              role="list"
              aria-label="Social media links"
            >
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-amber-600 transition-colors duration-200"
                  aria-label={`Follow Vedicka on ${name}`}
                  role="listitem"
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">{name}</span>
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([sectionTitle, links]) => (
            <nav
              key={sectionTitle}
              aria-labelledby={`footer-nav-${sectionTitle}`}
            >
              <h3
                id={`footer-nav-${sectionTitle}`}
                className="text-lg font-semibold mb-4 capitalize text-gray-800"
              >
                {sectionTitle.replace(/([A-Z])/g, " $1")}
              </h3>
              <ul className="space-y-2" role="list">
                {links.map(({ name, href }) => (
                  <li key={href} role="listitem">
                    <Link
                      href={href}
                      className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="border-t border-amber-200 pt-8 mt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Vedicka. All rights reserved. | Design & Developed
            By{" "}
            <a
              href="https://anantsoftcomputing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 font-semibold hover:text-amber-600 transition-colors duration-300"
            >
              Anant Soft Computing
            </a>
          </p>
        </div>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-amber-600 text-white shadow-lg transition-all duration-300 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle className="h-6 w-6" aria-hidden="true" />
        </button>
      )}
    </footer>
  );
};

export default Footer;

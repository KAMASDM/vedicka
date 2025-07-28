"use client";
import { PenSquare, Check, X } from "lucide-react";

const WriteForUs = () => {
  return (
    <main className="py-12 min-h-screen px-4 sm:px-6 lg:px-12">
      <div className="relative py-16 sm:py-20">
        <div
          className="absolute inset-0 bg-grid-white/[0.05]"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Write for Us – Guest Post Guidelines
            </h1>
            <p className="text-lg text-gray-700 mx-auto">
              Share Your Wisdom with Vedicka.com
            </p>
          </div>
          <div className="space-y-6">
            <section className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <p className="text-gray-600">
                  At <strong>Vedicka.com</strong>, we illuminate life journeys
                  through the ancient wisdom of Vedic astrology. If you’re
                  passionate about spiritual growth, karmic alignment, or
                  astrological insight, we invite you to share your voice with
                  our growing spiritual community.
                </p>
              </div>
            </section>

            <section className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Why Write for Us?
                </h2>
              </div>
              <div className="p-6">
                <ul className="list-disc list-inside space-y-3 text-gray-600 pl-1">
                  <li>
                    Connect with seekers exploring Vedic astrology,
                    self-discovery, and conscious living.
                  </li>
                  <li>
                    Grow your authority as a spiritual guide, astrologer, or
                    writer with backlinks and visibility.
                  </li>
                  <li>
                    Contribute to a meaningful dialogue about ancient wisdom in
                    modern life.
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Topics We Love
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <p className="font-semibold text-gray-900">
                    We welcome well-researched, original articles on:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                      <span>Vedic astrology & planetary influences</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                      <span>Spiritual practices rooted in the Vedas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                      <span>Self-transformation through ancient wisdom</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                      <span>Moon signs, nakshatras, and cosmic energies</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                      <span>Conscious relationships & karmic healing</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-red-50 rounded-lg">
                    <p className="font-medium text-gray-800 flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>
                        We do NOT accept: Promotional content, AI-written or
                        scraped articles, or anything outside our niche.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Submission Guidelines
                </h2>
              </div>
              <div className="p-6 space-y-6 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <PenSquare className="h-5 w-5 text-amber-500 mr-2" />
                    Pitch First:
                  </h3>
                  <p className="mb-3">
                    Send us a 1–2 paragraph pitch to{" "}
                    <a
                      href="mailto:vedicka@gmail.com"
                      className="text-amber-600 hover:underline"
                    >
                      vedicka@gmail.com
                    </a>{" "}
                    with the subject line "Guest Post Pitch – Vedicka". Please
                    include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    <li>Proposed title & outline or key takeaways</li>
                    <li>
                      A writing sample or your spiritual blog/portfolio link
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    If Approved:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 pl-1">
                    <li>
                      <strong>Length:</strong> 1,000–2,000 words preferred.
                    </li>
                    <li>
                      <strong>Original:</strong> Must be unpublished and unique
                      (we check!).
                    </li>
                    <li>
                      <strong>Tone:</strong> Respectful, spiritual, and
                      enlightening.
                    </li>
                    <li>
                      <strong>Format:</strong> Use subheadings, lists, and short
                      paragraphs.
                    </li>
                    <li>
                      <strong>Editing:</strong> We may lightly edit for clarity
                      or alignment.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Ready to Submit?
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Email your pitch or final article (Google Doc or Word file) to{" "}
                  <a
                    href="mailto:vedicka@gmail.com"
                    className="text-amber-600 hover:underline font-medium"
                  >
                    vedicka@gmail.com
                  </a>
                  . We respond within 5–7 business days.
                </p>
                <div className="mt-4 p-3 bg-white rounded-lg border border-amber-600">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> We value depth over volume. No paid
                    link insertions. One link in your author bio is acceptable.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WriteForUs;

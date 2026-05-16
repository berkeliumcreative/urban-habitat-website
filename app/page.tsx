// @ts-nocheck
"use client";

import { Fraunces, Inter } from "next/font/google";
import content from "../data/content.json";

const display = Fraunces({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });
const body = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const ACCENT = "#A0521F";
const ACCENT_DARK = "#5A2D0E";
const BG = "#F2EFE9";
const BG_DARK = "#1F1F1F";
const TEXT = "#1F1F1F";
const TEXT_MUTED = "#6B655E";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl =
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=" +
    encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={body.className} style={{ backgroundColor: BG, color: TEXT, minHeight: "100vh" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.9s ease-out forwards; }
        .fade-up-d1 { animation: fadeUp 0.9s 0.2s ease-out both; }
        .fade-up-d2 { animation: fadeUp 0.9s 0.4s ease-out both; }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: "rgba(242,239,233,0.92)", borderBottom: `1px solid ${TEXT}10` }}>
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <span className={display.className} style={{ fontSize: "1.3rem", fontWeight: 500, color: TEXT, letterSpacing: "-0.02em" }}>Urban Habitat</span>
          <div className="flex items-center gap-8">
            <a href="#collection" className="hidden md:inline text-sm hover:opacity-70">Collection</a>
            <a href="#reviews" className="hidden md:inline text-sm hover:opacity-70">Reviews</a>
            <a href="#visit" className="hidden md:inline text-sm hover:opacity-70">Visit</a>
            <a href={phoneTel} className="px-6 py-2.5 text-sm font-medium transition-all hover:bg-black hover:text-white" style={{ border: `1.5px solid ${TEXT}`, color: TEXT }}>Visit Showroom</a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-end pb-24 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${content.hero.image}")` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(31,31,31,0.0) 0%, rgba(31,31,31,0.1) 50%, rgba(31,31,31,0.85) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-8 z-10 grid md:grid-cols-12 gap-8 items-end w-full fade-up">
          <div className="md:col-span-8">
            <p className="uppercase tracking-[0.4em] text-xs font-medium mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>Burbank Showroom • By appointment or walk-in</p>
            <h1 className={display.className} style={{ fontSize: "clamp(3rem, 9vw, 7rem)", color: "white", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.04em" }}>{content.hero.heading}</h1>
          </div>
          <div className="md:col-span-4 md:pl-8 fade-up-d1">
            <p className="text-lg" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>{content.hero.subheading}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={content.hero.ctaLink} className="px-9 py-4 bg-white text-black font-medium transition-transform hover:scale-105">{content.hero.ctaText}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-8 py-28 md:py-40 text-center">
        <p className="uppercase tracking-[0.4em] text-xs font-medium mb-6" style={{ color: ACCENT }}>About</p>
        <h2 className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, color: TEXT, lineHeight: 1.1, letterSpacing: "-0.02em" }}>{content.about.heading}</h2>
        <div className="mt-10 space-y-6 text-lg leading-relaxed" style={{ color: TEXT_MUTED }}>
          {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section id="collection" className="py-28 md:py-40" style={{ backgroundColor: BG_DARK, color: BG }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 max-w-3xl">
            <p className="uppercase tracking-[0.4em] text-xs font-medium mb-5" style={{ color: ACCENT }}>The collection</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 400, color: BG, lineHeight: 1.0, letterSpacing: "-0.03em" }}>Six categories. Hundreds of pieces. Zero compromises.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {content.services.map((s, i) => (
              <div key={i} className="border-t pt-7" style={{ borderColor: `${BG}33` }}>
                <p className={display.className} style={{ fontSize: "0.85rem", color: ACCENT, fontWeight: 500 }}>0{i + 1}</p>
                <h3 className={display.className} style={{ fontWeight: 400, fontSize: "1.85rem", color: BG, marginTop: "0.5rem", letterSpacing: "-0.02em" }}>{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(242,239,233,0.65)" }}>{s.description}</p>
                {s.price && <p className="mt-4 text-sm font-medium" style={{ color: ACCENT }}>{s.price}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="max-w-7xl mx-auto px-8 py-28 md:py-40">
        <div className="mb-16 max-w-2xl">
          <p className="uppercase tracking-[0.4em] text-xs font-medium mb-5" style={{ color: ACCENT }}>From customers</p>
          <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 400, color: TEXT, lineHeight: 1.0, letterSpacing: "-0.03em" }}>The work speaks.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
          {content.reviews.map((r, i) => (
            <div key={i}>
              <div className="flex gap-1 mb-4" style={{ color: ACCENT }}>
                {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className={display.className} style={{ fontSize: "1.2rem", lineHeight: 1.5, color: TEXT, fontWeight: 400, letterSpacing: "-0.01em" }}>"{r.text}"</p>
              <p className="mt-6 text-xs uppercase tracking-widest font-medium" style={{ color: ACCENT }}>— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="visit" className="py-28 md:py-40" style={{ backgroundColor: "#E8E4DA", borderTop: `1px solid ${TEXT}15` }}>
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase tracking-[0.4em] text-xs font-medium mb-5" style={{ color: ACCENT }}>Visit</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 400, color: TEXT, lineHeight: 1.0, letterSpacing: "-0.03em" }}>1055 N Victory Pl.</h2>
            <p className="mt-8 text-lg" style={{ color: TEXT_MUTED }}>{content.contact.address}</p>
            <a href={phoneTel} className={display.className + " block mt-2 text-3xl font-medium transition-opacity hover:opacity-70"} style={{ color: ACCENT, letterSpacing: "-0.02em" }}>{content.contact.phone}</a>
            <table className="mt-12 w-full text-sm">
              <tbody>
                {Object.entries(content.contact.hours).map(([day, time]) => (
                  <tr key={day} style={{ borderBottom: `1px solid ${TEXT}15` }}>
                    <td className="py-4 font-medium uppercase tracking-wider text-xs">{day}</td>
                    <td className="py-4 text-right" style={{ color: TEXT_MUTED }}>{String(time)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="overflow-hidden" style={{ minHeight: "520px", border: `1px solid ${TEXT}22` }}>
            <iframe title="Urban Habitat Location" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "520px" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-28 md:py-40 text-center">
        <h3 className={display.className} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 300, color: TEXT, lineHeight: 1.0, letterSpacing: "-0.03em" }}>Something worth keeping.</h3>
        <a href={phoneTel} className="inline-block mt-12 px-12 py-5 font-medium text-base transition-all hover:bg-black hover:text-white" style={{ border: `1.5px solid ${TEXT}`, color: TEXT }}>{content.contact.phone}</a>
      </section>

      <footer style={{ borderTop: `1px solid ${TEXT}15`, backgroundColor: BG }}>
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-sm" style={{ color: TEXT_MUTED }}>
          <div>
            <p className={display.className} style={{ fontSize: "1.5rem", fontWeight: 500, color: TEXT, letterSpacing: "-0.02em" }}>Urban Habitat</p>
            <p className="mt-3">{content.contact.address}</p>
            <p className="mt-1"><a href={phoneTel} className="hover:text-black">{content.contact.phone}</a></p>
          </div>
          <div className="text-xs uppercase tracking-widest">© {new Date().getFullYear()}</div>
        </div>
      </footer>
    </main>
  );
}
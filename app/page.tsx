// @ts-nocheck
"use client";

import { Inter } from "next/font/google";
import content from "../data/content.json";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

// App Store Style Landing — swiss minimal, big feature blocks
const INK = "#0F0F0F";
const STONE = "#F4F1ED";
const STONE_DARK = "#E8E3DC";
const WALNUT = "#5C3A21";
const BRASS = "#B08D57";


const GALLERY = ["https://lh3.googleusercontent.com/gps-cs-s/APNQkAESY_b8CEIg59fuYVkabAaK4huIMqRsjNdqQJu2Vz5-fYJSH_sBftx5T9FOQO1MQt3jXGzQiqzdrgeO_VWebUeuXl8erHeUgAWhH-nJDP755xRHQwcBOySp0JAYTkktCpvHUjHTtg=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAEFiZNrJszxpxT9DHZsZRzwJaxLzD_NsMHAYqWyIHr6vA7RE8SaQA0WMMMu_17X3l-A0uRJSEBVkSs_Pozor3ae4xP7aypwYr2JUhLsbvw08nPmiDrGPBS1Gers8lc0_F9BVqmH=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAF7UN5FmImBzTWjfw12FsRFmuTmDlN9-S_dgKGd9sUbkm3_qd-O6GDrb3XwVkQ4veOj36xVGSxdN5ahj9aAq88kEJUilTme8r8sJSpjTURo3B-3Kjt3WsSijmgS8BNz8cLnH9t8=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAEx1vI5uo-5gAfbzK8HOAqg6Dtw88NRN-UjOLdy3zRt5cLPhnoxMdo1ufWU2X0bElO3L5R5DGLM8eyGjlglhg1o-uKpalf8_QgLTHmsvkOc3QzSFUvhgpizNAKWFnhYZQgX2JjkAQ=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAHlOo9NjLzsGwqgJR--aPqMTl7q8EdzCy2dM-E5mNBIerRWYjKTkyytbD2vYL7E4XczJqUMmqbWYfKEZLOfX7EFfMwkOp8ffuiIGe76K60nr7TPeO4oxai26cRNdtOM2500wU5_=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAFTtbsk_5oL-XrNHN16Xq95fOo9YZPGoCWSNe6cHrgoNIQjq_gGCdFPZjzHiaPXVVkMDLgvKDTRXsgLrMxOLOa_Fzyb8VDYssy2vsClh7JdawDi9mRz4P32Spc0uMUt2wgSLeCLWA=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAE4qNBKLSVKFVBb9Y0EA0dQEcf-Yk3WTIOpdpvX3RBWqmhgDRMr4cPOm-Or8a38jpITyIui7YeVaafVNFy-00yCdCxUvm-Jd9Ko2F8DLheSGiYUWj2z5NKi-ptpdyvpY1udz9sp0Q=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAEdottiXWglh1LYMhZwxpc3PFUfim50sOuZWxGzXy-HA--Q5ONvXSKTeAoft9B3zLyDhGNHczAW17nNiXbxRdwPVghNn5ztCEaCmY5C0GeR-d-eTw0b7EMKyxANEGdHR47kjNUKyA=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAGnoA1L92tEUQoTuujkv6JRqs98JclcTiKWcV6VKQfQmYdMtuzoAY6fxEtvoh9kDn4CnpqH-f8iJl0JOHv0q0d41DTiTKndt3_51pWuAXVPuQwCZlqEXzkuq3riBnc9syN7OOje=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAFIW_2vAQ4iwRC4biiq2c06uWmPLcm4ZVdVaG8m0zeefcm5cqDaRYpG8OjnVz2GwgeMEj9vlIZw9Nh6DcTODRSx3JQ-AmMjGiSBUiErAtIi9-Ut4UX_9kC1dJER-w4J6ZwaxeE_CA=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAEfENKeWrN0i5qW1dXQblHbNWxsB795okisfryK3-CcghtTnBSiEgA-vuIk6yTxA_wXssp0VZz6tE3-lrdVOpkWEJp9WgNNvaFWUp1TvpcNb0XXjsNOBOBzFi30cevFA4tggwDR=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAGJfTmifg-pnhVRbPAT3_d4gcMiQeBMNsjIxOJUj_bdI1uciFKzIz3NVMxAHXBUaOefsKoubRCfoAKIo9uELeviITi_QKjnnaFWjZOfU_wziA-9XBeSw4CT3m_E16_NgZzD22OrVA=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAH_wSf8zYqbGe0GLxl-gVMJ7judv4DYXBfIdJFJIK-ncqbHcTidkUU6qpcB6j_7w-yi2a3u0wUqHQK0ykHIyWakHKCwCZH66CEdolEOyPTYZh5fntD4lbEDkohNaPVBGQfB1Yc=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAGjQaM6bEMivOk5tEyzMshtqjcjS1l7-a0Db1bEpqRNakO__UigSZ1XKPTpsZOQRSsFPoePt-jK3rbzn_McwuCQOJedBK45Jt_n9TLIrxSBqr_Zr8fP6ixyXm9dwzevlxqubbxC=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAGOnHyQvEAT6Kcj8sK-R4mkAdc-0cl6KxxFrv3sSxu1phyKkhYUvQjJr6iw2Ms1dgeyrs7LJfwBlUBb26MjuLkWR8p5v_9Ls25GCkwiGLzLc3LYG_d0a47bbicVG_ZqpsHYsQuFxw=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAGL06LR2h7YKHSqkzjppC6McbyknUbFxCxmKXcQYvCWSygrPTHvXjP1j8_00B8gAjIKfdnqm55uMp28X4MY91IVilNz6Aa8LZ7XddaXvObjDkvhKfp3zZkv1Jqx-d1jdR_WqD4=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAHujzV6SiazBtbX5f31HUzS1vFtTLmAfEoAE07uh1qKeGGQtzLUKPmO59kMMjCN3d2oRldHIhmBotV8GQFF6-NslGv3Jt4dPYLiGyprNplivQotaZBtOgBQi-7rXhNiRTWSdD3x=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAEjOpQr7W_tzV2udUeGkN5F2hnfwGjihHq_Y4ENdqU_BjsrmbkM6qpnogj1dE9tlyOAPgrxKrLmZ3QgXjSb3Osynl1ta_MvBXCtvDwfCXh-XR1fgetN5IF4Kfh6HwC4maXi1PPd1OClmP5g=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAHZ7JFu92tx2DxAHcofPPTZ5zUlRgP78O45Sx8l3GgnJZJhOTMV1xk4lG-JUn4gjvkos5_OxZjiGU7xk2x19EZu5bwhHeL6hfS1gvEMVojtnIxFNXahPcYZxCBuJrFwyt4hV69vQQ=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAHl-4X0JNQgDZjiR_CDcGH7iFKPQhG79_-Umoh-tLbdjVE1LDOMfBcWWrSOAEWFL86q2rrvVjTUEZLzoFstXryoxVIXDkgIFmvDDZd1N311DvvYwXQYu75pDCiclaG6t8YpNtg2=w1920-h1080-k-no"];

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl = "https://maps.google.com/maps?output=embed&q=" + encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={inter.className} style={{ backgroundColor: STONE, color: INK, minHeight: "100vh" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(.2,.9,.2,1) forwards; }
        .fade-up-d1 { animation: fadeUp 0.9s 0.15s cubic-bezier(.2,.9,.2,1) both; }
        .fade-up-d2 { animation: fadeUp 0.9s 0.3s cubic-bezier(.2,.9,.2,1) both; }
        .scale-in { animation: scaleIn 1s cubic-bezier(.2,.9,.2,1) forwards; }
      `}</style>

      <nav className="sticky top-0 z-50 backdrop-blur-xl" style={{ backgroundColor: STONE + "EE", borderBottom: `1px solid ${INK}10` }}>
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <span style={{ fontSize: "1.2rem", fontWeight: 600, color: INK, letterSpacing: "-0.04em" }}>Urban Habitat</span>
          <div className="flex items-center gap-7">
            <a href="#collection" className="hidden md:inline text-sm font-medium hover:opacity-60 transition-opacity">Collection</a>
            <a href="#story" className="hidden md:inline text-sm font-medium hover:opacity-60 transition-opacity">Story</a>
            <a href="#visit" className="hidden md:inline text-sm font-medium hover:opacity-60 transition-opacity">Visit</a>
            <a href={phoneTel} className="px-5 py-2 text-sm font-medium transition-transform hover:scale-105" style={{ backgroundColor: INK, color: STONE, borderRadius: "999px" }}>Visit Showroom</a>
          </div>
        </div>
      </nav>

      {/* HERO — App Store style: massive title, single product card */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 text-center fade-up">
          <p className="text-xs font-medium tracking-[0.4em] uppercase mb-7" style={{ color: WALNUT }}>BURBANK · FAMILY-OWNED · SINCE OPENING</p>
          <h1 style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", fontWeight: 700, color: INK, lineHeight: 0.95, letterSpacing: "-0.05em" }}>
            Furniture,<br />
            <span style={{ fontWeight: 300, fontStyle: "italic" }}>considered.</span>
          </h1>
          <p className="mt-10 max-w-2xl mx-auto text-xl md:text-2xl fade-up-d1" style={{ color: `${INK}99`, lineHeight: 1.4, fontWeight: 400 }}>
            {content.hero.subheading}
          </p>
          <div className="mt-12 flex flex-wrap gap-3 justify-center fade-up-d2">
            <a href={content.hero.ctaLink} className="px-9 py-4 text-base font-medium transition-transform hover:scale-105" style={{ backgroundColor: INK, color: STONE, borderRadius: "999px" }}>{content.hero.ctaText}</a>
            <a href="#collection" className="px-9 py-4 text-base font-medium transition-all" style={{ color: INK, border: `1.5px solid ${INK}40`, borderRadius: "999px" }}>Browse Collection ↓</a>
          </div>
        </div>
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 mt-20 scale-in">
          <div className="aspect-[16/9] bg-cover bg-center" style={{ backgroundImage: `url("${content.hero.image}")`, borderRadius: "32px", boxShadow: `0 30px 60px ${INK}22` }} />
        </div>
      </section>

      {/* FEATURE STAT BAND — App Store style */}
      <section className="max-w-[1500px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "4.9", l: "Average rating", sub: "from 97 customer reviews" },
            { n: "0%", l: "Veneer shortcuts", sub: "solid wood, hand-built frames" },
            { n: "7 days", l: "Open every week", sub: "Sun 12–6, Mon–Sat 10–7" },
          ].map((f, i) => (
            <div key={i} className="p-10" style={{ backgroundColor: STONE_DARK, borderRadius: "28px" }}>
              <p style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)", fontWeight: 700, color: INK, lineHeight: 1, letterSpacing: "-0.05em" }}>{f.n}</p>
              <p className="mt-3 text-base font-semibold" style={{ color: INK }}>{f.l}</p>
              <p className="mt-1 text-sm" style={{ color: `${INK}77` }}>{f.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTION — App Store grid */}
      <section id="collection" className="max-w-[1500px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs font-medium tracking-[0.4em] uppercase mb-4" style={{ color: WALNUT }}>The Collection</p>
            <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, color: INK, lineHeight: 1.0, letterSpacing: "-0.04em" }}>Six categories.</h2>
          </div>
          <p className="hidden md:block text-sm font-medium" style={{ color: `${INK}77` }}>Hand-picked, every piece.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.services.map((s, i) => (
            <div key={i} className="p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group" style={{ backgroundColor: STONE_DARK, borderRadius: "24px", minHeight: "300px" }}>
              <div className="flex items-center gap-3 mb-6">
                <div style={{ width: "44px", height: "44px", backgroundColor: INK, color: STONE, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.9rem" }}>{i + 1}</div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: WALNUT }}>Category</span>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1.7rem", color: INK, lineHeight: 1.1, letterSpacing: "-0.02em" }}>{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed" style={{ color: `${INK}88` }}>{s.description}</p>
              {s.price && (
                <div className="mt-6 pt-6" style={{ borderTop: `1px solid ${INK}15` }}>
                  <p className="text-base font-semibold" style={{ color: INK, letterSpacing: "-0.01em" }}>{s.price}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SHOWROOM — featured product grid */}
      <section className="max-w-[1500px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs font-medium tracking-[0.4em] uppercase mb-4" style={{ color: WALNUT }}>From the showroom</p>
            <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, color: INK, lineHeight: 1.0, letterSpacing: "-0.04em" }}>This week's floor.</h2>
          </div>
          <a href={phoneTel} className="hidden md:block text-sm font-medium hover:opacity-60" style={{ color: WALNUT }}>Call to view →</a>
        </div>
        <div className="grid md:grid-cols-12 gap-5">
          <div className="md:col-span-8 aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url("${GALLERY[0]}")`, borderRadius: "28px" }} />
          <div className="md:col-span-4 aspect-[3/4] bg-cover bg-center" style={{ backgroundImage: `url("${GALLERY[1]}")`, borderRadius: "28px" }} />
          <div className="md:col-span-4 aspect-square bg-cover bg-center" style={{ backgroundImage: `url("${GALLERY[2]}")`, borderRadius: "28px" }} />
          <div className="md:col-span-4 aspect-square bg-cover bg-center" style={{ backgroundImage: `url("${GALLERY[3]}")`, borderRadius: "28px" }} />
          <div className="md:col-span-4 aspect-square bg-cover bg-center" style={{ backgroundImage: `url("${GALLERY[4]}")`, borderRadius: "28px" }} />
          <div className="md:col-span-6 aspect-[5/3] bg-cover bg-center" style={{ backgroundImage: `url("${GALLERY[5]}")`, borderRadius: "28px" }} />
          <div className="md:col-span-6 aspect-[5/3] bg-cover bg-center" style={{ backgroundImage: `url("${GALLERY[6]}")`, borderRadius: "28px" }} />
        </div>
      </section>

      {/* STORY — large editorial block */}
      <section id="story" className="py-20 md:py-32" style={{ backgroundColor: INK, color: STONE }}>
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <p className="text-xs font-medium tracking-[0.4em] uppercase mb-6" style={{ color: BRASS }}>The Studio</p>
          <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, color: STONE, lineHeight: 0.95, letterSpacing: "-0.04em", maxWidth: "900px" }}>
            <span style={{ color: BRASS }}>The right piece</span> finds its room.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-12">
            {content.about.paragraphs.map((p, i) => (
              <p key={i} className="text-xl md:text-2xl" style={{ color: `${STONE}cc`, lineHeight: 1.5, fontWeight: 300 }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS — App-store-style featured */}
      <section className="max-w-[1500px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <p className="text-xs font-medium tracking-[0.4em] uppercase mb-6" style={{ color: WALNUT }}>Customer Reviews</p>
        <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, color: INK, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: "3rem" }}>
          The work speaks. <span style={{ color: WALNUT }}>97 times.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {content.reviews.map((r, i) => (
            <div key={i} className="p-8" style={{ backgroundColor: STONE_DARK, borderRadius: "24px" }}>
              <div className="flex gap-1 mb-5 text-base" style={{ color: BRASS }}>{Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}</div>
              <p className="text-base leading-relaxed" style={{ color: INK, fontWeight: 500 }}>&ldquo;{r.text}&rdquo;</p>
              <p className="mt-7 text-sm font-semibold" style={{ color: WALNUT }}>{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-28" style={{ backgroundColor: STONE_DARK }}>
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="text-xs font-medium tracking-[0.4em] uppercase mb-6" style={{ color: WALNUT }}>Showroom</p>
            <h2 style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 700, color: INK, lineHeight: 1.0, letterSpacing: "-0.04em" }}>
              1055 N Victory Pl.
            </h2>
            <p className="mt-7 text-lg" style={{ color: `${INK}88` }}>{content.contact.address}</p>
            <a href={phoneTel} className="block mt-2 font-semibold transition-opacity hover:opacity-70" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", color: INK, letterSpacing: "-0.03em", lineHeight: 1 }}>{content.contact.phone}</a>
            <div className="mt-10 space-y-1">
              {Object.entries(content.contact.hours).map(([day, time]) => (
                <div key={day} className="flex justify-between py-3 text-sm" style={{ borderBottom: `1px solid ${INK}15` }}>
                  <span className="font-medium uppercase tracking-widest text-xs" style={{ color: INK }}>{day}</span>
                  <span style={{ color: `${INK}77` }}>{String(time)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7" style={{ borderRadius: "28px", overflow: "hidden", minHeight: "520px", boxShadow: `0 20px 50px ${INK}1A` }}>
            <iframe title="Urban Habitat" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "520px" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1500px] mx-auto px-6 md:px-10 py-20 md:py-32 text-center">
        <h3 style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", fontWeight: 700, color: INK, lineHeight: 0.95, letterSpacing: "-0.04em" }}>
          Something worth<br /><span style={{ fontStyle: "italic", fontWeight: 300 }}>keeping.</span>
        </h3>
        <a href={phoneTel} className="inline-block mt-12 px-12 py-5 text-base font-medium transition-transform hover:scale-105" style={{ backgroundColor: INK, color: STONE, borderRadius: "999px" }}>Visit · {content.contact.phone}</a>
      </section>

      <footer style={{ backgroundColor: STONE, borderTop: `1px solid ${INK}15` }}>
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm" style={{ color: `${INK}88` }}>
          <p style={{ fontWeight: 600, fontSize: "1.1rem", color: INK }}>Urban Habitat</p>
          <p>{content.contact.address}</p>
          <p className="text-xs uppercase tracking-widest">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
}

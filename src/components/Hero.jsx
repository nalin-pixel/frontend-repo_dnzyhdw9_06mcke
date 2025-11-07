import Spline from "@splinetool/react-spline";
import { Star, Phone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative isolate min-h-[85vh] overflow-hidden bg-stone-950 text-amber-100">
      {/* Liquid Spline background cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ShS6h2HOKd20s1py/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Soft gradients to improve contrast over Spline */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-950/90" />
      <div aria-hidden className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />

      {/* Doodle strokes (top-right) */}
      <div aria-hidden className="pointer-events-none absolute right-[-120px] top-[-60px] opacity-40">
        <svg viewBox="0 0 800 400" className="h-[420px] w-[860px] text-amber-400" fill="none">
          <g stroke="currentColor" strokeWidth="8" strokeLinecap="round">
            <path d="M90 210c60 120 220 200 420 120 70-28 126-78 166-148" />
            <path d="M110 200c50 110 210 180 390 110 65-26 118-73 152-136" opacity=".6" />
            <path d="M130 190c40 95 185 155 345 96 60-24 106-66 136-120" opacity=".35" />
          </g>
        </svg>
      </div>

      {/* Nav */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-stone-900 shadow-md ring-2 ring-amber-300">
            {/* Mini banana mark */}
            <svg viewBox="0 0 100 60" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="6">
              <path d="M10 35c15 20 55 25 80-10" strokeLinecap="round" />
              <path d="M18 30c13 18 47 21 68-9" strokeLinecap="round" opacity=".6" />
            </svg>
          </div>
          <span className="font-black tracking-tight text-2xl">PisKrez</span>
        </div>
        <div className="hidden items-center gap-8 text-amber-100/90 md:flex">
          <a href="#menu" className="hover:text-white">Menu</a>
          <a href="#tentang" className="hover:text-white">Tentang</a>
          <a href="#kontak" className="hover:text-white">Kontak</a>
        </div>
        <a href="#pesan" className="rounded-full bg-stone-900/70 px-5 py-2 text-sm font-semibold text-amber-200 shadow ring-1 ring-amber-300/40 backdrop-blur hover:bg-stone-900/90 transition">Pesan Sekarang</a>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-6 pb-16 pt-6 md:grid-cols-2 md:gap-12 md:pb-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-300/30 px-3 py-1 text-stone-900 ring-1 ring-amber-200/50">
            <Star size={16} className="text-stone-900" />
            <span className="text-xs font-semibold">Pisang Krispi Premium</span>
          </div>
          <h1 className="mt-4 font-black leading-tight text-4xl text-amber-50 sm:text-5xl md:text-6xl">
            Liquid & doodle vibes.
            <span className="block text-amber-400">Renyah bikin nagih!</span>
          </h1>
          <p className="mt-4 max-w-xl text-amber-100/90 text-base sm:text-lg">
            PisKrez menghadirkan pisang krispi dengan karakter cokelat gelap dan kuning-oranye.
            Latar belakang cair yang dinamis menambah rasa modern dan fun.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#menu" className="rounded-xl bg-amber-500 px-5 py-3 font-semibold text-stone-900 shadow-lg shadow-amber-500/30 ring-2 ring-amber-400 hover:bg-amber-400 transition">
              Lihat Menu
            </a>
            <a href="#kontak" className="rounded-xl bg-stone-900/70 px-5 py-3 font-semibold text-amber-100 shadow ring-1 ring-amber-300/40 backdrop-blur hover:bg-stone-900/90 transition">
              Hubungi Kami
            </a>
            <div className="flex items-center gap-2 text-amber-100">
              <Phone size={18} />
              <span className="text-sm">0812-3456-7890</span>
            </div>
          </div>
        </div>
        <div className="relative">
          {/* Product mockup card with liquid doodle */}
          <div className="mx-auto w-full max-w-md rounded-3xl border border-amber-300/50 bg-stone-950/40 p-5 shadow-xl backdrop-blur-md">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-amber-300/30 via-amber-400/30 to-amber-500/30">
              {/* Liquid blob */}
              <div className="absolute -left-10 -top-8 h-60 w-60 rounded-[40%] bg-amber-400/40 blur-2xl" />
              <div className="absolute -right-8 bottom-[-10px] h-52 w-52 rounded-[45%] bg-amber-200/40 blur-2xl" />
              {/* Doodle banana strokes */}
              <svg viewBox="0 0 800 400" className="absolute left-1/2 top-1/2 h-[120%] w-[130%] -translate-x-1/2 -translate-y-1/2 text-amber-500/70" fill="none">
                <g stroke="currentColor" strokeWidth="10" strokeLinecap="round">
                  <path d="M90 210c60 120 220 200 420 120 70-28 126-78 166-148" />
                  <path d="M110 200c50 110 210 180 390 110 65-26 118-73 152-136" opacity=".6" />
                </g>
              </svg>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_50%)]" />
              <div className="absolute bottom-3 left-3 rounded-full bg-amber-100/80 px-3 py-1 text-xs font-semibold text-stone-900 ring-1 ring-amber-200">
                Best Seller
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-amber-50">PisKrez Cokelat Lumer</h3>
                <p className="text-sm text-amber-200/80">Renyah manis dengan saus cokelat premium</p>
              </div>
              <div className="text-right">
                <p className="font-extrabold text-amber-50 text-xl">Rp 18.000</p>
                <p className="text-xs text-amber-200/70">per porsi</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-3 text-amber-100">
            <MapPin size={18} />
            <p className="text-sm">Pickup & delivery sekitar Kota Anda</p>
          </div>
        </div>
      </div>
    </header>
  );
}

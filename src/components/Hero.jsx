import { Star, Phone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-amber-200 via-amber-100 to-white">
      {/* Supergraphic: Banana outline */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30">
        <svg viewBox="0 0 800 400" className="absolute -right-20 -top-16 h-[480px] w-[920px] text-amber-400">
          <g fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
            <path d="M90 210c60 120 220 200 420 120 70-28 126-78 166-148" />
            <path d="M110 200c50 110 210 180 390 110 65-26 118-73 152-136" opacity=".6" />
            <path d="M130 190c40 95 185 155 345 96 60-24 106-66 136-120" opacity=".35" />
          </g>
        </svg>
      </div>

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-stone-800 shadow-md ring-2 ring-amber-300">
            {/* Mini banana icon */}
            <svg viewBox="0 0 100 60" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="6">
              <path d="M10 35c15 20 55 25 80-10" strokeLinecap="round" />
              <path d="M18 30c13 18 47 21 68-9" strokeLinecap="round" opacity=".6" />
            </svg>
          </div>
          <span className="font-black tracking-tight text-stone-800 text-2xl">PisKrez</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-stone-700">
          <a href="#menu" className="hover:text-stone-900">Menu</a>
          <a href="#tentang" className="hover:text-stone-900">Tentang</a>
          <a href="#kontak" className="hover:text-stone-900">Kontak</a>
        </div>
        <a href="#pesan" className="rounded-full bg-stone-800 px-5 py-2 text-sm font-semibold text-amber-200 shadow hover:bg-stone-900 transition">Pesan Sekarang</a>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-6 pb-16 pt-6 md:grid-cols-2 md:gap-12 md:pb-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-300/60 px-3 py-1 text-stone-800">
            <Star size={16} className="text-stone-700" />
            <span className="text-xs font-semibold">Pisang Krispi Premium</span>
          </div>
          <h1 className="mt-4 font-black leading-tight text-stone-900 text-4xl sm:text-5xl md:text-6xl">
            Renyah di luar, lembut di dalam.
            <span className="block text-amber-600">Rasa bikin nagih!</span>
          </h1>
          <p className="mt-4 max-w-xl text-stone-700 text-base sm:text-lg">
            PisKrez menghadirkan pisang krispi dengan paduan cokelat dan kuning-oranye khas. Dibuat dari pisang pilihan dengan balutan tepung renyah dan topping melimpah.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#menu" className="rounded-xl bg-amber-500 px-5 py-3 font-semibold text-stone-900 shadow-lg shadow-amber-500/30 ring-2 ring-amber-400 hover:bg-amber-400 transition">
              Lihat Menu
            </a>
            <a href="#kontak" className="rounded-xl bg-stone-800 px-5 py-3 font-semibold text-amber-100 shadow hover:bg-stone-900 transition">
              Hubungi Kami
            </a>
            <div className="flex items-center gap-2 text-stone-700">
              <Phone size={18} />
              <span className="text-sm">0812-3456-7890</span>
            </div>
          </div>
        </div>
        <div className="relative">
          {/* Product mockup card */}
          <div className="mx-auto w-full max-w-md rounded-3xl border border-amber-300 bg-white/70 p-5 shadow-xl backdrop-blur">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-amber-200 to-amber-400">
              {/* Decorative banana strokes */}
              <svg viewBox="0 0 800 400" className="absolute left-1/2 top-1/2 h-[120%] w-[130%] -translate-x-1/2 -translate-y-1/2 text-amber-600/60" fill="none">
                <g stroke="currentColor" strokeWidth="10" strokeLinecap="round">
                  <path d="M90 210c60 120 220 200 420 120 70-28 126-78 166-148" />
                  <path d="M110 200c50 110 210 180 390 110 65-26 118-73 152-136" opacity=".6" />
                </g>
              </svg>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.35),transparent_50%)]" />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-stone-800 ring-1 ring-stone-200">
                Best Seller
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-stone-900">PisKrez Cokelat Lumer</h3>
                <p className="text-sm text-stone-600">Renyah manis dengan saus cokelat premium</p>
              </div>
              <div className="text-right">
                <p className="font-extrabold text-stone-900 text-xl">Rp 18.000</p>
                <p className="text-xs text-stone-600">per porsi</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-3 text-stone-700">
            <MapPin size={18} />
            <p className="text-sm">Tersedia untuk pickup & delivery sekitar Kota Anda</p>
          </div>
        </div>
      </div>
    </header>
  );
}

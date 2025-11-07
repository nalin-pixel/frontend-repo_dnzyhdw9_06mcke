export default function About() {
  return (
    <section id="tentang" className="relative bg-gradient-to-b from-white to-yellow-50 py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 opacity-20">
        <svg viewBox="0 0 800 400" className="absolute right-[-160px] top-8 h-[420px] w-[860px] text-yellow-400" fill="none">
          <g stroke="currentColor" strokeWidth="8" strokeLinecap="round">
            <path d="M90 210c60 120 220 200 420 120 70-28 126-78 166-148" />
            <path d="M110 200c50 110 210 180 390 110 65-26 118-73 152-136" opacity=".6" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-black text-brown-900 text-3xl sm:text-4xl">Tentang PisKrez</h2>
            <p className="mt-3 text-brown-700">
              Kami berawal dari dapur rumahan dengan impian sederhana: menghadirkan pisang krispi
              yang renyah di luar, lembut di dalam, dan penuh rasa. PisKrez mengutamakan bahan baku
              segar, tepung racikan, dan topping berkualitas. Paduan warna cokelat dan kuning-oranye
              menjadi identitas rasa dan tampilan kami.
            </p>
            <ul className="mt-5 grid gap-3 text-brown-800">
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-yellow-500" />Rasa autentik dari pisang pilihan</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-yellow-500" />Tekstur renyah yang tahan lama</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-yellow-500" />Kemasan rapi dan higienis</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border-2 border-yellow-300 bg-white shadow">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(250,204,21,0.25),transparent_60%)]" />
              <svg viewBox="0 0 800 400" className="absolute left-1/2 top-1/2 h-[120%] w-[130%] -translate-x-1/2 -translate-y-1/2 text-yellow-500/70" fill="none">
                <g stroke="currentColor" strokeWidth="10" strokeLinecap="round">
                  <path d="M90 210c60 120 220 200 420 120 70-28 126-78 166-148" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

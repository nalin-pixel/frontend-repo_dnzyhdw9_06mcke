const menuItems = [
  {
    name: "PisKrez Cokelat Lumer",
    desc: "Pisang krispi dengan saus cokelat premium",
    price: 18000,
    tags: ["best", "manis"],
  },
  {
    name: "PisKrez Keju Susu",
    desc: "Taburan keju parut dan kental manis",
    price: 17000,
    tags: ["gurih"],
  },
  {
    name: "PisKrez Caramel Crunch",
    desc: "Lelehan caramel dan crumble renyah",
    price: 19000,
    tags: ["baru"],
  },
  {
    name: "PisKrez Original",
    desc: "Rasa klasik dengan manis alami",
    price: 15000,
    tags: ["favorit"],
  },
];

function formatIDR(n) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
}

export default function Menu() {
  return (
    <section id="menu" className="relative bg-white py-16">
      {/* Subtle banana supergraphic background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-10">
        <svg viewBox="0 0 800 400" className="absolute left-[-200px] top-1/2 h-[500px] w-[900px] -translate-y-1/2 text-yellow-500">
          <g fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
            <path d="M90 210c60 120 220 200 420 120 70-28 126-78 166-148" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-black text-brown-900 text-3xl sm:text-4xl">Menu Andalan</h2>
          <p className="mt-2 text-brown-700">Pilihan rasa dengan sentuhan cokelat dan kuning-oranye khas PisKrez.</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <article key={item.name} className="group rounded-3xl border border-yellow-200 bg-yellow-50/60 p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-brown-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-brown-700">{item.desc}</p>
                </div>
                <span className="shrink-0 rounded-full bg-yellow-400/80 px-3 py-1 text-xs font-semibold text-brown-900 ring-1 ring-yellow-300">{formatIDR(item.price)}</span>
              </div>
              {item.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brown-700 ring-1 ring-yellow-200">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
              <button className="mt-4 w-full rounded-xl bg-brown-800 px-4 py-2 font-semibold text-yellow-100 shadow hover:bg-brown-900">Tambah ke Pesanan</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

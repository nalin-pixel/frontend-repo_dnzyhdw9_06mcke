export default function Footer() {
  return (
    <footer className="bg-stone-900 text-amber-100">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-black text-xl">PisKrez</h3>
          <p className="mt-2 text-amber-200/80">Pisang krispi dengan karakter rasa cokelat dan kuning-oranye. Renyah, lembut, nagih!</p>
        </div>
        <div>
          <h4 className="font-semibold">Jam Buka</h4>
          <ul className="mt-2 space-y-1 text-amber-200/80">
            <li>Senin - Jumat: 10.00 - 21.00</li>
            <li>Sabtu - Minggu: 10.00 - 22.00</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Ikuti Kami</h4>
          <div className="mt-2 flex gap-3">
            <a className="rounded-full bg-amber-500/20 px-3 py-1 hover:bg-amber-500/30" href="#">Instagram</a>
            <a className="rounded-full bg-amber-500/20 px-3 py-1 hover:bg-amber-500/30" href="#">TikTok</a>
          </div>
        </div>
      </div>
      <div className="border-t border-amber-100/10 px-6 py-6 text-center text-sm text-amber-200/70">© {new Date().getFullYear()} PisKrez. All rights reserved.</div>
    </footer>
  );
}

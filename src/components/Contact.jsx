import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontak" className="relative bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-black text-brown-900 text-3xl sm:text-4xl">Hubungi Kami</h2>
          <p className="mt-2 text-brown-700">Pesan, saran, atau kerjasama — kami siap membantu.</p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-yellow-200 bg-yellow-50/60 p-6">
            <div className="flex items-center gap-3 text-brown-800">
              <Phone />
              <h3 className="font-bold">Telepon</h3>
            </div>
            <p className="mt-2 text-brown-700">0812-3456-7890</p>
          </div>
          <div className="rounded-2xl border border-yellow-200 bg-yellow-50/60 p-6">
            <div className="flex items-center gap-3 text-brown-800">
              <Mail />
              <h3 className="font-bold">Email</h3>
            </div>
            <p className="mt-2 text-brown-700">halo@piskrez.id</p>
          </div>
          <div className="rounded-2xl border border-yellow-200 bg-yellow-50/60 p-6">
            <div className="flex items-center gap-3 text-brown-800">
              <MapPin />
              <h3 className="font-bold">Alamat</h3>
            </div>
            <p className="mt-2 text-brown-700">Jln. Manis Pisang No. 7, Kota Anda</p>
          </div>
        </div>

        <form id="pesan" className="mt-10 grid gap-4 rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm sm:grid-cols-2">
          <input className="rounded-xl border-brown-200 bg-yellow-50/40 px-4 py-3 text-brown-900 placeholder-brown-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Nama" />
          <input className="rounded-xl border-brown-200 bg-yellow-50/40 px-4 py-3 text-brown-900 placeholder-brown-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Nomor HP" />
          <select className="rounded-xl border-brown-200 bg-yellow-50/40 px-4 py-3 text-brown-900 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option>PisKrez Cokelat Lumer</option>
            <option>PisKrez Keju Susu</option>
            <option>PisKrez Caramel Crunch</option>
            <option>PisKrez Original</option>
          </select>
          <input className="rounded-xl border-brown-200 bg-yellow-50/40 px-4 py-3 text-brown-900 placeholder-brown-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Jumlah" type="number" min="1" defaultValue={1} />
          <textarea className="sm:col-span-2 rounded-xl border-brown-200 bg-yellow-50/40 px-4 py-3 text-brown-900 placeholder-brown-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" rows={4} placeholder="Catatan (opsional)" />
          <button type="button" className="sm:col-span-2 rounded-xl bg-brown-800 px-6 py-3 font-semibold text-yellow-100 hover:bg-brown-900">Kirim Pesanan via WhatsApp</button>
        </form>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";

const CheckoutPage: React.FC = () => {
  return (
    <div className="container mx-auto flex min-h-screen max-w-full items-center justify-center bg-grey1">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Detail Pemesanan</h1>
        <div className="mb-4 rounded bg-yellow-400 p-2 text-black">
          <span className="font-bold">13:15</span> Segera selesaikan pesananmu
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="rounded bg-white p-4 shadow">
              <div className="flex items-start space-x-4">
                <div className="w-1/3">
                  <Image
                    src="/placeholder-event-image.jpg"
                    alt="Event Image"
                    width={150}
                    height={100}
                    className="rounded"
                  />
                </div>
                <div className="w-2/3">
                  <h2 className="text-xl font-semibold">Comedy Event Title</h2>
                  <p className="text-gray-600">14 May 2024 - 14 May 2025</p>
                  <p className="text-gray-600">00:05 - 23:55 WIB</p>
                  <p className="text-blue-600">
                    onlinetickets.com, DKI Jakarta
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="mb-2 font-semibold">Jenis Tiket</h3>
              <div className="flex items-center justify-between">
                <span>Standard Ticket</span>
                <span>Rp 20.000</span>
                <span>x1</span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="mb-2 font-semibold">Detail Pemesan</h3>
              <form>
                <div className="mb-4">
                  <label
                    className="mb-2 block text-gray-700"
                    htmlFor="fullName"
                  >
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full rounded border p-2"
                    placeholder="Gunakan nama yang tertera di KTP/Paspor."
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-2 block text-gray-700" htmlFor="phone">
                    Nomor Ponsel *
                  </label>
                  <div className="flex">
                    <select className="rounded-l border p-2">
                      <option value="+62">+62</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-r border p-2"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div>
            <div className="rounded bg-white p-4 shadow">
              <h3 className="mb-2 font-semibold">Detail Harga</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Harga Tiket</span>
                  <span>Rp 20.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Biaya Tambahan</span>
                  <span>Rp 2.220</span>
                </div>
                <div className="flex justify-between">
                  <span>Biaya Platform</span>
                  <span>Rp 0</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total Bayar</span>
                  <span>Rp 22.220</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" required />
                <span>Saya setuju dengan Syarat & Ketentuan yang berlaku</span>
              </label>
            </div>

            <button className="mt-4 w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Bayar Tiket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

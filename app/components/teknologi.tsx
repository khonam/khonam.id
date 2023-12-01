import React from "react";
import LogoNode from "../assets/node.svg";
import LogoReact from "../assets/reactt.svg";
import Logopostgres from "../assets/postgres.svg";
import LogoTs from "../assets/ts.svg";
import LogoTail from "../assets/tailwind.svg";
import LogoFa from "../assets/favicon.ico";

const MenuGaransi = [
  {
    title: "Layanan Profesional",
    content:
      "Dengan solusi profesional kami, Anda dapat berfokus pada apa yang Anda lakukan terbaik, sementara kami menangani detailnya.",
  },
  {
    title: "Respon Cepat",
    content:
      "Kami memahami urgensi kebutuhan Anda. Dengan layanan respon cepat kami, masalah Anda menjadi prioritas kami.",
  },
  {
    title: "Garansi Tersedia",
    content:
      "Dengan garansi yang tersedia, Anda dapat memastikan bahwa Anda mendapatkan kualitas terbaik sampai anda puas.",
  },
  {
    title: "Biaya Terjangkau",
    content:
      "Kami menyediakan layanan unggul tanpa menguras anggaran Anda. Dengan biaya terjangkau, Anda mendapatkan kualitas terbaik.",
  },
  {
    title: "Support Maksimal",
    content:
      "Kami siap memberikan dukungan terbaik untuk memastikan Anda mencapai tingkat kesuksesan yang lebih tinggi.",
  },
  {
    title: "Pelanggan Setia Kami",
    content:
      "Kami Menghargai Pelanggan Setia Kami! Datang 3 Kali dan Dapatkan Diskon 10% sebagai Tanda Terima Kasih Kami untuk Dukungan Anda",
  },
];

const MenuTeknologi = [
  {
    image: LogoNode,
  },
  {
    image: LogoTs,
  },
  {
    image: LogoReact,
  },
  {
    image: LogoFa,
  },
  {
    image: LogoTail,
  },
  {
    image: Logopostgres,
  },
];

export default function Garansi() {
  return (
    <div className="container mx-auto bg-slate-900 p-7 lg:p-16 rounded-lg">
      <div className="bg-slate-300 relative flex flex-col justify-center items-center p-5 lg:p-10 space-y-3 lg:space-y-2 rounded-lg">
        <div className="">
          <h1 className="text-xl md:text-2xl 2xl:text-3xl anton">
            Yang Pasti Kamu Dapatkan
          </h1>
        </div>
        <div className="text-center grid md:grid-cols-2 lg:grid-cols-3">
          {MenuGaransi.map((i, index) => {
            return (
              <div key={index} className="space-y-1 mt-2 lg:mt-7">
                <h1 className="text-md md:text-xl font-bold poppins">
                  {i.title}
                </h1>
                <p className="text-xs md:text-md 2xl:text-lg font-normal">
                  {i.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-white mt-7">
        <div>
          <h1 className="anton font-medium">Teknologi Yang Kami Kembangkan</h1>
        </div>
        <div className="lg:flex items-center lg:space-y-0 lg:gap-10 mt-3 grid grid-cols-3 gap-2">
          {MenuTeknologi.map((i, index) => {
            return (
              <div
                key={index}
                className="bg-white p-4 rounded-lg hover:bg-slate-700 hover:shadow-lg hover:shadow-slate-500"
              >
                <img
                  src={i.image}
                  alt="teknologi"
                  width={90}
                  className="flex justify-center items-center"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import WebApp from "../assets/webapp.png";
import LinkRouter from "./ui/link";

const MenuLayanan = [
  {
    name: "Pembuatan WebApp",
    content: "Menciptakan solusi WebApp berkualitas tinggi dengan desain",
    to: "/webapp",
  },
  {
    name: "Pembuatan Website",
    content: "Menciptakan website menarik, responsif, dan berkinerja tinggi.",
    to: "/website",
  },
  {
    name: "Pembuatan Toko Online",
    content: "Mulailah berjualan secara daring dengan cepat dan efisien.",
    to: "/toko-online",
  },
];

export default function Layanan() {
  return (
    <div className="space-y-5">
      <div className="text-center space-y-2 text-white">
        <h1 className="anton text-2xl lg:text-3xl">Layanan Kami</h1>
        <p className="poppins text-xs md:text-md lg:text-lg font-normal px-8">
          Kami siap membantu Anda meraih sukses dalam dunia digital.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 space-y-3 lg:space-y-0 lg:gap-3">
        {MenuLayanan.map((i, index) => {
          return (
            <div
              key={index}
              className="bg-slate-900 p-5 py-10 space-y-3 text-white rounded-lg"
            >
              <div className="flex items-center justify-center">
                <img src={WebApp} alt="img" width={300} />
              </div>
              <div className="pt-10 text-center">
                <h1 className="anton mb-2 text-2xl text-center">{i.name}</h1>
                <div className="bg-slate-200 text-slate-900 rounded-xl px-8 py-9">
                  <p className="font-medium lg:text-md 2xl:text-xl">
                    {i.content}
                  </p>
                  <div className="mt-3 text-white flex justify-center items-center">
                    <LinkRouter to={i.to} name="Selengkapnya" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

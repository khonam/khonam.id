import React from "react";
import LogoNode from "../assets/node.svg";
import LogoReact from "../assets/reactt.svg";
import LogoNext from "../assets/next.svg";
import Logopostgres from "../assets/postgres.svg";
import LogoTs from "../assets/ts.svg";
import LogoTail from "../assets/tailwind.svg";
import LogoGo from "../assets/golang.svg";
import LogoFa from "../assets/favicon.ico";

const MenuGaransi = [
  {
    title: "Layanan Profesional",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati",
  },
  {
    title: "Respon Cepat",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati",
  },
  {
    title: "Garansi Tersedia",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati",
  },
];

const Menu2 = [
  {
    title: "Biaya Terjangkau",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati",
  },
  {
    title: "Biaya Terjangkau",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati",
  },
  {
    title: "Biaya Terjangkau",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati",
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
    image: LogoNext,
  },
  {
    image: LogoFa,
  },
  {
    image: LogoTail,
  },
  {
    image: LogoGo,
  },
  {
    image: Logopostgres,
  },
];

export default function Garansi() {
  return (
    <div className="container mx-auto bg-slate-900 p-16 rounded-lg">
      <div className="bg-slate-300 relative flex flex-col justify-center items-center p-5 lg:p-10 space-y-9 rounded-lg">
        <div className="">
          <h1 className="text-2xl anton">Yang Pasti Kamu Dapatkan</h1>
        </div>
        <div className="lg:flex gap-3 text-center">
          {MenuGaransi.map((i, index) => {
            return (
              <div key={index} className="lg:max-w-md">
                <h1 className="text-xl font-bold poppins">{i.title}</h1>
                <p className="text-md font-normal">{i.content}</p>
              </div>
            );
          })}
        </div>
        <div className="lg:flex gap-3 text-center">
          {Menu2.map((i, index) => {
            return (
              <div key={index} className="lg:max-w-md">
                <h1 className="text-xl font-bold poppins">{i.title}</h1>
                <p className="text-md font-normal">{i.content}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-white mt-7">
        <div>
          <h1 className="anton font-medium">Teknologi Yang Kami Kembangkan</h1>
        </div>
        <div className="lg:flex items-center space-y-2 lg:space-y-0 lg:gap-10 mt-3">
          {MenuTeknologi.map((i, index) => {
            return (
              <div
                key={index}
                className="bg-white p-4 rounded-lg hover:bg-slate-700 hover:shadow-lg hover:shadow-slate-500"
              >
                <img
                  src={i.image}
                  alt="teknologi"
                  width={80}
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

import React from "react";
import WebApp from "../assets/webapp.png";
import { Link } from "@remix-run/react";
import LinkRouter from "./ui/link";

const MenuLayanan = [
  {
    name: "Pembuatan WebApp",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,fuga, perferendis repudiandae saepe molestias consequatur animiipsa hic sed fugit ad voluptatum quis eos corrupti ducimus nemonumquam est quasi.",
    to: "/webapp",
  },
  {
    name: "Pembuatan WebApp",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,fuga, perferendis repudiandae saepe molestias consequatur animiipsa hic sed fugit ad voluptatum quis eos corrupti ducimus nemonumquam est quasi.",
    to: "/website",
  },
  {
    name: "Pembuatan WebApp",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,fuga, perferendis repudiandae saepe molestias consequatur animiipsa hic sed fugit ad voluptatum quis eos corrupti ducimus nemonumquam est quasi.",
    to: "/toko-online",
  },
];

export default function Layanan() {
  return (
    <div className="space-y-5">
      <div className="text-center space-y-2 text-white">
        <h1 className="anton text-3xl">Layanan Kami</h1>
        <p className="poppins text-md font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          architecto
        </p>
      </div>
      <div className="lg:flex justify-center items-center space-y-3 lg:space-y-0 lg:gap-3">
        {MenuLayanan.map((i, index) => {
          return (
            <div
              key={index}
              className="lg:max-w-xs bg-slate-900 p-5 py-10 space-y-3 text-white rounded-lg"
            >
              <div className="flex items-center justify-center">
                <img src={WebApp} alt="img" width={300} />
              </div>
              <div className="pt-10">
                <h1 className="text-xl anton mb-2">{i.name}</h1>
                <p>{i.content}</p>
                <div className="mt-3 flex justify-center items-center">
                  <LinkRouter to={i.to} name="Selengkapnya" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

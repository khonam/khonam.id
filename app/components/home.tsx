import React from "react";
import Button from "./ui/link";
import BG from "../assets/bg.png";
import LinkRouter from "./ui/link";

export default function Home() {
  return (
    <div className="lg:flex justify-center items-center">
      <div className="max-w-xl space-y-4 text-white">
        <h1 className="anton text-4xl texti">
          KEMBANGKAN BISNISMU DISELURUH DUNIA
          <span className="mt-2 flex"> BERSAMA KHONAM.ID</span>
        </h1>
        <p className="max-w-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
          maxime, est modi corrupti provident nam suscipit quod iusto, ullam
          soluta voluptate! Sequi veritatis architecto id facere! Cumque maiores
          recusandae voluptas.
        </p>
        <div>
          <LinkRouter to="/" name="Hubungi Kami" />
        </div>
      </div>
      <div>
        <div className="mt-5 lg:mt-0">
          <img src={BG} width={800} height={700} className="" alt="kamu" />
        </div>
      </div>
    </div>
  );
}

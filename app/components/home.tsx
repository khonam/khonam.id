import React from "react";
import BG from "../assets/bg.png";
import LinkRouter from "./ui/link";

export default function Home() {
  return (
    <div className="lg:flex justify-center items-center">
      <div className="max-w-xl space-y-2 md:space-y-4 text-white">
        <h1 className="anton text-2xl md:text-4xl uppercase">
          Jelajahi Dunia Bersama
          <span className="mt-2 md:flex uppercase">
            {" "}
            Khonam.id, Kembangkan Bisnismu Secara Global !
          </span>
        </h1>
        <p className="lg:max-w-10 text-xs md:text-md lg:text-lg">
          memiliki website profesional adalah langkah kunci dalam membangun
          kehadiran online yang kuat dan memenangkan persaingan bisnis. Kami,
          tim ahli di Khonam.id, memahami betapa pentingnya kesan pertama dalam
          dunia digital. Inilah mengapa kami hadir untuk membantu Anda mencapai
          tujuan Anda dengan solusi website profesional yang istimewa.
        </p>
        <div>
          <LinkRouter
            to="https://wa.me/message/MCNWXPGSBCH6M1"
            name="Hubungi Kami"
          />
        </div>
      </div>
      <div>
        <div className="mt-5 lg:mt-0">
          <img src={BG} width={760} height={700} className="" alt="kamu" />
        </div>
      </div>
    </div>
  );
}

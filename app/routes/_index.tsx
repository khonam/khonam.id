import type { MetaFunction } from "@remix-run/node";
import { Link, useLocation } from "@remix-run/react";
import Home from "~/components/home";
import Layanan from "~/components/layanan";
import Garansi from "~/components/teknologi";
import { useEffect, useState } from "react";
import Footer from "~/components/footer";

export const meta: MetaFunction = () => {
  return [{ title: "Khonam.id" }, { name: "Khonam.id", content: "Khonam.id" }];
};

const MenuNav = [
  {
    name: "Home",
    to: "#",
  },
  {
    name: "Layanan",
    to: "#layanan",
  },
  {
    name: "Teknologi",
    to: "#teknologi",
  },
  {
    name: "Blog",
    to: "#",
  },
];

export default function Index() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <div className="bg-angkasa z-20">
      <div
        className={` ${
          isScrolled
            ? "py-4 text-white bg-black shadow-sm z-30 shadow-slate-800 fixed w-full"
            : "py-4 text-white bg-black shadow-sm lg:shadow-none shadow-slate-800 lg:shadow-transparent lg:bg-transparent fixed w-full z-30"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-3 md:px-6 lg:px-8 2xl:px-0">
          <div>
            <h1 className="text-3xl anton tracking-wider">
              Khonam.id
            </h1>
          </div>
          <button onClick={toggleNavbar} className="lg:hidden">
            {/* Gunakan kondisi isOpen untuk menentukan tampilan ikon */}
            {isNavbarOpen ? (
              <img src="/close.svg" alt="Tutup" width="30" height="30" />
            ) : (
              <img src="/menu.svg" alt="Buka" width="30" height="30" />
            )}
          </button>
          <ul className="hidden lg:flex items-center gap-10">
            {MenuNav.map((i, index) => {
              return (
                <li key={index} className="text-md">
                  <Link to={i.to} className="poppins">
                    {i.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul
          className={`lg:hidden mt-4 p-3 space-y-4 ${
            isNavbarOpen ? "block" : "hidden"
          }`}
        >
          {MenuNav.map((i, index) => {
            return (
              <li key={index} className="text-md">
                <Link to={i.to} className="poppins">
                  {i.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="lg:h-screen mt-20 lg:mt-0 px-3 md:px-6 lg:px-8 2xl:px-0">
        <div className="lg:h-screen container mx-auto flex justify-center items-center">
          <Home />
        </div>
      </div>
      <div
        className="lg:h-screen mt-3 lg:mt-0 px-3 md:px-6 lg:px-0"
        id="layanan"
      >
        <div className="lg:h-screen container mx-auto flex justify-center items-center">
          <Layanan />
        </div>
      </div>
      <div
        className="lg:h-screen mt-4 lg:mt-0 px-3 md:px-6 lg:px-0"
        id="teknologi"
      >
        <div className="lg:h-screen container mx-auto flex justify-center items-center">
          <Garansi />
        </div>
      </div>
      <div className=" bg-slate-900">
        <Footer />
      </div>
    </div>
  );
}

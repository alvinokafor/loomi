import { useState } from "react";

import { Logo, Search, ShoppingBag, Heart, Hamburger, Close } from "../assets";
import Container from "../layouts/container";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className="relative">
      <section className="mx-auto lg:max-w-[1200px]">
        <nav className="fixed z-40 flex w-full items-center justify-between bg-white px-4 py-5 shadow-md lg:left-0 lg:top-0 lg:px-[76px] lg:py-7 ">
          <div className="flex gap-x-4 lg:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <Hamburger />
            </button>
            <Logo />
          </div>
          <div className="hidden lg:block">
            <button>
              <Logo />
            </button>
          </div>

          <ul className="hidden items-center gap-x-10 text-xs leading-[150%] lg:flex">
            <li>
              <button>SALE</button>
            </li>
            <li>
              <button>NEW IN</button>
            </li>
            <li>
              <button>CLOTHING</button>
            </li>
            <li>
              <button>SHOES</button>
            </li>
            <li>
              <button>ACCESSORIES</button>
            </li>
            <li>
              <button>GIFTS</button>
            </li>
            <li>
              <button>COLLECTIONS</button>
            </li>
          </ul>

          <div className="flex items-center justify-center gap-x-6">
            <button>
              <Search />
            </button>
            <button>
              <Heart />
            </button>
            <button>
              <ShoppingBag />
            </button>

            <button className="hidden bg-primary px-6 py-2 text-[13px] text-white lg:block">
              Login
            </button>
          </div>
        </nav>
      </section>

      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-black/40">
          <div className="fixed bottom-0 left-0 right-10 top-0 z-20 h-full bg-white">
            <div className="mt-4 pr-3 text-right">
              <button onClick={() => setMenuOpen(false)}>
                <Close />
              </button>
            </div>

            <ul className="mt-12 items-center space-y-6 text-center text-lg leading-[150%] lg:hidden">
              <li>
                <button>SALE</button>
              </li>
              <li>
                <button>NEW IN</button>
              </li>
              <li>
                <button>CLOTHING</button>
              </li>
              <li>
                <button>SHOES</button>
              </li>
              <li>
                <button>ACCESSORIES</button>
              </li>
              <li>
                <button>GIFTS</button>
              </li>
              <li>
                <button>COLLECTIONS</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

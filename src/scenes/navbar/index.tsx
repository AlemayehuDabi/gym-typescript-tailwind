import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  const flexCenter = "flex items-center justify-center";
  return (
    <nav>
      <div
        className={`${flexCenter} fixed top-0 z-30 w-full py-6 border-2 border-black`}
      >
        <div
          className="mx-auto w-5/6 border-2 border-green-500
        "
        >
          <div
            className={`${flexBetween} w-full gap-16  border-2 border-red-500`}
          >
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />
            {/* RIGHT SIDE */}
            <div
              className={`${flexBetween} w-full border-2 border-yellow-500`}
            >
              <div
                className={`${flexBetween} gap-8 text-sm border-2 border-black`}
              >
                <p>Home</p>
                <p>Benefits</p>
                <p>Our Classes</p>
                <p>Contact Us</p>
              </div>
              <div className={`${flexBetween} gap-8 border-2 border-gray-500`}>
                <p>Sign UP</p>
                <button>Became a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;

import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { FaLocationArrow } from "react-icons/fa";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import HeroCard from "./doordash-cards";

const data = [
  {
    id: 1,
    imageurl: "/ScootScoot.svg",
    headingText: "Become a Dasher",
    paragraphText:
      "As a delivery driver, make money and work on your schedule. Sign up in minutes.",
    btnText: "Start earning",
  },
  {
    id: 2,
    imageurl: "/Storefront.svg",
    headingText: "Become a Merchant",
    paragraphText:
      "Attract new customers and grow sales, starting with 0% commissions for up to 30 days.",
    btnText: "Sign up for DoorDash",
  },
  {
    id: 3,
    imageurl: "/iphone.svg",
    headingText: "Get the best DoorDash experience",
    paragraphText:
      "Experience the best your neighborhood has to offer, all in one app.",
    btnText: "Get the app",
  },
];

export default function Doordash() {
  return (
    <div>
      <nav className="fixed left-0 w-full mt-4 ">
        <div className="flex gap-2 justify-end px-10">
          <button className="p-3 font-semibold rounded-full bg-red-500 text-white">
            Sign Up
          </button>
          <button className="p-3 font-semibold rounded-full bg-white text-red-500">
            Sign In
          </button>
        </div>
      </nav>

      <header className="py-5 bg-[url(/hero_desktop.png)] h-[100vh] bg-cover bg-center flex justify-center items-center ">
        {/* text */}
        <div className="text-white text-center flex flex-col justify-center items-center mb-2 gap-4">
          <span className="text-2xl">DOORDASH</span>
          <h1 className="font-extrabold text-4xl">
            $0 DELIVERY FEE ON FIRST ORDER
          </h1>
          <small className="font-bold ">Other fees apply</small>

          <div className="flex bg-white rounded-full text-zinc-600 text-xl gap-4 p-2 items-center justify-center ">
            <IoLocationOutline />
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter delivery address"
              className="w-70"
            />

            <div className="rounded-full p-2 bg-red-600 text-white cursor-pointer">
              <LiaLongArrowAltRightSolid />
            </div>
          </div>

          <div className="flex gap-4 ">
            <button className="flex bg-white text-black rounded-full p-2 font-semibold cursor-pointer">
              <HiOutlineUser />
              Sign in for saved address
            </button>

            <button className="flex bg-white text-black rounded-full p-2 font-semibold cursor-pointer">
              <FaLocationArrow />
              Use current location
            </button>
          </div>
        </div>
      </header>

      <div className="flex justify-center items-start w-full gap-4">
        {data.map((item) => (
            <HeroCard
              key={item.id}
              image={item.imageurl}
              heading={item.headingText}
              paragraph={item.paragraphText}
              btnText={item.btnText}
            />
          ))}
      </div>
    </div>
  );
}

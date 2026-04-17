import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { FaLocationArrow } from "react-icons/fa";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import DoordashCards from "./doordash-cards";

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
        <div className="text-white text-center flex flex-col justify-center items-center gap-4">
          <span className="text-2xl">DOORDASH</span>
          <h1 className="font-extrabold text-4xl">
            $0 DELIVERY FEE ON FIRST ORDER
          </h1>
          <small className="font-bold">Other fees apply</small>

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

          <div className="flex gap-4">
            <button className="flex bg-white text-black rounded-full p-2 font-semibold">
              <HiOutlineUser />
              Sign in for saved address
            </button>

            <button className="flex bg-white text-black rounded-full p-2 font-semibold">
              <FaLocationArrow />
              Use current location
            </button>
          </div>
        </div>
      </header>

      {/* <div>
        <div>
          <p>Become a Dasher</p>
          <h1>
            As a delivery driver, make money and work on your schedule. Sign up
            in minutes.
          </h1>
        </div>

        <div>
          <p>Become a Merchant</p>
          <h1>
            Attract new customers and grow sales, starting with 0% commissions
            for up to 30 days.
          </h1>
        </div>

        <div>
          <p>Get the best DoorDash experience</p>
          <h1>
            Experience the best your neighborhood has to offer, all in one app.
          </h1>
        </div>
      </div> */}

      <div>
        <DoordashCards image={'/ScootScoot.svg'} heading={'Become a Dasher'} description={'As a delivery driver, make money and work on your schedule. Sign up in minutes.'} text={'Learn More'} />
      </div>
    </div>
  );
}

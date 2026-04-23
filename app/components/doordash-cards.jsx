import { FaLongArrowAltRight } from "react-icons/fa";

export default function HeroCard({ image, heading, paragraph, btnText }) {
  return (
    <div className="w-70 flex flex-col items-center justify-center p-2 ">
      <div className="h-40 w-40 items-center justify-center flex p-2">
        <img
          src={image}
          alt=""
          className=" w-full object-cover object-center "
        />
      </div>
      <div className="text-center">
        <h4 className="text-2xl font-semibold">{heading}</h4>
        <p>{paragraph}</p>
        <button className="flex cursor-pointer text-red-600 font-semibold gap-2 px-3 items-center py-1 mx-auto">
          {btnText}
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}

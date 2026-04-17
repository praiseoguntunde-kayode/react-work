import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export default function DoordashCards({ image, heading, description, text }) {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>p

      <div>
        <h4>{heading}</h4>
        <p>{description}</p>
        <button>
          {text} 
          <LiaLongArrowAltRightSolid />
          {" "}
        </button>
      </div>
    </div>
  );
}

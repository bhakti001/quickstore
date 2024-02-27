import React from "react";
import newbadge from "../../../assets/images/newbadge.gif"
// import newbadge from "../../../assets/images/new.gif"
// import newbadge from "../../../assets/images/200.webp"
const Badge = ({ text }) => {
  return (
    <div className="w-[40px] h-[35px] flex justify-center items-center align-top">
      <img src={newbadge} alt="" />
    </div>
    // <div className="bg-primeColor w-[40px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer">
    //   {text}
    // </div>
  );
};

export default Badge;

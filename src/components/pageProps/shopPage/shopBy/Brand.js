import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import { NavLink } from "react-router-dom";

const Brand = () => {
  const [showBrands] = useState(true);
  const brands = [
    {
      _id: 9006,
      title: "Apple",
    link: "/apple",

    },
    {
      _id: 9007,
      title: "Dior",
    link: "/dior",

    },
    {
      _id: 9008,
      title: "Samsung",
    link: "/samsung"
    },
    {
      _id: 9009,
      title: "H&M",
    link: "/hm",

    },
    {
      _id: 9010,
      title: "Gucci",
    link: "/gucci",
    },
  ];

  return (
    <div>
      <div
        // onClick={() => setShowBrands(!showBrands)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Brand" icons={false} />
      </div>
      {showBrands && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {brands.map(({ _id, title,link}) => (
            <NavLink  to={link}>  <li
                key={_id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
              >
                {title}
              </li>
            </NavLink>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Brand;

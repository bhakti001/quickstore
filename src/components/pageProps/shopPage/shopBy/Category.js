import React, { useState } from "react";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";
import {NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(false);
  const items = [
    {
      _id: 990,
      title: "All Products",
      icons: true,
    link: "/allproducts",

    },
    {
      _id: 991,
      title: "Furniture",
    link: "/furniture",

    },
    {
      _id: 992,
      title: "Electronics",
      icons: true,
    link: "/electronic",

    },
    {
      _id: 993,
      title: "Clothes",
    link: "/clothes",

    },
    {
      _id: 994,
      title: "Bags",
    link: "/bags",

    },
  ];
  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={false} />
      <div>
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {items.map(({ _id, title, icons ,link}) => (
           <NavLink to={link}><li
              key={_id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between"
            >
              {title}
              {icons  && (
                <span
                  onClick={() => setShowSubCatOne(!showSubCatOne)}
                  className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                >
                  <ImPlus />
                </span>
              )}
            </li></NavLink> 
          ))}
        </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Category;

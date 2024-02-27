import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { spfOne ,spfTwo , spfThree,spfFour } from "../../../assets/images";
const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product  
          _id="1101"
          img= {spfOne}
          productName= "Samsung Galaxy S23 5G"
          price="79,999"
          color= "Green and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="boAt Rockerz  Headphones"
          price="1,099"
          color="Black"
          badge={true}
          des="Screen Size: 65 Inches
          Brand: VURockerz 370 come equipped with latest Bluetooth v5.0 for instant wireless connectivity
          The powerful 300mAh battery provides up to 8 Hours of audio bliss
          40mm Dynamic Drivers supply immersive High Definition sound"
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="
          Fastrack New Limitless FS1"
          price="1,995"
          color="Black"
          badge={true}
          des="Your personal assistant to make your life quick and smart like setting up alarms,Modify your style everyday with 150+ trendy watchfaces"
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="HONOR Pad X9"
          price="15,999"
          color="Black"
          badge={true}
          des="【 Storage】 7GB (4GB+3GB RAM Turbo) | 128 GB ROM &nbsp;
          【Large Screen and Clear Visuals】 HONOR Pad X9 equipped with an 11.5-inch 120 Hz 2k display, 86% screen-to-body ratio, 400 NITS, and 100% SRGB screen technology for transparent visuals
          【 Flip cover for easy viewing 】The sleek and lightweight stand-fold design provides convenient viewing angles when watching videos, video calls, texting, gaming or reading, etc."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;

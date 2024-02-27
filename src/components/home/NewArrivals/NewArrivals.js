import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import alo from "../../../assets/images/products/newArrival/1.webp"
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Round Table Clock"
            price="799"
            color="Black"
            badge={false}
            des="Night LED light which turns on when clicked, 10.9 cm/ 4.29” ,Height: 11.4cm/ 4.49”,Breadth: 5.1 cm/ 2.01, Fear not as our desk clock can wake up the heaviest of sleepers with its loud alarm. "
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Smart Watch"
            price="1,099"
            color="Black"
            badge={false}
            des="1.81 inches(4.59cms) TFT display, 240*280px, Always on display - No, 550 nits brightness, 2.5 hours to fully charge. "
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="cloth Basket"
            price="599"
            color="Mixed"
            badge={false}
            des=". No harsh chemicals. Our basket is soft and safe for kids, This basket works perfect for blankets, throw pillows,great addition to anyone’s home—especially if they’ve moved, gotten married, or just had a baby"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Funny toys for babies"
            price="264"
            color="Mixed"
            badge={false}
            des="Can use as nap pillow/ hug pillow/ office noon break nap pillow/ plush toys, meet your all needs, As a home decoration, make your home full of love and warmth
            Its comfortable and very soft plush makes it a brilliant gift for your children, family members or friends"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={alo}
            productName="Helmet Motorbike "
            price="3,799"
            color="Mixed"
            badge={false}
            des="
            Developed utilizing rider input from the world’s top helmet designers and enthusiasts.The NACA inlets on the back of the helmet allow quick extraction of the stale air.x`"
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;

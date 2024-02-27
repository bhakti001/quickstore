import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/QuickReducer";
import { Link } from "react-router-dom";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">₹&nbsp;{productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> {productInfo.color}
      </p>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.productName,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              colors: productInfo.color,
            })
          )
        }
        className="w-40 py-4 rounded-2xl bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont md:w-80"
      >
        Add to Cart
      </button>
     <Link to="/paymentgateway"> <button className="w-40 py-4 rounded-2xl bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont md:w-80">Buy Now</button></Link>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> Spring
        collection, Streetwear SKU: N/A
      </p>
    </div>
  );
};

export default ProductInfo;

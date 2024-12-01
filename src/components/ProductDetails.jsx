import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BagItemAction } from "../store/bagitems";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { detailsofProduct } = useSelector((store) => store.bagItemList);
  const [getid, setid] = useState()
  console.log(detailsofProduct);

  const dispatch = useDispatch();
  function handleaddBag(item) {
    dispatch(BagItemAction.bagItemCount(item));
  }
  return (
    <div className="flex gap-3 ">
      <div className="flex ">
        <div>
        <img className="w-[440px] border-[1px] m-1 border-gray-200" src={detailsofProduct.thumbnail} alt="" />
        <img className="w-[440px] border-[1px] m-1 border-gray-200" src={detailsofProduct.thumbnail} alt="" />

        </div>
        <div>
        <img className="w-[440px] border-[1px] m-1 border-gray-200" src={detailsofProduct.thumbnail} alt="" />
        <img className="w-[440px] border-[1px] m-1 border-gray-200" src={detailsofProduct.thumbnail} alt="" />

        </div>
    
   

      </div>
      <div className="">
        <div className="flex flex-col gap-3 p-3">
          <h3 className="text-[22px] font-bold">{detailsofProduct.brand}</h3>
          <h3 className="text-gray-500 text-[16px]">{detailsofProduct.title}</h3>
          <h3 className="">{detailsofProduct.rating} </h3>
        </div>
        <hr />
        <div className="flex flex-col gap-3 p-3">
          <span className="flex items-center gap-3"> <h3 className="text-[20px] text-gray-500">MRP ₹</h3> <h3 className="text-[23px] font-bold">  {detailsofProduct.price}</h3></span>
          <h3 className="text-[195x] font-semibold text-orange-500"> Discount {detailsofProduct.discountPercentage}%</h3>
          <h4>inclusive of all taxes</h4>
          {

            getid == detailsofProduct.id ? <Link to='/bag' className="bg-red-300 p-2  h-[43px] text-center">
           
            
          
            Go to Bag
          
            </Link> :  <button
            className="bg-green-300 p-2  h-[43px] "
            onClick={() => {handleaddBag(detailsofProduct),  setid(detailsofProduct.id)}}
          >
            Add to cart
          </button>
          }
         
          <hr />
        </div>
        <div className="flex flex-col gap-3 p-3">
          <p>Get it by, {detailsofProduct.shippingInformation}</p>
          <hr />
          <h1 className="font-bold">DELIEVERY</h1>
          <div className="flex  gap-2 items-center">
            <TbTruckDelivery />
            <h4>{detailsofProduct.shippingInformation}</h4>
          </div>
          <div className="flex items-center gap-2">
            <FaRupeeSign />
            <h4>Pay on delivery avilable</h4>
          </div>
          <div className="flex items-center gap-2">
            <LiaExchangeAltSolid />
            <h4>{detailsofProduct.returnPolicy}</h4>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-3">
          <h2 className="font-bold">PRODUCT DETAILS </h2>
          <div className="flex flex-col gap-2 text-[15px] text-gray-700">

            <p>{detailsofProduct.warrantyInformation}</p>
            <h2>Weight: {detailsofProduct.weight}</h2>
            <h2>Depth: {detailsofProduct.dimensions.depth}</h2>
            <h2>Height: {detailsofProduct.dimensions.height}</h2>

            <h2>Width: {detailsofProduct.dimensions.width}</h2>

          </div>

        </div>
        <div className="flex flex-col gap-3 p-3">
          <hr />
          <div className="flex gap-2 font-bold">

            <h2> RATING </h2><MdOutlineStarPurple500 className="text-[20px]" /><MdOutlineStarPurple500 className="text-[20px]" />
          </div>
          <div className="py-9" >
            {
              detailsofProduct.rating <3 ?<div className="flex items-center gap-2">
              <h3 className="text-[35px]">{detailsofProduct.rating}</h3>
              <MdOutlineStarPurple500 className="text-[35px] text-red-500" />
            </div>: <div className="flex items-center gap-2">
              <h3 className="text-[35px]">{detailsofProduct.rating}</h3>
              <MdOutlineStarPurple500 className="text-[35px] text-green-500" />
            </div>
            }
           

          </div>
        </div>
        <div className="p-3">
          <hr />
          <h2 className="font-bold">Customer Reviews {detailsofProduct.reviews.length}</h2>

          {
            detailsofProduct.reviews.map((val) => (
              <div className="flex gap-3 mt-3">

                <div>
                  {
                    val.rating < 3 ? <div className="flex gap-1">
                      <h3 className="text-[13px] ">{val.rating} </h3>
                      <MdOutlineStarPurple500 className="text-red-400" />
                    </div> : <div className="flex gap-1">
                      <h3 className="text-[13px] ">{val.rating} </h3>
                      <MdOutlineStarPurple500 className="text-green-400" />
                    </div>
                  }

                </div>
                <div className="flex flex-col gap-2">
                  <h3>{val.comment}</h3>
                  <div className="flex gap-2">
                    <h3 className="text-[13px]">{val.reviewerName}</h3>|
                    <h3 className="text-[13px]">{val.date}</h3>
                  </div>

                </div>
              </div>


            ))
          }

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;

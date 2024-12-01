import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BagItemAction } from "../store/bagitems";
import { wishListAction } from "../store/WishList";

const WishList = ({wishlists}) => {
    
    const dispatch = useDispatch();
    function handleaddBag(item) {
      dispatch(BagItemAction.bagItemCount(item));
    }
    function handleRemoveFromWishlist(id){
        dispatch(wishListAction.removeItem(id))
    }
    return (
        
        <div className="flex flex-wrap ">
            
            {wishlists?.map((getval) => (
                <div
                    className="border-[1px] mt-2 border-gray-300 h-auto ml-3 w-[250px] relative "
                    onMouseLeave={() => sethover(false)}
                    onMouseEnter={() => sethover(true)}
                    key={getval.id}
                >
                    <h2 className="absolute top-[200px] left-2 bg-gray-200 rounded-sm px-1 text-[13px] ">
                        {getval.rating} ⭐
                    </h2>
                    {getval.stock < 20 && (
                        <h2 className="absolute left-2 top-2 rounded-sm px-2 text-white bg-red-500">
                            {getval.stock} Left
                        </h2>
                    )}
                    {getval.stock == 0 && (
                        <h2 className="absolute right-2 top-2 rounded-sm px-2 text-white bg-red-500">
                            out of stock
                        </h2>
                    )}

                    <div className=" w-[250px] h-[230px] border-black">
                        <Link to="/details">
                            <img
                                className="w-[100%] h-[100%]"
                                src={getval.thumbnail}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-1 p-1">
                        <h2 className="font-bold">{getval.brand}</h2>
                        <h2 className="text-[14px] text-nowrap overflow-hidden">
                            {getval.title}
                        </h2>
                        <span className="flex gap-10">
                            <h2 className="text-[13px] font-bold">Rs {getval.price}</h2>
                            <h2 className="text-[13px] font-bold text-orange-400">
                                ({getval.discountPercentage} % OFF)
                            </h2>
                        </span>

                        <button
                            className="bg-green-300  w-[100%] m-auto  h-[43px] "
                            onClick={() => handleaddBag(getval)}
                        >
                            Add to cart
                        </button>
                    </div>
                    <h1 className="absolute top-1 right-2 hover:text-[22px] text-[20px] font-semibold text-gray-600 cursor-pointer" onClick={()=>handleRemoveFromWishlist(getval.id)}>X</h1>
                </div>
            ))}
        </div>
    );
};

export default WishList;

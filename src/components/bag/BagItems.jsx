import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PiKeyReturnThin } from "react-icons/pi";
import { MdDone } from "react-icons/md";
import { BagItemAction } from "../../store/bagitems";
import Message from "./Message";
import SummeryItem from "./SummeryItem";

const BagItems = ({ items }) => {
    const dispatch = useDispatch();

    function handledeleteitem(id) {
        dispatch(BagItemAction.deleteBagItem(id));
    }

    return (
        <div className="flex gap-[90px]">
            <div>
                <div>
                    <h3 className="uppercase font-semibold">Total Items in Bag  <span className="text-[16px] font-semibold">({items.length})</span>  </h3>
                </div>
                <div className=" p-2 h-[600px] overflow-y-auto border-[1px]">
                    {items.map((items) => (
                        <div className="flex relative items-center justify-start gap-1 border-[1px] w-[540px] h-[200px] mt-4">
                            <div className="h-[220px] w-[200px]">
                                <img className="" src={items.thumbnail} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="text-[14px] font-bold line-clamp-2">
                                    {" "}
                                    {items.brand}
                                </div>
                                <div className="text-[13px] text-[#282c3f]"> {items.title}</div>
                                <div className=" flex gap-6 ">
                                    <span className="font-bold text-[15px]"> ₹{items.price}</span>
                                    <span className=" line-through text-gray-500 text-[15px] ">
                                        ₹
                                        {Math.ceil(
                                            items.price * ((items.discountPercentage + 100) / 100)
                                        )}
                                    </span>
                                    <span className="text-orange-400 text-[15px]">
                                        {items.discountPercentage}% OFF
                                    </span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <PiKeyReturnThin />
                                    <span className="text-[14px]">{items.returnPolicy}</span>{" "}
                                </div>
                                <div className="flex gap-2 items-center">
                                    <MdDone className="text-green-700 text-[20px]" />
                                    <span className="text-[14px]">delivered by 12-22-2024</span>
                                </div>
                            </div>

                            <div
                                className="absolute top-2 right-2 cursor-pointer active:scale-110"
                                onClick={() => handledeleteitem(items.id)}
                            >
                                X
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <SummeryItem></SummeryItem>
        </div>
    );
};

export default BagItems;

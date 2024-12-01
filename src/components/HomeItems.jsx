import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BagItemAction } from "../store/bagitems";
import { Link } from "react-router-dom";
import { wishListAction } from "../store/WishList";

const HomeItems = ({ getval }) => {

    const [ getover, sethover ] = useState(false)
    const [getid, setid] = useState()
    const dispatch = useDispatch()

    const { wishlists } = useSelector(store => store.wishList)

    function handleWishlist(getval) {
        dispatch(wishListAction.wishListItem(getval))
    }
    function handleItemDetails(getval) {
        dispatch(BagItemAction.ProductDetails(getval))
    }
function handleRemoveItemWishlist(id){
dispatch(wishListAction.removeItem(id))
}

    return (
        <>
            <div className="border-[1px] mt-2  border-gray-300 h-[320px] ml-3 w-[250px] relative "
                onMouseLeave={() => sethover(false)} onMouseEnter={() => sethover(true)} >
                <h2 className="absolute top-[200px] left-2 bg-gray-200 rounded-sm px-1 text-[13px] ">
                    {getval.rating} ⭐
                </h2>{
                    getval.stock < 20 && <h2 className="absolute right-2 top-2 rounded-sm px-2 text-white bg-red-500">{getval.stock} Left</h2>

                }
                {
                    getval.stock == 0 && <h2 className="absolute right-2 top-2 rounded-sm px-2 text-white bg-red-500">out of stock</h2>

                }

                <div className=" w-[250px] h-[230px] border-black" >
                    <Link to="/details"><img className="w-[100%] h-[100%]" src={getval.thumbnail} alt="" onClick={() => handleItemDetails(getval)} /></Link>

                </div>
                <div className="flex flex-col gap-1 ml-2">
                    <h2 className="font-bold">{getval.brand}</h2>
                    <h2 className="text-[14px] text-nowrap overflow-hidden">{getval.title}</h2>
                    <span className="flex gap-10">
                        <h2 className="text-[13px] font-bold">Rs {getval.price}</h2>
                        <h2 className="text-[13px] font-bold text-orange-400">
                            ({getval.discountPercentage} % OFF)
                        </h2>
                    </span>
                </div>
                <div>
                    {
                      
                            getid == getval.id ? <div>

                                {
                                    getover && <button className="bg-red-300 p-2 w-[100%] absolute top-[275px] h-[43px]  " onClick={()=> {setid(false), handleRemoveItemWishlist(getval.id)}}>Remove</button>
                                    
                                }
                            </div> : <div>

                                {
                                    getover && <button className="bg-green-300 p-2 w-[100%] absolute top-[275px] h-[43px] active:bg-green-500 " onClick={() => {handleWishlist(getval), setid(getval.id)}}>WishList</button>
                                }
                            </div>
                       
                    }



                </div>

            </div>
        </>
    );
};

export default HomeItems;

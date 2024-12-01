import React, { useContext, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { useDispatch, useSelector,  } from "react-redux";
import { categoryAction } from "../store/categorySlice";
import { Link } from "react-router-dom";

const Header = () => {
    const [getCategoryMen, setCategoryMen] = useState();
    const [getWomen, setWomen] = useState();
    const [getOther, setOther] = useState();
    const dispatch = useDispatch();
    const {items}=useSelector(store => store.bagItemList)
    const {wishlists} = useSelector(store => store.wishList)

    const handleAllProducts = () => {
        dispatch(categoryAction.allProducts());
    };
    useEffect(() => {
        handleAllProducts();
    }, []);

    const handleCategoryOfProducts = (mensshirts) => {
        dispatch(categoryAction.categoryOfProducts(mensshirts));
    };
    const handleSearchProducts =(e)=>{
        e.preventDefault()
        const inputValue = e.target[0].value
        dispatch(categoryAction.searchProducts(inputValue))
        e.target[0].value =''
       
        
    }

    return (
        <div className="sticky left-0 top-0 right-0 z-20">
            <div className="bg-gray-800 flex text-white flex-col gap-7 ">
                <nav className="flex justify-between  w-[95%] m-auto py-2 items-center">
                    <Link to='/' className="text-[30px] font-extrabold">
                        ShopU
                    </Link>
                    <form className="w-[400px] mx-auto " onSubmit={handleSearchProducts}>
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block relative w-full p-2 ps-10 text-sm text-gray-900 border rounded-sm "
                                placeholder="Search Products..."
                                required
                            />
                           
                           
                           <button
                                type="submit"
                                className=" absolute  end-0 top-0  bottom-0 bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none  font-medium rounded-sm text-sm px-4 py-2  text-black  "
                            >
                                {/* <Link to='/'>Search </Link> */}
                                search
                                
                            </button>
                           
                        </div>
                    </form>
                    <ul className="flex gap-9 items-center text-[15px]">
                        <a
                            href="#"
                            className="flex flex-col justify-center items-center cursor-pointer"
                        >
                            <CgProfile className="text-[20px]" />
                            Profile
                        </a>

                        <Link to='/wishlist'
                            className="flex flex-col justify-center items-center cursor-pointer"
                        >
                            <FaRegHeart className="text-[20px] font-extrabold" />
                            Wishlist
                            <h3 className="absolute top-[2px] right-[99px] text-[11px] text-white rounded-[50%] bg-red-600 px-2 py-[3px]">{wishlists.length}</h3>
                        </Link>
                        <Link to='/bag'
                            className="flex flex-col justify-center items-center cursor-pointer relative"
                        >
                            <IoBagRemoveOutline className="text-[20px]" />
                            Bag
                            <h3 className="absolute top-[-7px] right-[-17px] text-[13px] text-white rounded-[50%] bg-red-600 px-2 py-[3px]">{items.length}</h3>
                        </Link>
                    </ul>
                </nav>
            </div>

            <ul className="flex gap-[40px] text-[15px] bg-white text-gray-600 justify-start pl-9 font-semibold border-[2px] border-t-4 border-t-red-400  border-b-[1px] border-b-gray-400 py-1.5  items-center">
                <Link to='/' onClick={handleAllProducts}>
                    ALL PRODUCTS
                </Link>
                <a
                    href="#"
                    className="relative"
                    onMouseLeave={() => setCategoryMen(false)}
                    onMouseEnter={() => setCategoryMen(true)}
                >
                    MEN
                    {getCategoryMen && (
                        <ul className="absolute top-[22px] z-10 bg-white border-[1px] p-1 w-[180px]">
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("mens-shoes")}
                            >
                                Shoes
                            </Link>
                            </li>
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("mens-shirts")}
                            >
                                Shirts
                            </Link>
                            </li>
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("mens-watches")}
                            >
                                Watches
                            </Link>
                            </li>
                        </ul>
                    )}
                </a>
                <a
                    href="#"
                    className="relative"
                    onMouseLeave={() => setWomen(false)}
                    onMouseEnter={() => setWomen(true)}
                >
                    WOMMEN
                    {getWomen && (
                        <ul className="absolute top-[22px] z-10 bg-white border-[1px] p-1 w-[180px]">
                           <li>

                             <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("womens-bags")}
                            >
                                bag
                            </Link>
                            </li>
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("womens-dresses")}
                            >
                                dress
                            </Link>
                            </li>
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("womens-jewellery")}
                            >
                                jewellery
                            </Link>
                            </li>
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("womens-shoes")}
                            >
                                shoes
                            </Link>
                            </li>
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("womens-watches")}
                            >
                                Watches
                            </Link>
                            </li>
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("tops")}
                            >
                                tops
                            </Link>
                            </li>
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("sunglasses")}
                            >
                                sunglasses
                            </Link>
                            </li>
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("fragrances")}
                            >
                                Fragrances
                            </Link>
                            </li>
                           <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("skin-care")}
                            >
                                skin care
                            </Link>
                           </li>
                             <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("kitchen-accessories")}
                            >
                                kitchen
                            </Link>
                             </li>
                              <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("beauty")}
                            >
                                beauty
                            </Link>
                              </li>
                        </ul>
                    )}
                </a>
                <a
                    href="#"
                    className="relative"
                    onMouseLeave={() => setOther(false)}
                    onMouseEnter={() => setOther(true)}
                >
                    OTHERS
                    {getOther && (
                        <ul className="absolute top-[22px] z-10 bg-white border-[1px] p-1 w-[180px]">
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("furniture")}
                            >
                                furniture
                            </Link>
                            </li>
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("groceries")}
                            >
                                groceries
                            </Link>
                            </li>
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("home-decoration")}
                            >
                                decoration
                            </Link>
                            </li>
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("laptops")}
                            >
                                laptops
                            </Link>
                            </li>
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("mobile-accessories")}
                            >
                                mobile-accessories
                            </Link>
                            </li>
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("motorcycle")}
                            >
                                motorcycle
                            </Link>
                            </li>
                            <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("smartphones")}
                            >
                                smartphones
                            </Link>
                            </li>
                              <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("sports-accessories")}
                            >
                                sports-accessories
                            </Link>
                              </li>
                             <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("tablets")}
                            >
                                tablets
                            </Link>
                             </li>
                             <li>

                            <Link to='/'
                                className="hover:text-orange-600 "
                                onClick={() => handleCategoryOfProducts("vehicle")}
                            >
                                vehicle
                            </Link>
                             </li>
                        </ul>
                    )}
                </a>
            </ul>
        </div>
    );
};

export default Header;

import React from 'react'
import { useSelector } from 'react-redux'

const SummeryItem = () => {

   const {items}= useSelector(store=> store.bagItemList)

      let totalPrice = 0
      let totaldiscount = 0
    for (let i = 0; i < items.length; i++) {
        totalPrice = totalPrice + (parseFloat((items[i].price*((items[i].discountPercentage+100)/100)-items[i].price).toFixed(2)))+ items[i].price
        totaldiscount = totaldiscount + (parseFloat((items[i].price*((items[i].discountPercentage+100)/100)-items[i].price).toFixed(2)))
    }  

      console.log(totalPrice)
    return (
        <div className='h-[400px] w-[400px]'>
            <h2 className='font-semibold'>SUMMERY</h2>
            <div className='border-[1px] p-2 flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <h2>Total MRP </h2>
                    <h2>{Math.ceil(totalPrice).toFixed(2)} </h2>
                </div>
                <div className='flex justify-between'>
                    <h2>Discount on MRP </h2>
                    <h2 className='text-green-600'>-{Math.ceil(totaldiscount).toFixed(2)}  </h2>
                </div>
                <div className='flex justify-between'>
                    <h2>Coupon Discount </h2>
                    <h2> -- </h2>
                </div>
                <div className='flex justify-between'>
                    <h2>Shipping Fee </h2>
                    <h2>FREE </h2>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <h2>Total Amount </h2>
                    <h2>{Math.ceil(totalPrice- totaldiscount).toFixed(2)} </h2>
                </div>
                <button className='w-[100%] bg-green-400 py-3'>PLACE ORDER</button>
            </div>
        </div>
    )
}

export default SummeryItem

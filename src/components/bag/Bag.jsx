import React from 'react'
import BagItems from './BagItems'
import { useSelector } from 'react-redux'
import Message from './Message'
import SummeryItem from './SummeryItem'

const Bag = () => {
  const {items}= useSelector(store => store.bagItemList)
 let Msg = `There is nothing in your bag. Let's add some items
 `
 let btnmsg = 'ADD ITEMS FROM WISHLIST'

  return (
    <div className='w-[100%] h-[100vh] border-[4px] flex justify-center items-center'>
      {
        items.length >=1 ?<BagItems key={items.id} items={items}></BagItems> : <Message Msg={Msg} btnmsg={btnmsg}></Message>
      }
     
    </div>
  )
}

export default Bag

import React from 'react'
import WishList from './WishList'
import { useSelector } from 'react-redux';
import Message from './bag/Message';

const WishlistBox = () => {
    const { wishlists } = useSelector((store) => store.wishList);
   
    let Msg = `There is nothing in your WishList. Let's add some items
    `
    let btnmsg = 'ADD ITEMS'
  return (
    <div>
      {
    wishlists.length < 1 ?<Message Msg={Msg} btnmsg={btnmsg}></Message> :<WishList wishlists={wishlists}></WishList >
      } 
    </div>
  )
}

export default WishlistBox

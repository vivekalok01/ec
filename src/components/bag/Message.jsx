import React from 'react'
import { Link } from 'react-router-dom'

const Message = ({Msg, btnmsg}) => {
  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center border-[2px] gap-3 flex-col'>
    <h1 className='text-[25px]'>{Msg}</h1> 
    <Link to='/' className='border-[2px] border-red-400 p-3 text-red-400'>{btnmsg}</Link>
    </div>
  )
}

export default Message

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { categoryAction } from '../store/categorySlice';
import { loadingAction } from '../store/loadingSlice';

const FetchData = () => {


    const dispatch = useDispatch()
      
    useEffect(() => {
           dispatch(loadingAction.loadingHandle(true))
      fetch('https://dummyjson.com/products?limit=194')
        .then(res => res.json())
        .then(data => {
          dispatch(categoryAction.staticDataHandle(data.products))
          dispatch(loadingAction.loadingHandle(false))

        });
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default FetchData

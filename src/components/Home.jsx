import React from 'react'
import { useSelector } from 'react-redux'
import HomeItems from './HomeItems'

const Home = () => {
    const {updatedData} = useSelector(store => store.category)
  return (
    <div className="flex flex-wrap gap-5 justify-center">
    {
      updatedData.map((getval) => (<HomeItems key={getval.id} getval={getval}></HomeItems>)) 
    
    }
    </div>
  )
}

export default Home

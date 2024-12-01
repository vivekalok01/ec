
import Header from "./components/Header"
import FetchData from "./components/FetchData"
import Home from "./components/Home"
import { Outlet } from "react-router"
import Footer from "./components/Footer"
import { useSelector } from "react-redux"
import Loading from "./components/Loading"




function App() {
  const {loadingState}= useSelector(store => store.Loading)



  return (
<>
      <FetchData></FetchData>
      <Header></Header>
      {
        loadingState ? <Loading></Loading>: <Outlet></Outlet>
      }
      
      <Footer></Footer>


      
</>
      
    
  )
}

export default App

import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import ToggleBtn from './Components/ToggleBtn/ToggleBtn'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  // coin handle state
  const [coin, setCoin] = useState(0)
  // btn toggle state
  const [isActive, setIsActive] = useState({
    player: true,
    sys: 'available'
  })

  // coin handle function
  const handleCoin = ()=>{
    toast.success("Coin successfully Added!!");
    setCoin(coin + 1000000);
  }
  // handle toggle btn
  const handleToggleBtn = (sys) =>{
    if(sys === 'available'){
      setIsActive({
        player: true,
        sys: 'available'
      })
    }
    else{
      setIsActive({
        player: false,
        sys: 'selected'
      })
    }
  }
  console.log(isActive)
  return (
    <>
      {/* Navbar */}
      <Navbar coin={coin}></Navbar>
      {/* Banner section */}
      <Banner handleCoin={handleCoin}></Banner>
      {/* Toggle btn  and toggle section*/}
      <ToggleBtn handleToggleBtn={handleToggleBtn}
       isActive={isActive}>
       </ToggleBtn>
      {/* NewsLatter */}
      <Footer></Footer>
      {/* react Toastify component */}
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App

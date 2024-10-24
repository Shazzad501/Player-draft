import './App.css'
import AllPlayers from './Components/AllPlayers/AllPlayers'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import ToggleBtn from './Components/ToggleBtn/ToggleBtn'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Banner section */}
      <Banner></Banner>
      {/* Toggle btn */}
      <ToggleBtn></ToggleBtn>
      {/* All players */}
      <AllPlayers></AllPlayers>
      {/* NewsLatter */}
      <Footer></Footer>
    </>
  )
}

export default App

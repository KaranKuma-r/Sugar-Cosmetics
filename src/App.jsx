
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './cpmponents/nav'
import  {Home} from './cpmponents/home'
import { Footer } from './cpmponents/footer'
import {  EyesPage } from './cpmponents/eyes'
import { CartPage } from './cpmponents/cartpage'
import { useState } from 'react'
import { PhoneOtpForm } from './login'




export function App() {
    const [cart, setCart] = useState([]); // Cart state

    // Function to add items to the cart
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]); // Add product to cart
    };

    return (
      <>
      <NavBar />
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/eyes" element={<EyesPage addToCart={addToCart} />}  />
          <Route path="/cartpage" element={<CartPage cart={cart} />} />
          <Route path="/login" element={<PhoneOtpForm/>} />
        
      </Routes>
      <Footer />
  </>
    )

}



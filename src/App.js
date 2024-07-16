
import Home from "./Components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Test from "./Components/Test";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Browse from "./Components/Browse";
import Details from "./Components/Details";
import Stream from "./Components/Stream";
import "./Components/i18n/i18n"
import Game from "./Components/Game";
import Cart from "./Components/Cart";
import React, {Component, useEffect, useState} from "react";
import Checkout from "./Components/Checkout";
import PaymentSuccess from "./Components/PaymentSuccess";
import Loading from "./Components/Loading";




function App() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 300)
    }, [])
    if (loading) {
        return <Loading/>
    }
  return (

          <BrowserRouter>

              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/test" element={<Test />} />
                  <Route path="/signUp" element={<SignUp /> } />
                  <Route path="/login" element={<Login />} />
                  <Route path="/browse" element={<Browse />} />
                  <Route path="/details/:id" element={<Details />} />
                  <Route path="/streams" element={<Stream /> } />
                  <Route path="/games" element={<Game />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/paymentsuccess" element={<PaymentSuccess />} />

              </Routes>

          </BrowserRouter>

    )
}

export default App;

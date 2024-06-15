
import Home from "./Components/Home";
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Test from "./Components/Test";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Browse from "./Components/Browse";


function App() {
  return (

          <BrowserRouter>

              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/test" element={<Test />} />
                  <Route path="/signUp" element={<SignUp /> } />
                  <Route path="/login" element={<Login />} />
                  <Route path="/browse" element={<Browse />} />
              </Routes>

          </BrowserRouter>

    )
}

export default App;

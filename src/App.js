
import Home from "./Components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Test from "./Components/Test";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Browse from "./Components/Browse";
import Details from "./Components/Details";
import Stream from "./Components/Stream";
import "./Components/i18n/i18n"

function App() {
  return (

          <BrowserRouter>

              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/test" element={<Test />} />
                  <Route path="/signUp" element={<SignUp /> } />
                  <Route path="/login" element={<Login />} />
                  <Route path="/browse" element={<Browse />} />
                  <Route path="/details" element={<Details />} />
                  <Route  path="/streams" element={<Stream /> } />
              </Routes>

          </BrowserRouter>

    )
}

export default App;

import Header from "./Components/Header";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Test from "./Components/Test";

function App() {
  return (
      <div className='container'>
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/test" element={<Test />} />
              </Routes>

          </BrowserRouter>
      </div>
    )
}

export default App;

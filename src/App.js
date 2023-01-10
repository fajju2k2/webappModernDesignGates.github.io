import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BalconyGallery from "./Components/BalconyGallery";
import StairsGallery from "./Components/StairsGallery";
import GatesGallery from "./Components/GatesGallery";
import Contact from "./Components/Contact";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/BalconyGallery" element={<BalconyGallery/>} />
          <Route path="/StairsGallery" element={<StairsGallery/>} />
          <Route path="/GatesGallery" element={<GatesGallery/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

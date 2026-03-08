import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Facilities from "./components/Facilities";
import Rooms from "./pages/Rooms";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

import Admin from "./pages/Admin";
import AdminLogin from "./components/AdminLogin";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />
      <Hero />
      <Facilities />
      <Rooms />
      <Gallery />
      <Contact />

    </div>
  );
}

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin" element={<Admin />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
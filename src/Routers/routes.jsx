import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../Components/NavBar";
import { Home } from "../Pages/Home";
import { Products } from "../Pages/Products";
import { Reports } from "../Pages/Reports";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/Reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

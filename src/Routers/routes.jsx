import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { NavBar } from "../Components/NavBar";

export function MyRoutes() {
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

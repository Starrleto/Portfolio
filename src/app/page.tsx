'use client'
import NavbarComponent from "@/Components/NavbarComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutMe } from "@/Components/AboutMe";
import { ArtGaller } from "@/Components/ArtGaller";
import { Projects } from "@/Components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <BrowserRouter>
      <NavbarComponent></NavbarComponent>

        <Routes>
          <Route path="/" element={<AboutMe/>}></Route>
          <Route path="/ArtGallery" element={<ArtGaller/>}></Route>
          <Route path="/Projects" element={<Projects/>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

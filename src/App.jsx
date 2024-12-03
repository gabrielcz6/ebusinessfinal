import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroHome } from "./Home/components/HeroHome";
import {Login} from "./Login/components/Login";
import { Register } from "./Register/components/Register";
import { Career } from "./Welcome/Career/career";
import './App.css';
import { UploadPage } from "./Welcome/Files/UploadPage";
import { ProyectMenu } from "./Welcome/Proyect/ProyectMenu";
import { InscriptionContent } from "./Welcome/Inscription/InscriptionContent";


export const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HeroHome />}/> 
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/welcomeCareer" element={<Career />}/>
          <Route path="/welcomeUpload" element={<UploadPage />}/>
          <Route path="/proyect" element={<ProyectMenu/>}/>
          <Route path="/inscription" element={<InscriptionContent />} />
        </Routes>
      </div>
    </Router>
  );
};




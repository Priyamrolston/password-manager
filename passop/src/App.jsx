import { useState } from "react";
import './App.css'
import Navbar from './components/Navbar'
import Manager from "./components/Manager";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      

      <main className="flex-1">
        <Manager />
        </main>
        
      <Footer /> 

    </div>
  )
}

export default App
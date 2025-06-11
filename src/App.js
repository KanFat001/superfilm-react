"use client"

import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioHomepage from "./components/PortfolioHomepage"
import AboutPage from "./components/AboutPage"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PortfolioHomepage setCurrentPage={setCurrentPage} />} />
          <Route path="/about" element={<AboutPage setCurrentPage={setCurrentPage} />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App

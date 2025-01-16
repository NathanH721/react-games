import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from './Home.jsx'
import TicTacToe from './components/TicTacToe/TicTacToe.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/TicTacToe" element = {<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

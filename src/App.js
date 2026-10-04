import React from 'react'
import './styles/fonts.css'
import './styles/App.css'
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';

function App() {    
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  )
}

export default App;

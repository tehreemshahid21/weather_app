import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './Pages/Home';
import Cities from './Pages/Cities';
import ForecastPage from './Pages/ForecastPage';

function App() {
  return (
    <BrowserRouter>
      <Routes> {/* Use the 'Switch' component here */}
      <Route path="/" element={<Home/>}/>
      <Route path="/cities" element={<Cities/>}/>
      <Route path="/forecast" element={<ForecastPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

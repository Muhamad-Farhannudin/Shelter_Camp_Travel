import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'assets/scss/style.scss';
import LandingPage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailsPage_';
import Example from 'pages/Example'
import Checkout from 'pages/Checkout'

function App() {
  return <div className='App'>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/properties/:id' element={<DetailsPage />} />
        <Route path='/example' element={<Example />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>

      <ToastContainer></ToastContainer>
    </div>;
}
export default App;

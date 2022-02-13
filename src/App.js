import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import MainLayout from './components/layout/MainLayout/MainLayoutContainer';
import Homepage from './components/views/Homepage/HomepageContainer';
import Portfolio from './components/views/Portfolio/PortfolioContainer';
import About from './components/views/About/AboutContainer';
import Contact from './components/views/Contact/ContactContainer';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Homepage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App ;

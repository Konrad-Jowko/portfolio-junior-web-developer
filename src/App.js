import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import MainLayout from './components/layout/MainLayout/MainLayoutContainer';
import Homepage from './components/views/Homepage/HomepageContainer';
import Portfolio from './components/views/Portfolio/PortfolioContainer';
import Experience from './components/views/Experience/Experience';
import Education from './components/views/Education/Education';
import Contact from './components/views/Contact/Contact';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/education' element={<Education />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App ;

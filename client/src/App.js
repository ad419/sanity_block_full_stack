import React from 'react';

import { About, Footer,  Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import Header from '../src/container/Header/Header'

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;

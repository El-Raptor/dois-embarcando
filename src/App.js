import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';

const App = () => (
  <Router>
    <Header />
    <AppRoutes />
  </Router>
);

export default App;

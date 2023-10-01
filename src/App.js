import React, { Component } from 'react';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './Home';
import ProductDetails from './ProductDetails';
import ProductCard from './ProductCard';
import NotFound from './NotFound';

const App = () => {
  return (
<Router>
      <Container>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/product/:id" Component={ProductDetails} />
          <Route Component={NotFound} />
        </Routes>
      </Container>
    </Router>
  
  );
};

export default App;
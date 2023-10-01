import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    
    <Card className="product-card">
      <Card.Body>
        <Card.Img variant='top' src={product.images[0]} />
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Link to={`/product/${product.id}`} className="btn btn-primary">
          View Details
        </Link>
      </Card.Body>
    </Card>
    
  );
};

export default ProductCard;
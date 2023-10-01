import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import ProductCard from './ProductCard';
import "./ProductDetails.css"

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <ProductCard product={product} />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
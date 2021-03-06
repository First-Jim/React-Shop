import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";
const Product = ({ product = {} }) => {
  return (
    <Card className="my-3 py-3 rounded">
      <Link to={`/products/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.numReviews}条评论`} />
        </Card.Text>
        <Card.Text as="h3">￥{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

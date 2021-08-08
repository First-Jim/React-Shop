import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Card,
  Image,
  ListGroup,
  Button,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import Rating from "../components/Rating";
import Loading from "../components/Loading";
import Message from "../components/Message";
const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, error, loading } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <div>
      <Link className="btn btn-primary my-3" to="/">
        返回主页
      </Link>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger"></Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluis></Image>
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews}条评论`}
                ></Rating>
              </ListGroup.Item>
              <ListGroup.Item>价格: ￥{product.price}</ListGroup.Item>
              <ListGroup.Item>描述: ￥{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>价格:</Col>
                    <Col>
                      <strong>{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>库存:</Col>
                    <Col>{product.countInStock > 0 ? "有货" : "无货"}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>数量</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((item) => (
                          <option key={item + 1} value={item + 1}>
                            {item + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn btn-block"
                    type="button"
                    onClick={addToCartHandler}
                    disabled={product.countInStock === 0}
                  >
                    添加到购物车
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductScreen;

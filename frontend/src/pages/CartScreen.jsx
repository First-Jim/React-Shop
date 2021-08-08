import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { addToCart, removeCartItem } from "../actions/cartActions";
import Message from "../components/Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const CartScreen = ({ history, match, location }) => {
  const productId = match && match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, match, qty]);
  const removeFromCartHandler = (productId) => {
    return dispatch(removeCartItem(productId));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };
  return (
    <Row>
      <Col md={8}>
        <h1>购物车</h1>
        {cartItems.length === 0 ? (
          <Message>
            购物车为空<Link to="/">返回主页</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid="true"
                      randed="true"
                    ></Image>
                  </Col>
                  <Col md={3}>
                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>￥{item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((item) => (
                        <option key={item + 1} value={item + 1}>
                          {item + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col>
                    <Button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>
                共计: (
                {cartItems.reduce((acc, item) => {
                  return acc + item.qty;
                }, 0)}
                )个产品
              </h3>
              <h4>
                ￥
                {cartItems.reduce((acc, item) => {
                  return acc + item.qty * item.price;
                }, 0)}
              </h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn btn-default"
                disabled={cartItems.length === 0}
                onClick={() => checkoutHandler()}
              >
                去支付
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;

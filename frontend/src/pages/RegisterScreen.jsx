import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { register } from "../actions/userActions";
import FormContainer from "../components/FormContainer";

const RegisterScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickName] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      history.push("/login");
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("两次密码不相同");
    } else {
      dispatch(register(nickname, password, email));
    }
  };
  return (
    <FormContainer>
      <h1>注册</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loading />}
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>昵称:</Form.Label>
          <Form.Control
            type=""
            placeholder="请输入昵称"
            value={nickname}
            onChange={(e) => setNickName(e.target.value)}
          ></Form.Control>
          <Form.Label>邮箱地址:</Form.Label>
          <Form.Control
            type="email"
            placeholder="请输入邮箱"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
          <Form.Label>密码:</Form.Label>
          <Form.Control
            type="password"
            placeholder="请输入密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
          <Form.Label>确认密码:</Form.Label>
          <Form.Control
            type="password"
            placeholder="请再次输入密码"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          注册
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          已有账户？
          <Link to={redirect ? `/login?redirect=${redirect}` : `/register`}>
            去登陆
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;

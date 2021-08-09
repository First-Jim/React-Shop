import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { getUserDetails, getUpdateUserDetails } from "../actions/userActions";
import { USER_DETAILS_RESET } from "../constants/userContants";

const ProfileScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickName] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const userUpdateDetails = useSelector((state) => state.userUpdateDetails);
  const userLogin = useSelector((state) => state.userLogin);
  const { success } = userUpdateDetails;
  const { error, loading, user } = userDetails;
  const { userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch({ type: USER_DETAILS_RESET });
        dispatch(getUserDetails("profile"));
      } else {
        setNickName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("两次密码不相同");
    } else {
      dispatch(
        getUpdateUserDetails({ id: user._id, name: nickname, password, email })
      );
    }
  };
  return (
    <Row>
      <Col md={3}>
        <h3>个人资料</h3>
        {success && <Message variant="success">更新成功!</Message>}
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
            更新
          </Button>
        </Form>
      </Col>
      <Col md={6}>
        <h3>我的订单</h3>
      </Col>
    </Row>
  );
};
export default ProfileScreen;

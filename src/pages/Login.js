import { Form, Button } from "react-bootstrap";
import FormWrap from "../components/ui/FormWrap";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { async } from "@firebase/util";

function UserAuthUi() {
  const [userRegisterEmail, setUserRegisterEmail] = useState("");
  const [userRegisterPassword, setUserRegisterPassword] = useState("");

  const [userLoginEmail, setUserLoginEmail] = useState("");
  const [userLoginPassword, setUserLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  async function userRegisterHandler(e) {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        userRegisterEmail,
        
        userRegisterPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function userLoginHandler(e) {
      e.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        userLoginEmail,
        userLoginPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  async function userLogoutHandler() {
    await signOut(auth);
  }

  return (
    <div>
      <FormWrap>
        <Form onSubmit={userRegisterHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => setUserRegisterEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => setUserRegisterPassword(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </FormWrap>
      <hr />
      <FormWrap>
        <Form onSubmit={userLoginHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => setUserLoginEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => setUserLoginPassword(event.target.value)}
            />
          </Form.Group>
          <Button  variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </FormWrap>

      <FormWrap>
        <p>{user?.email}</p>
        <Button onClick={userLogoutHandler}>Logout</Button>
      </FormWrap>
    </div>
  );
}

export default UserAuthUi;

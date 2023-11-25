import { Box, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import firebase from "firebase/compat/app";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const AdminLogin = () => {
  const [password, setPassword] = useState<string | number>("");
  const [email, setEmail] = useState<string | number>("");
  const loginWithEmail = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      alert("login success");
    } catch (error) {
      alert("Authentication Failed" + error.message);
    }
  };
  return (
    <Box minH={"83vh"}>
      <Heading fontSize={"2rem"} textAlign={"center"}>
        Admin Login
      </Heading>
      <Box padding={"30px"}>
        <FormControl display={"flex"} flexDirection="column">
          <FormLabel>Username</FormLabel>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            colorScheme="orange"
            marginY={"23px"}
            onClick={loginWithEmail}
          >
            <Link to="/admin">Login</Link>
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default AdminLogin;

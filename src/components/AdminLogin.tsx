import { Box, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const AdminLogin = () => {
  const masteremail: string | number = "ludangupta";
  const masterpassword: string | number = 2334;
  const [password, setPassword] = useState<string | number>("");
  const [email, setEmail] = useState<string | number>("");
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
          <Input type="email" onChange={(e) => setPassword(e.target.value)} />
          <Button colorScheme="orange" marginY={"23px"}>
            Login
          </Button>
        </FormControl>
        {masteremail && email ? (
          email == masteremail ? (
            <li>login success</li>
          ) : (
            <>Email doesn't Match </>
          )
        ) : (
          <>Please Enter Email</>
        )}
      </Box>
    </Box>
  );
};

export default AdminLogin;

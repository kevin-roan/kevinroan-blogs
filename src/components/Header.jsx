import React from "react";
import { Box, HStack, Spacer, Heading, Button } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColormodeSwitcher";

function Header() {
  return (
    <Box bg="black" color="white" minH={"10vh"} display={"flex"}>
      <HStack color="var(--text-color-light)">
        <Heading fontSize="1.4rem" marginX={"40px"}>
          LudanBlogs
        </Heading>
      </HStack>
      <Spacer />
      <ColorModeSwitcher />
    </Box>
  );
}

export default Header;

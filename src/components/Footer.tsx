import React from "react";
import { Box, HStack, Heading, Spacer } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      minHeight={"8vh"}
      bg={"var(--primary-color)"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <Heading fontSize={"1rem"}>&copy; KevinRoan Blogs - Kevin-Roan</Heading>
      <HStack border={"2px solid white"}>
        <li>insta</li>
        <li>insta</li>
        <li>insta</li>
        <li>insta</li>
      </HStack>
    </Box>
  );
}

export default Footer;

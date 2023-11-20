import { Box, Heading } from "@chakra-ui/react";
import React from "react";

function Home() {
  return (
    <Box>
      <Heading fontStyle={"italic"} textAlign={"center"} fontSize={"sm"}>
        Welcome to my Blogs
      </Heading>
      <Heading textAlign={"center"}>
        Explore <span style={{ color: "blueviolet" }}>Learn</span> & Build
      </Heading>
    </Box>
  );
}

export default Home;

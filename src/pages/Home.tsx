import { Box, Heading, Stack } from "@chakra-ui/react";
import { BlogCard } from "../components";

function Home() {
  return (
    <Box>
      <Heading textAlign={"center"} fontSize={["sm", "lg"]}>
        kevin-roan-blogs
      </Heading>
      <Heading textAlign={"center"} fontSize={["2rem", "4rem"]}>
        Explore <span style={{ color: "blueviolet" }}>Learn</span> Build 🚀
      </Heading>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        padding={"2vmax"}
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Stack>
    </Box>
  );
}

export default Home;

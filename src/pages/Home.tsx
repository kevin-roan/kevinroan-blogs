import { Box, Heading, Stack } from "@chakra-ui/react";
import { BlogCard } from "../components";

function Home() {
  return (
    <Box>
      <Heading fontStyle={"italic"} textAlign={"center"} fontSize={"sm"}>
        Welcome to my Blogs
      </Heading>
      <Heading textAlign={"center"}>
        Explore <span style={{ color: "blueviolet" }}>Learn</span> & Build
      </Heading>
      <Stack
        display={"flex"}
        border={"2px solid white"}
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

import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import MarkdownManager from "./MarkdownManager";
import mdFiled from "../assets/blogs/test.md";

const BlogViewer = () => {
  return (
    <Box>
      <Flex height={"83vh"} justifyContent={"center"}>
        <Stack
          border={"2px solid black"}
          height={"99%"}
          width={"50%"}
          overflow={"auto"}
        >
          <Heading
            colorScheme="light"
            color={"var(--secondary-color)"}
            textAlign={"center"}
            marginY={"20px"}
          >
            Blog Title
          </Heading>
          <Text
            color={"var(--secondary-color)"}
            textTransform={"capitalize"}
            padding={"20px"}
          >
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </Text>
          <MarkdownManager mdFilePath={mdFiled} />
        </Stack>
      </Flex>
    </Box>
  );
};
export default BlogViewer;
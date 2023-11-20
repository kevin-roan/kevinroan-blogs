import { Box, Flex, Button, Container, Heading, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const BlogCard = () => {
  return (
    <Box
      width={"300px"}
      border={"2px solid var(--primary-color)"}
      minHeight={"34vh"}
      position={"relative"}
    >
      <Container>
        <Flex direction={"column"} alignItems={"center"} overflow={"auto"}>
          <Button
            alignSelf={"flex-start"}
            marginY={"10px"}
            height="2rem"
            colorScheme="blue"
          >
            React
          </Button>
          <Heading>Understanding Git and Github</Heading>
          <Text overflow={"hidden"} height="6rem">
            Understanding the difference between Git and Github with examples
            and their main use cases or how they are helpful for the
            developers...
          </Text>
        </Flex>
      </Container>
      <Box
        position={"absolute"}
        bottom={"0"}
        borderTop={"2px solid var(--primary-color)"}
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Button variant={"ghost"} color="blueviolet-600">
          Learn More <FaArrowRight />
        </Button>
        <Button variant={"ghost"} color="blueviolet-100">
          4 Min Read
        </Button>
      </Box>
    </Box>
  );
};

export default BlogCard;

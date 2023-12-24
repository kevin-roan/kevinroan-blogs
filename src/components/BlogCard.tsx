import { Box, Flex, Button, Container, Heading, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  tags: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, tags }) => {
  return (
    <Box
      width={"300px"}
      minHeight={"34vh"}
      position={"relative"}
      borderRadius={"10px"}
      height="50vh"
      overflow={"hidden"}
      border="1px solid #ccc"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
    >
      <Container>
        <Flex direction={"column"} alignItems={"center"} overflow={"auto"}>
          <Button
            alignSelf={"flex-start"}
            marginY={"10px"}
            height="2rem"
            colorScheme="green"
          >
            {tags}
          </Button>
          <Heading
            fontSize={["1.7rem", "1.4rem"]}
            maxWidth={"sm"}
            textTransform={"capitalize"}
          >
            {title}
          </Heading>
          <Text overflow={"hidden"} minHeight="4rem" fontSize={"1rem"}>
            {description}
          </Text>
        </Flex>
      </Container>
      <Box
        position={"absolute"}
        bottom={"0"}
        borderTop={"2px solid var(--secondary-color)"}
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        bg="transparent"
        backdropFilter={"blur(2px)"}
      >
        <Button variant={"ghost"} color="blueviolet-600" disabled={true}>
          Learn More <FaArrowRight />
        </Button>
      </Box>
    </Box>
  );
};

export default BlogCard;

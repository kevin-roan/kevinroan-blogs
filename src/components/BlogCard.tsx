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
      border={"2px solid var(--secondary-color)"}
      minHeight={"34vh"}
      position={"relative"}
      borderRadius={"10px"}
      height="50vh"
      overflow={"hidden"}
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
        <Text display="flex" alignItems={"center"} paddingX={"10px"}>
          4 Min Read
        </Text>
      </Box>
    </Box>
  );
};

export default BlogCard;

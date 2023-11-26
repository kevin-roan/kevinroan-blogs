import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import MarkdownManager from "./MarkdownManager";
import mdFiled from "../assets/blogs/test.md";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../Helpers/firebaseHelper";

const BlogViewer = () => {
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        querySnapshot.forEach((doc) => {
          console.log(
            `${doc.id} Ludan=> ${doc.data().language}, Title => ${
              doc.data().blog_title
            }`,
          );
        });
      } catch (error) {
        console.error("Error", error);
      }
    };
    getBlogs();
  }, []);
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

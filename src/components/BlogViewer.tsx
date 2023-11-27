import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import MarkdownManager from "./MarkdownManager";
import mdFiled from "../assets/blogs/test.md";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { db } from "../Helpers/firebaseHelper";
import { useParams } from "react-router-dom";

const BlogViewer = () => {
  const [blogdata, setBlogdata] = useState({ title: "", description: "" });
  const [blogFileUrl, setBlogFileUrl] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getBlogsWithId = async () => {
      try {
        const docRef = doc(db, "blogs", id);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          setBlogdata({
            title: docSnapshot.data().title,
            description: docSnapshot.data().description,
          });
        } else {
          console.log("Erroi mathining id");
        }
      } catch (err) {
        console.error("Error Fetching Data", err);
      }
      // try {
      //   const q = query(collection(db, "blogs"), where("id", "==", id));
      //   const querySnapshot = await getDocs(q);
      //   querySnapshot.forEach((doc) => {
      //     setBlogdata({
      //       title: doc.data().title,
      //       description: doc.data().description,
      //     });
      //   });
      // } catch (error) {
      //   console.error("Error", error);
      // }
    };
    const getBlogFiles = async () => {
      const storage = getStorage();
      const blogFileRef = ref(
        storage,
        "blogs/Arch Install UEFI with DualBoot.md",
      );
      const url = await getDownloadURL(blogFileRef);
      setBlogFileUrl(url);
      console.log("markdown file url", url);
    };

    getBlogsWithId();
    getBlogFiles();
  }, [id]);
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
            {blogdata.title}
          </Heading>
          <Text
            color={"var(--secondary-color)"}
            textTransform={"capitalize"}
            padding={"20px"}
          >
            {blogdata.description}
          </Text>
          {blogFileUrl ? (
            <MarkdownManager mdFilePath={blogFileUrl} />
          ) : (
            <p>Loading Markdown File...</p>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};
export default BlogViewer;

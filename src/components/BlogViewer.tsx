import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import MarkdownManager from "./MarkdownManager";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { db } from "../Helpers/firebaseHelper";
import { useParams } from "react-router-dom";

const BlogViewer = () => {
  const [blogdata, setBlogdata] = useState({ title: "", description: "" });
  const [blogFileUrl, setBlogFileUrl] = useState<string | null>(null);
  const { id } = useParams();
  useEffect(() => {
    const getBlogsWithId = async () => {
      try {
        if (db && id) {
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
        }
      } catch (err) {
        console.error("Error Fetching Data", err);
      }
    };
    const fetchMarkdown = async () => {
      const storage = getStorage();
      const blogFileRef = ref(storage, `blogs/${id}/markdownfile`);
      const url = await getDownloadURL(blogFileRef);
      setBlogFileUrl(url);
    };

    getBlogsWithId();
    fetchMarkdown();
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

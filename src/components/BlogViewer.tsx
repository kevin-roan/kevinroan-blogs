import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import MarkdownManager from "./MarkdownManager";
import { BarLoader } from "react-spinners";
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
      <Flex justifyContent={"center"}>
        <Stack
          borderRadius={"10px"}
          padding="40px"
          width={"50vmax"}
          overflowX={"auto"}
        >
          <Heading fontSize={"2rem"} color="#2BB98F" textAlign={"center"}>
            {blogdata.title}
          </Heading>
          {blogdata.description ? (
            <Text
              color={"var(--secondary-color)"}
              border="2px solid pink"
              padding="10px"
              borderRadius={"10px"}
            >
              {blogdata.description}
            </Text>
          ) : null}
          {blogFileUrl ? (
            <MarkdownManager mdFilePath={blogFileUrl} />
          ) : (
            <>
              <Flex alignItems={"center"} justifyContent={"center"}>
                <BarLoader color="#36d7b7" />
              </Flex>
            </>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};
export default BlogViewer;

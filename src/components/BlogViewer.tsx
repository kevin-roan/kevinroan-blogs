import { Box, Flex, Stack } from "@chakra-ui/react";
import MarkdownManager from "./MarkdownManager";
import { BarLoader } from "react-spinners";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogViewer = () => {
  const [blogFileUrl, setBlogFileUrl] = useState<string | null>(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchMarkdown = async () => {
      const storage = getStorage();
      const blogFileRef = ref(storage, `blogs/${id}/markdownfile`);
      const url = await getDownloadURL(blogFileRef);
      setBlogFileUrl(url);
    };

    fetchMarkdown();
  }, [id]);
  return (
    <Box>
      <Flex justifyContent={"center"}>
        <Stack
          borderRadius={"10px"}
          padding="20px"
          width={"50vmax"}
          height={"100vmax"}
          overflowX={"auto"}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {blogFileUrl ? (
            <MarkdownManager mdFilePath={blogFileUrl} />
          ) : (
            <>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                height={"83vh"}
              >
                <BarLoader color="blueviolet" />
              </Box>
            </>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};
export default BlogViewer;

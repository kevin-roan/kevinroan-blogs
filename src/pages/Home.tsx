import { Box, Heading, Stack } from "@chakra-ui/react";
import { BlogCard } from "../components";
import { db } from "../Helpers/firebaseHelper";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

function Home() {
  const [blogdata, setBlogData] = useState([]);
  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const newBlogData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // append all the data to the array
          newBlogData.push({
            id: doc.id,
            language: data.language,
            title: data.title,
            tags: data.tags,
            description: data.description,
          });
        });
        setBlogData(newBlogData);
      } catch (e) {
        console.error("Error", e);
      }
    };
    fetchDocs();
  }, []);

  return (
    <Box>
      <Heading textAlign={"center"} fontSize={["sm", "lg"]}>
        kevin-roan-blogs
      </Heading>
      <Heading textAlign={"center"} fontSize={["2rem", "4rem"]}>
        Explore <span style={{ color: "blueviolet" }}>Learn</span> Build 🚀
      </Heading>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        padding={"2vmax"}
      >
        {blogdata &&
          blogdata.map((blog, index) => (
            <BlogCard
              title={blog.title}
              description={blog.description}
              id={blog.id}
              tags={blog.tags}
            />
          ))}
      </Stack>
    </Box>
  );
}

export default Home;

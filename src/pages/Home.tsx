import { Box, Heading, Stack } from "@chakra-ui/react";
import { BlogCard } from "../components";
import { db } from "../Helpers/firebaseHelper";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Blog {
  id: string;
  language: string;
  title: string;
  tags: string;
  description: string;
}

function Home() {
  const [blogdata, setBlogData] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const newBlogData: Blog[] = [];
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
            <Link to={`/viewblog/${blog.id}`}>
              <BlogCard
                key={index}
                title={blog.title}
                description={blog.description}
                id={blog.id}
                tags={blog.tags}
              />
            </Link>
          ))}
      </Stack>
    </Box>
  );
}

export default Home;

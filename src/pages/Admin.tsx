import {
  Box,
  FormControl,
  Button,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Helpers/firebaseHelper";

const Admin = () => {
  const addBlog = async () => {
    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title: title,
        description: description,
        tags: tag,
      });
      console.log("Blog added succesfully", docRef.id);
    } catch (error) {
      console.error("Failed to add Blog", error);
    }
  };
  const [title, setTitle] = useState<string | number>("");
  const [tag, setTag] = useState<string | number>("");
  const [description, setDescription] = useState<string | number>("");
  return (
    <>
      <Box height={"83vh"}>
        <Heading
          fontSize={"2rem"}
          textTransform={"capitalize"}
          textAlign={"center"}
          color="darkslategray"
        >
          Drag and Drop Markdown file here
        </Heading>
        <Droppable />
        <FormControl
          display={"flex"}
          flexDirection={"column"}
          gap="10px"
          alignItems={"center"}
          padding={"2vmax"}
          onSubmit={(e) => e.preventDefault}
        >
          <FormLabel alignSelf={"flex-start"}>Blog Title</FormLabel>
          <Input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="How to upload markdown file in react..."
            value={title}
          />
          <FormLabel alignSelf={"flex-start"}>Tags</FormLabel>
          <Input
            type="text"
            placeholder="Tags"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <FormLabel alignSelf={"flex-start"}>Description</FormLabel>
          <Input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button colorScheme="orange" onClick={addBlog}>
            Upload
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Admin;

function Droppable() {
  const { setNodeRef, isOver } = useDroppable({
    id: "unique-id",
  });

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const firstFile = files[0];
      console.log("Dropped file:", firstFile);
      window.confirm("file uploaded succesfully");
    } else {
      console.log("Error Getting file");
    }
  };

  return (
    <div
      ref={(node) => {
        setNodeRef(node);
        node && node.addEventListener("drop", handleDrop);
        node && node.addEventListener("dragover", (e) => e.preventDefault());
      }}
      style={{
        border: `2px dashed ${isOver ? "green" : "darkslategray"}`,
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        backgroundColor: isOver ? "lightgreen" : "white",
        cursor: "pointer",
        color: "black",
        margin: "40px 100px",
      }}
    >
      Drop your Markdown file here
    </div>
  );
}

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

function Droppable() {
  const { setNodeRef, isOver } = useDroppable({
    id: "unique-id",
  });

  const handleDrop = (event) => {
    event.preventDefault();

    const files = event.dataTransfer.files;

    if (files.length > 0) {
      const firstFile = files[0];
      console.log("Dropped file:", firstFile);
      window.confirm("file uploaded succesfully");
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

const Admin = () => {
  const [title, setTitle] = useState<string | number>("");
  return (
    <Box height={"83vh"}>
      <Heading
        fontSize={"2rem"}
        textTransform={"capitalize"}
        textAlign={"center"}
        color="darkslategray"
        colorScheme="light"
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
        <FormLabel alignSelf={"flex-start"}>Language</FormLabel>
        <Input type="text" placeholder="React" />
        <Button colorScheme="orange">Upload</Button>
      </FormControl>
    </Box>
  );
};

export default Admin;

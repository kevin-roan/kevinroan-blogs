import { Box, HStack, Heading } from "@chakra-ui/react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Box
      minHeight={"8vh"}
      bg={"var(--primary-color)"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <Heading fontSize={"1rem"}>&copy; Blogs - Kevin Roan</Heading>
      <HStack>
        <a href="https://github.com/kevin-roan/">
          <AiFillGithub />
        </a>
        <a href="https://x.com/kevinroan_/">
          <AiOutlineTwitter />
        </a>
        <a href="https://instagram.com/kevinroan_/">
          <AiFillInstagram />
        </a>
        <a href="https://linkedin.com/in/kevinroan/">
          <FaLinkedinIn />
        </a>
      </HStack>
    </Box>
  );
}

export default Footer;

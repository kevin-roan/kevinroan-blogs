import { Box, HStack, Heading } from "@chakra-ui/react";
import { FaCopyright } from "react-icons/fa";
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
      bgColor={"var(--primary-color)"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <Heading
        fontSize={"1rem"}
        display={"flex"}
        alignItems={"center"}
        gap={"5px"}
        colorScheme="white"
      >
        <FaCopyright /> Blogs - Kevin Roan
      </Heading>
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

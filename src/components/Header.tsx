import { Box, HStack, Text, Spacer, Heading, Flex } from "@chakra-ui/react";
import { FaTerminal } from "react-icons/fa";
import { ColorModeSwitcher } from "../ColormodeSwitcher";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box
      minH={"8vh"}
      display={"flex"}
      marginBottom={"10px"}
      position={"sticky"}
      top="0"
      zIndex={"9999"}
      borderBottom={"1px"}
      background={"transparent"}
      backdropFilter={"blur(10px)"}
    >
      <HStack color="var(--text-color-light)">
        <Heading fontSize="1.4rem" marginX={"40px"}>
          <Flex alignItems={"center"}>
            <FaTerminal />{" "}
            <Text
              fontFamily={"sans-serif"}
              paddingX={"20px"}
              colorScheme="white"
            >
              <Link to="/">Latest</Link>
            </Text>
          </Flex>
        </Heading>
      </HStack>
      <Spacer />
      <ColorModeSwitcher />
    </Box>
  );
}

export default Header;

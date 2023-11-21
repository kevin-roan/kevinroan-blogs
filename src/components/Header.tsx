import { Box, HStack, Text, Spacer, Heading, Flex } from "@chakra-ui/react";
import { FaTerminal } from "react-icons/fa";
import { ColorModeSwitcher } from "../ColormodeSwitcher";

function Header() {
  return (
    <Box
      bg={"var(--primary-color)"}
      color="white"
      minH={"8vh"}
      display={"flex"}
      marginBottom={"10px"}
      position={"sticky"}
      top="0"
      zIndex={"9999"}
    >
      <HStack color="var(--text-color-light)">
        <Heading fontSize="1.4rem" marginX={"40px"}>
          <Flex alignItems={"center"}>
            <FaTerminal />{" "}
            <Text fontFamily={"sans-serif"} paddingX={"20px"}>
              Latest
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

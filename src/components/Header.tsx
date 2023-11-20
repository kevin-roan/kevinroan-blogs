import { Box, HStack, Spacer, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColormodeSwitcher";

function Header() {
  return (
    <Box
      bg={"var(--primary-color)"}
      color="white"
      minH={"10vh"}
      display={"flex"}
      borderBottom={"1px solid white"}
      marginBottom={"10px"}
    >
      <HStack color="var(--text-color-light)">
        <Heading fontSize="1.4rem" marginX={"40px"}>
          LudanBlogs
        </Heading>
      </HStack>
      <Spacer />
      <ColorModeSwitcher />
    </Box>
  );
}

export default Header;

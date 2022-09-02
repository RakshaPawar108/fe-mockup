import { Box, Flex, Text } from "@chakra-ui/react";
import "./Header.css";
import { edenLogo } from "../../assets/";

export const Header = () => {
  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      padding="1.5rem"
      margin="0.5rem, 0rem"
    >
      <Box>
        <img src={edenLogo} alt="Eden Logo" className="logo-image" />
      </Box>
      <Text fontSize="2rem" fontWeight="700" className="header-text">
        Eden
      </Text>
    </Flex>
  );
};

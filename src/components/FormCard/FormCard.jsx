import { Flex, Image, Text } from "@chakra-ui/react";

export const FormCard = ({ icon, cardHeading, cardDescription }) => {
  return (
    <Flex
      direction="column"
      align="flex-start"
      flex={1}
      gap="1.2rem"
      cursor="pointer"
      borderRadius="10px"
      borderColor="#664de4"
      borderWidth="2px"
      padding="1.5rem"
    >
      <Image src={icon} height="1.5rem" width="1.5rem" />
      <Text fontSize="1.2rem" fontWeight="500">
        {cardHeading}
      </Text>
      <Text
        fontSize="1rem"
        fontWeight="400"
        color="#8b97b1"
        whiteSpace="wrap"
        align="left"
      >
        {cardDescription}
      </Text>
    </Flex>
  );
};

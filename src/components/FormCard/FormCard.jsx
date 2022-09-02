import { Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

export const FormCard = ({
  icon,
  cardHeading,
  cardDescription,
  dataFromCard,
  isActiveCard,
}) => {
  const [isActive, setIsActive] = useState(isActiveCard);
  const clickHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <Flex
      direction="column"
      align="flex-start"
      flex={1}
      gap="1.2rem"
      cursor="pointer"
      borderRadius="10px"
      borderColor={isActive ? `#664de4` : `#dedede`}
      borderWidth="2px"
      padding="1.5rem"
      onClick={clickHandler}
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

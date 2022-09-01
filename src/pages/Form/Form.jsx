import "./Form.css";
import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { FormButton, FormInput } from "../../components";

export const Form = () => {
  return (
    <Container width="50rem" marginTop="1rem">
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="1.5rem"
        className="heading-container"
      >
        <Heading as="h2">I am the main heading</Heading>
        <Text fontSize="1rem" fontWeight="500" className="sub-heading">
          I am the sub heading
        </Text>
      </Flex>

      <Flex
        direction="column"
        gap="0.5rem"
        marginTop="1.5rem"
        className="form-container"
      >
        <FormInput />
      </Flex>
      <FormButton />
    </Container>
  );
};

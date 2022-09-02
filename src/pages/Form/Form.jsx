import "./Form.css";
import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { FormButton, FormInput } from "../../components";
import { useState } from "react";
import { FormData } from "./Form.data";

export const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const clickHandler = () => {
    if (currentStep + 1 === FormData.length) return;
    setCurrentStep((prev) => prev + 1);
  };
  return (
    <Container width="100%" marginTop="1rem">
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="1.5rem"
        className="heading-container"
      >
        <Heading as="h2" whiteSpace="nowrap">
          {FormData[currentStep].heading}
        </Heading>
        <Text fontSize="1rem" fontWeight="500" className="sub-heading">
          {FormData[currentStep].subHeading}
        </Text>
      </Flex>

      <Flex
        direction="column"
        gap="0.5rem"
        marginTop="1.5rem"
        className="form-container"
      >
        <FormInput currentStep={currentStep} />
      </Flex>
      <FormButton incrementStep={clickHandler} />
    </Container>
  );
};

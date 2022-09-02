import "./Form.css";
import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { FormButton, FormCard, FormInput } from "../../components";
import { useState } from "react";
import { FormData } from "./Form.data";
import { checkMarkImg, userOne, usersMany } from "../../assets";

export const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const clickHandler = () => {
    if (currentStep + 1 === FormData.length) return;
    setCurrentStep((prev) => prev + 1);
  };
  return (
    <Container width="40rem" marginTop="1rem">
      {currentStep + 1 === FormData.length && (
        <Flex direction="column" align="center" justify="center">
          <img src={checkMarkImg} alt="check-mark" />
        </Flex>
      )}
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

      {currentStep + 1 === 3 ? (
        <Flex
          direction="row"
          gap="0.5rem"
          marginTop="1.5rem"
          className="form-container"
        >
          <FormCard
            icon={userOne}
            cardHeading="For myself"
            cardDescription="Write better. Think more clearly. Stay organized."
          />
          <FormCard
            icon={usersMany}
            cardHeading="With my team"
            cardDescription="Wikis, docs, tasks & projects, all in one place."
          />
        </Flex>
      ) : (
        <Flex
          direction="column"
          gap="0.5rem"
          marginTop="1.5rem"
          className="form-container"
        >
          <FormInput currentStep={currentStep} />
        </Flex>
      )}

      <FormButton
        btnText={
          currentStep + 1 === FormData.length
            ? "Launch Eden"
            : "Create Workspace"
        }
        incrementStep={clickHandler}
      />
    </Container>
  );
};

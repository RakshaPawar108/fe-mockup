import "./FormButton.css";
import { Button } from "@chakra-ui/react";

export const FormButton = ({ incrementStep, btnText }) => {
  const buttonBgColor = "#664de4";
  return (
    <Button
      variant="solid"
      className="form-btn"
      backgroundColor={buttonBgColor}
      onClick={incrementStep}
    >
      {btnText}
    </Button>
  );
};

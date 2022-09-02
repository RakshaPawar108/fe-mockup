import "./FormProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Flex } from "@chakra-ui/react";

export const FormProgressBar = ({ percent }) => {
  return (
    <Flex width="100%">
      <ProgressBar
        filledBackground="#664de4"
        height="20px"
        percent={percent}
        hasStepZero={false}
      >
        <Step transition="rotate">
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
      </ProgressBar>
    </Flex>
  );
};

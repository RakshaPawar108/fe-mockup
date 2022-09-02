import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  chakra,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useState } from "react";

export const FormInput = ({ currentStep, dataFromInput }) => {
  const borderColor = "#664de4";
  const placeholderColor = "#8b97b1";
  const labelPadding = "0.5rem";
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceURL, setWorkspaceURL] = useState("");

  const changeHandle = (e) => {
    setDisplayName(e.target.value);
    dataFromInput(e.target.value);
  };

  return (
    <Flex gap="2rem" direction="column">
      {
        {
          1: (
            <>
              <FormControl>
                <FormLabel padding={labelPadding}>Full Name</FormLabel>
                <Input
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                  variant="outline"
                  placeholder="Steve Jobs"
                  focusBorderColor={borderColor}
                  _placeholder={{ color: placeholderColor }}
                />
              </FormControl>

              <FormControl>
                <FormLabel padding={labelPadding}>Display Name</FormLabel>
                <Input
                  onChange={changeHandle}
                  value={displayName}
                  variant="outline"
                  placeholder="Steve"
                  focusBorderColor={borderColor}
                  _placeholder={{ color: placeholderColor }}
                />
              </FormControl>
            </>
          ),
          2: (
            <>
              <FormControl>
                <FormLabel padding={labelPadding}>Workspace Name</FormLabel>
                <Input
                  onChange={(e) => setWorkspaceName(e.target.value)}
                  value={workspaceName}
                  variant="outline"
                  placeholder="Eden"
                  focusBorderColor={borderColor}
                  _placeholder={{ color: placeholderColor }}
                />
              </FormControl>

              <FormControl>
                <FormLabel padding={labelPadding}>
                  Workspace URL{"  "}
                  <chakra.span color="#cecece">(optional)</chakra.span>
                </FormLabel>
                <InputGroup>
                  <InputLeftAddon children="www.eden.com/" opacity={0.7} />
                  <Input
                    onChange={(e) => setWorkspaceURL(e.target.value)}
                    value={workspaceURL}
                    placeholder="Example"
                    focusBorderColor={borderColor}
                    _placeholder={{ color: placeholderColor }}
                  />
                </InputGroup>
              </FormControl>
            </>
          ),
        }[currentStep + 1]
      }
    </Flex>
  );
};

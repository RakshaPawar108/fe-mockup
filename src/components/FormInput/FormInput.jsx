import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  chakra,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

export const FormInput = ({ currentStep }) => {
  const borderColor = "#664de4";
  const placeholderColor = "#8b97b1";
  const labelPadding = "0.5rem";

  return (
    <Flex gap="2rem" direction="column">
      {
        {
          1: (
            <>
              <FormControl>
                <FormLabel padding={labelPadding}>Full Name</FormLabel>
                <Input
                  variant="outline"
                  placeholder="Steve Jobs"
                  focusBorderColor={borderColor}
                  _placeholder={{ color: placeholderColor }}
                />
              </FormControl>

              <FormControl>
                <FormLabel padding={labelPadding}>Display Name</FormLabel>
                <Input
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

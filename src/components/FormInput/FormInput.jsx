import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

export const FormInput = () => {
  const borderColor = "#664de4";
  const placeholderColor = '#8b97b1'
  const labelPadding = "0.5rem";
  return (
    <Flex gap="2rem" direction="column">
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
    </Flex>
  );
};

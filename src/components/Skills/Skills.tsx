import { Box, Heading, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Badge } from '@chakra-ui/react';
import { SKILLS } from './Skills';
const Skills = (): React.ReactElement => {
  const backgroundColor = useColorModeValue('#1a202c', '#ffffff');
  const divColor = useColorModeValue('#ffffff', '#1a202c');

  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      backgroundColor={backgroundColor}
      py="4"
    >
      <Box>
        <Heading
          as="h3"
          size="xl"
          marginBottom="16px"
          m="auto"
          color={divColor}
        >
          Skills
        </Heading>
      </Box>
      <Flex justifyContent="space-around" flexWrap="wrap" maxW="800px" m="auto">
        {SKILLS.map((skill, index) => (
          <Badge fontSize="0.8em" m="4" key={index}>
            {' '}
            {skill}
          </Badge>
        ))}
      </Flex>
    </Box>
  );
};

export default Skills;

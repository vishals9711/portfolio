import { Box, Heading, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Badge } from '@chakra-ui/react';
import { SKILLS_ARRAY } from './SkillsData';
const Skills = (): React.ReactElement => {
  const backgroundColor = useColorModeValue('#1a202c', '#ffffff');
  const divColor = useColorModeValue('#ffffff', '#1a202c');

  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      backgroundColor={backgroundColor}
      py="8"
      minH="400px"
      id="skills"
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
        {SKILLS_ARRAY.map((skill, index) => (
          <Badge
            fontSize="0.8em"
            m="4"
            key={index}
            color={divColor}
            backgroundColor={backgroundColor}
          >
            {' '}
            {skill}
          </Badge>
        ))}
      </Flex>
    </Box>
  );
};

export default Skills;

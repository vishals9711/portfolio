import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
const CentreDiv = (): React.ReactElement => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const backgroundColor = useColorModeValue('#1a202c', '#ffffff');
  const divColor = useColorModeValue('#ffffff', '#1a202c');
  return (
    <Box w="100%" h="800px" display="flex" backgroundColor={backgroundColor}>
      <Box
        w="200px"
        h="200px"
        p={4}
        color={linkColor}
        backgroundColor={divColor}
        margin="auto"
        display="flex"
      >
        <Text display="flex" alignItems="center" margin="auto">
          Here is a centered div.
        </Text>
      </Box>
    </Box>
  );
};

export default CentreDiv;

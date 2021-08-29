import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
const CentreDiv = (): React.ReactElement => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const backgroundColor = useColorModeValue('#1a202c', '#ffffff');
  const divColor = useColorModeValue('#ffffff', '#1a202c');
  return (
    <Box w="100%" h="600px" display="flex" backgroundColor={backgroundColor}>
      <Box
        w="200px"
        h="200px"
        p={4}
        color={linkColor}
        backgroundColor={divColor}
        margin="auto"
        display="flex"
        transition={
          '3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12)'
        }
        _hover={{ transform: 'scale(1.1)' }}
      >
        <Text display="flex" alignItems="center" margin="auto">
          Here is a centered div.
        </Text>
      </Box>
    </Box>
  );
};

export default CentreDiv;

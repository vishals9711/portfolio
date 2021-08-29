import { Box, ChakraProvider, theme, VStack } from '@chakra-ui/react';
import * as React from 'react';
import CentreDiv from '../components/CentreDiv/CentreDiv';
import Contact from '../components/Contact/Contact';
import Introduction from '../components/Introduction/Introduction';
import NavBar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

export const App = (): React.ReactElement => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <NavBar />
      {/* <Grid p={3}> */}
      <VStack spacing={8}>
        <Introduction />
        <CentreDiv />
        <Projects />
        <Skills />
        <Contact />
      </VStack>
      {/* </Grid> */}
    </Box>
  </ChakraProvider>
);

import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Introduction = (): React.ReactElement => {
  return (
    <Box>
      <Heading marginY="16px" as="h1" size="3xl">
        Hi, I am Vishal Sharma.
      </Heading>
      <Heading as="h3" size="xl" marginBottom="16px">
        A Full Stack Engineer.
      </Heading>
      <Container maxW="container.sm">
        <Text>
          {`Experienced Senior Software Engineer with a demonstrated history of
          working in the information technology and services industry. Currently
          enrolled for the Master's program in Computer Science at San Francisco
          State University.`}
        </Text>
      </Container>
    </Box>
  );
};

export default Introduction;

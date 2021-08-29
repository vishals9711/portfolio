import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { LogoGithubIcon, LogoLinkedinIcon, MailIcon } from 'chakra-ui-ionicons';
import React from 'react';
import resume from './Vishal_Ramanand_Sharma_Resume.pdf';

const Contact = (): React.ReactElement => {
  const backgroundColor = useColorModeValue('#ffffff', '#1a202c');
  const divColor = useColorModeValue('#1a202c', '#ffffff');

  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      backgroundColor={backgroundColor}
      py="4"
      mt="0"
      minHeight="400px"
      id="contact"
    >
      <Box>
        <Heading
          as="h3"
          size="xl"
          marginBottom="16px"
          m="auto"
          color={divColor}
        >
          Contact
        </Heading>
      </Box>
      <Flex
        flexWrap="wrap"
        maxW="600px"
        my="8"
        mx="auto"
        justifyContent="space-around"
      >
        <Link href="mailto:vishalsharma1907@gmail.com" mx="4">
          <MailIcon w={16} h={16} />
        </Link>
        <Link href="https://github.com/vishals9711" mx="4" target="_blank">
          <LogoGithubIcon w={16} h={16} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/vishals9711/"
          mx="4"
          target="_blank"
        >
          <LogoLinkedinIcon w={16} h={16} />
        </Link>
      </Flex>
      <Flex justifyContent="center">
        <Link href={resume} target="_blank">
          <Button size="lg">Resume</Button>
        </Link>
      </Flex>

      <Flex justifyContent="center" my="16">
        <Heading as="h3" size="lg">
          Created by Vishal Sharma
        </Heading>
      </Flex>
    </Box>
  );
};

export default Contact;
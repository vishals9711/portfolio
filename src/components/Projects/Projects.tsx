import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECT_DATA } from './ProjectsData';
import { Fade } from 'react-reveal';

const Projects = (): React.ReactElement => {
  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      id="projects"
      mt="0"
      pt="8"
    >
      <Box>
        <Heading as="h3" size="xl" marginBottom="32px" mx="auto">
          Projects
        </Heading>
      </Box>
      <Flex justifyContent="space-around" flexWrap="wrap">
        {PROJECT_DATA.map((data, index) => (
          <Fade key={index} collapse bottom delay={index * 500}>
            <ProjectCard {...data} key={index} />
          </Fade>
        ))}
      </Flex>
    </Box>
  );
};

export default Projects;

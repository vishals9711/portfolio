import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECT_DATA } from './ProjectsData';

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
          <ProjectCard {...data} key={index} />
        ))}
      </Flex>
    </Box>
  );
};

export default Projects;

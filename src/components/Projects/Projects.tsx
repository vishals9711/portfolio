import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECT_DATA } from './ProjectsData';

const Projects = (): React.ReactElement => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const backgroundColor = useColorModeValue('#1a202c', '#ffffff');
    const divColor = useColorModeValue('#ffffff', '#1a202c');
    return (
        <Box w="100%" display='flex' flexDirection='column'>
            <Box>
                <Heading as='h3' size='xl' marginBottom='16px' m='auto'>Projects</Heading>
            </Box>
            <Flex justifyContent='space-around' flexWrap='wrap'>
                {PROJECT_DATA.map(data=> <ProjectCard {...data} />)}
            </Flex>
        </Box>
    )
}

export default Projects

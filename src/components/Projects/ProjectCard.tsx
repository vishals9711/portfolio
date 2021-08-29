import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
    Badge, Box,
    Center, Heading, Link, Stack, Text, useColorModeValue
} from '@chakra-ui/react';
import { LogoGithubIcon } from 'chakra-ui-ionicons';
import React from 'react';
export interface IProjectCard {
    projectName: string;
    projectDesc: string;
    languages: Array<string>;
    githubLink: string;
    hostedLink?: string;
}

const ProjectCard = (props: IProjectCard): React.ReactElement => {
    const { githubLink, hostedLink, languages, projectDesc, projectName } = props;
    const bgBadge = useColorModeValue('gray.50', 'gray.800');
    const customBadge = (language: string) => <><Badge
        px={2}
        py={1}
        m='5'
        bg={bgBadge}
        fontWeight={'400'}>
        {language}
    </Badge></>;

    return (
        <Center py={6}>
            <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'body'} height="56px">
                    {projectName}
                </Heading>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}
                    marginTop='1'
                    fontSize='medium'
                    height="144px">
                    {projectDesc}
                </Text>

                <Stack align={'center'} justify={'center'} direction={'row'} mt={1} flexWrap='wrap' height="92px">
                    {languages.map(lang => customBadge(lang))}
                </Stack>

                <Stack mt={8} direction={'row'} spacing={4} justifyContent='center'>
                    <Link href={githubLink} isExternal>                         <LogoGithubIcon w={7} h={7} />
                    </Link>
                    {hostedLink && <Link href={hostedLink} isExternal>
                        <ExternalLinkIcon w={7} h={7} /></Link>}



                </Stack>
            </Box>
        </Center>
    );
};

export default ProjectCard;
import NextLink from 'next/link'
import {
    Container,
    Button,
    Box,
    Heading,
    Image,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                mb={6}
                align="center"
            >
                Hello, I&apos;m a Computer Science student from Cincinnati!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Jake D'Amico
                    </Heading>
                    <p>Digital Craftsman ( Developer / Designer )</p>
                </Box>
                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="150px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/jake.jpeg"
                        alt="Profile Image" />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Jake is an aspiring software engineer based in
                    Ohio with a passion for web development and application engineering.
                    He also takes pride in his work in other interests such as launching products, finance and systematic trading,
                    as well as brand design. While he's an engineer and problem solver at heart, his other skills in business and design help
                    tremendously in being a well-rounded craftsman.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2001</BioYear>
                    Born and raised just south of Dayton, OH.
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Graduates from Springboro High School.
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Enrolls in the Computer Science program at the University of Cincinnati.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Works first internship at Siemens developing the Solutionlink website, spring and fall semesters.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    Music, Digital Design, Fiance, Lifting Weights, and Web Development
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page;
import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbtestproject1 from '../public/images/works/testproject1.png'
import thumbtestproject2 from '../public/images/works/testproject2.jpg'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="testproject1" title="Test Project 1" thumbnail={thumbtestproject1}>
                            First test project
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="testproject2" title="Test Project 2" thumbnail={thumbtestproject2}>
                            Second test project
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works
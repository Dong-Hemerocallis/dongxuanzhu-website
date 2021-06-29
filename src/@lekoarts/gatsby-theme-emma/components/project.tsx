/** @jsx jsx */
import { animated, useSpring, config } from "react-spring"
import { Container, jsx, Flex, Heading, Grid} from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Layout from "/home/dong_hemerocallis/projects/dongxuan_zhu/node_modules/@lekoarts/gatsby-theme-emma/src/components/layout"
import SEO from "/home/dong_hemerocallis/projects/dongxuan_zhu/node_modules/@lekoarts/gatsby-theme-emma/src/components/seo"
import Hero from "/home/dong_hemerocallis/projects/dongxuan_zhu/node_modules/@lekoarts/gatsby-theme-emma/src/components/hero"
import ProjectInfo from "./project-info"


type ProjectProps = {
  data: {
    project: {
      body: string
      excerpt: string
      client: string
      color: string
      date: string
      description:string
      service: string
      slug: string
      title: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
          resize: {
            src: string
          }
        }
      }
    }
  }
  [key: string]: any
}

const Project = ({ data: { project } }: ProjectProps) => {
  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, -30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const infoProps = useSpring({ config: config.slow, delay: 500, from: { opacity: 0 }, to: { opacity: 1 } })
  const contentProps = useSpring({ config: config.slow, delay: 1000, from: { opacity: 0 }, to: { opacity: 1 } })


  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.excerpt}
        pathname={project.slug}
        image={project.cover.childImageSharp.resize!.src}
      >
        <meta name="twitter:label1" value="Client" />
        <meta name="twitter:label2" value="Date" />
        <meta name="twitter:data1" value={project.client} />
        <meta name="twitter:data2" value={project.date} />
      </SEO>
      <Flex sx={{px:4}}>
  <Container p={10} bg='background'  sx={{ flex: '1 1 auto' }}> 
  <MDXRenderer>{project.body}</MDXRenderer>
          </Container>
  <Container p={2} color='background' bg= 'background' sx={{ flex: '2 2 auto' }}> 
  <animated.div style={titleProps}>
            <Heading as="h1" variant="styles.h1" sx={{color: 'text'}}>
              {project.title}
            </Heading>
          </animated.div>
          <animated.div style={infoProps}>
            <ProjectInfo project={project} />
            <Heading as="h2" variant="styles.h2" sx={{color: 'text'}}>
              {project.excerpt}
            </Heading>
          </animated.div>
          </Container>
        {/* <animated.div style={contentProps}>
          <MDXRenderer>{project.body}</MDXRenderer> */}
        {/* </animated.div> */}
      </Flex>
    </Layout>
    
  )
}


export default Project

{/* <script type="text/javascript" src="sidebar-follow.js"></script>
<script type="text/javascript">
(new SidebarFollow()).init({
element: 'sidebar-follow',
distanceToTop: 15
});
  </script>
  <div id="sidebar-follow">
  <ul>
    <li><a href="#" target="_blank">这里是需要固定的内容</a></li>
    <li><a href="#" target="_blank">这里是需要固定的内容</a></li>
    <li><a href="#" target="_blank">这里是需要固定的内容</a></li>
    <li><a href="#" target="_blank">这里是需要固定的内容</a></li>
  </ul>
</div> */}
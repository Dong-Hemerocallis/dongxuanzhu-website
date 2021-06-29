/** @jsx jsx */
import { Flex, jsx } from "theme-ui"
import Item from "/home/dong_hemerocallis/projects/dongxuan_zhu/node_modules/@lekoarts/gatsby-theme-emma/src/components/project-info-item"

type ProjectInfoProps = {
  project: {
    client: string
    date: string
    service: string
    description: string
  }
}

const ProjectInfo = ({ project }: ProjectInfoProps) => (
  <Flex sx={{ mt: 4, mb: [2, 4], flexWrap: `wrap` }}>
    <Item name="Title" content={project.client} />
    <Item name="Date" content={project.date} />
    <Item name="Service" content={project.service} />
  </Flex>
)

export default ProjectInfo

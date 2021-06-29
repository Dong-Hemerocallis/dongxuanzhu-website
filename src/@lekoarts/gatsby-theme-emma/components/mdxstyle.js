import {MDXProvider}from '@mdx-js/react'
import { components } from 'theme-ui'

const mdxComponent = {
    h1: props => (
      <h1 style={{color: 'hotpink'}} {...props}/>
    )
  }

  export const wrapRootElement = ({ element }) => {
      return (
          <MDXProvider components={mdxComponent}>
              {element}
          </MDXProvider>
      )
  }
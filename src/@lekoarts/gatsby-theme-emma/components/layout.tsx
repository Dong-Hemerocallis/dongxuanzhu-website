import * as React from "react"
import { Global } from "@emotion/react"
import { Box } from "theme-ui"
import useSiteMetadata from "/home/dong_hemerocallis/projects/dongxuan_zhu/node_modules/@lekoarts/gatsby-theme-emma/src/hooks/use-site-metadata"
import useNavigation from "/home/dong_hemerocallis/projects/dongxuan_zhu/node_modules/@lekoarts/gatsby-theme-emma/src/hooks/use-navigation"
import Footer from "/home/dong_hemerocallis/projects/dongxuan_zhu/node_modules/@lekoarts/gatsby-theme-emma/src/components/footer"
import Header from "/home/dong_hemerocallis/projects/dongxuan_zhu/node_modules/@lekoarts/gatsby-theme-emma/src/components/header"
import Seo from "/home/dong_hemerocallis/projects/dongxuan_zhu/node_modules/@lekoarts/gatsby-theme-emma/src/components/seo"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => {
  const meta = useSiteMetadata()
  const nav = useNavigation()

  return (
    <React.Fragment>
      <Global
        styles={(theme) => ({
          "*": {
            boxSizing: `inherit`,
          },
          html: {
            WebkitTextSizeAdjust: `100%`,
          },
          img: {
            borderStyle: `none`,
          },
          pre: {
            fontFamily: `monospace`,
            fontSize: `1em`,
          },
          "[hidden]": {
            display: `none`,
          },
          "::selection": {
            backgroundColor: theme.colors.text,
            color: theme.colors.background,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
          },
        })}
      />
      <Seo />
      <Header meta={meta} nav={nav} />
      <Box as="main" variant="layout.main" className={className}>
        {children}
      </Box>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
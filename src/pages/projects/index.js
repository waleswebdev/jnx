import React from 'react'
import Layout from "../../components/Layout"
import { graphql, Link } from 'gatsby' 
import { Helmet } from "react-helmet"
import * as styles from '../../styles/projects.module.css'
import Img from 'gatsby-image'

export default function Projects({ data }) {
    const projects = data.projects.nodes
    return (
        <Layout>
           <Helmet>
    <title>Portfolio - Jake Jenkins, Front End Web Developer</title>
    <meta name="description" content="Professional Portfolio for Jake Jenkins, Front End Web Developer.  Lets build Awesome Web Apps and Websites." />
    <meta name="keywords" cpntent="jake,jenkins,web,design,development,developer,app,react,frond end,node,mvc,asp,net,sql,wales,bristol,cardiff,newport" />
  </Helmet>
        <div className={styles.portfolio}>
            <h2>Portfolio</h2>
            <h3>Websites and Web Applications I have created</h3>
        <div className={styles.projects}>
            {projects.map(project => (
                <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                    <div>
                        <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}></Img>
                        <h3>{ project.frontmatter.title }</h3>
                        <p>{ project.frontmatter.stack }</p>
                    </div>
                </Link>
            ))}
        </div>
        </div>
        </Layout>
    )
}

// export page query

export const query = graphql`
query ProjectList {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`
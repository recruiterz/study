import { Layout, SEO } from '../components';
import { Link, graphql } from 'gatsby';
import React from 'react';
import { rhythm } from '../utils';
import styled from '@emotion/styled';

const IndexWrapper = styled.section`
  margin-bottom: ${rhythm(0.5)};
`;

const MeetupItemTitle = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Timeline" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;

        return (
          <IndexWrapper key={node.fields.slug}>
            <MeetupItemTitle>
              <Link to={node.fields.slug}>{title}</Link>
            </MeetupItemTitle>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: `${node.frontmatter.coffee || ''} ${node.frontmatter.description ||
                  node.excerpt}`,
              }}
            />
          </IndexWrapper>
        );
      })}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YY.MM.DD ddd")
            title
            description
            coffee
          }
        }
      }
    }
  }
`;

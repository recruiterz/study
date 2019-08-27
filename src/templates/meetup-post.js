import { Layout, SEO } from '../components';
import { rhythm } from '../utils';
import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';

const PostTitle = styled.h1`
  margin-top: ${rhythm(1)};
  margin-bottom: 0;
`;

const PostDate = styled.p`
  display: block;
  margin-bottom: ${rhythm(1)};
`;

const NavigationWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const MeetupPostTemplate = ({ data, location, pageContext }) => {
  const meetup = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={meetup.frontmatter.title}
        description={meetup.frontmatter.description || meetup.excerpt}
      />
      <PostTitle>{meetup.frontmatter.title}</PostTitle>
      <PostDate>{meetup.frontmatter.date}</PostDate>
      <div dangerouslySetInnerHTML={{ __html: meetup.html }} />
      <hr />
      <NavigationWrapper>
        {previous && (
          <li>
            <Link to={previous.fields.slug}>← {previous.frontmatter.title}</Link>
          </li>
        )}
        {next && (
          <li>
            <Link to={next.fields.slug}>{next.frontmatter.title} →</Link>
          </li>
        )}
      </NavigationWrapper>
    </Layout>
  );
};

export default MeetupPostTemplate;

export const pageQuery = graphql`
  query MeetupPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YY.MM.DD ddd")
        description
      }
    }
  }
`;

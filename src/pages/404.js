import { Layout, SEO } from '../components';
import React from 'react';
import { graphql } from 'gatsby';

const NotFound = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <p>Not Found</p>
      <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFound;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

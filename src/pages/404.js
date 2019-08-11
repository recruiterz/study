import { Layout, SEO } from '../components';
import React from 'react';
import { graphql } from 'gatsby';

const NotFound = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <Text>Not Found</Text>
      <Text>You just hit a route that doesn&apos;t exist... the sadness.</Text>
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

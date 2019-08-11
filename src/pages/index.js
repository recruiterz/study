import { Layout, SEO } from '../components';
import { StyleSheet, Text, View } from 'react-native';
import { blue, rhythm, scale } from '../utils';
import { graphql, navigate } from 'gatsby';
import React from 'react';

const styles = StyleSheet.create({
  meetupItemWrapper: {
    marginBottom: rhythm(0.5),
  },
  meetupItemTitle: {
    ...scale(0.5),
    color: blue[500],
    fontFamily: 'Noto Sans KR',
    fontWeight: '700',
  },
});

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Timeline" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;

        return (
          <View key={node.fields.slug} style={styles.meetupItemWrapper}>
            <Text onPress={() => navigate(node.fields.slug)} style={styles.meetupItemTitle}>
              {title}
            </Text>
            <Text>{node.frontmatter.date}</Text>
            <Text>
              {node.frontmatter.coffee} {node.frontmatter.description || node.excerpt}
            </Text>
          </View>
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

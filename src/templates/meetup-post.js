import { Layout, SEO } from '../components';
import { StyleSheet, Text, View } from 'react-native';
import { rhythm, scale } from '../utils';
import React from 'react';
import { graphql } from 'gatsby';
import { navigate } from '@reach/router';

const styles = StyleSheet.create({
  postTitle: {
    marginTop: rhythm(1),
    marginBottom: 0,
  },
  postDate: {
    ...scale(-1 / 5),
    display: 'block',
    marginBottom: rhythm(1),
  },
  hr: {
    borderBottomColor: 'hsla(0, 0%, 0%, 0.2)',
    borderBottomWidth: 1,
    marginBottom: rhythm(1),
  },
  navigationWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rhythm(1),
  },
});

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
      <Text style={styles.postTitle}>{meetup.frontmatter.title}</Text>
      <Text style={styles.postDate}>{meetup.frontmatter.date}</Text>
      <div dangerouslySetInnerHTML={{ __html: meetup.html }} />
      <View style={styles.hr} />
      <View style={styles.navigationWrapper}>
        {previous && (
          <Text onPress={() => navigate(previous.fields.slug)}>← {previous.frontmatter.title}</Text>
        )}
        {next && <Text onPress={() => navigate(next.fields.slug)}>{next.frontmatter.title} →</Text>}
      </View>
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

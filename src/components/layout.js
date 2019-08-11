import { StyleSheet, Text, View } from 'react-native';
import { rhythm, scale } from '../utils';
import { Footer } from './footer';
import React from 'react';
import { navigate } from 'gatsby';

const styles = StyleSheet.create({
  layout: {
    marginLeft: `auto`,
    marginRight: `auto`,
    maxWidth: rhythm(24),
    paddingHorizontal: rhythm(3 / 4),
    paddingVertical: rhythm(1.5),
  },
  rootHeaderTitle: {
    ...scale(1.5),
    display: 'block',
    fontFamily: 'Noto Sans KR',
    fontWeight: '900',
    marginBottom: rhythm(1.5),
  },
  postHeaderTitle: {
    ...scale(0.5),
    display: 'block',
    fontFamily: 'Noto Sans KR',
    fontWeight: '900',
    marginBottom: rhythm(0.5),
  },
});

export const Layout = ({ children, location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <View style={styles.layout}>
      <header>
        <Text
          onPress={() => navigate('/')}
          style={location.pathname === rootPath ? styles.rootHeaderTitle : styles.postHeaderTitle}
        >
          {title}
        </Text>
      </header>
      <main>{children}</main>
      <Footer />
    </View>
  );
};

import { Linking, Text } from 'react-native';
import React from 'react';

export const Footer = () => (
  <footer>
    <Text>© {new Date().getFullYear()}, Built with</Text>
    <Text onPress={() => Linking.openURL('https://www.gatsbyjs.org')}> Gatsby</Text>
  </footer>
);

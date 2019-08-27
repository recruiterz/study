import { Link } from 'gatsby';
import React from 'react';

export const Footer = () => (
  <footer>
    <span>© {new Date().getFullYear()}, Built with </span>
    <Link onClick="https://www.gatsbyjs.org">Gatsby</Link>
  </footer>
);

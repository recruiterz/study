import { rhythm } from '../utils';
import { Footer } from './footer';
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const LayoutWrapper = styled.section`
  margin: 0 auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

const RootHeaderTitle = styled.h1`
  display: block;
  font-family: 'Noto Sans KR';
  font-weight: 900;
  margin-bottom: ${rhythm(1.5)};
`;

const PostHeaderTitle = styled.h3`
  display: block;
  font-family: 'Noto Sans KR';
  font-weight: 900;
  margin-bottom: ${rhythm(0.5)};
`;

export const Layout = ({ children, location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <LayoutWrapper>
      <header>
        {location.pathname === rootPath ? (
          <RootHeaderTitle>
            <Link to="/">{title}</Link>
          </RootHeaderTitle>
        ) : (
          <PostHeaderTitle>
            <Link to="/">{title}</Link>
          </PostHeaderTitle>
        )}
      </header>
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  );
};

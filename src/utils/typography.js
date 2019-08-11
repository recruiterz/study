import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  };
};

delete Wordpress2016.googleFonts;

console.log(Wordpress2016);

// const example = {
//   baseFontSize: "16px",
// baseLineHeight: 1.75,
// bodyColor: "hsla(0,0%,0%,0.9)",
// bodyFontFamily: (3) ["Merriweather", "Georgia", "serif"],
// bodyWeight: 400,
// boldWeight: 700,
// headerFontFamily: (3) ["Merriweather", "Georgia", "serif"],
// headerWeight: 900,
// overrideStyles: ƒ overrideStyles(_ref, options),
// overrideThemeStyles: ƒ (),
// scaleRatio: 2.5,
// title: "Wordpress Theme 2016",
// };

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  bodyColor: 'hsla(0, 0%, 0%, 0.9)',
  bodyFontFamily: ['Noto Serif KR'],
  googleFonts: [
    {
      name: 'Noto Sans KR',
      styles: ['700', '900'],
    },
    {
      name: 'Noto Serif KR',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Noto Sans KR'],
  scaleRatio: 2.5,
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;

export const colour = {
  accent: '#b4dba2',
  accentDark: '#5e9942',
  secondary: '#7ba69a',
  secondaryDark: '#327462',
  tertiary: '#fdd3bb',
  tertiaryDark: '#b1714c',
  complement: '#ecaeba',
  complementDark: '#a54759',
  backgroundLight: '#e9ecf2',
  backgroundDark: '#242a37',
  backgroundBlue: '#182540',
  shadow: '#242a37',
  contentLight: '#cad1e0',
  contentDark: '#405270',
  linkedinBlue: '#0077b5',
  wishBlue: '#59b6e7',
  uwYellow: '#ffd54f',
  uwYellowDark: '#e4b429',
  chefGreen: '#2c6972',
  veevaOrange: '#ec9c40',
  veevaGrey: '#eff0f0',
  ultiGreen: '#61973e',
  javaOrange: '#ed8b00',
  pythonYellow: '#ffd43b',
  javascriptYellow: '#f0db4f',
  header: 'white',
  white: 'white',
  black: 'black',
};

export const alpha = (colour, a=0.6) => {
  return colour + ('00' + Math.round(a*256).toString(16)).substr(-2,2);
};

export const screenSize = {
  mobile: '@media only screen and (max-width: 479px)',
  mobileLandscape: '@media only screen and (min-width: 480px) and (max-width: 767px)',
  nonMobile: '@media only screen and (min-width: 480px)',
  tablet: '@media only screen and (min-width: 768px) and (max-width: 991px)',
  mobileLarge: '@media only screen and (min-width: 480px) and (max-width: 991px)',
  desktop: '@media only screen and (min-width: 992px)',
  wide: '@media only screen and (min-width: 1170px)',
}

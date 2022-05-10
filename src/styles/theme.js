import { ThemeProvider } from 'styled-components';
import theme from "../themes/default";
import GlobalStyles from './globals';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;


// Greetings, my name is Mohamed Abbasi and I'm a third-year undergraduate student at Carleton University majoring in Computer Science with a minor in Mathematics. I'm currently completing a 4-month co-op term at Getit Technologies to gain exposure of developing full-stack mobile and web applications. I'm also looking for a Co-op position for the Fall 2022 term.

// Welcome To My Portfolio!
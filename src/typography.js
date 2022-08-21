import Typography from 'typography';
import elkGlenTheme from 'typography-theme-elk-glen';
elkGlenTheme.baseLineHeight = 1;

const typography = new Typography(elkGlenTheme);

typography.injectStyles();

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;

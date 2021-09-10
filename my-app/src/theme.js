import deepmerge from 'deepmerge';
import { createTheme } from '@material-ui/core';
import { cartoThemeOptions } from '@carto/react-ui';

const customTheme = {
    typography: {
        subtitle1: {
            fontFamily: 'serif',
            fontWeight: 600,
            fontSize: '1rem',
            lineHeight: 1.5,
            letterSpacing: '0.009em',
            fontSmoothing: 'antialiased'
        }
    }
};

const theme = createTheme(deepmerge(cartoThemeOptions, customTheme));

export default theme;

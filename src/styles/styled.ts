/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// import { StyleSheet } from 'react-native';
// import { getDeviceTypeAsync, DeviceType } from 'expo-device';
import { createStitches, globalCss } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import { gray, blue, green, red, blackA, whiteA } from '@radix-ui/colors';

import { size, shadow, typography, flexCenter } from './utils';

const radixColors = {
  ...gray,
  ...blackA,
  ...whiteA,
  ...blue,
  ...green,
  ...red,
};

const { styled, css, createTheme, config, theme } = createStitches({
  theme: {
    colors: {
      //tipo de botoes
      save: '#FBBF24',
      textTitle: '$gray7',

      // Brand colors
      primary: radixColors.blue10,
      primaryText: radixColors.blue12,
      primaryMuted: radixColors.blue5,
      secondary: radixColors.green5,
      secondaryText: radixColors.green9,
      secondaryMuted: radixColors.green1,

      // Informative colors
      info: '#3B82F6',
      infoText: '#0A45A6',
      infoMuted: '#cfdef7',
      success: '#10B981',
      successText: '#06734E',
      successMuted: '#cee8df',
      warn: '#FBBF24',
      warnText: '#8a6200',
      warnMuted: '#f3ead1',
      error: '#EF4444',
      errorText: '#8C0606',
      errorMuted: '#f3d2d3',

      // General colors
      text: radixColors.blackA12,
      textInverted: radixColors.whiteA2,
      border: 'rgba(150, 150, 150, 0.3)',
      backdrop: 'rgba(0,0,0,0.5)',
      background: radixColors.blackA12,
      surface: radixColors.whiteA2,
      elevated: radixColors.whiteA3,
      muted1: radixColors.gray5,
      muted2: radixColors.gray4,
      muted3: radixColors.gray3,
      muted4: radixColors.gray2,
      muted5: radixColors.gray1,
      muted6: radixColors.gray5,
    },
    fontWeights: {
      bold: '700',
      semibold: '500',
      normal: '400',
    },
    borderStyles: {
      solid: 'solid',
    },
    borderWidths: {
      normal: 1,
      thick: 2,
    },
    fontSizes: {
      xxs: 10,
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      xxl: 32,
    },
    lineHeights: {
      xxs: 12,
      xs: 16,
      sm: 18,
      md: 20,
      lg: 24,
      xl: 28,
      xxl: 36,
    },
    letterSpacings: {
      tight: 0.1,
      sparse: 1,
    },
    zIndices: {
      modal: 1000,
    },
    space: {
      none: 0,
      1: 4,
      2: 8,
      3: 16,
      4: 24,
      5: 32,
      6: 40,
      7: 56,
      8: 72,
      9: 96,
      max: '$9' as const,
    },
    sizes: {
      // hairlineWidth: StyleSheet.hairlineWidth,
    },
    radii: {
      sm: 4,
      md: 8,
      lg: 24,
      full: 999,
    },
  },
  utils: {
    size,
    shadow,
    typography,
    flexCenter,
  },
});

const darkTheme = createTheme({
  colors: {
    // Brand colors
    primary: '$blue500',
    primaryText: '$blue100',
    primaryMuted: '$blue900',
    secondary: '$green500',
    secondaryText: '$green100',
    secondaryMuted: '$green900',

    // Informative colors
    info: '#3B82F6',
    infoText: '#81aef7',
    infoMuted: '#1b2940',
    success: '#10B981',
    successText: '#1ee8a5',
    successMuted: '#193328',
    warn: '#FBBF24',
    warnText: '#ffc93d',
    warnMuted: '#40351a',
    error: '#EF4444',
    errorText: '#ff7070',
    errorMuted: '#3e1c1d',

    // General colors
    text: '$white',
    textInverted: '$black',
    background: '$black',
    backdrop: 'rgba(0,0,0,0.5)',
    surface: '$gray800',
    elevated: '$gray600',
    muted1: '$gray500',
    muted2: '$gray600',
    muted3: '$gray700',
    muted4: '$gray800',
    muted5: '$gray850',
    muted6: '$gray900',
  },
});

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },
});

export { styled, css, createTheme, config, theme, darkTheme, globalStyles };

export type CSS = Stitches.CSS<typeof config>;
export type Theme = typeof theme;

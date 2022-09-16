/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { StyleSheet } from 'react-native';
import { getDeviceTypeAsync, DeviceType } from 'expo-device';
import { createStitches } from 'stitches-native';
import type * as Stitches from 'stitches-native';
import { gray, blue, green, red, blackA, whiteA } from '@radix-ui/colors';

import { size, shadow, typography, flexCenter, absoluteFill } from './utils';

const media = {
  phone: true,
  tablet: false,

  md: '(width >= 750px)',
  lg: '(width >= 1080px)',
  xl: '(width >= 1284px)',
  xxl: '(width >= 1536px)',

  /*
  sm: '(width <= 750px)', // Small phone, eg. iPhone SE
  md: '(750px < width <= 1080px)', // Regular phone, eg. iPhone 6/7/8 Plus
  lg: '(1080px < width <= 1284px)', // Large phone, eg. iPhone 12 Pro Max
  xl: '(1284px < width <= 1536px)', // Regular tablet, eg. iPad Pro 9.7
  xxl: '(width > 1536px)', // Large tablet
  */
};

getDeviceTypeAsync().then((deviceType) => {
  media.phone = deviceType === DeviceType.PHONE;
  media.tablet = deviceType === DeviceType.TABLET;
});

console.log(gray);

const { styled, css, createTheme, config, theme, useTheme, ThemeProvider } = createStitches({
  theme: {
    colors: {
      //tipo de botoes
      save: '#FBBF24',
      textTitle: '$gray7',

      // Brand colors
      primary: blue.blue10,
      primaryText: blue.blue12,
      primaryMuted: blue.blue5,
      secondary: green.green5,
      secondaryText: green.green9,
      secondaryMuted: green.green1,

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
      text: blackA.blackA12,
      textInverted: whiteA.whiteA2,
      border: 'rgba(150, 150, 150, 0.3)',
      backdrop: 'rgba(0,0,0,0.5)',
      background: blackA.blackA12,
      surface: whiteA.whiteA2,
      elevated: whiteA.whiteA3,
      muted1: gray.gray5,
      muted2: gray.gray4,
      muted3: gray.gray3,
      muted4: gray.gray2,
      muted5: gray.gray1,
      muted6: gray.gray5,
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
      thin: StyleSheet.hairlineWidth,
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
      hairlineWidth: StyleSheet.hairlineWidth,
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
    absoluteFill,
  },
  media,
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

export { styled, css, createTheme, useTheme, config, theme, darkTheme, ThemeProvider };

export type CSS = Stitches.CSS<typeof config>;
export type Theme = typeof theme;

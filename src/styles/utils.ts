import { CSSProperties } from 'react';
import type * as Stitches from '@stitches/react';
import { gray, blue, green, red, blackA, whiteA } from '@radix-ui/colors';

export type TypographyVariant =
  | 'body'
  | 'bodySmall'
  | 'bodyExtraSmall'
  | 'title1'
  | 'title2'
  | 'title3';

type TypographyVariantVar = `$${TypographyVariant}`;

// TODO: is there a way to type tokens? Using `CSS` from `styled.ts` doesn't work
// because it causes a circular type dependency since `typography` is used in `utils`.
const typographyVariants: {
  [variant in TypographyVariantVar]: CSSProperties;
} = {
  $title1: {
    fontSize: '$xxl',
    fontWeight: '$bold',
  },
  $title2: {
    fontSize: '$xl',
    fontWeight: '$bold',
  },
  $title3: {
    fontSize: '$lg',
    fontWeight: '$bold',
  },
  $body: {
    fontSize: '$md',
    fontWeight: '$normal',
  },
  $bodySmall: {
    fontSize: '$sm',
    fontWeight: '$normal',
  },
  $bodyExtraSmall: {
    fontSize: '$xs',
    fontWeight: '$semibold',
  },
};

export const typography = (value: TypographyVariantVar) => {
  return typographyVariants[value];
};

export const size = (value: any) => {
  return {
    width: value.width,
    height: value.height,
  };
};

export const shadow = (level: 'none' | 'small' | 'medium' | 'large') => {
  return {
    none: {
      elevation: 0,
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 0,
      shadowOpacity: 0,
      shadowColor: '#000',
    },
    small: {
      boxShadow: `0 0 0 15px ${gray.gray3}`,
    },
    medium: {
      boxShadow: `0 0 0 15px ${gray.gray5}`,
    },
    large: {
      boxShadow: `0 0 0 15px ${gray.gray7}`,
    },
  }[level];
};

export const flexCenter = (value?: Stitches.PropertyValue<'flexDirection'>) => ({
  flexDirection: value || 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

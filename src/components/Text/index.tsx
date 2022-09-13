import { styled, themeProp } from '../../styles';

export const Text = styled('Text', {
  color: '$text',
  fontSize: 16,
  variants: {
    ...themeProp('color', 'colors', (value) => ({
      color: value,
    })),
    ...themeProp('fontWeight', 'fontWeights', (value) => ({
      fontWeight: value,
    })),
    variant: {
      body: { typography: '$body' },
      bodySmall: { typography: '$bodySmall' },
      bodyExtraSmall: { typography: '$bodyExtraSmall' },
      title1: { typography: '$title1' },
      title2: { typography: '$title2' },
      title3: { typography: '$title3' },
    },
    align: {
      left: { textAlign: 'left' },
      right: { textAlign: 'right' },
      center: { textAlign: 'center' },
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'white',
  },
});

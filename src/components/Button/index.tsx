/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import type * as Stitches from 'stitches-native';
import { styled } from '../../styles';
import { Text } from '../Text';

type StyledButtonVariants = Stitches.VariantProps<typeof StyledButton>;

type Props = StyledButtonVariants & {
  title: string;
};

export function Button({ title, ...props }: Props) {
  return (
    <StyledButton {...props}>
      <Text variant="body">{title}</Text>
    </StyledButton>
  );
}

const StyledButton = styled('TouchableOpacity', {
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 18,
  minWidth: 100,
  backgroundColor: '$primary',
  shadow: 'medium',

  variants: {
    typeButton: {
      save: {
        backgroundColor: '$primary',
      },
      info: {
        backgroundColor: '$info',
      },
      delete: {
        backgroundColor: '$secondary',
      },
    },
    size: {
      small: {
        height: 32,
        paddingHorizontal: '$2',
      },
      large: {
        height: 44,
        paddingHorizontal: '$3',
      },
    },
    outlined: {
      true: {
        borderWidth: 1,
        shadow: 'none',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      outlined: true,
      css: {
        borderColor: '$primary',
        backgroundColor: 'transparent',
      },
    },
    {
      variant: 'secondary',
      outlined: true,
      css: {
        borderColor: '$secondary',
        backgroundColor: 'transparent',
      },
    },
  ],
  defaultVariants: {
    typeButton: 'primary',
    size: 'large',
  },
});

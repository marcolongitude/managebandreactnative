import { shadow, size } from '~/styles/utils';
import { styled } from '../../../styles';

export const StyledButton = styled('button', {
  border: 'none',
  borderRadius: 12,
  variants: {
    typeButton: {
      save: {
        backgroundColor: '$primary',
        '&:hover': {
          backgroundColor: '$background',
        },
      },
      delete: {
        backgroundColor: '$error',
        '&:hover': {
          backgroundColor: '$background',
          ...shadow('medium'),
        },
      },
    },
    outlined: {
      true: {
        border: '1px solid',
        borderColor: '$successText',
      },
    },
    size: {
      small: size({ width: 100, height: 30 }),
      medium: size({ width: 200, height: 45 }),
      large: size({ width: '100%', height: 45 }),
    },
  },
});

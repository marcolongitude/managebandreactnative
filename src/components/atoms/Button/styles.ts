import { shadow, size } from '~/styles/utils';
import { styled } from '../../../styles';

console.log(shadow('small'));
export const StyledButton = styled('button', {
  border: 'none',
  borderRadius: 12,
  ...shadow('large'),
  variants: {
    typeButton: {
      primary: {
        backgroundColor: '$primary',
      },
      secondary: {
        backgroundColor: '$secondary',
      },
    },
    size: {
      small: size({ width: 100, height: 30 }),
      medium: size({ width: 200, height: 45 }),
      large: size({ width: '100%', height: 45 }),
    },
  },
});

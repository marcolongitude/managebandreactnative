import { StyledButton } from './styles';
import type * as Stitches from '@stitches/react';
type StyledButtonVariants = Stitches.VariantProps<typeof StyledButton>;

type Props = StyledButtonVariants & {
  children: string;
};

export const ButtonUI = ({ children, ...props }: Props) => {
  return (
    <StyledButton {...props} size={'large'} outlined>
      {children}
    </StyledButton>
  );
};

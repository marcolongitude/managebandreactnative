/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { theme, Theme } from './styled';

type ThemeKey = keyof Theme;

export function themeProp<P extends string, T extends ThemeKey>(
  prop: P,
  themeKey: T,
  getStyles: (token: string) => any,
) {
  return Object.values(theme[themeKey]).reduce(
    (acc, { token }) => {
      acc[prop][token] = getStyles(`$${token}`);
      return acc;
    },
    { [prop]: {} },
  ) as {
    [prop in P]: { [token in keyof Theme[T]]: any }; // TODO: fix any
  };
}

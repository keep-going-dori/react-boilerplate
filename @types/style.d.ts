import 'styled-components';
import { CSSProp } from 'styled-components';
interface IDevice {
  mobileS: number;
  mobileM: number;
  mobileL: number;
  tablet: number;
  tabletL: number;
  pcS: number;
  pcM: number;
  pcL: number;
}
interface Media {
  mobileS: (...args: BackQuoteArgs) => CSSProp | undefined;
  mobileM: (...args: BackQuoteArgs) => CSSProp | undefined;
  mobileL: (...args: BackQuoteArgs) => CSSProp | undefined;
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
  tabletL: (...args: BackQuoteArgs) => CSSProp | undefined;
  pcS: (...args: BackQuoteArgs) => CSSProp | undefined;
  pcM: (...args: BackQuoteArgs) => CSSProp | undefined;
  pcL: (...args: BackQuoteArgs) => CSSProp | undefined;
}

interface Color {
  black: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    device: IDevice;
    media: Media;
  }
}

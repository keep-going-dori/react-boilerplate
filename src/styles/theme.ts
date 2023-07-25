import { DefaultTheme, css } from 'styled-components';
import { IDevice, Media, Color } from '../../@types/style';
type BackQuoteArgs = string[];

const device: IDevice = {
  mobileS: 320, // iPhone SE(320)
  mobileM: 360, // Galaxy 10(360), iPhone XS(375), iPhone X(375)
  mobileL: 450, // iPhone XR(414), iPhone XS Max(428) ~
  tablet: 768, // iPad mini 4(768)
  tabletL: 1024, // iPad Pro 12(1024)
  pcS: 1200, // Laptop
  pcM: 1400,
  pcL: 1600,
};

const media: Media = {
  mobileS: () => undefined,
  mobileM: () => undefined,
  mobileL: () => undefined,
  tablet: () => undefined,
  tabletL: () => undefined,
  pcS: () => undefined,
  pcM: () => undefined,
  pcL: () => undefined,
};

const color: Color = {
  black: '#777777',
};
Object.keys(device).reduce((acc: Media, label: string) => {
  switch (label) {
    case 'mobileS':
      acc.mobileS = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${device.mobileS}px) {
          ${args}
        }
      `;
      break;
    case 'mobileM':
      acc.mobileM = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${device.mobileM}px) {
          ${args}
        }
      `;
      break;
    case 'mobileL':
      acc.mobileL = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${device.mobileL}px) {
          ${args}
        }
      `;
      break;
    case 'tablet':
      acc.tablet = (...args: BackQuoteArgs) => {
        return css`
          @media only screen and (max-width: ${device.tablet}px) {
            ${args}
          }
        `;
      };
      break;
    case 'tabletL':
      acc.tabletL = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${device.tabletL}px) {
          ${args}
        }
      `;
      break;
    case 'pcS':
      acc.pcS = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${device.pcS}px) {
          ${args}
        }
      `;
      break;
    case 'pcM':
      acc.pcM = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${device.pcM}px) {
          ${args}
        }
      `;
      break;
    case 'pcL':
      acc.pcL = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${device.pcL}px) {
          ${args}
        }
      `;
      break;
    default:
      break;
  }
  return acc;
}, media);

export const globalTheme: DefaultTheme = {
  device,
  media,
  color,
};

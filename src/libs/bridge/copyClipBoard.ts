import { isApp } from './isApp';
import { bridge } from './index';

export const copyClipBoard = (text: string) => {
  if (isApp()) {
    return bridge?.copyClipboard(text);
  }
  return navigator.clipboard.writeText(text);
};

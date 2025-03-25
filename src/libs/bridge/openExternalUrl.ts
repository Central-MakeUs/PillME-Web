import { isApp } from './isApp';
import { bridge } from './index';

export const openExternalUrl = async (
  url: string,
  options?: { target?: '_blank' | '_self' },
) => {
  if (isApp()) {
    bridge?.openExternalUrl?.(url);
  } else {
    window.open(url, options?.target);
  }
};

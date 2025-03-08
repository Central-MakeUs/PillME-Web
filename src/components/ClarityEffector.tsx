import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

const CLARITY_PROJECT_ID = 'qktpfk25g3';

export const ClarityEffector = () => {
  useEffect(() => {
    if (
      process.env.NODE_ENV === 'production' &&
      CLARITY_PROJECT_ID.length !== 0
    ) {
      Clarity.init(CLARITY_PROJECT_ID);
    }
  }, []);
  return null;
};

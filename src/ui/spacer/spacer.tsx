import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './spacer.css';

type SpacerProps = {
  size: number;
};

export const Spacer = ({ size: spaceSize }: SpacerProps) => {
  return (
    <div
      className={styles.spacer}
      style={assignInlineVars({
        [styles.size]: `${spaceSize}px`,
      })}
    />
  );
};

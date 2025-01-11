import { screen } from '@testing-library/react';
import render from '../src/utils/test/render';

describe('Default Test Code', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('can component mount', async () => {
    const { user } = await render(
      <div>
        <button>click</button>
      </div>,
    );
    await user.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveTextContent('click');
  });
});

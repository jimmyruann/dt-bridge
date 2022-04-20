import { render } from '@testing-library/react';
import { HomePage } from '.';

describe('HomePage', () => {
  it('should render', () => {
    const container = render(<HomePage />);

    expect(container.baseElement).toBeTruthy();
  });
});

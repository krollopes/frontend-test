import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner', () => {
  it('should render the spinner component', () => {
    render(<Spinner />);
    const spinner = screen.getByTestId('spinner-element');
    expect(spinner).toBeInTheDocument();
  });
});

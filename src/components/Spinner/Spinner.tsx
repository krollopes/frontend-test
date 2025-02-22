import { SpinnerElement, SpinnerWrapper } from './Spinner.styles';

export default function Spinner() {
  return (
    <SpinnerWrapper>
      <SpinnerElement role="status" aria-live="assertive" data-testid="spinner-element" />
    </SpinnerWrapper>
  );
}

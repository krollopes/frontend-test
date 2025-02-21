import { FooterContainer, FooterText } from './Footer.styles';

interface FooterProps {
  year: number;
}

export default function Footer({ year }: FooterProps) {
  return (
    <FooterContainer>
      <FooterText>&copy; {year} FakeStore. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

import {
  borderColor,
  linkBlueColor,
  textSecondayColor,
} from "src/styles/theme";
import styled from "styled-components/macro";

export const Heading = styled.h1`
  font-size: clamp(2.6rem, 5vw, var(--fz-heading));
  font-weight: 600;
  white-space: nowrap;
  line-height: 1.1;
`;

export const HeadingXL = styled(Heading)`
  font-size: clamp(40px, 5vw, 6rem);
`;

export const HeadingSecondary = styled.h2`
  font-size: var(--fz-xxl);
  line-height: 1.5;
`;

export const HeadingTertiary = styled.h3`
  font-size: var(--fz-lg);
  font-weight: 300;
  line-height: 1;
  color: ${textSecondayColor};
`;

export const SectionHeading = styled.h1`
  display: flex;
  align-items: center;
  margin: 1rem 0px 4rem;
  width: 100%;
  font-size: clamp(2.6rem, 5vw, var(--fz-heading));
  font-weight: 600;
  white-space: nowrap;
  line-height: 1.1;

  &::before {
    bottom: 4px;
    counter-increment: section 1;
    content: "0" counter(section) ".";
    margin-right: 1rem;
    color: ${linkBlueColor};
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
    font-weight: 400;
    margin-top: 6px;
  }

  &::after {
    content: "";
    display: block;
    position: relative;
    width: 40%;
    max-width: 35rem;
    height: 1px;
    margin-left: 2rem;
    background-color: ${borderColor};
  }
`;

export const SectionHeadingSmall = styled(SectionHeading)`
  margin-bottom: 2rem;
  color: ${linkBlueColor};
  font-size: var(--fz-md);
  font-family: var(--font-mono);
  font-weight: 400;

  &::before {
    font-size: var(--fz-md);
    margin-top: 0;
  }

  &::after {
    content: none;
  }
`;

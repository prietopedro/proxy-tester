import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props {
  text: string;
  isHeading?: boolean;
}

const HeadingButton = ({ text, isHeading }: Props) => {
  return (
    <button type="button" className={`button ${isHeading && 'button-heading'}`}>
      {text}
    </button>
  );
};

HeadingButton.defaultProps = {
  isHeading: false,
};
export default HeadingButton;

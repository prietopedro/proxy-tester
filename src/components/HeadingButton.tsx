import React from 'react';

interface Props {
  text: string;
  isHeading?: boolean;
  secondary?: boolean;
  action: () => void;
}

const HeadingButton = ({ text, isHeading, action, secondary }: Props) => {
  return (
    <button
      type="button"
      className={`button ${isHeading && 'button-heading'} ${
        secondary && 'button-secondary'
      }`}
      onClick={() => action()}
    >
      {text}
    </button>
  );
};

HeadingButton.defaultProps = {
  isHeading: false,
  secondary: false,
};
export default HeadingButton;

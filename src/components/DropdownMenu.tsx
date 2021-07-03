import React, { useState, MouseEvent } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface Props {
  options: string[];
}

const DropdownMenu = ({ options }: Props) => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState(options[0]);

  const toggleMenu = () => {
    setShow(!show);
  };

  const onOptionClick = (option: string) => {
    setInput(option);
    setShow(false);
  };
  return (
    <>
      <div className="select">
        <div className="select-wrapper">
          <div className="absolute">
            <div className={`select-menu ${show ? 'show' : ''}`}>
              {options.map((option: string) => (
                <div
                  key={option}
                  className="select-option"
                  onClick={() => onOptionClick(option)}
                  onKeyUp={toggleMenu}
                  tabIndex={0}
                  role="menuitem"
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
          <input className="select-input" value={input} />
          <div
            role="button"
            tabIndex={0}
            className={`select-arrow ${show ? 'hide' : ''}`}
            onClick={toggleMenu}
            onKeyUp={toggleMenu}
          >
            <FaAngleDown />
          </div>
          <div
            role="button"
            tabIndex={0}
            className={`select-arrow ${!show ? 'hide' : ''}`}
            onClick={toggleMenu}
            onKeyUp={toggleMenu}
          >
            <FaAngleUp />
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;

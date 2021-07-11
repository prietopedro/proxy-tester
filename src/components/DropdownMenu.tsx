import React, { useState, ChangeEvent } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import { DropDownOption } from '../types';

interface Props {
  options: DropDownOption[];
}

const DropdownMenu = ({ options }: Props) => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState<DropDownOption>(options[0]);
  // eslint-disable-next-line prettier/prettier
  const [filteredOptions, setFilteredOptions] = useState<DropDownOption[]>(
    options
  );

  const toggleMenu = () => {
    setShow(!show);
  };

  const onOptionClick = (option: DropDownOption) => {
    setInput(option);
    setShow(false);
  };

  const onInputChange = (
    option: DropDownOption,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setInput({
      text: e.target.value,
      value:
        options.filter(
          (x: DropDownOption) =>
            x.text.toLowerCase() === e.target.value.toLowerCase()
        )[0]?.value || '',
    });
    setFilteredOptions(
      options.filter((_option: typeof options[0]) =>
        _option.text.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <div className="select">
        <div
          className="select-wrapper"
          onClick={() => toggleMenu()}
          onKeyUp={() => {}}
          role="button"
          tabIndex={0}
        >
          <div className="absolute">
            <div className={`select-menu ${show ? 'show' : ''}`}>
              {filteredOptions.map((option: DropDownOption) => (
                <div
                  key={option.value}
                  className="select-option uppercase"
                  onClick={() => onOptionClick(option)}
                  onKeyUp={() => {}}
                  tabIndex={0}
                  role="menuitem"
                >
                  {option.text}
                </div>
              ))}
            </div>
          </div>
          <input
            className="select-input uppercase"
            value={input.text}
            disabled
            onChange={(e) => onInputChange(input, e)}
            onKeyUp={() => {}}
            tabIndex={0}
          />
          <div
            role="button"
            tabIndex={0}
            className={`select-arrow ${show ? 'hide' : ''}`}
            onClick={toggleMenu}
            onKeyUp={() => {}}
          >
            <FaAngleDown />
          </div>
          <div
            role="button"
            tabIndex={0}
            className={`select-arrow ${!show ? 'hide' : ''}`}
            onClick={toggleMenu}
            onKeyUp={() => {}}
          >
            <FaAngleUp />
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;

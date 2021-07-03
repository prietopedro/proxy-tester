import React, { useState, useEffect, ChangeEvent } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface Props {
  options: string[];
  searchable?: boolean;
}

const DropdownMenu = ({ options, searchable }: Props) => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState(options[0]);
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);

  const toggleMenu = () => {
    setShow(!show);
  };

  const onOptionClick = (option: string) => {
    setInput(option);
    setShow(false);
  };

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setInput(event.target.value);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  // useEffect(() => {
  //   setFilteredOptions(
  //     options.filter((option) =>
  //       option.toLowerCase().includes(input.toLowerCase())
  //     )
  //   );
  // }, [input, option]);

  return (
    <>
      <div className="select">
        <div className="select-wrapper">
          <div className="absolute">
            <div className={`select-menu ${show ? 'show' : ''}`}>
              {filteredOptions.map((option: string) => (
                <div
                  key={option}
                  className="select-option"
                  onClick={() => onOptionClick(option)}
                  onKeyUp={() => {}}
                  tabIndex={0}
                  role="menuitem"
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
          <input
            className="select-input"
            value={input}
            disabled={!searchable}
            onChange={onInputChange}
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

DropdownMenu.defaultProps = {
  searchable: false,
};

export default DropdownMenu;

import React, {
  ChangeEvent,
  ChangeEventHandler,
  ReactElement,
  useState,
} from 'react';
import { GrFormClose } from 'react-icons/gr';
import HeadingButton from './HeadingButton';
import { Proxy } from '../types';

interface Props {
  isVisible: boolean;
  toggleModal: () => void;
  setProxies: (proxies: Proxy[]) => void;
}
export default function AddProxiesModal({
  isVisible,
  toggleModal,
  setProxies,
}: Props): ReactElement {
  const [formValues, setFormValues] = useState('');
  const changeHandler: ChangeEventHandler<HTMLTextAreaElement> = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormValues(e.target.value);
  };
  return (
    <div className={`modal-wrapper ${isVisible ? 'show' : 'hide'}`}>
      <div className="modal-header">
        <h2 className="modal-header-text">Add Proxies</h2>
        <div className="modal-header-close">
          <GrFormClose onClick={() => toggleModal()} />
        </div>
      </div>
      <div className="modal-body">
        <textarea
          className="modal-body-textarea"
          spellCheck={false}
          value={formValues}
          onChange={changeHandler}
        />
      </div>
      <div className="modal-footer">
        <div className="modal-cta">
          <HeadingButton text="Cancel" action={() => toggleModal()} secondary />
        </div>
        <div className="modal-cta">
          <HeadingButton
            text="Add Proxies"
            action={() => {
              const rows = formValues.split('\n');
              const dividedRows = rows.map((row: string) => {
                const brokenDown = row.split(':');
                return {
                  ip: brokenDown[0],
                  port: brokenDown[1],
                  username: brokenDown.length > 2 ? brokenDown[2] : '',
                  password: brokenDown.length > 3 ? brokenDown[3] : '',
                  country: 'United States',
                  speed: 0,
                  isp: 'Comcast',
                } as Proxy;
              });
              setProxies(dividedRows);
              toggleModal();
            }}
          />
        </div>
      </div>
    </div>
  );
}

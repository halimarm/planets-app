import React from 'react'
import styled from 'styled-components';
// import Button from '../Button';

type InputSearchType = {
  title?: string;
  focus?: boolean;
  onClick?: () => void;
  onChange?: () => void;
};
type InputSearchProps = InputSearchType;

const ComponentInputSearch = styled.input`
  padding: 1em;
  background: #fff;
  border: 1px solid #f1f1f1;
  background: #f1f1f1;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 8px;
`;

const InputSearch: React.FC<InputSearchProps> = ({ title, focus, onClick, onChange, ...props }) => {
  return (
    <ComponentInputSearch
      type="text"
      placeholder={title}
      onClick={onClick}
      onChange={onChange}
      autoFocus={focus ? true : false}
    {...props} />
  )
}

export default InputSearch
import React from 'react'
import styled from 'styled-components';

type ButttonType = {
  color?: string;
  children: string;
};
type ButtonProps = ButttonType;

const ComponentButton = styled.button<ButttonType>`
  border-radius: 4px;
  background: ${props => {
    switch (props.color) {
      case 'primary':
        return "#03a9f3";
      case 'danger':
        return "#f56342";
      default:
        return "transparent";
    }
  }};
  padding: 4px 12px;
  border: 1px solid transparent;
  border-color: transparent;
  color: #fff;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ children, color, ...props }) => {
  return (
    <ComponentButton
      color={color}
      {...props}>
      {children}
    </ComponentButton>
  )
}

export default Button
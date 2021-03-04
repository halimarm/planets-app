import React from 'react'
import styled from 'styled-components';

type CardType = {
  children: any;
};
type CardProps = CardType;

const ComponentCard = styled.button<CardType>`
  border-radius: 4px;
  padding: 8px;
  border: 1px solid transparent;
  border-color: transparent;
  color: #fff;
  cursor: pointer;
`;

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <ComponentCard
      {...props}>
      {children}
    </ComponentCard>
  )
}

export default Card
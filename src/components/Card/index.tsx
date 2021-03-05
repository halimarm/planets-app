import React from 'react'
import styled from 'styled-components';
// import Button from '../Button';

type CardType = {
  title?: string;
  body?: string;
};
type CardProps = CardType;

const ComponentCard = styled.div`
  border-radius: 4px;
  padding: 8px;
  border: 1px solid transparent;
  border-color: transparent;
  background: #333;
  color: #fff;
  cursor: pointer;
`;

export const CardHeader = styled.header`
  padding: 32px;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding: 32px;
`;


const Card: React.FC<CardProps> = ({ title, body, ...props }) => {
  return (
    <ComponentCard
      {...props}>
      <CardHeader>
        <CardHeading>{title}</CardHeading>
      </CardHeader>
      <CardBody>
        {body}
        {/* <Button color="primary">Detail</Button> */}
      </CardBody>
    </ComponentCard>
  )
}

export default Card
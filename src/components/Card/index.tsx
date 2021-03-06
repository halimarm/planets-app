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
  border: 1px solid #333;
  border-color: #333;
  background: #fff;
  cursor: pointer;
  margin-bottom: 8px;
`;

export const CardHeader = styled.header`
  padding: 32px;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: auto;
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
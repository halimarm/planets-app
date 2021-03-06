import React from 'react'
import styled from 'styled-components';
// import Button from '../Button';

type CardType = {
  title?: string;
  children?: any;
};
type CardProps = CardType;

const ComponentCard = styled.div`
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  margin-bottom: 8px;
  overflow: hidden;
  position: relative;
  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  &:after {
    filter: blur(1px);
    background-image: url('https://blogs.esa.int/space19plus/files/2019/03/nebula.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
  }
  &:before {
    background: rgba(0,0,0,0.5);
    z-index:2;
  }
`;

export const CardHeader = styled.header`
  padding: 8px 16px;
`;

export const CardHeading = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: auto;
  color: #fff;
  position: relative;
  z-index: 2;
`;

export const CardBody = styled.div`
  padding: 8px 16px;
  color: #fff;
  z-index: 2;
  position: relative;
  font-size: 14px;
`;


const Card: React.FC<CardProps> = ({ title, children, ...props }) => {
  return (
    <ComponentCard
      {...props}>
      <CardHeader>
        <CardHeading>{title}</CardHeading>
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </ComponentCard>
  )
}

export default Card
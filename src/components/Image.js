import React from 'react';
import styled from 'styled-components';

const ImageDiv = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
`;

const Image = props => (
  <ImageDiv src={props.src} alt={props.alt} />
);

export default Image;


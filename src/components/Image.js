import React from 'react';
import styled from 'styled-components';

const ImageDiv = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
`;

const Image = ({alt, src}) => (
  <ImageDiv alt={alt} src={src} />
);

export default Image;


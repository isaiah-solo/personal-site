import React from 'react';
import styled from 'styled-components';

import { ResponsiveContainer, BarChart, Bar, XAxis } from 'recharts';

const BarChartDiv = styled(BarChart)`
  font-size: 13px;
  margin-top: 16px;

  @media screen and (max-width: 1000px) {
    font-size: 8px;
  }
`;

const BarGraph = props => (
  <ResponsiveContainer width={ '100%' } height={ 100 }>
    <BarChartDiv data={ props.data }>
      <XAxis dataKey={ props.axisDataKey } axisLine={ false } tickLine={ false } stroke={ 'white' } interval={ 0 } />
      <Bar dataKey={ props.barDataKey } fill={ props.barColor } />
    </BarChartDiv>
  </ResponsiveContainer>
);

export default BarGraph;

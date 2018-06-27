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

const BarGraph = ({axisDataKey, barColor, barDataKey, data}) => (
  <ResponsiveContainer width={'100%'} height={100}>
    <BarChartDiv data={data}>
      <XAxis dataKey={axisDataKey} axisLine={false} tickLine={false} stroke={'white'} interval={0} />
      <Bar dataKey={barDataKey} fill={barColor} />
    </BarChartDiv>
  </ResponsiveContainer>
);

export default BarGraph;

import React from 'react';
import {
  AreaChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts';

import getYAxisValue from './helpers/get-axis-values';

const data = [
  { month: 'Jun', profit: 400 },
  { month: 'Jul', profit: 750 },
  { month: 'Aug', profit: 1200 },
  { month: 'Sep', profit: 2050 },
  { month: 'Oct', profit: 3250 },
  { month: 'Nov', profit: 3250 },
  { month: 'Dec', profit: 4300 },
  { month: 'Jan', profit: 5300 },
  { month: 'Feb', profit: 5400 },
  { month: 'Mar', profit: 5500 },
  { month: 'Apr', profit: 8300 },
  { month: 'May', profit: 9200 },
  { month: 'Jun', profit: 10000 },
  { month: 'Jul', profit: 10530 },
  { month: 'Aug', profit: 11200 },
  { month: 'Sep', profit: 12000 },
  { month: 'Oct', profit: 12500 },
  { month: 'Nov', profit: 13020 },
];

const SimpleLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {/* <LineChart
        data={data}
      >
        <XAxis dataKey="month" interval={4} />
        <YAxis
          width={30}
          type="number"
          tickFormatter={num => getYAxisValue(num)}
          tickSize={3}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Line type="monotone" dataKey="profit" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart> */}
      <AreaChart
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area type='monotone' dataKey='profit' stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;

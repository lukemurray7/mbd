import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jun', profit: 2400 },
  { month: 'Jul', profit: 1398 },
  { month: 'Aug', profit: 9800 },
  { month: 'Sep', profit: 3908 },
  { month: 'Oct', profit: 4800 },
  { month: 'Nov', profit: 3800 },
  { month: 'Dec', profit: 4300 },
];

const SimpleLineChart = () => {
  return (
    <ResponsiveContainer width="700" height="100%">
      <LineChart
        data={data}
        width={600}
        height={300}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="profit" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;

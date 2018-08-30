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

const getYAxisLabel = (num) => {
  switch (true) {
    case (num > 999): {
      const numStr = num.toString();
      return `${numStr.slice(0, 1)}.${numStr.slice(1, 2)}k`;
    }
    default: {
      return num;
    }
  }
};

const SimpleLineChart = () => {
  console.log(getYAxisLabel(500), getYAxisLabel(1250));
  return (
    <ResponsiveContainer width="100%" height="50%">
      <LineChart
        data={data}
      >
        <XAxis dataKey="month" interval={4} />
        <YAxis
          width={30}
          type="number"
          tickFormatter={num => getYAxisLabel(num)}
          tickSize={3}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Line type="monotone" dataKey="profit" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;

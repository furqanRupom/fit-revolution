import React from 'react';
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Charts: React.FC = () => {
  const fitnessData = [
    { name: 'Week 1', activity: 20 },
    { name: 'Week 2', activity: 24 },
    { name: 'Week 3', activity: 32 },
    { name: 'Week 4', activity: 20 },
    { name: 'Week 5', activity: 62 },
    { name: 'Week 6', activity: 59 },
    { name: 'Week 7', activity: 12 },
  ];

  const customWaveLine = (props: any) => {
    const { points } = props;

    const newPath = points.reduce((acc: string, point: any, index: number) => {
      const prevPoint = points[index - 1];
      const nextPoint = points[index + 1];
      const prevPointY = prevPoint ? prevPoint.y : point.y;
      const nextPointY = nextPoint ? nextPoint.y : point.y;
      const controlPointY = (prevPointY + nextPointY) / 2;

      const pathSegment = `C ${point.x} ${controlPointY} ${point.x} ${point.y}`;
      return `${acc} ${pathSegment}`;
    }, `M ${points[0].x} ${points[0].y}`);

    return <path d={newPath} stroke="#f43f5e" fill="none" strokeWidth={5} />;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={fitnessData}>
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="activity"
          stroke="#f43f5e"
          strokeWidth={4}
          animationDuration={2000}
          animationEasing="linear"
          isAnimationActive
          animationBegin={0}
          shape={customWaveLine}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Charts;

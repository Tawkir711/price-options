import React from 'react';
import { LineChart as LCchart, Line, XAxis, YAxis } from "recharts";


const LineChart = () => {
  const subData = [
    { name: "Student 1", math_marks: 85, bangla_marks: 78 },
    { name: "Student 2", math_marks: 92, bangla_marks: 89 },
    { name: "Student 3", math_marks: 78, bangla_marks: 82 },
    { name: "Student 4", math_marks: 95, bangla_marks: 91 },
    { name: "Student 5", math_marks: 88, bangla_marks: 85 },
    { name: "Student 6", math_marks: 91, bangla_marks: 87 },
    { name: "Student 7", math_marks: 76, bangla_marks: 79 },
    { name: "Student 8", math_marks: 94, bangla_marks: 88 },
    { name: "Student 9", math_marks: 83, bangla_marks: 80 },
    { name: "Student 10", math_marks: 90, bangla_marks: 86 },
  ];
  return (
    <div>
      <LCchart width={500} height={400} data={subData}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math_marks" stroke='yellow'></Line>
        <Line dataKey={'bangla_marks'} stroke='red'></Line>

      </LCchart>
    </div>
  );
};

export default LineChart;
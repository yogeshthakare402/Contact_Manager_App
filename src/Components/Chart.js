import React from 'react';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

function Chart({ coronaCasesFluctuation }) {
    // console.log(coronaCasesFluctuation.length);
    return (
        <ResponsiveContainer width="100%" aspect={2.5}>
            <LineChart data={coronaCasesFluctuation} margin={{ right: 100 }}>
                <CartesianGrid />
                <XAxis dataKey="day" />
                <YAxis dataKey="thirdYear" />
                <Legend />
                <Tooltip />
                <Line dataKey="firstYear"
                    stroke="black" activeDot={{ r: 0.02 }} />
                <Line dataKey="secondYear"
                    stroke="red" activeDot={{ r: 0.02 }} />
                <Line dataKey="thirdYear"
                    stroke="blue" activeDot={{ r: 0.02 }} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Chart
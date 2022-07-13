import { Charts, ChartTitle } from "./ChartStyles";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({ title, data, dataKey, grid }) {


    return (
        <Charts>
            <ChartTitle>{title}</ChartTitle>
            <ResponsiveContainer width="100%" aspect={5 / 1}>
                <LineChart data={data} >
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <YAxis />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    <Legend />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>


        </Charts>
    )
}

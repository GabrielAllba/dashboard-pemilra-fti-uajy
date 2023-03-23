import { useEffect, useState } from 'react';
import classes from './index.module.css'
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


const ProdiAnalytics = props => {
  const [data, setData] = useState([]);

  const dataku = [
    {
      name: "2021",
      pv: 15,
    },
    {
      name: "2022",
      pv: 23,
    },
    {
      name: "2023",
      pv: 58,
    },
    {
      name: "2024",
      pv: 20,
    },
    {
      name: "2025",
      pv: 50,
    },
    {
      name: "2026",
      pv: 20,
    },
  ];

    useEffect(() => {
      setData(dataku)
    }, [])
    return (
      <div style={{ width: "100%", height: 700}}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={500}
            data={data}
            margin={{
              top: 100,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
          
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
}

export default ProdiAnalytics
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

    useEffect(() => {
      setData(props.data)
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
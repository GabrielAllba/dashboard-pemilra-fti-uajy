import { FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import classes from './index.module.css'
import { useState } from 'react';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import SecondaryButton from '../SecondaryButton';
import ThirdButton from '../ThirdButton';
import FourthButton from '../FourthButton';
import Button from '../Button';


const Analytics = props => {
     const [prodi, setAge] = useState("");
     const [status, setStatus] = useState("");

     const handleChange = (event) => {
       setAge(event.target.value);
     };
     const handleChangeStatus = (event) => {
       setStatus(event.target.value);
     };
     const data = [
       { name: "Group ", value: 400 },
       { name: "Group B", value: 300 },
       { name: "Group C", value: 300 },
     ];

     const COLORS = ["#5C69F1", "#5ED7E4", "#FCCDB3"];

    return (
      <>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3 className="sub_title_content" style={{ marginRight: "1rem" }}>Analitik</h3>
          <h3>
            <Button>{props.organisasi}</Button>
          </h3> 
        </div>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx={"50%"}
                cy={150}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div className={classes.count_container}>
            <h3 className={classes.counter}>222</h3>
            <ThirdButton>Rafael Billy</ThirdButton>
          </div>
          <div className={classes.count_container}>
            <h3 className={classes.counter}>222</h3>
            <SecondaryButton>Gabriel Allba</SecondaryButton>
          </div>
          <div className={classes.count_container}>
            <h3 className={classes.counter}>222</h3>
            <FourthButton>Andreas Margono</FourthButton>
          </div>
        </div>
      </>
    );
}

export default Analytics
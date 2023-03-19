import Button from '../Button';
import classes from './index.module.css'
import Avatar from "@mui/material/Avatar";
import Link from 'next/link';
import Gradient from 'rgt'
import SecondaryButton from '../SecondaryButton';
import ThirdButton from '../ThirdButton';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from 'react';
import { Box } from '@mui/material';

const MainNavigation = (props) => {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
      <div className={classes.container}>
        <div className={classes.main_page_container}>
          <div className={classes.role}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl size='small' fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Periode
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Periode"
                  onChange={handleChange}
                >
                  <MenuItem value={2022}>2022</MenuItem>
                  <MenuItem value={2023}>2023</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className={classes.role}>
            <ThirdButton>
              <p className={classes.role_detail}>Superuser</p>
            </ThirdButton>
          </div>
          
          <Avatar sx={{ bgcolor: "#DE631C" }}>N</Avatar>
        </div>
      </div>
    );
}
export default MainNavigation
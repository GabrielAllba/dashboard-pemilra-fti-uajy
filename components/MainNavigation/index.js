import classes from './index.module.css'
import Avatar from "@mui/material/Avatar";
import ThirdButton from '../ThirdButton';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from 'react';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';

import { RxDotsVertical } from "react-icons/rx";

const MainNavigation = (props) => {
    const [isMobile, setIsMobile] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false)

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    useEffect(() => {
      window.addEventListener("resize", handleResize);

      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });

    const handleClick = () => {
      props.handle()
    }
    return (
      <div className={classes.container}>
        <div className={classes.main_page_container}>
          <div className={classes.role}>
            <ThirdButton>
              <p className={classes.role_detail}>Superuser</p>
            </ThirdButton>
          </div>
          <Avatar sx={{ bgcolor: "#DE631C" }}>N</Avatar>
          <div className={classes.hamburger}>
            <RxDotsVertical className={classes.hamburger_bar} onClick={handleClick}></RxDotsVertical>
          </div>
        </div>
      </div>
    );
}
export default MainNavigation
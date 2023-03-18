import Button from '../Button';
import classes from './index.module.css'
import Avatar from "@mui/material/Avatar";
import Link from 'next/link';
import Gradient from 'rgt'
import SecondaryButton from '../SecondaryButton';
import ThirdButton from '../ThirdButton';

const MainNavigation = (props) => {
    return (
      <div className={classes.container}>
        <div className={classes.main_page_container}>
          <div className={classes.role}>
            <ThirdButton>
              <p className={classes.role_detail}>Superuser</p>
            </ThirdButton>
          </div>
          <p className={classes.role}>
            <span className={classes.email}>
              superuser@pemilra.uajy.ac.id
            </span>
          </p>
          <Avatar sx={{ bgcolor: "#DE631C" }}>N</Avatar>
        </div>
      </div>
    );
}
export default MainNavigation
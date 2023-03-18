import Link from "next/link";
import classes from "./index.module.css";
import Avatar from "@mui/material/Avatar";
import Gradient from 'rgt'
import Button from "../Button";

export default function Navbar(props) {
  return (
    <div className={classes.outer_container}>
      <div className={classes.container}>
        <div className={classes.button_container}>
          <Button>
            <Link className={classes.button_link} href='/'>Main Page</Link>
          </Button>
        </div>
        <h2 className={classes.pemilra}>
          <Gradient dir="left-to-right" from="#DE631C" to="#E03221">
            Pemilra FTI UAJY
          </Gradient>
        </h2>
      </div>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Link className={classes.link + " " + classes.active} href="/">
            Dashboard
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.link} href="/">
            Academic Period
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.link} href="/">
            Organization
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.link} href="/">
            Candidates
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.link} href="/">
            User
          </Link>
        </li>
      </ul>
      <div className={classes.container}>
        <Avatar sx={{ bgcolor: "#F85723" }}>AD</Avatar>
      </div>
    </div>
  );
  
}

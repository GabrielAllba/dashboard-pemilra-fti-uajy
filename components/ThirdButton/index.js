import classes from "./index.module.css";

const ThirdButton = (props) => {
  return <div className={classes.button}>{props.children}</div>;
};

export default ThirdButton;

import classes from "./index.module.css";

const FourthButton = (props) => {
  return <div className={classes.button}>{props.children}</div>;
};

export default FourthButton;

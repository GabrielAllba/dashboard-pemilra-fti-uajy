import classes from './index.module.css'

const SecondaryButton = (props) => {
    return <div className={classes.button}>{props.children}</div>;
}

export default SecondaryButton
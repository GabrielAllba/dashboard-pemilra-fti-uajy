import classes from './index.module.css'

const CustomTableContainer = props => {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
}

export default CustomTableContainer
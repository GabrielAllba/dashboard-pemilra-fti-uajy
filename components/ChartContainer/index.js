import classes from './index.module.css'

const ChartContainer = props => {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
}

export default ChartContainer
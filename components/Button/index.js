import classes from './index.module.css'

export default function Button(props){
    return (
        <div className={classes.button}>
            {props.children}
        </div>
    )
}
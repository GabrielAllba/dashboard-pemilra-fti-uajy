import FourthButton from '../../FourthButton'
import classes from './index.module.css'

const ItemList = (props) => {
    return (
        <div className={classes.container}>
            <FourthButton>
                <p className={classes.name}>
                    {props.name}
                </p>
            </FourthButton>
        </div>
    )
}

export default ItemList
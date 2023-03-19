import classes from './index.module.css'
import ItemList from './ItemList'

const RoleItem = (props) => {
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <span style={{marginRight: '.5rem'}}>
          <b>{Object.keys(props.access)}</b> 
        </span>
        <div style={{display:'flex'}}>
          {Object.values(props.access).map((l) =>
            l.map((el) => <ItemList keys={l+'_'+el} name={el}></ItemList>)
          )}
        </div>
      </div>
    );
}

export default RoleItem
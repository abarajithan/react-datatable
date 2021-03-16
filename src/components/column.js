import Utils from '../utils';
import Checkbox from './checkbox';
function Column(props) {
    return (
        <div className="column-container">
            <Checkbox handleChange={props.handleAllSelected} label={"All"} checked={props.allSelected} />  
            {
                props.data.map((item,key)=>
                    <div id={`column-${key}`} key={key} className={`column ${Utils.getClass(item.width)}`} style={{width:item.width}}>
                        <span>{item.label}</span>
                    </div>    
                )
            }
        </div>
    );
}
export default Column;
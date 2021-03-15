import Utils from '../utils';

function Column(props) {

    return (
        <div className="column-container">
            <div className={`column`} style={{width: "50px"}}>
                <label>
                    <input onChange={props.handleAllSelected} checked={props.allSelected} type="checkbox" name="select-all" /> 
                    Select All
                </label>
            </div>    
            {
                props.data.map((item,key)=>
                    <div id={`column-${key}`} key={key} className={`column ${Utils.getClass(item.width)}`} style={{width:item.width}}>{item.label}</div>    
                )
            }
        </div>
    );
  }
  
  export default Column;
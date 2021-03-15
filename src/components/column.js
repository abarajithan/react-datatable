import Utils from '../utils';

function Column(props) {

    return (
        <div className="column-container">
        {
            props.data.map((item,key)=>
                <div id={`column-${key}`} key={key} className={`column ${Utils.getClass(item.width)}`} style={{width:item.width}}>{item.label}</div>    
            )
        }
        </div>
    );
  }
  
  export default Column;
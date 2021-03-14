function Column(props) {
    return (
        <div className="column-container">
        {
            props.data.map(item=>
                <div className="column" style={{width:item.width}}>{item.label}</div>    
            )
        }
        </div>
    );
  }
  
  export default Column;
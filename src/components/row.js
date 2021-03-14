function Row(props) {
    console.log(props);
    return (
      <div className="row-container">
        {
            props.columns.map(item =>
                <div className="column" style={{width:item.width}}>{props.data[item.id]}</div>    
            )
        }
      </div>
    );
  }
  
  export default Row;
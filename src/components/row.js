import { useEffect, useState } from 'react';

function Row(props) {
  
	const [columnWidth,setColumnWidth] = useState({});

	const handleChange = (index) => {
		props.handleChange(index);
	}
	
	useEffect(()=>{

		let obj = {};
		props.columns.forEach((item,key) => 
			obj[key] = item.width && item.width !== "" ?  item.width : document.getElementById(`column-${key}`).clientWidth
		)
		setColumnWidth(obj);
		
	},[])

	return (
		<div className="row-container" onClick={()=>props.onRowClick(props.data,props.index)}>
			<div className={`column`} style={{width: "50px"}}>
                <label>
                    <input onChange={()=>handleChange(props.index)} checked={props.data.checked} type="checkbox" /> 
                </label>
            </div>		
			{
				props.columns.map((item,key) => 
					<div key={key} className={`column ${item.numeric ? "align-right": ""}`} style={{width:columnWidth[key]}}>{props.data[item.id]}</div>    
				)
			}
		</div>
	);
  }
  
  export default Row;
import { useEffect, useState } from 'react';

function Row(props) {
  
	const [columnWidth,setColumnWidth] = useState({});
	
	useEffect(()=>{

		let obj = {};
		props.columns.forEach((item,key) => 
			obj[key] = item.width && item.width !== "" ?  item.width : document.getElementById(`column-${key}`).clientWidth
		)
		setColumnWidth(obj);
		
	},[])

	return (
	<div className="row-container">
		{
			props.columns.map((item,key) => 
				<div key={key} className={"column "} style={{width:columnWidth[key]}}>{props.data[item.id]}</div>    
			)
		}
	</div>
	);
  }
  
  export default Row;
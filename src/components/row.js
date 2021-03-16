import { useEffect, useState } from 'react';
import Checkbox from './checkbox';
function Row(props) {
	const [columnWidth,setColumnWidth] = useState({});
	const handleChange = (index) => {
		props.handleChange(index);
	}
	useEffect(()=>{

		let obj = {};
		props.columns.forEach((item,key) => 
			obj[key] = item.width && item.width !== "" ?  item.width : document.getElementById(`column-${key}`).offsetWidth
		)
		setColumnWidth(obj);
	},[])
	return (
		<div className="row-container" onClick={()=>props.onRowClick(props.data,props.index)}>
			<Checkbox handleChange={()=>handleChange(props.index)}  checked={props.data.checked} /> 
			{
				props.columns.map((item,key) => 
					<div key={key} className={`column ${item.numeric ? "align-right": ""}`} style={{width:columnWidth[key]}}>
						<span>
							{
								item.image ? <img alt="" src ={props.data[item.id]} /> : props.data[item.id]
							}
						</span>
					</div>    
				)
			}
		</div>
	);
}
export default Row;
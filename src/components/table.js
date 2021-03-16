import Row from './row';
import Column from './column';
import { useEffect, useState } from 'react';

function Table(props) {
	const [rows,setRows] = useState([]);
	const [allSelected, setAllSelected] = useState(false);
	const handleChange = (index) => {
		rows[index].checked = !rows[index].checked;
		setRows([...rows]);
	}
	const handleAllSelected = () =>{
		setAllSelected(!allSelected);
		rows.forEach( item => item['checked'] = !allSelected);
		setRows([...rows]);
	}
	useEffect(()=>{
		props.rows.forEach( item => item['checked'] = allSelected);
		setRows(props.rows)
	},[props]);
	const onScroll = e => {
		if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight){
			props.loadData(props.pagenumber+1);
		}
	};
	return (
		<div className="p-10">
			<Column handleAllSelected={handleAllSelected} allSelected={allSelected} data={props.columns}/>
			<div onScroll={onScroll} className="table-data">
			{
				rows.map((row,key) => 
					<Row key={key} onRowClick ={props.onRowClick} handleChange={handleChange} index={key} columns={props.columns} data={row} />
				)
			}
			</div>
		</div>
	);
}

export default Table;
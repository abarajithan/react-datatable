import Row from './row';
import Column from './column';

function Table(props) {


  const onScroll = e => {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight){
      props.loadData(props.pagesize+1);
    }
  };
    return (
      <div className="p-10">
        <Column data={props.columns}/>
        <div onScroll={onScroll} className="table-data">
        {
            props.rows.map((row,key) => 
                <Row key={key} columns={props.columns} data={row} />
            )
        }
        </div>
      </div>
    );
  }
  
  export default Table;
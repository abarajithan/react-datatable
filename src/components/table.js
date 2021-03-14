import Row from './row';
import Column from './column';

function Table(props) {
    return (
      <div>
        <Column data={props.columns}/>
        {
            props.rows.map((row) => 
                <Row columns={props.columns} data={row} />
            )
        }
      </div>
    );
  }
  
  export default Table;
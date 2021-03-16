import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/table';
function App() {

  const [data,setData] = useState([]);
  const [pagenumber,setPagenumber] = useState(0);
  const length = 20;

  const loadData = (pagenumber) => {
    fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json())
    .then(response => {
      setData(data.concat(response.slice(pagenumber*length,pagenumber*length+length)));
      setPagenumber(pagenumber)
    });
  }

  const columns=[{
    'id': 'id',
    'label': 'ID',
    'numeric': true,
    'width': "5%",
    },{
    'id': 'title',
    'label': 'Title',
    'numeric': false,
    'width': "",
    },
    {
      'id': 'url',
      'label': 'URL',
      'numeric': false,
      'width': "25%",
    }];
  useEffect(()=>{
    loadData(pagenumber);
  },[])

  

  return (
    <div className="App">
      <header className="App-header">
       Data Table
      </header>
      <Table
        onRowClick={(rowData, rowIndex) => console.log(`Row Number:${rowIndex} Row Data:${JSON.stringify(rowData)}`)}
        pagenumber={pagenumber} //
        loadData={loadData} // Callback function to Call API 
        rows={data}
        columns={columns}
      />
    </div>
  );
}

export default App;

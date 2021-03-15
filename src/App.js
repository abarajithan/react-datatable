import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/table';
function App() {

  const [data,setData] = useState([]);
  const [pagesize,setPagesize] = useState(0);
  const length = 20;

  const loadData = (pagesize) => {
    fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json())
    .then(response => {
      setData(data.concat(response.slice(pagesize*length,pagesize*length+length)));
      setPagesize(pagesize)
    });
  }

  const columns=[{
    'id': 'title',
    'label': 'Title',
    'numeric': false,
    'width': "",
    },
    {
      'id': 'thumbnailUrl',
      'label': 'Thumbnail Url',
      'numeric': false,
      'width': "25%",
      },
    {
    'id': 'thumbnailUrl',
    'label': 'Thumbnail Url',
    'numeric': false,
    'width': "25%",
    }, {
    'id': 'id',
    'label': 'ID',
    'numeric': true,
    }];
  useEffect(()=>{
    loadData(pagesize);
  },[])

  

  return (
    <div className="App">
      <header className="App-header">
       Data Table
      </header>
      <Table
        onRowClick={(rowData, rowIndex) => console.log(`Row Number:${rowIndex} Row Data:${JSON.stringify(rowData)}`)}
        pagesize={pagesize}
        loadData={loadData} 
        rows={data}
        columns={columns}
      />
    </div>
  );
}

export default App;

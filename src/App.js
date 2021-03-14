import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/table';
function App() {

  const [data,setData] = useState([]);
  const columns=[{
    'id': 'title',
    'label': 'Title',
    'numeric': false,
    'width': "100px",
    },
    {
    'id': 'thumbnailUrl',
    'label': 'Thumbnail Url',
    'numeric': false,
    'width': "",
    }, {
    'id': 'id',
    'label': 'ID',
    'numeric': true,
    }];
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json())
    .then(response => setData(response.slice(0,10)));
  },[])

  return (
    <div className="App">
      <header className="App-header">
       Data Table
      </header>
      <Table 
        rows={data}
        columns={columns}
      />
    </div>
  );
}

export default App;

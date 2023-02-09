import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  let [objData, setObjData] = useState({});
  
  const rowData = (data) => {
    const rowDataFromSheet = {}
    data?.forEach((obj) => {
      rowDataFromSheet[obj.row] = obj;
    });
    setObjData(rowDataFromSheet)
  }

  
  const url = "https://script.google.com/macros/s/AKfycbwlmNzjIVAK08nmdOZuCk2JgXD-e6Vg8hrt_dvpqB-GCYZVi_ngLmyU1dJd99ZUWm3y/exec";

  const getLiveDataFromSheet = (url) => {
    fetch(url).then(data => data.json()).then(res => {
      setData(res.data);
      rowData(res.data);
    });
  }

  useEffect(()=>{
    getLiveDataFromSheet(url);
  }, []);


  var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

  const handleSubmit = (e, row) => {
    e.preventDefault();
    const updData = objData[row];
    const formData = new FormData();
    formData.append("data", JSON.stringify(updData))

    fetch(url,{
      method: 'POST',
      body: formData,
    }).then(res => res.json()).then(data => {
      console.log(data);
      getLiveDataFromSheet(url);
    })
    .catch(err => console.log(err));
  }

  const onChange = (e, row) => {
    const upd = {...objData};
    upd[row] = {...upd[row], [e.target.name]: e.target.value }
    setObjData(upd);
  }

  return (
    <div className="App">
      {data?.map((row, i) => (
        <div key={i} style={{ marginTop: '30px', background: colorArray[Math.floor(Math.random()*colorArray.length)] }}>
          <form>
            <label htmlFor="">S.No</label>
            <input type="number" placeholder='S.No' name='s.no' value={objData[row.row]["s.no"]} onChange={(e) => onChange(e, row.row)}/>
            <br />
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Name' name='name' value={objData[row.row].name} onChange={(e) => onChange(e, row.row)}/>
            <br />
            <label htmlFor="">Age</label>
            <input type="text" placeholder='Age' name='age' value={objData[row.row].age} onChange={(e) => onChange(e, row.row)}/>
            <br />
            <label htmlFor="">id</label>
            <input type="text" placeholder='id' name='id' value={objData[row.row].id} onChange={(e) => onChange(e, row.row)}/>
            <br />
            <input type="text" placeholder='row' name='row' hidden value={objData[row.row].row} onChange={(e) => onChange(e, row.row)}/>
            <br />
            <button onClick={(e) => handleSubmit(e, row.row)} >Update</button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default App;

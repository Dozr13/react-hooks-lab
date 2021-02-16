import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ListItem from './Components/StarwarsList'
import './App.css';

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/').then((res) => {
      setList(res.data.results)
    })
  }, [])

  return (
    <div className="App">
      {list.map((e, i) => {
        return <ListItem name={e.name} key={i} />
      })}
    </div>
  );
}

export default App;

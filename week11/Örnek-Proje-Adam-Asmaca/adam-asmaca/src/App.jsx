import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useEffect } from 'react'
import { DATA } from './data';

function App() {
  const [index,setIndex] = useState(0);
  const[question,setQuestion] = useState("");
  
  useEffect( ()=>){
    console.log(DATA[index]);
  }
  return (
    <div className='App'>
      <div>
      <span>Soru Başlığı</span>
      </div>
    </div>
  );

   

}

export default App;

import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bg, setBg] = useState('white');
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${word}&bgcolor=${bg}`);
  }, [word, size, bg]);
  
  const handleClick = () => {
    setWord(temp);
  }
  
  return (
    <div className='App'>
      <h1>QR Code Generator</h1>
      <div className='input-box'>
        <div className='gen'>
          <input type="text"
            onChange={(e) => {setTemp(e.target.value)}} 
            value={temp}
            placeholder='Enter text to encode'
          />
          <button 
            className='button'
            onClick={handleClick}
          >
            Generate
          </button>
        </div>
        <div className="extra">
          Background Color:
          <input type="color"  
            onChange={(e) => {
              setBg(e.target.value.substring(1))
            }}
            value={bg}
          />
          Dimension:
          <input type="range" 
            min="200" max="600"
            value={size} onChange={(e)=> {setSize(e.target.value)}}
          />
        </div>
      </div>
      <div className='output-box'>
        <img src={qrCode} alt=""/>
        <a href={qrCode} download={qrCode}>
          <button type='button'>Button</button>
        </a>
      </div>
    </div>
  )
}

export default App;
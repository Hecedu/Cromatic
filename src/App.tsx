import React, { useEffect, useState } from 'react';
import chroma from 'chroma-js';
import './custom.scss'
import { HexColorPicker } from 'react-colorful';
import Navbar from './Components/Navbar';
import ColorDisplay from './Components/ColorDisplay';

function App() {
  const [selectedColor, setSelectedColor] = useState('#942c2c');
  const [whiteColorList, setWhiteColorList] = useState<any[]>([])
  const [blackColorList, setBlackColorList] = useState<any[]>([])

  useEffect(() => {
    var whiteGradient = chroma.bezier(['white', selectedColor])
      .scale()
      .colors(4);
    setWhiteColorList(whiteGradient)

    var blackGradient = chroma.bezier([selectedColor, 'black'])
      .scale()
      .colors(4);
    setBlackColorList(blackGradient)

  }, [selectedColor])

  useEffect(() => {
    document.title = "Cromatic";
  }, []);

  const handleChangeComplete = (color: any) => {
    console.log(color)
    setSelectedColor(color)
  };

  return (
    <div className="App" style={{ backgroundColor: selectedColor }}>
      <Navbar />
      <div className="d-flex align-items-center vh-100">
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-secondary">
            Active
          </label>
          <label className="btn btn-secondary">
            Radio
          </label>
          <label className="btn btn-secondary">
            Radio
          </label>
        </div>
        <div className='container align-middle '>
          <div className='row align-items-center'>
            <div className='col-12 col-xl-2 d-flex justify-content-center mx-0 my-2'>
              <HexColorPicker color={selectedColor} onChange={handleChangeComplete} />
            </div>
            <div className='col'>
              <ColorDisplay colorList={whiteColorList} />
              <ColorDisplay colorList={blackColorList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

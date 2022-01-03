import React, { useEffect, useState } from 'react';
import chroma from 'chroma-js';
import './custom.scss'
import { HexColorPicker } from 'react-colorful';
import Navbar from './Components/Navbar';
import ColorDisplay from './Components/ColorDisplay';

function App() {
  const [selectedColor, setSelectedColor] = useState('#942c2c');
  const [backgroundColor, setBackgroundColor] = useState('#942c2c');
  const [colorList, setColorList] = useState<any[]>([])

  useEffect(() => {
    var colorScale = chroma.scale(['white', selectedColor, 'black']).mode('lab')
      .colors(7 + 2);
    setColorList(colorScale.filter(c => c !== '#ffffff' && c !== '#000000'))

    setBackgroundColor(chroma(selectedColor).desaturate(0.5).darken(1).hex())

  }, [selectedColor])

  useEffect(() => {
    document.title = "Cromatic";
  }, []);

  const handleChangeComplete = (color: any) => {
    console.log(color)
    setSelectedColor(color)
  };

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <Navbar />
      <div className="d-flex align-items-center vh-100">
        <div className='container align-middle '>
          <div className='row align-items-center'>
            <div className='col-12 col-xl-2 d-flex justify-content-center mx-0 my-2'>
              <HexColorPicker color={selectedColor} onChange={handleChangeComplete} />
            </div>
            <div className='col'>
              <ColorDisplay colorList={colorList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

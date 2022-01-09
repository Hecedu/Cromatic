import React, { useEffect, useState } from 'react';
import chroma from 'chroma-js';
import './custom.scss'
import Navbar from './Components/Navbar';
import ColorDisplay from './Components/ColorDisplay';
import { useDispatch } from 'react-redux';
import { useStoreSelector } from './Store';
import PaletteProperties from './Components/PaletteProperties';

function App() {
  const dispatch = useDispatch()
  const selectedColors = useStoreSelector((state) => state.palette.selectedColors);

  const [backgroundColor, setBackgroundColor] = useState(selectedColors[0]);
  const [colorList, setColorList] = useState<any[]>([])


  useEffect(() => {
    var colorScale = chroma.scale(['white', selectedColors[0], 'black']).mode('lab')
      .colors(5 + 2);
    var uniqueColorScale = [...Array.from(new Set(colorScale))];
    console.log(uniqueColorScale)
    setColorList(uniqueColorScale.filter(c => c !== '#000000'))

    setBackgroundColor(chroma(selectedColors[0]).desaturate(1).brighten().hex())

  }, [selectedColors])

  useEffect(() => {
    document.title = "Cromatic";
  }, []);





  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <Navbar />
      <div className="main-content d-flex align-items-center justify-content-center">
        <div className='container'>
          <ColorDisplay colorList={colorList} />
          <PaletteProperties />
        </div>
      </div>
    </div>
  );
}

export default App;

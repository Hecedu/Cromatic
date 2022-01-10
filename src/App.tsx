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
  const method = useStoreSelector((state) => state.palette.method);
  const numberOfOutputColors = useStoreSelector((state) => state.palette.numberOfOutputColors);

  const [backgroundColor, setBackgroundColor] = useState(selectedColors[0]);
  const [colorList, setColorList] = useState<any[]>([])

  useEffect(() => {
    var colorScale = chroma.scale(['white', selectedColors[0], 'black'])
      .mode(method)
      .correctLightness()
      .colors(Number(numberOfOutputColors) + 1);
    var uniqueColorScale = [...Array.from(new Set(colorScale))];
    setColorList(uniqueColorScale.filter(c => c !== '#000000'))
    setBackgroundColor(chroma(selectedColors[0]).desaturate(1).brighten().hex())

  }, [selectedColors, numberOfOutputColors, method])

  useEffect(() => {
    document.title = "Cromatic";
  }, []);

  function invertHex(hex: string) {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
  }

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

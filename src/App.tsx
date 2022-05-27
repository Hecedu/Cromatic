import React, { useEffect, useState } from "react";
import chroma from "chroma-js";
import "./custom.scss";
import Navbar from "./Components/Navbar";
import ColorDisplay from "./Components/ColorDisplay";
import { useStoreSelector } from "./Store";
import PaletteProperties from "./Components/PaletteProperties";
import { useDispatch } from "react-redux";
import { paletteActions } from "./Store/PaletteSlice";

function App() {
  const dispatch = useDispatch();
  const selectedColors = useStoreSelector(
    (state) => state.palette.selectedColors
  );
  const outputColors = useStoreSelector(
    (state) => state.palette.outputColors
  );
  const colorGenerationMode = useStoreSelector(
    (state) => state.palette.colorGenerationMode
  );
  const numberOfInputColors = useStoreSelector(
    (state) => state.palette.numberOfInputColors
  );
  const numberOfOutputColors = useStoreSelector(
    (state) => state.palette.numberOfOutputColors
  );
  const [backgroundString, setBackgroundString] = useState("");

  useEffect(() => {
    var colorGenerationArray = [""];
    if (
      numberOfInputColors == 1 ||
      selectedColors.every((color) => color == selectedColors[1])
    ) {
      colorGenerationArray = ["white", selectedColors[0], "black"];
      setBackgroundString(`${colorGenerationArray[1]}`);
    } else if (numberOfInputColors == 2) {
      colorGenerationArray = [selectedColors[0], selectedColors[1]];
      setBackgroundString(
        `linear-gradient(-225deg, ${colorGenerationArray[0]}, ${colorGenerationArray[1]})`
      );
    } else if (numberOfInputColors == 3) {
      colorGenerationArray = [
        selectedColors[0],
        selectedColors[1],
        selectedColors[2],
      ];
      setBackgroundString(
        `linear-gradient(-225deg, ${colorGenerationArray[0]}, ${colorGenerationArray[1]}, ${colorGenerationArray[2]})`
      );
    }

    var colorScale = chroma
      .scale(colorGenerationArray)
      .mode(colorGenerationMode)
      .colors(numberOfOutputColors);
    var uniqueColorScale = [...Array.from(new Set(colorScale))];
    dispatch(paletteActions.setOutputColors({ outputColors: uniqueColorScale }));
  }, [
    selectedColors,
    numberOfInputColors,
    numberOfOutputColors,
    colorGenerationMode,
  ]);

  useEffect(() => {
    document.title = "Cromatic";
  }, []);

  return (
    <div
      className="App"
      style={{
        background: backgroundString,
      }}
    >
      <Navbar />
      <div className="main-content d-flex align-items-center justify-content-center">
        <div className="container">
          <ColorDisplay colorList={outputColors} />
          <PaletteProperties />
        </div>
      </div>
    </div>
  );
}

export default App;

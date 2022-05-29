import React from "react";
import Ripples from "react-ripples";
import { useStoreSelector } from "../Store";

interface ColorDisplayProps {
  colorList: string[];
}
export default function ColorDisplay({ colorList }: ColorDisplayProps) {
  const numberOfOutputColors = useStoreSelector(
    (state) => state.palette.numberOfOutputColors
  );

  return (
    <div className="d-flex container flex-column">
      <div className="d-flex row justify-content-center mb-2">
        <div className="badge bg-dark w-auto">
          <h4 className="m-0">Palette</h4>
        </div>
      </div>
      <div className="mb-2 container bg-dark shadow rounded-3">
        <div className="d-flex text-center w-100 my-3">
          {colorList.map((c) => (
            <div className="w-100 mx-1" style={{ height: "20vh" }}>
              <Ripples
                className="text-center w-100 h-100"
                onClick={() => navigator.clipboard.writeText(c)}
              >
                <div className="w-100 py-5 d-flex align-content-center" style={{ backgroundColor: c }}>
                  <div className="d-none d-md-block align-self-center shadow-sm bg-white w-100">{c}</div>
                </div>
              </Ripples>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex row justify-content-center mb-2">
        <div className="badge bg-dark w-auto">
          <p className="m-0">Click/Tap color to copy to clipboard</p>
        </div>
      </div>
    </div>
  );
}

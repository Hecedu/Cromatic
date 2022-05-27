import React from "react";
import Ripples from "react-ripples";

interface ColorDisplayProps {
  colorList: string[];
}
export default function ColorDisplay({ colorList }: ColorDisplayProps) {
  return (
    <div className="d-flex container flex-column">
      <div className="d-flex row justify-content-center mb-2">
        <div className="badge bg-dark w-auto">
          <h4 className="m-0">Palette</h4>
        </div>
      </div>
      <div className="d-flex row justify-content-center mb-2">
        <div className="badge bg-dark w-auto">
          <p className="m-0">Click/Tap color to copy to clipboard</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-2 container">
        <div className="d-flex flex-wrap justify-content-center bg-dark rounded-3 shadow text-center w-100">
          {colorList.map((c) => (
            <div style={{ width: "calc(100% / 3)" }}>
              <Ripples
                className="p-2 text-center rounded-3 w-100"
                onClick={() => navigator.clipboard.writeText(c)}
              >
                <div
                  className="w-100 py-4 rounded"
                  style={{ backgroundColor: c }}
                >
                  <p className="my-1 shadow-sm bg-white w-100">{c}</p>
                </div>
              </Ripples>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

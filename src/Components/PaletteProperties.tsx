import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Form, ToggleButton } from "react-bootstrap";
import { HexColorInput, HexColorPicker } from "react-colorful";
import { useDispatch } from "react-redux";
import { useStoreSelector } from "../Store";
import { paletteActions } from "../Store/PaletteSlice";

export default function PaletteProperties() {
  const dispatch = useDispatch();
  const [radioValue, setRadioValue] = useState("1");
  const selectedColors = useStoreSelector(
    (state) => state.palette.selectedColors
  );
  const outputColors = useStoreSelector((state) => state.palette.outputColors);
  const numberOfInputColors = useStoreSelector(
    (state) => state.palette.numberOfInputColors
  );

  const colorPickerContainerStyle = "h-100 mx-1 w-auto p-3 rounded-3 bg-dark shadow";

  const setMethod = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(paletteActions.setMethod({ method: e.target.value }));
  };
  const setNumberOfInputColors = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      paletteActions.setNumberOfInputColors({
        numberOfInputColors: e.currentTarget.value,
      })
    );
    setRadioValue(e.currentTarget.value);
  };
  const setNumberOfOutputColors = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      paletteActions.setNumberOfOutputColors({
        numberOfOutputColors: e.currentTarget.value,
      })
    );
  };

  const downloadPaletteAsTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([...outputColors.map((x) => x + ", ")], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "newPalette.txt";
    document.body.appendChild(element);
    element.click();
  };

  const radios = [
    { name: "Solo", value: "1" },
    { name: "Duo", value: "2" },
    { name: "Trio", value: "3" },
  ];

  return (
    <div>
      <div className="d-flex flex-column justify-content-center">
        <div className="row text-center">
          <h3 className="mb-2">
            <div className="badge bg-dark">
              <h4 className="m-0">Properties</h4>
            </div>
          </h3>
        </div>
        <div className="mb-2">
          <div className="container d-flex align-items-center justify-content-center w-100 p-0" style={{ height: "18vh" }}>
            <div className={colorPickerContainerStyle}>
              <HexColorPicker
                className="w-auto"
                style={{ height: "80%" }}
                onChange={(color) => {
                  dispatch(
                    paletteActions.setSelectedColors({
                      selectedColors: [
                        color,
                        selectedColors[1],
                        selectedColors[2],
                      ],
                    })
                  );
                }}
              />
              <HexColorInput
                className="w-100 form-control text-center"
                style={{ height: "20%" }}
                color={selectedColors[0]}
                onChange={(color) => {
                  dispatch(
                    paletteActions.setSelectedColors({
                      selectedColors: [
                        color,
                        selectedColors[1],
                        selectedColors[2],
                      ],
                    })
                  );
                }}
              />
            </div>
            {numberOfInputColors > 1 ? (
              <div className={colorPickerContainerStyle}>
                <HexColorPicker
                  className="w-auto"
                  style={{ height: "80%" }}
                  color={selectedColors[1]}
                  onChange={(color) => {
                    dispatch(
                      paletteActions.setSelectedColors({
                        selectedColors: [
                          selectedColors[0],
                          color,
                          selectedColors[2],
                        ],
                      })
                    );
                  }}
                />
                <HexColorInput
                  className="w-100 form-control text-center"
                  style={{ height: "20%" }}
                  color={selectedColors[1]}
                  onChange={(color) => {
                    dispatch(
                      paletteActions.setSelectedColors({
                        selectedColors: [
                          selectedColors[0],
                          color,
                          selectedColors[2],
                        ],
                      })
                    );
                  }}
                />
              </div>
            ) : null}
            {numberOfInputColors > 2 ? (
              <div className={colorPickerContainerStyle}>
                <HexColorPicker
                  className="w-auto"
                  style={{ height: "80%" }}
                  color={selectedColors[2]}
                  onChange={(color) => {
                    dispatch(
                      paletteActions.setSelectedColors({
                        selectedColors: [
                          selectedColors[0],
                          selectedColors[1],
                          color,
                        ],
                      })
                    );
                  }}
                />
                <HexColorInput
                  className="w-100 form-control text-center"
                  style={{ height: "20%" }}
                  color={selectedColors[2]}
                  onChange={(color) => {
                    dispatch(
                      paletteActions.setSelectedColors({
                        selectedColors: [
                          selectedColors[0],
                          selectedColors[1],
                          color,
                        ],
                      })
                    );
                  }}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <ButtonGroup className="d-flex justify-content-center">
        {radios.map((radio, idx) => (
          <ToggleButton
            name="radios"
            type="radio"
            id={`radio-${idx}`}
            className="shadow p-3"
            key={idx}
            variant="dark"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setNumberOfInputColors(e)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      { /*
        <div className="d-flex w-100 mt-2">
        <Button className="w-100 btn btn-dark" onClick={downloadPaletteAsTxt}>
          Desaturate
        </Button>
        <Button className="w-100 btn btn-dark mx-1" onClick={downloadPaletteAsTxt}>
          Average
        </Button>
        <Button className="w-100 btn btn-dark" onClick={downloadPaletteAsTxt}>
          Saturate
        </Button>
      </div>
      */
      }

      <div className="d-flex my-2">
        <Form.Select
          className="me-1"
          size="sm"
          onChange={(e) => {
            setNumberOfOutputColors(e);
          }}
          defaultValue={'DEFAULT'}
        >
          <option value={'DEFAULT'} disabled>
            Detail
          </option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={9}>10</option>
        </Form.Select>
        <Form.Select
          className="ms-1"
          size="sm"
          onChange={(e) => {
            setMethod(e);
          }}
          defaultValue={"Mode"}
        >
          <option value="Mode" disabled>
            Palette Mode
          </option>
          <option value="lab">lab</option>
          <option value="hsl">hsl</option>
          <option value="lch">lch</option>
          <option value="rgb">rgb</option>
          <option value="lrgb">Linear rgb</option>
        </Form.Select>
      </div>

      <ButtonGroup className="w-100">
        <Button className="w-100 btn btn-dark" onClick={downloadPaletteAsTxt}>
          Download Palette
        </Button>
      </ButtonGroup>
    </div>
  );
}

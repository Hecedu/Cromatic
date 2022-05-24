import React, { useEffect, useState } from "react";
import { ButtonGroup, Form, ToggleButton } from "react-bootstrap";
import { HexColorPicker } from "react-colorful";
import { useDispatch } from "react-redux";
import { useStoreSelector } from "../Store";
import { paletteActions } from "../Store/PaletteSlice";

export default function PaletteProperties() {
  const dispatch = useDispatch();
  const selectedColors = useStoreSelector(
    (state) => state.palette.selectedColors
  );
  const numberOfInputColors = useStoreSelector(
    (state) => state.palette.numberOfInputColors
  );

  const setMethod = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(paletteActions.setMethod({ method: e.target.value }));
  };
  const setNumberOfInputColors = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      paletteActions.setNumberOfInputColors({
        numberOfInputColors: e.currentTarget.value,
      })
    );
  };
  const setNumberOfOutputColors = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      paletteActions.setNumberOfOutputColors({
        numberOfOutputColors: e.currentTarget.value,
      })
    );
  };

  const radios = [
    { name: "Solo", value: 1 },
    { name: "Duo", value: 2 },
    { name: "Trio", value: 3 },
  ];
  return (
    <div>
      <div className="d-flex flex-column justify-content-center container">
        <div className="row text-center">
          <h3 className="mb-2">
            <span className="badge bg-dark">Properties</span>
          </h3>
        </div>
        <div className="d-flex justify-content-center mb-2">
          <div className="d-inline-flex overflow-auto p-2 rounded bg-dark">
            <HexColorPicker
              style={{ width: "10em", height: "5em" }}
              className="m-3"
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
            {numberOfInputColors > 1 ? (
              <HexColorPicker
                style={{ width: "10em", height: "5em" }}
                className="m-3"
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
            ) : null}
            {numberOfInputColors > 2 ? (
              <HexColorPicker
                style={{ width: "10em", height: "5em" }}
                className="m-3"
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
            ) : null}
          </div>
        </div>
      </div>

      <div className="d-flex mb-2">
        <Form.Select
          className="me-1"
          size="sm"
          onChange={(e) => {
            setNumberOfOutputColors(e);
          }}
        >
          <option value={6} selected disabled>
            Detail
          </option>
          <option value={3}>3</option>
          <option value={6}>6</option>
          <option value={9}>9</option>
        </Form.Select>
        <Form.Select
          className="ms-1"
          size="sm"
          onChange={(e) => {
            setMethod(e);
          }}
        >
          <option value="Mode" selected disabled>
            Palette Mode
          </option>
          <option value="lab">lab</option>
          <option value="hsl">hsl</option>
          <option value="lch">lch</option>
          <option value="rgb">rgb</option>
          <option value="lrgb">Linear rgb</option>
        </Form.Select>
      </div>
      <ButtonGroup className="d-flex justify-content-center">
        {radios.map((radio, idx) => (
          <ToggleButton
            className="shadow p-3"
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="dark"
            value={idx + 1}
            checked={numberOfInputColors === radio.value}
            onChange={(e) => setNumberOfInputColors(e)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}

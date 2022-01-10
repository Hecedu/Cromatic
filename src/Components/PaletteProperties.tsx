import React, { useState } from 'react'
import { ButtonGroup, Form, ToggleButton } from 'react-bootstrap';
import { HexColorPicker } from 'react-colorful';
import { useDispatch } from 'react-redux';
import { useStoreSelector } from '../Store';
import { paletteActions } from '../Store/PaletteSlice';

export default function PaletteProperties() {
    const dispatch = useDispatch()
    const selectedColors = useStoreSelector((state) => state.palette.selectedColors);
    const numberOfColors = useStoreSelector((state) => state.palette.numberOfInputColors);

    const handleColorPickerChange = (color: any) => {
        dispatch(paletteActions.setSelectedColors({ selectedColors: [color, color, color] }))
    };
    const setMethod = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(paletteActions.setMethod({ method: e.target.value }))
    }
    const setNumberOfInputColors = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(paletteActions.setNumberOfInputColors({ numberOfInputColors: e.currentTarget.value }))
    }
    const setNumberOfOutputColors = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(paletteActions.setNumberOfOutputColors({ numberOfOutputColors: e.currentTarget.value }))
    }

    const radios = [
        { name: 'Solo', value: 1 },
        { name: 'Duo', value: 2 },
        { name: 'Trio', value: 3 },
    ];
    return (
        <div>
            <div className='container'>
                <div className='row text-center'>
                    <h4 className='m-1'>
                        <span className="badge bg-dark">Properties</span>
                    </h4>
                </div>
                <div className='row d-flex justify-content-center'>
                    <HexColorPicker className="small" color={selectedColors[0]} onChange={handleColorPickerChange} />
                </div>
            </div>

            <div className="d-flex">
                <Form.Select className="m-1" size='sm' onChange={(e) => { setNumberOfOutputColors(e) }}>
                    <option value={6} selected disabled>Detail</option>
                    <option value={3}>3</option>
                    <option value={6}>6</option>
                    <option value={9}>9</option>
                </Form.Select>
                <Form.Select className="m-1 " size='sm' onChange={(e) => { setMethod(e) }}>
                    <option value="Mode" selected disabled>Mode</option>
                    <option value='lab'>lab</option>
                    <option value='hsl'>hsl</option>
                    <option value='lch'>lch</option>
                    <option value='rgb'>rgb</option>
                    <option value='lrgb'>Linear rgb</option>
                </Form.Select>
            </div>
            <ButtonGroup className="d-flex justify-content-center p-2">
                {radios.map((radio, idx) => (
                    <ToggleButton
                        className='shadow'
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant="dark"
                        value={radio.value}
                        checked={numberOfColors === radio.value}
                        onChange={(e) => setNumberOfInputColors(e)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </div>
    )
}

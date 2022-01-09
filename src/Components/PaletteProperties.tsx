import React, { useState } from 'react'
import { ButtonGroup, Form, ToggleButton } from 'react-bootstrap';
import { HexColorPicker } from 'react-colorful';
import { useDispatch } from 'react-redux';
import { useStoreSelector } from '../Store';
import { paletteActions } from '../Store/PaletteSlice';

export default function PaletteProperties() {
    const dispatch = useDispatch()
    const selectedColors = useStoreSelector((state) => state.palette.selectedColors);
    const [seedNumber, setSeedNumber] = useState('1');

    const handleChangeComplete = (color: any) => {
        dispatch(paletteActions.setSelectedColors({ selectedColors: [color, color, color] }))
    };

    const radios = [
        { name: 'Solo', value: '1' },
        { name: 'Duo', value: '2' },
        { name: 'Trio', value: '3' },
    ];
    return (
        <div className='mx-5'>
            <div className=''>
                <div className='container'>
                    <div className='row d-flex justify-content-center'>
                        <HexColorPicker className="small" color={selectedColors[0]} onChange={handleChangeComplete} />
                    </div>
                    <div className='row text-center my-1'>
                        <h4>
                            <span className="badge bg-dark">Color 1</span>
                        </h4>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Form.Select className="m-2" size='sm'>
                    <option>Detail</option>
                    <option value='3'>3</option>
                    <option value='6'>6</option>
                    <option value='9'>9</option>
                </Form.Select>
                <Form.Select className="m-2" size='sm'>
                    <option>Method</option>
                    <option value='3'>lab</option>
                    <option value='6'>bezier</option>
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
                        checked={seedNumber === radio.value}
                        onChange={(e) => setSeedNumber(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </div>
    )
}

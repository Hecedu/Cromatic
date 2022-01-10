import React from 'react'
import Ripples from 'react-ripples'

interface ColorDisplayProps {
  colorList: string[];
}
export default function ColorDisplay({ colorList }: ColorDisplayProps) {
  return (
    <>
      <div className='row text-center'>
        <h4 className=''>
          <span className="badge bg-dark">Palette</span>
        </h4>
      </div>
      <div className='row mb-2 mx-1 d-flex justify-content-center bg-dark rounded-3 shadow text-center'>
        {
          colorList.map(c => <Ripples className="col-3 p-0 text-center m-2 rounded-3 shadow"
            onClick={() => navigator.clipboard.writeText(c)}>
            <div className="py-3" style={{ backgroundColor: c, width: '100%', height: '100%' }}>
              <p className='m-0 bg-white small'>{c}</p>
            </div>
          </Ripples>
          )
        }
      </div>
    </>
  )
}

import React from 'react'

interface ColorDisplayProps {
    colorList: string[];
  }
export default function ColorDisplay({ colorList }: ColorDisplayProps) {
    return (
        <div className='row my-4 mx-auto d-flex justify-content-center'>
        {
          colorList.map(c => <div className='col-3 text-center m-2 rounded-3 py-4 shadow'
              style={{ backgroundColor: c }}
              onClick={() => navigator.clipboard.writeText(c)}>
              <p className='m-0 bg-white'>{c}</p>
          </div>)
        }
      </div>
    )
}

import React from 'react'

interface ColorDisplayProps {
    colorList: string[];
  }
export default function ColorDisplay({ colorList }: ColorDisplayProps) {
    return (
        <div className='row m-2 d-flex justify-content-center bg-dark rounded-3 shadow'>
        {
          colorList.map(c => <div className='col-3 text-center py-4 m-2 rounded-3 shadow'
              style={{ backgroundColor: c }}
              onClick={() => navigator.clipboard.writeText(c)}>
              <p className='m-0 mx-auto bg-white'>{c}</p>
          </div>)
        }
      </div>
    )
}

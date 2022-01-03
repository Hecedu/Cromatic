import React from 'react'

interface ColorDisplayProps {
    colorList: string[];
  }
export default function ColorDisplay({ colorList }: ColorDisplayProps) {
    return (
        <div className='row my-4'>
        {
          colorList.map(c => <div className='col text-center rounded-3 px-0 mx-2 py-4'
              style={{ backgroundColor: c }}
              onClick={() => navigator.clipboard.writeText(c)}>
              <p className='m-0 bg-white'>{c}</p>
          </div>)
        }
      </div>
    )
}

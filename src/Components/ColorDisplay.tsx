import React from 'react'

interface ColorDisplayProps {
    colorList: string[];
  }
export default function ColorDisplay({ colorList }: ColorDisplayProps) {
    return (
        <div className='row shadow-lg my-3'>
        {
          colorList.map(c => <div className='text-center col p-4'
              style={{ backgroundColor: c }}
              onClick={() => navigator.clipboard.writeText(c)}>
              <p className='m-0 bg-white'>{c}</p>
          </div>)
        }
      </div>
    )
}

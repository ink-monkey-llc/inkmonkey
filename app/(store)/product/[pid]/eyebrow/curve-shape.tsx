import React from 'react'

function CurveShape({ fill = 'rgb(216, 216, 216)', stroke = 'rgb(0, 0, 0)', className }: { fill?: string; stroke?: string; className?: string }) {
 return (
  <svg
   className={className}
   viewBox='0 0 500 500'
   xmlns='http://www.w3.org/2000/svg'>
   <path
    style={{ fill: fill, stroke: stroke, transformOrigin: ' 219.857px 266.151px' }}
    d='M 85.526 243.958 C 163.299 261.459 283.035 263.149 354.188 246.671 L 363.234 275.618 C 287.174 293.862 141.1 291.811 76.48 273.808 L 85.526 243.958 Z'
   />
  </svg>
 )
}

export default CurveShape

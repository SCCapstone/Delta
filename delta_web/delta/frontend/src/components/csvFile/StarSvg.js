import React from 'react'

const StarSvg = (props) => {
  return (
    <svg 
        width="58" 
        height="58" 
        viewBox="0 0 24 24" 
        stroke="#393939" 
        strokeWidth="1" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="white"
        style={props.style}
    >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  )
}

export default StarSvg
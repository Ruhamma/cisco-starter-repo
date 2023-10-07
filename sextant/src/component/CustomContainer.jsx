import React from 'react'

function CustomContainer(props) {
  return (
    <div className='bg-header'>
      <div>{props.children}</div>
    </div>
  )
}

export default CustomContainer

import React from 'react'

function CustomContainer(props) {
  return (
    <div className='hover:bg-nav hover:text-white duration-300 bg-header w-full sm:w-[300px] md:w-[500px] p-10 rounded-md shadow-2xl border-[#6e7271] border-2'>
      <div>{props.children}</div>
    </div>
  )
}

export default CustomContainer

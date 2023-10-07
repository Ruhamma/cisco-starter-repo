import React from 'react'

function Banner({data}) {
  return (
    <div className="text-2xl sm:text-3xl md:text-5xl font-bold bg-nav text-white py-3  shadow-xl">
      <p className="">{data}</p>
    </div>
  );
}

export default Banner

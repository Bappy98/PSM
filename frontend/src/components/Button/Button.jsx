import React from 'react'

function Button({children,className='justify-end'}) {
  return (
    <div className={`${className} flex  py-5 mx-5`}>
        <button className="relative flex items-center justify-center p-3 bg-blue-500 text-white rounded"
    >{children}</button>
    </div>
  )
}

export default Button
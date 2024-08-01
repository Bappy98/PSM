import React from 'react'

function Title({children}) {
  return (
    <div className="md:text-start md:text-xl mx-5 font-semibold mb-5 text-center">{children}</div>
  )
}

export default Title
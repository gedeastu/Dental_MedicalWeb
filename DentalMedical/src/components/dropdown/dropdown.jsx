import React from 'react'

const Dropdown = ({children, styles}) => {
  return (
    <>
    <div className={styles}>
     {children}
    </div>
    </>
  )
}

export default Dropdown
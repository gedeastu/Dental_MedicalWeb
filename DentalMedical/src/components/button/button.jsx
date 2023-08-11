import React from 'react'

const Button = ({content, className}) => {
  return (
    <>
    <button className={`relative ${className}`}>{content}</button>
    </>
  )
}

export default Button;
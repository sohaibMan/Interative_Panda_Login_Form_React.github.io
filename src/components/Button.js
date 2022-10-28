import React from 'react'
import './Button.css'
function Button(props) {
  return (
   

    <button type="submit">{props.children}</button>
   
  )
}

export default Button
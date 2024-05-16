import React from 'react'

export const CookieItem = ({name , image}) => {
    const showAlert = (name) => alert(`Hello ${name}`)
  return (
    <div className='cookie-container'>
<p>{name}</p>
<img src= {image} alt='cookie image' width={100}/>
<button onClick={()=>showAlert(name)}>Add to cart</button>
    </div>
  )
}

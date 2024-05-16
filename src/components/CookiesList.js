import cookies from "../data"
import { CookieItem } from "./CookieItem"
import React, { useState } from "react";


const CookiesList = () => {
  const [query, setQuery] = useState("");

const handleChange = (event) => {
  setQuery(event.target.value)
}

  const cookiesList = cookies.filter(cookie => 
    cookie.name.toLowerCase().includes(query.toLowerCase())
  ).map(cookie => <CookieItem name={cookie.name} image={cookie.image} key={cookie.id} />
  )
  /* Old code you should not use

  const filterCookieList = cookies.filter(cookie => {
  if(cookie.name.toLowerCase().includes(query.toLowerCase())){ return true} 
  else { return false}
})

  const cookiesList = filterCookieList.map(cookie => {
return <CookieItem name={cookie.name} image={cookie.image} key={cookie.id} />
  }
  )
  */ 
  return (
    <div>
  <input onChange={(event)=> handleChange(event)} />
  <h1> Hello {query}</h1>
    <div style={{display: "flex", justifyContent: "space-between"}}>
    
       {cookiesList} </div>
    </div>
  )
}

export default CookiesList
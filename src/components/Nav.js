import React from 'react'
import './Nav.css'
export default function Nav({setRoute}) {
  return (
    <div onClick={()=>setRoute("home")} className='navbar'>
        Confus...
    </div>
  )
}

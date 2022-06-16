import React from 'react'
import './Nav.css'
export default function Nav({ setRoute }) {
  return (
    <div onClick={() => setRoute("home")} className='navbar'>
      {/* Confus... */}
      <h1 className='nav-title'>Confus...</h1>
    </div>
  )
}

import React from 'react'
export default function Confession({title,confession,date}) {
    return (
    <div className='main-container'>
        <div className='confession-title-container'>
            {title}
        </div>
        <div className='confession-container'>
            {confession}
        </div>
        <div className='date-container'>
            {new Date(date).toLocaleDateString("en-CA",{weekday: "short",day: "numeric",month: "2-digit",year: "numeric"})}
        </div>
    </div>
  )
}

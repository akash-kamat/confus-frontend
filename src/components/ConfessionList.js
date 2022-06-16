import React from 'react'
import Confession from './Confession'

export default function ConfessionList({ confessions }) {
    return (
        <div className='confession-list-container'>
            {
                confessions.map((e, i) => {
                    return <Confession title={e.title} confession={e.confession} date={e.time} key={e.id} />

                })
            }
        </div>
    )
}

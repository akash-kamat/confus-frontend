import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './Confession.css'

export default function Confession() {
    return (
        <div className='main-container'>
            <div className='confession-title-container'>
                {<Skeleton className='title-load' height={40} />}
            </div>
            <div className='confession-container'>
                {<Skeleton count={3} />}
            </div>
            <div className='date-container'>
                {<Skeleton width={100} />}
            </div>
        </div>
    )
}

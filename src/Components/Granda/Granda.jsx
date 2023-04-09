import React, { createContext } from 'react'
import { Father } from '../Father/Father'
import { Uncle } from '../Uncle/Uncle'
import { Aunty } from '../Aunty/Aunty'
import './Granda.css';

export const RingContext = createContext('gold');

export const Granda = () => {
  const ring = 'diamond';
  
  return (
    <div className='granda'>
        <h2>Granda</h2>
        <RingContext.Provider value='golden ring'>
        <section className='flex'>
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
        </section>
        </RingContext.Provider>
    </div>
  )
}

import React from 'react'
import { Cousin } from '../Cousin/Cousin'

export const Aunty = () => {
  return (
    <div>
        <h2>Aunty</h2>
        <section className='flex'>
            <Cousin>Abir</Cousin>
            <Cousin>Nibir</Cousin>
        </section>
    </div>
  )
}

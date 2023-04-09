import React, { useContext } from 'react'
import { RingContext } from '../Granda/Granda'

export const Brother = () => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h2>Brother</h2>
      <p><small>{ring}</small></p>
    </div>
  )
}

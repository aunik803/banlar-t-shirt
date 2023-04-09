import React, { useContext } from 'react';
import { RingContext } from '../Granda/Granda';



export const MySelf = ({ring}) => {

  const angti = useContext(RingContext)

  return (
    <div>
        <h2>MySelf</h2>
        <p><small>Ring:{angti}</small></p>
    </div>
  )
}

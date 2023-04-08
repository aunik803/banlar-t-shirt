import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const Home = () => {
    const tshirt = useLoaderData();
  return (
    <div>This is Home: {tshirt.length}</div>
  )
}

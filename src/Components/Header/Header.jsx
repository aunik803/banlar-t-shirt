import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/review">Order</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  )
}

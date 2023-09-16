import React from 'react'
import { ROUTES } from '../app/route-config'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        {ROUTES.map((i) => (
            <Link to={i.path} key={i.path}>
                {i.title}
            </Link>
        ))}
    </div>
  )
}

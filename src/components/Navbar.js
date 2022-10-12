import React from 'react'
import { Link } from 'gatsby'

import useSiteMetadata from '../queries/site-metadata'

import Logo from './Logo'

export default function Navbar() {
  const { title } = useSiteMetadata()

  return (
    <div className="font-bold w-60 bg-blue-200  py-2">
      <ul className="flex flex-col lg:inline-flex items-center">
        <li className="mt-2">
          <Link to={`/lorem-ipsum`} className=" px-2 lg:px-0">
            one
          </Link>
        </li>
        <li className="mt-2">
          <Link to={`/blog/title2`} className=" px-2 lg:px-0">
            two
          </Link>
        </li>
        <li className="mt-2">
          <Link to={`/blog/title3`} className=" px-2 lg:px-0">
            three
          </Link>
        </li>
      </ul>
    </div>
  )
}

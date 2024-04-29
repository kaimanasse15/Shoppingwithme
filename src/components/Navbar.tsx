import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="hidden lg:block">
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
            <Link className="navbar__link relative" href="#">
            <span className="text-2xl">Home</span>   {/*modify size of the word */}
            </Link>
            <Link className="navbar__link relative" href="#">
            <span className="text-2xl">Catogories</span>   {/*modify size of the word */}
            </Link>
            <Link className="navbar__link relative" href="#">
            <span className="text-2xl">Men's</span>   {/*modify size of the word */}
            </Link>
            <Link className="navbar__link relative" href="#">
            <span className="text-2xl">Woman's</span>   {/*modify size of the word */}
            </Link>
            <Link className="navbar__link relative" href="#">
            <span className="text-2xl">Blog</span>   {/*modify size of the word */}
            </Link>
            <Link className="navbar__link relative" href="#">
            <span className="text-2xl">Hot Offer</span>   {/*modify size of the word */}
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar;
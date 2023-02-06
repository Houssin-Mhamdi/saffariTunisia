import React from 'react'

export default function Navbar({ pages }) {
    return (
        <>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
                {pages.map((page) => {
                    return (
                        <a className="mr-5 hover:text-gray-900">{page.name}</a>
                    )
                })}
            </nav>
        </>
    )
}

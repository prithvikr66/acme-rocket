import React from 'react'
import Link from 'next/link'

const links = [{
    key: 1,
    url: "#rockets",
    name: "Our Rockets"
},
{
    key: 2,
    url: "#testimonials",
    name: "Testimonials"
},
{
    key: 3,
    url: "#contact",
    name: "Contact Us"
},
{
    key: 4,
    url: "#about",
    name: "About Us"
}]

const Navbar = () => {
    return (
        <header className=' bg-teal-700 top-0'>
            <section className=' max-w-4xl mx-auto p-4 flex items-center justify-between'>
                <h1 className=' text-3xl font-medium'>
                    <a href='#hero'>🚀 Rocket Go</a>
                </h1>
                <div>
                    <button id="mobile-open-button"
                        className='text-3xl sm:hidden focus:outline-none'>
                        &#x2630;
                    </button>
                    <nav className='hidden sm:block space-x-8 text-xl '>
                        {
                            links.map(link => (
                                <Link key={link.key} href={link.url} className=" hover:opacity-70">{link.name}</Link>
                            ))
                        }

                    </nav>
                </div>


            </section>
        </header>
    )
}

export default Navbar
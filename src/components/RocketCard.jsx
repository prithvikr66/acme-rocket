import React from 'react'
import Image from 'next/image'

const RocketCard = ({ img, title, content }) => {
    return (
        <li className=" border border-solid border-gray-300 items-center rounded-xl flex flex-col shadow-2xl w-2/3 sm:w-5/6">
            <Image src={img} className="mx-auto w-1/2"></Image>
            <h3 className=" text-center text-2xl font-bold p-2 ">{title}</h3>
            <p className=" text-center text-gray-300 font-thin p-1">{content}</p>
        </li>
    )
}

export default RocketCard
import React from 'react'
import RocketCard from './RocketCard'
import rocketn from "../../public/rocket-man.png"
const RocketSection = () => {
    return (
        <section className="p-6 my-12">
            <h2 className=" text-4xl font-bold text-center   sm:text-5xl ">Rockets</h2>
            <ul className=" list-none mx-auto my-12 flex flex-col sm:flex-row gap-8 items-center">
                <RocketCard img={rocketn}
                    title="Explore"
                    content="The best rocket in the business"
                />
                <RocketCard img={rocketn}
                    title="Price"
                    content="Im not sure what to fill here"
                />
                <RocketCard img={rocketn}
                    title="Damnn"
                    content="This is getting annoying"
                />
                <RocketCard img={rocketn}
                    title="Finally"
                    content="This shall be the final card"
                />


            </ul>
        </section>
    )
}

export default RocketSection
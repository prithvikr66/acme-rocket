import Image from "next/image"
import rocket from "../../public/rocket.jpg"
import rocketn from "../../public/rocket-man.png"
export default function Home() {
  return (
    <div className=" max-w-6xl mx-auto">

      <div className="flex flex-col-reverse justify-center sm:flex-row py-10 px-6 items-center gap-8 mb-12 scroll-mt-40">
        <div className="sm:w-1/2">
          <h2 className=" max-w-md text-4xl py-10 font-medium text-center sm:text-left sm:text-5xl">
            We Boldly Go <span className=" text-indigo-400 font-bold"> Where No Rocket</span> Has Gone Before
          </h2>
          <p className="max-w-md text-2xl mt-4 text-center  sm:text-left text-slate-400 ">
            We're Building rockets that go randomly into  water and volcano and they never come back. Yes you heard it right , never come back

          </p>
          <p className="max-w-md text-2xl mt-4 text-center  sm:text-left text-slate-400">
            Shocked!?
            Join us on our journey today

          </p>
        </div>

        <Image src={rocket} className="w-1/2 flex items-center" />
      </div>
      <hr className=" bg-white w-1/2 mx-auto sm:hidden"></hr>

      <section className="p-6 my-12">
        <h2 className=" text-4xl font-bold text-center   sm:text-5xl ">Rockets</h2>
        <ul className=" list-none mx-auto my-12 flex flex-col sm:flex-row gap-8 items-center">
          <li className=" border border-solid border-gray-300 items-center rounded-md flex flex-col shadow-2xl w-2/3 sm:w-5/6">
            <Image src={rocketn} className="mx-auto w-1/2"></Image>
            <h3 className=" text-center text-2xl font-bold p-2 ">Explore</h3>
            <p className=" text-center text-gray-300 font-thin p-2">Into the multiverse</p>
          </li>
          <li className=" border border-solid border-gray-300 items-center rounded-md flex flex-col shadow-2xl w-2/3 sm:w-5/6">
            <Image src={rocketn} className="mx-auto w-1/2"></Image>
            <h3 className=" text-center text-2xl font-bold p-2 ">Explore</h3>
            <p className=" text-center text-gray-300 font-thin p-2">Into the multiverse</p>
          </li>
          <li className=" border border-solid border-gray-300 items-center rounded-md flex flex-col shadow-2xl w-2/3 sm:w-5/6">
            <Image src={rocketn} className="mx-auto w-1/2"></Image>
            <h3 className=" text-center text-2xl font-bold p-2 ">Explore</h3>
            <p className=" text-center text-gray-300 font-thin p-2">Into the multiverse</p>
          </li>
          <li className=" border border-solid border-gray-300 items-center rounded-md flex flex-col shadow-2xl w-2/3 sm:w-5/6">
            <Image src={rocketn} className="mx-auto w-1/2"></Image>
            <h3 className=" text-center text-2xl font-bold p-2 ">Explore</h3>
            <p className=" text-center text-gray-300 font-thin p-2">Into the multiverse</p>
          </li>

        </ul>
      </section>
      <hr className=" bg-white w-1/2 mx-auto sm:hidden"></hr>



      <section className="p-6 my-12">
        <h2 className=" text-4xl font-bold text-center sm:text-5xl sm:text-left">Testimonials</h2>
      </section>
      <hr className=" bg-white w-1/2 mx-auto sm:hidden"></hr>



      <section className="p-6 my-12">
        <h2 className=" text-4xl font-bold text-center sm:text-left  sm:text-5xl ">Contact Us</h2>
      </section>
      <hr className=" bg-white w-1/2 mx-auto sm:hidden"></hr>



    </div>

  )
} 

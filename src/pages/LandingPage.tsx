import { Link } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"

const LandingPage = () => {
  return (
    <>
        <Navbar>
          <div className="flex space-x-15">
            <section className="hidden w-full md:block md:w-auto my-auto">
              <ul className="flex space-x-15 ">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
              </ul>
            </section>

            <section>
              {/* <button className="border rounded-3xl py-1 px-6 md:px-10"></button> */}
              <Link to="/login" className="bg-primary-green text-white rounded-3xl py-1 px-6 md:px-10">Login</Link>
            </section>
          </div>
        </Navbar>
        
        <main>
          <div className="relative bg-linear-to-br from-emerald-50 via-white to to-blue-50 py-20 px-15 lg:px-13">
            <div className="mx-auto max-w-7xl">
              <div className="">
                <section className="grid gap-12 lg:gap-8 grid-cols-1 lg:grid-cols-2 items-center">
                  <article className="flex flex-col gap-8">
                    <h1 className="text-5xl lg:text-7xl tracking-tight">Complex Nutrition & <span className="text-primary-green">Health Management</span></h1>
                    <p className="text-2xl text-gray-600 max-w-xl italic font-light tracking-tight">
                      Everything in one place for a healthier lifestyle.
                    </p>
                    <div className="flex flex-col md:flex-row  gap-6 sm:gap-4 text-center">
                      <Link to="/register" className="bg-primary-green text-white rounded-3xl py-3 px-6 md:px-10 text-lg">Get Started</Link>
                      <Link to="/login" className="border text-gray-800 rounded-3xl py-3 px-6 md:px-10 text-md italic">Already have an account</Link>
                    </div>
                  </article>
                  <aside className="relative">
                    <img src="placeholder.svg" alt="" className="size-full"/>
                  </aside>
                </section>
              </div>
            </div>
          </div>
        </main>
        
    </>
  )
}

export default LandingPage    

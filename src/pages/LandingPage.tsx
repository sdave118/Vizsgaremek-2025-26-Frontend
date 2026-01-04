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
              <Link to="/login" className="border rounded-3xl py-1 px-6 md:px-10">Login</Link>
            </section>
          </div>
        </Navbar>
        

        
    </>
  )
}

export default LandingPage
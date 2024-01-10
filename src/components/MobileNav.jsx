import { Link } from "react-scroll"
import { data } from "../utils"
import { IoMdClose } from 'react-icons/io'


const MobileNav = ({showNav, setShowNav}) => {
  return (
    <nav className={`${showNav ? 'left-0' : '-left-full'} transition-all duration-300
    bg-primary text-white h-screen w-full fixed top-0  z-30 md:hidden flex justify-center items-center`}>
            <div
            onClick={() => setShowNav(false)}
            className="absolute top-8 left-4">
            <IoMdClose className="text-3xl" />
            </div>
        <ul className="w-full h-full gap-y-4 flex justify-center items-center text-center flex-col">
            {
                data.links.map(({name, path}, i) => (
                    <li key={i}>
                        <Link to={path} spy={true} smooth={true}
                        className="capitalize text-xl cursor-pointer"
                        onClick={() => setShowNav(false)}
                        >
                        {name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default MobileNav
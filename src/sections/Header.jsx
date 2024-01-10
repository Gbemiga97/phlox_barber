import { Link } from "react-scroll"
import { data, images } from "../utils"
import { useEffect, useState } from "react"
import { CiMenuBurger } from 'react-icons/ci'
import MobileNav from "../components/MobileNav"


const Header = () => {

  //header state
  const [header, setHeader] = useState(false)

  //mobile nav state
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  })


  return (
    <header className={`${header ? 'py-2 bg-secondary shadow-md' : 'bg-transparent'}
   fixed top-0 w-full text-white transition-all duration-300 mx-auto z-50 max-w-[1440px]`}>
      <div className="container mx-auto">
        <div className="flex items-center gap-x-8 justify-center w-full relative">
          {/* menu btn only show on mobile devices */}
         <button 
         onClick={() => setShowNav(true)}
         className="text-3xl absolute left-2 md:hidden  text-white ">
          <CiMenuBurger strokeWidth={1.2}  />
          </button>

         
       

          {/* first links */}
          <div className="hidden md:flex items-center gap-x-4 capitalize ">
          {
            data.links.slice(0, 3).map(({name, path}, i) => (
              <Link to={path} key={i} spy={true} smooth={true}
              className="links"
              >
              {name}
              </Link>
            ))
          }
          </div>
          {/* logo */}
          <div className='w-16 h-22 '>
            <img src={images.Logo} alt="logo" />
          </div>

            {/* second links */}
            <div className="hidden md:flex items-center gap-x-4 capitalize">
          {
            data.links.slice(3, 6).map(({name, path}, i) => (
              <Link to={path} key={i} spy={true} smooth={true}
              className="links"
              >
              {name}
              </Link>
            ))
          }
          </div>
        </div>
      </div>
        {/* mobile nav */}
     <MobileNav showNav={showNav} setShowNav={setShowNav} />
    </header>
  )
}

export default Header
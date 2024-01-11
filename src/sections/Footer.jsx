import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import { images } from "../utils"
import { FaLinkedinIn } from "react-icons/fa6"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/variants"



const Footer = () => {
  return (
    <motion.footer 
    variants={fadeIn('up', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.2}}
    className="bg-secondary text-white py-[2rem]">
      <div className="container mx-auto flex flex-col items-center justify-center ">
        <div className="w-16 h-16">
          <img src={images.Logo} alt="logo" />
        </div>
       {/* socials */}
       <div className="flex flex-col gap-y-6 items-center justify-center mt-8">
       <h4 className=" uppercase text-2xl">
          Follow Us</h4>

          <div className="flex gap-x-4">
            <div className="ring-1 ring-primary p-3 cursor-pointer rounded-full text-xl hover:text-blue-500 transition-all duration-300 " >
              <FaFacebookF  />
            </div>
            <div className="ring-1 ring-primary p-3 cursor-pointer rounded-full text-xl hover:text-blue-500 transition-all duration-300 " >
              <FaTwitter  />
            </div>
            <div className="ring-1 ring-primary p-3 cursor-pointer rounded-full text-xl hover:text-blue-500 transition-all duration-300 " >
              <FaLinkedinIn  />
            </div>
            <div className="ring-1 ring-primary p-3 cursor-pointer rounded-full text-xl hover:text-blue-500 transition-all duration-300 " >
              <FaInstagram  />
            </div>
          </div>

       </div>
       <small className="mt-8 text-gray-500  ">
        &copy; {new Date().getFullYear()} Phlox Barber.  All rights reserved.
       </small>
      </div>
    </motion.footer>
  )
}

export default Footer
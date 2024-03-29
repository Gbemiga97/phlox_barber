import { FaEnvelope, FaPhone } from "react-icons/fa6"
import { Input, PreTitle } from "../components"
import {HiUser} from 'react-icons/hi2'
import { images } from "../utils"
import { FaCalendarAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/variants"

const Appointment = () => {
  return (
    <motion.section
    variants={fadeIn('up', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.2}}
    id="appointment" className="mt-[50rem]  xl:mt-96">
      <div className="mx-[1rem] xl:mx-auto ">
        {/* title */}
        <div className='flex  flex-col mx-auto w-fit items-center'>
         <div className="self-start">
         <PreTitle name='Booking' />
         </div>
          <h2 className="h2 text-black ">
            Make An Appointment
          </h2>
        </div>
        {/* form */}
        <form className="mt-24 grid md:grid-cols-2 xl:grid-cols-3 min-h-[20rem] gap-x-8 gap-y-8 xl:gap-y-0  ">
          <Input icon={<HiUser />} label="What's your name ?" placeholder='name' name='name' />
          <Input icon={<FaPhone />} label="What's your phone number ?" placeholder='Enter Your Phone Number' name='phone' />
          <Input icon={<FaEnvelope />} label="Enter Your Email Address" placeholder="What's Your Email Address ?" name='address' />
          <Input icon={<img src={images.BarberChair} className="w-9 h-9" alt="barber_chair" />} label="What's Do You Want ?" placeholder='Select category' name='category' />
          <Input icon={<FaCalendarAlt />} label="Choose Your Date" placeholder='mm/dd/yyyy' name='date' />
          <Input icon={<img src={images.Time} className="w-9 h-9" alt="Time" />} label="Choose Your Date" placeholder='mm/dd/yyyy' name='date' />
        </form>
        {/* submit button */}
        <div className=" mt-8 xl:mt-0 flex items-center justify-center">
        <button className="bg-primary hover:bg-primary/95 h-14 px-12 text-white text-xl font-bold">
          Submit
        </button>
        </div>
      </div>
    </motion.section>
  )
}

export default Appointment
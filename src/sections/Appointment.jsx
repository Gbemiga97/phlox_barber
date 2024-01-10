import { FaEnvelope, FaPhone } from "react-icons/fa6"
import { Input, PreTitle } from "../components"
import {HiUser} from 'react-icons/hi2'
import { images } from "../utils"
import { FaCalendarAlt } from "react-icons/fa"


const Appointment = () => {
  return (
    <section id="appointment" className="mt-[50rem]  xl:mt-96">
      <div className="mx-auto">
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
        <form className="mt-24 grid grid-cols-3 min-h-[30rem] gap-x-8">
          <Input icon={<HiUser />} label="What's your name ?" placeholder='name' name='name' />
          <Input icon={<FaPhone />} label="What's your phone number ?" placeholder='Enter Your Phone Number' name='phone' />
          <Input icon={<FaEnvelope />} label="Enter Your Email Address" placeholder="What's Your Email Address ?" name='address' />
          <Input icon={<img src={images.BarberChair} className="w-9 h-9" alt="barber_chair" />} label="What's Do You Want ?" placeholder='Select category' name='category' />
          <Input icon={<img src={images.BarberChair} className="w-9 h-9" alt="barber_chair" />} label="Choose Your Date" placeholder='mm/dd/yyyy' name='date' />
        </form>
      </div>
    </section>
  )
}

export default Appointment
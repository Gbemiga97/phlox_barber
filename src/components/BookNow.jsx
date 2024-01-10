import { Link } from "react-scroll"
import { PreTitle } from "."
import { FaCalendarAlt } from 'react-icons/fa'
import { IoChevronForwardOutline } from "react-icons/io5"

const BookNow = () => {
  return (
    <div className=" md:mx-3 xl:mx-0 flex flex-col xl:flex-row items-center justify-center xl:items-stretch xl:-mt-20 max-w-[1440px] xl:ml-14">
        {/* opening hours */}
        <div className="text-center py-8 xl:self-end">
            <h5 className="font-primary text-xl font-bold text-secondary ">
                Opening Hour</h5>
            <p className="text-sm mt-2 font-medium">
                mon to sat - 9:00 am to 6:00 pm</p>
        </div>
        {/* customer says */}
        <div className="bg-secondary text-white p-8 flex flex-col ">
            <PreTitle name='Customer say' />
            <p className="text-3xl xl:text-xl  font-primary my-4">
            "First time visit, had excellent hair cut and beard trim, very happy and will come back again"
            </p>
            <div className="flex gap-x-4 items-end self-end mt-2 justify-self-end ">
            <div className="h-[1.8rem] w-[0.1rem] bg-primary mt-2" />
                <p>
                Daniel & Russel
                </p>
            </div>
        </div>
        {/* book  */}
        <div className='flex gap-x-4 bg-primary w-full xl:max-w-xs p-8  justify-center items-center text-white '>
           <Link to="appointment"
           className="hover:text-secondary transition-all duration-300"
           >
           <div>
                <FaCalendarAlt className="text-2xl" />
            </div>
            <p className="text-2xl">
                Book Now
            </p>
            <div className="text-3xl">
                <IoChevronForwardOutline />
            </div>
           </Link>
        </div>
    </div>
  )
}

export default BookNow
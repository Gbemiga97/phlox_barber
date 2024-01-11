import { motion } from "framer-motion"
import { fadeIn } from "../utils/variants"

const ServiceCard = ({service}) => {

    const {img, title, desc, delay} = service

  return (
    <motion.div 
    variants={fadeIn('left', delay)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.1}}
    className=" w-18 py-12 px-4  flex flex-col items-center justify-center gap-y-4
    hover:bg-secondary hover:text-white hover:shadow-2xl transition-all duration-300">
        {/* icon */}
        <div>
            <img src={img} alt={title} />
        </div>

        {/* title */}
        <h5 className='font-primary text-lg   font-bold text-center'>
            {title}
        </h5>

        {/* description */}
        <div className="flex gap-x-6 mt-4 items-center">
        <div className="h-[2.8rem] w-[0.5rem] bg-primary mt-2 hidden md:flex" />
            <p className="text-[0.85rem] leading-6  font-medium max-w-lg ">
                {desc}</p>
        </div>
    </motion.div>
  )
}

export default ServiceCard
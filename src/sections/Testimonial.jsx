import { images } from "../utils"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/variants"


const Testimonial = () => {
  return (
   <motion.section 
   variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.1}}
   className="bg-testimonial bg-cover bg-no-repeat my-24 py-24 ">
    <div className="container mx-auto">
      {/* text */}
      <motion.div 
      variants={fadeIn('down', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.1}}
      className="flex items-center justify-center flex-col text-center">
        {/* quote */}
        <div>
          <img src={images.Quote} alt="quote" />
        </div>
        <p className="text-4xl text-white font-semibold">
        "First time visit, had excellent hair cut and beard trim, very
        happy and will come back again"
        </p>
        <p className="text-md text-white mt-6">
        - Jack Hamilton -
        </p>
      </motion.div>
    </div>
   </motion.section>
  )
}

export default Testimonial
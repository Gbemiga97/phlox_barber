import { FaEnvelope } from "react-icons/fa"
import { Input, PreTitle } from "../components"
import { data } from "../utils"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/variants"


const Subscribe = () => {
  return (
    <motion.section 
    variants={fadeIn('up', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.1}}
    id="sub" className="mt-12 pt-24">
      <div className="container mx-auto  flex flex-col justify-center items-center">
       {/* title */}
       <div className="flex flex-col gap-y-4 mb-6 justify-center" >
       <PreTitle name='Subscribe' />
        <h2 className="h2">
        Get Discount info
        </h2>
       </div>
       {/* email */}
       <div className=" w-full xl:px-[9rem] mt-6">
       <Input icon={<FaEnvelope />} placeholder='Enter Your Email Adress' />
       </div>
          {/* Subscribe button */}
          <div className=" mt-8 flex items-center justify-center">
        <button className="bg-primary hover:bg-primary/95 h-14 px-12 text-white text-xl font-bold">
          Subscribe
        </button>
        </div>
      </div>
      {/* images */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-6">
        {
          data.SubImg.map(({img}, i) => (
            <motion.div
            variants={fadeIn('left', -0.7 + 1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
            key={i}>
              <img src={img} alt="haircut" />
            </motion.div>
          ))
        }
      </div>
    </motion.section>
  )
}

export default Subscribe
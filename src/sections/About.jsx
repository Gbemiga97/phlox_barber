import { PreTitle } from "../components"
import { images } from "../utils"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/variants"


const About = () => {
  return (
    <section id="about" className="pt-24 xl:pt-18 relative xl:flex items-center">
        {/* image */}
        <motion.div 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.1}}
        className="absolute  right-0 left-0 xl:static xl:flex-1 w-full xl:max-w-xl">
            <img src={images.AboutImg} alt="barbing" className="w-full" />
          </motion.div>

      <div className="container mx-auto justify-center items-center flex-1 ">

          {/* text */}
          <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.1}}
          className="pt-[28rem] md:pt-[48rem] lg:pt-[60rem]  xl:pt-0 xl:flex-1 max-w-xl mx-auto">
            <PreTitle name='about us' />
            <h2 className="h2 mt-4 mb-10 max-w-md  ">
            Welcome To Phlox
          Barber Shops.
            </h2>
            <div className="flex gap-x-6 items-center">
            <div className="h-[3.8rem] w-[0.5rem] bg-primary mt-2 hidden md:flex" />
              <p className="text-[1.2rem] leading-6 mb-3 font-medium  ">
              Proactively integrate turnkey synergy with
              world-class portals. Proactively harness sticky
              users whereas cooperative opportunities.
              harness exceptional before fully researched
              services. Seamlessly network client-focused
              results via interdependent markets.
              </p>
            </div>
            <div className="mt-6">
                <img src={images.Signature} alt="signature" />
              </div>
          </motion.div>
        </div>
    </section>
  )
}

export default About
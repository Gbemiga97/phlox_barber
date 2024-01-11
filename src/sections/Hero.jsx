import { PreTitle, Socials } from "../components"
import { images } from "../utils"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/variants"


const Hero = () => {
  return (
    <section id="home" className="bg-hero bg-cover bg-no-repeat min-h-[40rem] bg-[center] pt-32 xl:pt-40">
      <div className="container mx-auto">
        {/* text */}
        <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.1}}
        >
        <PreTitle name='Barber Shop' />
        <h1 className="h1 text-white max-w-md xl:max-w-xl mt-4">
          Create And
            Renovate
            Hairstyle
        </h1>
        {/* play btn */}
        <div className="flex gap-x-4 items-center mb-16 xl:mt-4 ">
          <p className="text-white text-2xl ">
            Watch Video
          </p>
          <div>
            <img src={images.PlayBtn} alt="play_btn" />
          </div>
        </div>
        {/* socials */}
          <Socials 
          iconStyles='hover:text-primary cursor-pointer transition-all'
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
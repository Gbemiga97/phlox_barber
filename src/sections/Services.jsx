import { PreTitle, ServiceCard } from "../components"
import { data } from "../utils"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/variants"



const Services = () => {
  return (
    <section  id="services" className="pt-24">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-center gap-y-8 xl:gap-y-0 xl:gap-x-8">
          {/* title */}
          <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.1}}
          className="flex flex-col justify-center items-center xl:items-start xl:justify-start mx-auto text-center 
          max-w-lg xl:max-w-none gap-y-4 mb-8 xl:mb-0 xl:text-start">
            <PreTitle name='Our Services' />
            <h2 className="h2">
            Our special
            services for
            you.
            </h2>
          </motion.div>

          {/* services list */}
          <div className="grid md:grid-cols-3 xl:gap-x-4 gap-y-4 xl:gap-y-0">
            {
              data.services.map((service, i) => (
                <ServiceCard service={service} key={i} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
import { Map } from "../components"
import { data } from "../utils"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/variants"


const Location = () => {
  return (
    <section id='location' className="pt-28 mt-12">
      <div className="mx-[1rem]">
        {/* contact */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 ">
          {
            data.contact.map(({icon, title, p1, p2}, i) => (
              <motion.div
              variants={fadeIn('left', -0.7 + i)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.1}}
              key={i} className="bg-secondary px-16 py-12 md:last:col-span-2 xl:last:col-span-1  text-white flex flex-col justify-center items-center  text-center
               gap-y-4" >
                <div>
                <img src={icon} alt={title} />
                </div>
                <h5 className="text-2xl font-bold font-primary">
                  {title}</h5>
                  <div className="font-medium text-base">
                <p>{p1}</p>
                <p>{p2}</p>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
      {/* Map */}
      <Map />
    </section>
  )
}

export default Location
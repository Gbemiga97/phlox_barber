import { PreTitle } from "../components"
import data from "../utils/data"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/variants"


const PriceList = () => {
  return (
    <section id="prices" className="bg-price bg-cover bg-no-repeat bg-center w-full h-[75vh]  mt-32 pt-24  text-white">
      <div className="container mx-auto">
        {/* text */}
        <motion.div 
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.1}}
        className="flex justify-center  flex-col max-w-xs mx-auto mb-24 xl:mb-12">
          <PreTitle name='Price List' />
          <h2 className="h2">
          First cut free
          for kids.
          </h2>
        </motion.div>
      </div>
      {/* price list */}
      <motion.div
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.1}}
      className="xl:mx-[6rem] container mx-auto  bg-secondary min-h-fit  grid xl:grid-cols-2 gap-y-12 xl:gap-y-0
      xl:gap-x-24 md:px-16 py-24">
        {/* haircuts and shaving */}
        <div className="border-b pb-16 xl:border-none xl:pb-0">
          <PreTitle name='Price List' />
          <h4 className="font-primary text-white text-4xl font-bold">
          Haircuts & Shaves
          </h4>
          <div className="flex gap-x-12 items-center mt-10 w-full">
          <div className="h-[9.8rem] w-[0.2rem] bg-primary hidden md:flex" />
          <div className=" flex flex-col gap-y-4 w-full">
            {
              data.priceList.slice(0, 6).map(({name, price}, i) => (
                <div key={i}
                className="flex items-center w-full justify-between gap-x-2"
                >
                  <p className="capitalize text-xl flex-nowrap ">
                    {name}</p>
                  <div className="w-full  border-t border-dashed border-[#96969654]  flex-1" />
                  <p className="text-primary text-xl font-semibold  ">
                    $ {price}</p>
                </div>
              ))
            }
            </div>
          </div>
        </div>

          {/* Wax & Threading */}
        <div>
          <PreTitle name='Price List' />
          <h4 className="font-primary text-white text-4xl font-bold">
          Wax & Threading
          </h4>
          <div className="flex gap-x-12 items-center mt-10 w-full">
          <div className="h-[9.8rem] w-[0.2rem] bg-primary hidden md:flex" />
          <div className=" flex flex-col gap-y-4 w-full">
            {
              data.priceList.slice(6, 12).map(({name, price}, i) => (
                <div key={i}
                className="flex items-center w-full justify-between gap-x-2"
                >
                  <p className="capitalize text-xl flex-nowrap ">
                    {name}</p>
                  <div className="w-full  border-t border-dashed border-[#96969654]  flex-1" />
                  <p className="text-primary text-xl font-semibold  ">
                    $ {price}</p>
                </div>
              ))
            }
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default PriceList
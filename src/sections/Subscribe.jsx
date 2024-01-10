import { FaEnvelope } from "react-icons/fa"
import { Input, PreTitle } from "../components"
import { data } from "../utils"

const Subscribe = () => {
  return (
    <section id="sub" className="mt-12 pt-24">
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
            <div key={i}>
              <img src={img} alt="haircut" />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Subscribe
import { images } from "../utils"

const Testimonial = () => {
  return (
   <section className="bg-testimonial bg-cover bg-no-repeat my-24 py-24 ">
    <div className="container mx-auto">
      {/* text */}
      <div className="flex items-center justify-center flex-col text-center">
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
      </div>
    </div>
   </section>
  )
}

export default Testimonial


import { useMediaQuery } from "react-responsive"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon } from "leaflet"
import 'leaflet/dist/leaflet.css'

import { motion } from "framer-motion"
import { fadeIn } from "../utils/variants"


const marker = [
    {
        position: [34.052235, -118.243683],
        title: 'Location 1',
        subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        image: '/map/1.png'
    },
    {
        position: [33.9748, -118.3356],
        title: 'Location 2',
        subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        image: '/map/2.png'
    },
    {
        position: [34.0211, -118.3965],
        title: 'Location 3  ',
        subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        image: '/map/3.png'
    },
]

const customIcon = new Icon({
    iconUrl: '/pin-solid.svg',
    iconSize: [40, 40]
})


const Map = () => {

    const isMobile = useMediaQuery({
        query: '(max-width: 768px)', 
    })

    

  return (
    <motion.section 
    variants={fadeIn('up', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount: 0.2 }}
    className="relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white
     xl:after:via-white/80 xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20 " id="contact">
        <MapContainer center={[34.052235, -118.243683]} zoom={isMobile ? 10 : 12} 
    className={`${isMobile ? 'h-[200px]' : 'h-[350px]' } z-10`}
        zoomControl={false}
        >
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
            />
            {/* marker */}
            {
                marker.map(({position, title, subtitle, image}, i) => (
                    <Marker key={i} icon={customIcon} position={position}>
                    <Popup>
                        <div className="flex gap-x-[1.8rem]">
                            <div className="flex-1">
                                <h3>{title}</h3>
                                <p className="leading-snug">
                                    {subtitle}</p>
                            </div>
                            <div className="flex-1">
                            <img
                            src={image} width={130} height={160} alt={title}
                            />
                            </div>
                        </div>
                    </Popup>
                    </Marker>
                ))
            }
        </MapContainer>
    </motion.section>
  )
}

export default Map
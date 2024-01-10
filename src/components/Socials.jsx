import {FaFacebookF, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa'


const Socials = ({iconStyles}) => {
  return (
    <div className='flex gap-x-4 items-center text-white mt-4 text-xl '>
        <div className={`${iconStyles}`}>
            <FaFacebookF />
        </div>
        <div className={`${iconStyles}`}>
            <FaInstagram />
        </div>
        <div className={`${iconStyles}`}>
            <FaLinkedin />
        </div>
        <div className={`${iconStyles}`}>
            <FaTwitter />
        </div>
    </div>
  )
}

export default Socials
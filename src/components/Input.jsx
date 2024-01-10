import React from 'react'

const Input = ({name, label, icon, placeholder}) => {
  return (
    <div className='flex flex-col gap-y-6'>
        <label
        className='font-primary text-xl font-semibold text-black'
        htmlFor={name}>
            {label}</label>
        <div className='bg-white w-full flex items-center gap-x-4 h-20 border-b-2   border-black'>
            <div className='text-primary text-3xl'>
                {icon}</div>
            <input 
            className='bg-transparent placeholder-[#364150] text-base w-full '
            type="text" name={name}  placeholder={placeholder} />
        </div>
    </div>
  )
}

export default Input
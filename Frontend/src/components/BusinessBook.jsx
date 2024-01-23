import React from 'react'
import { Book } from './Book'
import { Button2 } from './Button2'

export const BusinessBook = () => {
  return (
    <div className='sm:h-[20%] flex bg-gray-300  p-8  justify-evenly items-center  '>
        <div className='md:pr-[25px] sm:text-[100%] text-xl  '>If you are an interested business partner who wants to join our mission, please contact us-</div>
        <div className='  flex justify-center items-center gap-2'>
            <Book />
            <Button2/>
        </div>
    </div>
  )
}

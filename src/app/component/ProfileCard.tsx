import Image from 'next/image'
import React from 'react'
import avatar from "../img/user.jpg";

export const ProfileCard = () => {

    return (
        <div className='flex flex-row justify-between bg-dusk p-16 px-96'>
            <div className='flex flex-row align-middle items-center gap-6'>
            <div>
                <Image src={avatar} alt="user profile"  className='w-28 rounded-full'/>
            </div>
            <div>
                <h1 className='text-3xl font-bold'>John Allen Troy Valena</h1>
                <p>202236115</p>
                <p>CISTM - IT</p>
            </div>
            </div>

            <div>
            <h1 className='font-bold mb-2'>Contribution Profile</h1>
            <span className='flex gap-2'>
                <p className='p-2 border border-white-25 rounded-md'>3 Papers</p>
                <p className='p-2 border border-white-25 rounded-md'>100 Commends</p>
            </span>
            </div>
        </div>
    )

}
import React from 'react'
import Image from 'next/image'
import document from "@/app/img/document.png"
import avatar from "@/app/img/user.jpg";

const tagColors = {
    IT: "bg-dusk"
    // Add more tags as needed
  };

const NotificationCard = (props) => {
  return (
    <div className='flex flex-col align-middle items-center'>
         <div className='bg-dark rounded-md border border-dusk-foreground p-8 px-10 m-2 w-6xl'>
              <div className='flex align-middle text-center justify-between items-center'>
                <span className='flex align-middle items-center gap-4'>
                  <Image src={avatar} alt="" className='w-10 rounded-full' />
                  <p>{props.username} {props.action}</p>
                </span>
                <span className='flex justify-between'>
                  <p>{props.time}</p>
                </span>
              </div>

              <div className='flex gap-4 mt-4 ml-12'>
                <Image src={props.img} alt="document thumbnail" className='w-20'/>
                <div>
                    <h3 className='text-xl font-bold'>{props.title}</h3>
                    <div className="flex gap-2 flex-wrap overflow-hidden">
                    </div>
                    <p className='text-white-25 text-md'>{props.description}</p>
                </div>
      
              </div>
          </div>
    </div>
  )
}

export default NotificationCard
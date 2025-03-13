import React from 'react'
import NavBar from '../component/NavBar'
import Image from 'next/image'
import document from "@/app/img/document.png"
import avatar from "@/app/img/user.jpg";
import NotificationCard from '../component/NotificationCard';
import { FaLink, FaTriangleExclamation } from 'react-icons/fa6';

function Notification() {
  return (
    <div className='bg-midnight h-auto'>
        <NavBar/>
        
        <main className='flex flex-col items-center'>
          <div className='flex flex-col items-start p-8'>
            <div>
                <h1 className="text-3xl font-bold mb-2">Notifications</h1>
            </div>

            <NotificationCard
              avatar={avatar}
              username="John Allen Troy Valena"
              action="added this file on their bookmark"
              time="Just Now"
              img={document}
              title="ReVault: Cloud Repository with SEO Metadata Tagging for Archiving Thesis Works of PLM CISTM Students" 
              description="Traditional systems for archiving research-based works rely on physical documentation or unstructured digital repositories, leading to inefficiencies in version tracking, categorization, and retrieval "
            />

            <NotificationCard
              icon={<FaTriangleExclamation className='text-2xl text-mustard-warning'/>}
              action="Your file has been deleted due to potential spam"
              time="1h ago"
              img={document}
              title="ReVault: Cloud Repository with SEO Metadata Tagging for Archiving Thesis Works of PLM CISTM Students" 
              description="Traditional systems for archiving research-based works rely on physical documentation or unstructured digital repositories, leading to inefficiencies in version tracking, categorization, and retrieval "
            />

            <NotificationCard
              avatar={avatar}
              username="Matthew Jacob Insigne"
              action="commended this file."
              time="4h ago"
              img={document}
              title="ReVault: Cloud Repository with SEO Metadata Tagging for Archiving Thesis Works of PLM CISTM Students" 
              description="Traditional systems for archiving research-based works rely on physical documentation or unstructured digital repositories, leading to inefficiencies in version tracking, categorization, and retrieval "
            />

            
            <NotificationCard
              icon={<FaTriangleExclamation className='text-2xl text-mustard-warning'/>}
              action="Your file has been deleted due to plagiarism"
              time="1h ago"
              img={document}
              title="ReVault: Cloud Repository with SEO Metadata Tagging for Archiving Thesis Works of PLM CISTM Students" 
              description="Traditional systems for archiving research-based works rely on physical documentation or unstructured digital repositories, leading to inefficiencies in version tracking, categorization, and retrieval "
            />
        </div>
        </main>
     
    </div>
  )
}

export default Notification
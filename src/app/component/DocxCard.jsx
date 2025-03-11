import React from "react";
import { FiLink2 } from 'react-icons/fi'
import Image from "next/image";
import { FaBook, FaBookmark, FaBookOpen, FaLink } from "react-icons/fa6";

const tagColors = {
    IT: "bg-dusk"
    // Add more tags as needed
  };

// export default function DocxCard() {
//     return (
//         <>
//         <div className="flex p-8 bg-dark">
//             <div>
//                 <img src="/" alt="#" />
//             </div>
//             <div>
//                 <h1>Research title</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventore voluptates ut totam accusantium, doloremque quo assumenda magni atque quasi a corporis commodi</p>
//             </div>
//             <div>
//                 <button className="">Cite</button>
//                 <button>Read</button>
//             </div>
//         </div>
//         </>
//     )
// }


const DocsCard = (props) => {
    return (  
      <div className='w-9xl flex align-middle items-center gap-2 p-6 px-8 rounded-xl border border-dusk bg-dark'>
          <div className='w-52'>
            <a href={props.link}>
              <Image src={props.img} alt="Project 1"/>
            </a>
          </div>
  
          <div className='flex flex-col p-4 gap-1 items-start'>
              <h3 className='text-xl font-bold'>{props.title}</h3>
              <div className="flex gap-2 flex-wrap overflow-hidden mt-2">
                {/* Mapping over tags */}
                {props.tags && props.tags.length > 0 ? (
                  props.tags.map((tag, index) => (
                    <p
                      key={index}
                      className={`flex text-white text-sm rounded-sm w-auto p-1 px-2 ${
                        tagColors[tag] || "bg-dusk" // Default to gray if no color found
                      }`}
                    >
                      {tag}
                    </p>
                  ))
                ) : (
                  <p className="text-white text-md italic">No tags available</p>
                )}
              </div>
              <p className='text-white text-md'>{props.description}</p>
                <div className="mt-6 flex justify-around gap-4">
                    <button className="flex flex-row items-center align-middle gap-2 px-6 py-2 bg-teal rounded-sm cursor-pointer "> <FaBookOpen/> Read</button>
                    <button className="flex flex-row items-center align-middle gap-2 px-6 py-2 bg-dusk rounded-sm cursor-pointer "> <FaLink/> Cite</button>
                    <button className="flex flex-row items-center align-middle gap-2 px-6 py-2 bg-dusk rounded-sm cursor-pointer hover:bg-midnight"> <FaBookmark/> Bookmark</button>

                </div>
          </div>
      </div>
    )
  }
  
  export default DocsCard
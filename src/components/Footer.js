import React from 'react'
import {FaTwitter,FaGithub } from 'react-icons/fa';
import {SiCodesandbox} from 'react-icons/si'
export default function Footer() {
    return (
             <div className="d-flex justify-content-center">
                 <div className="p-3">
                     <div className="d-flex flex-row">
                     <div className="p-2">
                     <a href="https://codesandbox.io/u/gulshanza77">
                     <SiCodesandbox size={20}/>
                     </a>
                     
                     </div>
                     <div className="p-2">
                     <a href="https://twitter.com/canitech1">
                         <FaTwitter size={20}/>
                     </a>
                    
                     </div>
                     <div className="p-2">
                     <a href="https://github.com/ShanzaGul">
                        <FaGithub  size={20}/> 
                     </a>
                     
                     </div>
                     </div>
                 </div>
             </div>
    )
}

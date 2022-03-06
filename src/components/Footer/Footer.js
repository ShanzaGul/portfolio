import React from 'react'
import {FaTwitter,FaGithub } from 'react-icons/fa';
import {SiCodesandbox} from 'react-icons/si'
export default function Footer() {
    return (
             <div className="d-flex justify-content-center" style={{ backgroundColor: "#0E185F" }}>
                 <div className="p-3">
                     <div className="d-flex flex-row">
                     <div className="p-2">
                     <a href="https://codesandbox.io/u/gulshanza77">
                     <SiCodesandbox size={20} color="white"/>
                     </a>
                     
                     </div>
                     <div className="p-2">
                     <a href="https://twitter.com/guldevtech">
                         <FaTwitter size={20} color="white"/>
                     </a>
                    
                     </div>
                     <div className="p-2">
                     <a href="https://github.com/ShanzaGul">
                        <FaGithub  size={20} color="white"/> 
                     </a>
                     
                     </div>
                     </div>
                 </div>
             </div>
    )
}

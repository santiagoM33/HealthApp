import React from 'react';

//ICONS
import { IconContext } from "react-icons";
import { FaRegEnvelope } from 'react-icons/fa';

const IconAvatar = () => ( 
    <IconContext.Provider value={{ color: "grey", className: "circle", size:"3em"}} >
        <div className="circle">
            <FaRegEnvelope />
        </div>
    </IconContext.Provider> 
 );

 
export default IconAvatar;
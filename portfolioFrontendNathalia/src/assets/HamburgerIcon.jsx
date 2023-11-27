import React from 'react';
import { MainContext } from "../Context";
import { useContext } from 'react';

const HamburgerIcon = ({addedStyles}) => {

    const { setToggle, toggle } = useContext(MainContext)
  return (
    <svg width="40" height="40" className={`${addedStyles}`} onClick={()=> setToggle(!toggle)} viewBox="0 0 448 512">
        <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"/>
    </svg>
  )
}

export default HamburgerIcon
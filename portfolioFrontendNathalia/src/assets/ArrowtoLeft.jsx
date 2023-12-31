import React from 'react';
import { MainContext } from '../Context';
import { useContext } from 'react';

const ArrowtoLeft = ({addedStyles}) =>{
    const { switchWork , setSwitchWork } = useContext(MainContext)
    return (
      <svg width="25" height="25" className={addedStyles} viewBox="0 0 512 512" onClick={()=> setSwitchWork(!switchWork)}>
          <path d="M512 256a256 256 0 1 0-512 0 256 256 0 1 0 512 0zM231 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71 182.1.1c13.3 0 24 10.7 24 24s-10.7 24-24 24H193.9l71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L119 273c-9.4-9.4-9.4-24.6 0-33.9L231 127z"/>
      </svg>
    )
}

export default ArrowtoLeft
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './CheckBox.css'

function CheckBox({placeHolder}) {
    const [selected, setSelected] = useState(false)

    function toggleSelected(){
        if(selected){
            setSelected(false)
        }else{
            setSelected(true)

        }
    }
  return (
    <div className='checkCont'>
        <i className='CheckBox' onClick={toggleSelected} data-selected={selected}></i>
        <span>{placeHolder}</span>
    </div>
  )
}

export default CheckBox
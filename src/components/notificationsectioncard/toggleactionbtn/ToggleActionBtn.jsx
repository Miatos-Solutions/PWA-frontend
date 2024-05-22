/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './toggleAction.css'

function ToggleActionBtn({selected, changeFromSettings, item, child, onClick}) {

    
    function setItemInSettings(){
        if(selected){
            changeFromSettings(child, false, item)
        }else{
            changeFromSettings(child, true, item)
        }
    }
  return (
    <span className="toggle-selector" data-selected={selected} onClick={()=>{
        setItemInSettings()
        try{
            onClick()
        }catch(error){
            return
        }
    }} ></span>
)
}

export default ToggleActionBtn
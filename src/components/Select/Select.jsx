/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Select.css'


var GenVal = "Select"
function Select({className, selected, value, children}) {
    const [dropped, setDropped] = useState(false)
    function drop(){
        if(dropped){
            setDropped(false)
        }else{
            setDropped(true)
        }
    }
    useEffect(() => {
      document.querySelector(".options").addEventListener("click", (e)=>{
        if(e.target.id =="option"||e.target.parentElement.id =="option"|| e.target.parentElement.parentElement.id =="option"){
            
            setDropped(false)

        }
      })
    }, [])

  return (
        <div className={className?className:'Select'}>
            <div className="valueCont" onClick={drop}>
                <div className="val">
                    <span className="valueOthers">{selected}</span>
                    <b className="valueTxt">{
                        !value|| value==""?
                            GenVal
                        :value
                    }</b>
                </div>
                <i className="ICN-drop" data-dropped={dropped}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z" fill="black"/>
                    </svg>
                </i>
            </div>
            <div className="selected"></div>
            <div className="options" style={!dropped?{display: 'none'}:dropped?{display: 'block'}:null}>
                {children}
            </div>
        </div>
    )
}
function Option({className, value, children, onClick}){
    return (
        <div className={className?className:'option'} id='option' style={value==GenVal?{backgroundColor: "#d0d0d0"}:null} onClick={()=>{
            try{
                
                onClick(value)
                GenVal = value

                
            }catch(error){
                return
            }
        }}>{children}</div>
      )
}

export const Selection = {
    Select,
    Option
}
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import './DropMenu.css'
import { changeValue } from "./changeValue";
import { findChild } from "./findChild";
// import { Link } from "react-router-dom";

function DropMenu({ isStatic, children, isLink, defaultText, options, selectedBg, dropped, onDropped ,ariaSelect, optionsDrop, colorOpt, colorSelect, optionItem, value }) {
  const [drop, setDrop] = useState(dropped)
  
  function dropDown(e) {
    // drop menu
    let tempEle;
    let child;
    if (e.target.hasAttribute("data-dropMenu") && !isStatic) {
      tempEle = e.target;
      child = findChild(
        tempEle.parentElement.children,
        tempEle.getAttribute("data-dropMenu")
      );

      tempEle.parentElement.classList.toggle("dropped");
      child.classList.toggle("closed");
    } else if (e.target.parentElement.hasAttribute("data-dropMenu") && !isStatic) {
      tempEle = e.target.parentElement;
      child = findChild(
        tempEle.parentElement.children,
        tempEle.getAttribute("data-dropMenu")
      );

      tempEle.parentElement.classList.toggle("dropped");
      child.classList.toggle("closed");
    } else if (
      e.target.parentElement.parentElement.hasAttribute("data-dropMenu") && !isStatic
    ) {
      tempEle = e.target.parentElement.parentElement;
      child = findChild(
        tempEle.parentElement.children,
        tempEle.getAttribute("data-dropMenu")
      );

      tempEle.parentElement.classList.toggle("dropped");
      child.classList.toggle("closed");
    }
  }

  useEffect(() => {
    onDropped(drop)
  }, [drop])
  
  
  

  



  let values;
  return (
    <menu className={drop&&dropped?`dropMenu dropped`:`dropMenu`}>
      <div style={{
        backgroundColor: selectedBg,
        color: colorSelect,
        border: `2px solid ${colorSelect}`
        }} className="selected" data-dropmenu="dropList" onClick={(e) => {
            dropDown(e)
            try{
              if(drop){
              setDrop(false)
              }else{
                setDrop(true)
              }
            }catch(error){
              return
            }
          }}>
        <b className="text">{defaultText}</b>
        <i className="ICN-arr">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z"
              fill={colorSelect}
            ></path>
          </svg>
        </i>
      </div>
      <div className={`dropList ${isStatic ? "" : "closed"}`} style={{backgroundColor: optionsDrop}}>
      {children}
        <ul style={{color: colorOpt}}>
          {options.map((option, index) => {
            values = option.split(",")[0]
            
            if(isLink){
                if(option.split(",")[2] == " data-invalid" || option.split(",")[2] == "data-invalid"){
                
                return (
                    <li key={index} style={{backgroundColor: optionItem}} data-value={values} onClick={(e) => changeValue(e)} data-invalid>
                      {values}
                    </li>
                )
              }else  if(option.split(",")[2] != "data-invalid" && option.split(",")[1] != " data-invalid"){
                return (
                    <li key={index} style={{backgroundColor: optionItem}} data-value={values} onClick={(e) => changeValue(e)}>
                      <a href={option.split(",")[1]}>{values}</a>
                    </li>
                )
              }
            }else{
                if(option.split(",")[2] == " data-invalid" || option.split(",")[1] == "data-invalid"){
                
                return (
                  <li style={{backgroundColor: optionItem}} data-value={values} key={index} onClick={(e) =>  {
                    try{
                      value(changeValue(e))
                    }catch(error){
                      changeValue(e)
                    }
                  }} data-invalid>
                    {values}
                  </li>
                )
              }else  if(option.split(",")[2] != "data-invalid" && option.split(",")[1] != " data-invalid"){
                return (
                  <li style={{backgroundColor: optionItem}} data-value={values} key={index} onClick={(e) =>{
                    try{
                      value(changeValue(e))
                    }catch(error){
                      changeValue(e)
                    }
                  }}>
                    {values}
                  </li>
                )
              }
            }
            
          })
          
          
          }
        </ul>
      </div>
    </menu>
  );
}

export default DropMenu;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './NotificationSectionCard.css'

function NotificationSectionCard({sectionName, children}) {
    const [className, setClassName] = useState("")
    

    function capitalizeFirstLetter(word) {
        if (!word) return word; // Check if the input is empty or not
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    

    function capitalizeSentence(sentence) {
        return sentence.split(' ').map(capitalizeFirstLetter).join(' ');
    }

    useEffect(() => {
        setClassName("")
      try {
        sectionName.split(" ").map((i) =>{
            setClassName(prev => (
                prev.charAt(0).toUpperCase() + prev.slice(1).toLowerCase() + i.charAt(0).toUpperCase() + i.slice(1).toLowerCase()
            ))
        })
      } catch (error) {
        return
      }
    }, [])
    


  return (
    <section className={"NotificationSectionCard "+className}>
        <h3>{capitalizeSentence(sectionName)}</h3>

        <div className="sectionContent">
            {children}
        </div>
    </section>
  )
}

export default NotificationSectionCard
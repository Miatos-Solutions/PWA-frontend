import { findChild } from "./findChild";

export function changeValue(e) {
    let tempEle;
    let prev;
    // change value +/-

    if (e.target.hasAttribute('data-value')) {
        tempEle = e.target
        if(!tempEle.hasAttribute("data-invalid")){
            let valueHolder = findChild(e.target.parentElement.parentElement.parentElement.children, 'text')
            for (const key in tempEle.parentElement.children) {
                if (Object.hasOwnProperty.call(tempEle.parentElement.children, key)) {
                    const theLiz = tempEle.parentElement.children[key];
                    if (theLiz.hasAttribute("aria-selected")) {
                        theLiz.removeAttribute("aria-selected")
                    }
                }
            }
    
            tempEle.setAttribute("aria-selected", "true")
            valueHolder.innerText = ''
            let valo =""

            // eslint-disable-next-line no-unused-vars
            let spl = tempEle.getAttribute('data-value').split('-').forEach(str => {
                    valueHolder.innerText += " " + str;
                    valo += " " + str
            });
            // console.log(tempEle.parentElement.parentElement.parentElement.classList.toggle('dropped'))
            prev = findChild(tempEle.parentElement.parentElement.parentElement.children, 'dropList')
            prev.classList.add('closed')
            return valo
        }else if(tempEle.hasAttribute("data-invalid")){
            prev = findChild(tempEle.parentElement.parentElement.parentElement.children, 'dropList')
            prev.classList.add('closed')
            return
        }
        


    }else if (e.target.parentElement.hasAttribute('data-value')) {
        tempEle = e.target.parentElement
        if(!tempEle.hasAttribute("data-invalid")){
            let valueHolder = findChild(e.target.parentElement.parentElement.parentElement.parentElement.children, 'text')
            for (const key in tempEle.parentElement.children) {
                if (Object.hasOwnProperty.call(tempEle.parentElement.children, key)) {
                    const theLiz = tempEle.parentElement.children[key];
                    if (theLiz.hasAttribute("aria-selected")) {
                        theLiz.removeAttribute("aria-selected")
                    }
                }
            }
    
            tempEle.setAttribute("aria-selected", "true")
            valueHolder.innerText = ''
            let valo =""
            // eslint-disable-next-line no-unused-vars
            let spl = tempEle.getAttribute('data-value').split('-').forEach(str => {
                    valueHolder.innerText += " " + str
                    valo += " " + str
            });
            // console.log(tempEle.parentElement.parentElement.parentElement.classList.toggle('dropped'))
            prev = findChild(tempEle.parentElement.parentElement.parentElement.children, 'dropList')
            prev.classList.add('closed')
            return valo
        }else if(tempEle.hasAttribute("data-invalid")){
            prev = findChild(tempEle.parentElement.parentElement.parentElement.children, 'dropList')
            prev.classList.add('closed')
            return
        }
        


    }
}
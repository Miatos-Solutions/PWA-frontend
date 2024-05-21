export function getMenuToBeClicked(menuClass){
    let menus = document.querySelectorAll(`[data-dropmenu="dropList"]`)
        menus.forEach(menu => {
            if (menu.parentElement.parentElement.classList.contains(menuClass)){
            menu.click()
            }

        })
}
export function findChild(fromObject, childClass) {
    for (const key in fromObject) {
        if (Object.hasOwnProperty.call(fromObject, key)) {
            const child = fromObject[key];

            if (child.classList.contains(childClass)) {
                return child;
            } else {
                // Add a return statement for the recursive call
                const foundChild = findChild(child.children, childClass);
                if (foundChild) {
                    return foundChild;
                }
            }

        }
    }
}
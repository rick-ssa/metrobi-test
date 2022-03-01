//1) Write a javascript function that finds the duplicate items in any given array.


const duplicateItems = (items) => {
    const objectItems = items.reduce((prev,item)=>{
        const newItem = {}
        if(prev[item]) {
            newItem[item] = prev[item] + 1
            
        } else {
            newItem[item] = 1
        }
        return {...prev,...newItem}

    },{})

    const duplicateItemsArray = []

    for(let item in objectItems) {
        if (objectItems[item]>=2) {
            duplicateItemsArray.push(item)
        }
    }
    
    return duplicateItemsArray
}

const testDuplicate= duplicateItems(["car",4,2,'car',5,1,4,2,5,8,9,1,5,9,"a","f","A","a","light", "Light"])

console.log(testDuplicate)
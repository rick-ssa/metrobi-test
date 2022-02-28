//1) Write a javascript function that finds the duplicate items in any given array.


// duplicate is a number * 2?
// the input array arg will contain only string and number or objects and other arrays too?
// if there is two string i shoud consider it as case insensitive or sensitive?
// the output should be an array?

const duplicateItems = (items) => {
    const objectItems = items.reduce((prev,item)=>{
        const isString = typeof item === 'string'
        const itemParsedType = isString ? item.toLowerCase() : item
        const newItem = {}
        if(prev[itemParsedType]) {
            newItem[itemParsedType] = prev[itemParsedType] + 1
            
        } else {
            newItem[itemParsedType] = 1
        }
        return {...prev,...newItem}

    },{})

    const duplicateItemsArray = []

    for(let item in objectItems) {
        if (objectItems[item]===2) {
            duplicateItemsArray.push(item)
        }
    }
    
    return duplicateItemsArray
}

const testDuplicate= duplicateItems(["lian",4,2,'ricardo',5,1,4,2,5,8,9,1,5,9,"a","f","A","a","Ricardo", "Lian"])

console.log(testDuplicate)
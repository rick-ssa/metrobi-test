//1) Write a javascript function that finds the duplicate items in any given array.


const duplicateItems = (items) => {
    const objectItems = items.reduce((prev,item)=>{
        let key = item
        const itemType = typeof item
        
        if(itemType==='object') {
            key = JSON.stringify(item)
        }

        const newItem = {}
        if(prev[itemType + " : " + key]) {
            newItem[itemType + " : " + key] = prev[itemType + " : " + key] + 1

        } else {
            newItem[itemType + " : " + key] = 1
        }
        return {...prev,...newItem}

    },{})

    const duplicateItemsArray = []

    for(let item in objectItems) {
        if (objectItems[item]>=2) {

            let type = item.replace(/\s:\s.+/i,"")
            let itemString = item.replace(/^\w+\s:\s?/i,"")
            let parsedItem=itemString

            switch(type) {
                case 'number':

                    parsedItem= Number(itemString)
                    break;

                case 'object':

                    parsedItem = JSON.parse(itemString)
                    break;
            }
            duplicateItemsArray.push(parsedItem)
        }
    }

    return duplicateItemsArray
}

const testDuplicate= duplicateItems([4,2,'ricardo',{nome: 'estranho'}, {nome:'estranho'},[1,2,3,4],5,1,4,2,5,8,9,1,5,9,"a","f","A","a","ricardo",[1,2,3,4]])

console.log(testDuplicate) 
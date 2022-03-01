/* 7) Think that you have an unlimited number of carrots, but a limited number of carrot
types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
weight and a price. Write a function that takes carrotTypes and capacity and return the
maximum value the bag can hold. [Python or Javascript]*/


const getMaxValue = (carrotType, capacity) => {
    let maxValue = 0

    // sort for price/kg desc
    carrotType.sort((a,b)=> {
        const priceByKgA = a.price / a.kg
        const priceByKgB = b.price / b.kg

        if(priceByKgA.toFixed(2) === priceByKgB.toFixed(2)) { // case have the same price/kilo sort for kg asc
            return a.kg - b.kg
        }

        return priceByKgB - priceByKgA 
    })

    carrotType.map((carrot,index, array)=>{
        let idStart = index + 1
        let quantity = Math.floor(capacity / carrot.kg)
        let value = quantity * carrot.price
        let capacityLeft = capacity - (quantity * carrot.kg)
        if (capacityLeft===0) {
            maxValue = Math.max(maxValue,value)
            return
        }
        for(let i = idStart; i < array.length; i++ ) {
            if(array[i].kg > capacityLeft) {
                continue
            }
            quantity = Math.floor(capacityLeft / array[i].kg)
            value += quantity * array[i].price
            capacityLeft = capacityLeft - (quantity * array[i].kg)
            if (capacityLeft===0) {
                maxValue = Math.max(maxValue,value)
                return
            }
        }

        maxValue = Math.max(maxValue,value)
    })

    return maxValue
}

const solution  = getMaxValue( [{kg: 7, price: 150},{kg:2, price:40}, {kg: 37, price: 816},{kg: 5, price: 100},{kg: 3, price: 70}],36)



console.log(solution)
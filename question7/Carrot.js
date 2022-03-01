/* 7) Think that you have an unlimited number of carrots, but a limited number of carrot
types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
weight and a price. Write a function that takes carrotTypes and capacity and return the
maximum value the bag can hold. [Python or Javascript]*/

// when does the question say maximum value it refers to price or weight?  
// If it is weight, what is the criteria do fill the bag? lower price amount or higher price amount?


const getMaxValue = (carrotType, capacity) => {
     carrotType.sort((a,b)=> {
        const priceByKgA = a.price / a.kg
        const priceByKgB = b.price / b.kg
        if(priceByKgA.toFixed(2) === priceByKgB.toFixed(2)) {
            return a.kg - b.kg
        }
        return priceByKgB - priceByKgA 
    })

    return carrotType
}

const solution  = getMaxValue( [{kg: 7, price: 150}, {kg: 34, price: 816},{kg: 5, price: 100},{kg: 2, price: 40},{kg: 3, price: 70}],36)



console.log(solution)
/* 5) A building has 100 floors. One of the floors is the highest floor an egg can be dropped
from without breaking. If a n egg is dropped from above that floor, it will break. If it is
dropped from that floor or below, it will be completely undamaged and you can drop theegg again. Given two eggs, find the highest floor an egg can be dropped from without
breaking, with as few drops as possible in the worst-case scenario. */


//the function returns an object with the highest floor where anyone can drop an egg without break it,
// the first floor where a egg will break if it is dropped and the times that the eggs were dropped.
// there is a optional argument to provide the highest floor that the egg will not break. If it is not provide
// a random floor will be generate

const higestUnbreakableFloor = (numHighestUbreakableFloor)=> {

    const indexHighestFloor = numHighestUbreakableFloor ? numHighestUbreakableFloor - 1 : Math.floor(Math.indexHighestFloor() * 99)

    const floors = Array.apply(null,Array(100)).map((floor,index)=>{
        if(index>indexHighestFloor) {
            return {floor: index + 1, breakable: true}
        } 
        return  {floor: index + 1, breakable: false}
    })

    let baseFloorIndex = 1
    let dropFloorIndex = 9
    let numDrops = 0

    for(let i=9; i<floors.length; i+=10) {
        numDrops++
        if(floors[dropFloorIndex].breakable) {
            break
        }
        if(i===99) {
            return ({
                numDrops, 
                highestUnbreakableFloor: floors[99], 
            })
        }

        baseFloorIndex = dropFloorIndex + 1
        dropFloorIndex += 10
    }

    for(let i=baseFloorIndex; i<dropFloorIndex; i++) {
        numDrops++
        if(floors[i].breakable) {
            break
        }
        baseFloorIndex += 1
    }
    return ({
        numDrops, 
        highestUnbreakableFloor: floors[baseFloorIndex - 1], 
        firstBreakableFloor: floors[baseFloorIndex]
    })
}


console.log(higestUnbreakableFloor())
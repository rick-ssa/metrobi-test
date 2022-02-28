/* 2) Write an async javascript function that writes every item in any given array with 1, 2,
4, 8, … seconds apart. ex: for [“a”,” b, “c, “d”], “a” is printed in 1 sec, “b” is printed in 2
seconds, “c” is printed in 4 seconds, ... */

const printItemsAsync =  items => {
    items.map((item,index)=>{
        const seconds = 2 ** index * 1000
        setTimeout(()=>console.log(item), seconds)
    })
}

printItemsAsync([1,2,4,8,16,32,64])
// let a


// let a = 100  // foreign company

// // let a = 300 => in same scope we can't redeclare let variable



// for(let i = 1; i<=1; i++){
//    // let a


// //    console.log("inner1", a) // error

//    let a = 200  // local company

//     console.log("inner2", a)  // 200


// }


// console.log("outer", a)



// line 1: var a



var a = 100  



for(let i = 1; i<=1; i++){


   console.log("inner1", a) 

   var a = 200  

 console.log("inner2", a) 


}


console.log("outer", a)

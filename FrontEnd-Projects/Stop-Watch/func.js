// function tatkalbook(){
//     return new Promise((resolve,reject)=> {
//         let bookingsuccess=false
//         if(bookingsuccess){
//             resolve(850)
//         }
//         else{
//             reject()
//         }
//         })
// }
//  tatkalbook().then((amt)=>console.log(`Thanks a lot i will transfer Rs.${amt} `))
//  .catch(()=>console.log("Thanks for trying") )

// function tosscoin(){
//     return new Promise((resolve,reject)=>{
//       //0-tail(failure)1-head(success)
//       const rand=Math.floor(Math.random()*2)
//       if(rand==0){
//         reject()
//       }
//       else{
//         resolve()
//       }
//     })
// }
// //tosscoin()
// //.then(()=> console.log("it is head you won"))
// //.catch(()=>console.log("It is a tail you lost"))

// let reachA=new Promise((resolve,reject)=>{
//     const reached=false
//     if(reached)
//         setTimeout(resolve,3000,"Tejas reached home")
//     else
//      reject("Tejas not reached")
// })
// /*let reachB=new Promise((resolve,reject)=>{
//     const reached=false
//     if(reached)
//         setTimeout(resolve,1000," Praveen reached home")
//     else
//      reject("Praveen not reached")
// })
// let reachC=new Promise((resolve,reject)=>{
//     const reached=true
//     if(reached)
//         setTimeout(resolve,2000,"Suraj reached home")
//     else
//      reject("Suraj not reached")
// })*/
// //Promise.all([reachA,reachB,reachC])
// //.then((msg)=> console.log(msg))
// //.catch((message)=> console.log(message))

// //promise-pending resolved,rejected
// //Promise.allSettled([reachA,reachB,reachC])
// //.then((message)=> console.log(message))
// //.catch((message)=> console.log(message))

// //Promise.any([reachA,reachB,reachC])
// //.then((message)=> console.log(message))
// //.catch((message)=> console.log(message))

// //Promise.race([reachA,reachB,reachC])
// //.then((message)=> console.log(message))
// //.catch((message)=> console.log(message))

// //try{
// //let num=prompt("Enter a number")
// //if(isNaN(num))
//  //throw "Enter a valid number "
// //if(num==='')
//   //  throw "Cannot be empty"
// //console.log(num*20)
// //}
// //catch(error){
//   //  console.log(error)
// //}
// //finally{
//   //  console.log("bye")
// //}

// //async-always returns a promise
// async function fn(){
//     return "hello"
// }
// console.log(fn())
// fn().then((msg)=>console.log(msg))

// async function asynstatus(){
//     try{
//         console.log("hi")
//         result=await reachA
//         console.log(result)
//         console.log("bye")
//     }
//     catch(error){
//         console.log(error)
//     }
    
// }

// asynstatus()
function tatkalbook() {
    return new Promise((resolve, reject) => {
        let bookingsuccess = false;
        if (bookingsuccess) {
            resolve(850);
        } else {
            reject(new Error("Booking failed"));
        }
    });
}

async function asynstatus() {
    try {
        console.log("hi");
        let result = await tatkalbook();
        console.log(result);
        console.log("bye");
    } catch (error) {
        console.log(error.message);
    }
}

asynstatus();
let add = new Promise((resolve, reject) => {
    let num = 0;
    if (num > 0) {
        reject('it is not a number');
    } else {
        resolve([10, 20]);
    }
});
 
add.then(([a, b]) => console.log(a + b))
   .catch((error) => console.log(error))

   
// let x = "I have completed my java fullstack project";
// let y = "I have not completed my java fullstack project";


// let promise = new Promise((resolve, reject) => {
//     if (x === y) {
//         resolve("Success: The statements match.");
//     } else {
//         reject("Error: The statements do not match.");
//     }
// });


// promise
//     .then(message => {
//         console.log(message);
//     })
//     .catch(error => {
//         console.log(error);
//     });

    
let x = "I have completed my java fullstack project";
let y = "I have not completed my java fullstack project";


function checkStatements(x, y) {
    return new Promise((resolve, reject) => {
        if (x === y) {
            resolve("Success: The statements match.");
        } else {
            reject("Error: The statements do not match.");
        }
    });
}

checkStatements(x, y)
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log(error);
    });

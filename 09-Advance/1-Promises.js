//DB CALLS
//NETWORK
//CRYPTOGRAPHY

// Way 1
const promiseOne = new Promise(function (resolve, reject){
    
    setTimeout(function() {
        console.log("Async task 1 in queue.");
        resolve();
    }, 1000);
})
promiseOne.then(function(){
    console.log("Task 1 complete.");
})


// Way 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 in queue.");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Task 2 is completed.");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Promise 3", Password:123});
    }, 1000);
});
promiseThree.then(function(data){
    console.log(data);
});

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Promise 4", Password:1234});
        }
        else{
            reject(console.log("Promise 4 went wrong"));
        }
    },1000)
})
promiseFour.then((data) => {
    console.log(data);
    return data.username;
}).then((username) => {
    return console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Something comoleted either Resolve or Reject");
})

// promise.all()

const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 1000);
  });
  
  const promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2 resolved');
    }, 2000);
  });
  
  const promiseC = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved');
    }, 3000);
  });
  
  Promise.all([promiseA, promiseB, promiseC])
    .then(values => {
      console.log(values); // Output: ['Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved']
    })
    .catch(error => {
      console.error(error); // This will not be called as all promises resolve successfully
    });
  
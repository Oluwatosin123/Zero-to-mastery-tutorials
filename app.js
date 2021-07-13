// const promise = new Promise((resolve, reject) => {
// if (true) {
//     resolve('stuff worked')
// } else {
//     reject('Error, it broke')
// }
// })

// promise
// .then(result => console.log(result + '!'))
// .then(result2 => {
//     throw Error
//     console.log(result2);
// })
// .catch(() => console.log(('error!')));

promise
.then(result => console.log(result + '!'))
.then(result2 => {
    throw Error
    console.log(result2);
})
.catch(() => console.log(('error!')));
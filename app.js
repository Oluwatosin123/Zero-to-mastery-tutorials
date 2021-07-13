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

// promise
// .then(result => result + '!')
// .then(result2 => result2 + '?')
// .catch(() => console.log('error!'))
// .then(result3 => {
//     console.log(result3 + '!');
// })

// const promise2 = new Promise((resolve, reject) => {
//         setTimeout(resolve,100, 'Hiii')
// })
// const promise3 = new Promise((resolve, reject) => {
//         setTimeout(resolve,1000, 'POOKIE')
// })
// const promise4 = new Promise((resolve, reject) => {
//         setTimeout(resolve,3000, 'Is it me you are looking for?')
// })

// Promise.all([promise, promise2, promise3, promise4])
// .then(values =>{
//     console.log(values);
// })

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map((url) => {
    return fetch(url).then(resp => resp.jason())
})).then(results => {
console.log(results[0]);
console.log(results[1]);
console.log(results[2]);
}).catch(() => console.log('error'));

/* ASYNC AWAIT */
//Not clean
fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.jason())
.then(console.log());

//Pretty much better
async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.jason();
    console.log(data);
}
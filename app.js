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


/* Type 1 */
// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ]

// Promise.all(urls.map((url) => {
//     return fetch(url).then(resp => resp.jason())
// })).then(results => {
// console.log(results[0]);
// console.log(results[1]);
// console.log(results[2]);
// }).catch(() => console.log('error'));

// /* Type 2 */
// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ]


// const urls = [
//     'http://swapi.dev/api/people/1',
//     'http://swapi.dev/api/people/2',
//     'http://swapi.dev/api/people/3',
//     'http://swapi.dev/api/people/4'
//   ]

// Promise.all(urls.map(url =>
//     fetch(url).then(people => people.json())
// ))
//   .then(array => {
//     console.log('1', array[0])
//     console.log('2', array[1])
//     console.log('3', array[2])
//     console.log('4', array[3])
//   })
//   .catch(err => console.log('ughhhh fix it!', err));


/* ASYNC AWAIT */
// Not clean
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(resp => resp.jason())
// .then(console.log());

 //Pretty much better
// async function fetchUsers() {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await resp.json();
//     console.log(data);
// }

// fetchUsers()

// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ]

// const getData = async function() {
//     try {
//         const [users, posts, albums] = await Promise.all(urls.map(url =>
//             fetch(url).then(resp => resp.json())
//             ))
//     console.log('users', users);
//     console.log('posts', posts);
//     console.log('albums', albums);
//     } catch {
//         console.log('oops');
//     }

// }

// Solve the below problems:

// #1) Convert the below promise into async await
// fetch("https://jsonplaceholder.typicode.com/users/")
//   .then((response) => response.json())
//   .then(console.log);

  /* Answer */
//   async function getUser() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/");
//     const data = await response.json();
//     console.log(data);
//   }

//   getUser()


/*ES2018 Object Spread Operator */
// const array = [1,2,3,4,5]
// function sum (a,b,c,d,e){
//     return a + b + c + d + e;
// }

// sum(... array) //15

// const animals = {
//     tiger: 23,
//     lion: 5,
//     monkey:2,
//     birds: 40
// }

// function objectSpread(p1, p2, p3){
//     console.log(p1);
//     console.log(p2);
//     console.log(p3);
// }

// const {tiger, lion, ...rest} = animals;

// objectSpread(tiger, lion, rest);

/*ES2018 finally() block */
//finally
// const urls = [
//     'http://swapi.dev/api/people/1',
//     'http://swapi.dev/api/people/2',
//     'http://swapi.dev/api/people/3',
//     'http://swapi.dev/api/people/4'
//   ]

//   Promise.all(urls.map(url => {
//       return fetch(url).then(people => people.json())
//   }))
//      .then(array => {
//          throw Error;
//          console.log('1', array[0]);
//          console.log('2', array[1]);
//          console.log('3', array[2]);
//          console.log('4', array[3]);
//      })
//      .catch(err => console.log('You awesome', err))
//      .finally(() => console.log('Extra'));

/*ES2018 for await of */

// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/postss',
//     'https://jsonplaceholder.typicode.com/albums'
//   ]

//   const getData = async function() {
//     try {
//       const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
//           const response = await fetch(url);
//           return response.json();
//       }));
//       console.log('users', users);
//       console.log('posts', posts);
//       console.log('albums', albums);
//     } catch (err) {
//       console.log('ooooooops', err);
//     }
//   }

  //New for await of feature:
//   const loopThroughUrl = (urls) => {
//     for (url of urls) {
//       console.log(url)
//     }
//   }


//   const getData2 = async function() {
//     const arrayOfPromises = urls.map(url => fetch(url));
//     for (const request of arrayOfPromises) {
//       console.log(request);
//     }

//     for await (const request of arrayOfPromises) {
//       const data = await request.json();
//       console.log(data)
//     }
    //In this case, for-await takes each item from the array and waits for it to resolve. You'll get the first response even if the second response isn't ready yet, but you'll always get the responses in the correct order.
//   }

/*promise.all only resolve if all promises are resolve*/
const promiseOne = new Promise((resolve, reject) =>
    setTimeout(resolve, 3000))
const promiseTwo = new Promise((resolve, reject) =>
    setTimeout(resolve, 3000))

    // Promise.all([promiseOne, promiseTwo]).then(data => console.log(data)).catch(e => console.log('something failed', e))
/*promise*/
    Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data)).catch(e => console.log('something failed', e))
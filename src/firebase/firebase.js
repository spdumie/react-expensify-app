import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
 
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//   description: "rent2",
//   note:'sss',
//   amout:1090,
//   createdAt: 3423423
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       console.log(childSnapshot);
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses);
//   })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses);
// }, (e) => {
// });

// database.ref('expenses').push({
//   description: "rent",
//   note:'',
//   amout:109500,
//   createdAt: 7297412983
// });

// var onValueChange = database.ref().on('value', (snapshot) => {
//   //console.log(snapshot.val());
//   var val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//   console.log("Error with data fatching", e);
// });

// setTimeout(() => {
//   database.ref().update({
//     job:{
//       title:"developer",
//       company:"google"
//     }
//   });
// }, 3000); 


// database.ref().once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e) => {
//   console.log('Error fatching data', e);
// })

// database.ref().set({
//   name:"Si Park",
//   age:43, 
//   isSingle:false,
//   location: {
//     city:'Portland',
//     country:'USA'
//   }
// }).then( () => {
//   console.log('firebase update sucess');
// }).catch( (e) => {
//   console.log('error', e);
// }); 

// database.ref('attributes').set({
//   height:180,
//   weight:82
// })

// database.ref().remove()
// .then(function() {
//   console.log("Remove succeeded.")
// })
// .catch(function(error) {
//   console.log("Remove failed: " + error.message)
// });

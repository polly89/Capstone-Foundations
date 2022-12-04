const firebaseConfig = {
    apiKey: "AIzaSyCGfEQ0jugSapk1zcVO-UMwCExJG8MGZ1c",
    authDomain: "mundo-magico-2c2f0.firebaseapp.com",
    databaseURL: "https://mundo-magico-2c2f0-default-rtdb.firebaseio.com",
    projectId: "mundo-magico-2c2f0",
    storageBucket: "mundo-magico-2c2f0.appspot.com",
    messagingSenderId: "44922031724",
    appId: "1:44922031724:web:e5f65938b8d2f6d1c69249",
    measurementId: "G-TMTG9ZVB9K"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Variables
  const auth = firebase.auth();
  const database = firebase.database();

  // // ------------------> Display Avatar on Map -- [POST MVP] <--------------------
// const displayAvatar = document.querySelector('#returnedAvatar')

// window.addEventListener("load", (event) => {
//   console.log("page is fully loaded");

//   const dbRef = firebase.database().ref();
//   dbRef.child('users/').child(user.uid).get().then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   }).catch((error) => {
//     console.error(error);
//   });
  
// });

// Option 2 Syntax
// const displayAvatar = document.querySelector('#returnedAvatar')

// window.addEventListener("load", (event) => {
//   console.log("page is fully loaded");

// const user = firebase.auth().currentUser;
// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayUsername = user.displayUsername;
//   const email = user.email;
//   const avatar = user.avatar;

//   console.log(user.avatar)

// }
// })
  // --------> Sing Out <---------
const signOutBtn = document.querySelector('.fa-sign-out')

if(signOutBtn){
  signOutBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log('sign out button clicked');

    auth
      .signOut()
      .then(function() {
        console.log('Signed Out');
        window.location.href = '/index.html'
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  })
}
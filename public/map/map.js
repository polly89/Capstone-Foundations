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

  // // ------------------> Display Avatar on Map  <--------------------
  const displayAvatar = document.querySelector('#returnedAvatar');

  window.addEventListener('load', (event) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        const ref = database
          .ref('/users/' + uid)
          .once('value')
          .then(function (snapshot) {
            const userData = snapshot.val();
            const avatar = userData.avatar;
            document.querySelector('#returnedAvatar').src = avatar;
          });
      }
    });
  });
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
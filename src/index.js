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

// ----------------->  Sign Up <------------------------
const signUpButton = document.getElementById('submit');

if(signUpButton){
signUpButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('clicked');

  const email = document.getElementById('reg-email');
  const password = document.getElementById('reg-password');
  const passConf = document.getElementById('reg-password-2');
  const username = document.getElementById('name');

  if (validateEmail(email) === false){
    alert('Formato de correo inválido.')
    return
  }
  if (validatePass(password) === false){
    alert('La contraseña debe contener 6 caracteres como mínimo.')
    return
  } 
  if(comparePass(password, passConf) === false){
    alert('Las contraseñas deben coincidir.')
    return
    // Don't run this code. 
  }
  if(validateUsername(username) === false){
    alert('Introduzca un nombre de usuario.');
    return
  }
//    Continue authorizing the user
  auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {

      window.location.href='/public/login/login.html';
      const user = userCredential.user;
      // Add user to db
    const database_ref = database.ref()
      //Create User data
      let user_data = {
        username: username,
        email: email,
        last_login: Date.now()
      }

    firebase.database().ref('users/' + user.uid).set(user_data)

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error code', errorCode);
      console.log('error Message', errorMessage);
    
      alert(errorMessage)
    });
});
}

function validateUsername(username){
    if(username.value <= 0){        
        return false
    } else {
        return true
    }
}

function validateEmail(email){
    let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(validRegex)){ 
        return true
    } else {
        return false
    }
}

function validatePass(password){
    if(password.value < 6){
        return false
    } else{
        return true
    }
}
function comparePass(password, passConf){
    if(password.value === passConf.value){
        return true
    } else {
        return false
    }
}


// ----------------->  Sign In <------------------------
// const signInButton = document.getElementById('subBtn');

// signInButton.addEventListener('click', (e)=> {
//     e.preventDefault();
//     console.log('clicked');

//     const email = document.getElementById('login-email');
//     const password = document.getElementById('login-password')

// auth
// .signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         window.location.href='/public/avatar/avatar.html';
//         const user = userCredential.user;

//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });
// });  
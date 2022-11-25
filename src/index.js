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

  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;
  const passConf = document.getElementById('reg-password-2').value;
  const username = document.getElementById('name').value;

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
    .createUserWithEmailAndPassword(email, password)
    .then(function(){

      window.location.href='/public/login/login.html';
      // Declare user variable
      let user = auth.currentUser;
      // Add user to db
      const database_ref = database.ref()
      //Create User data
      let user_data = {
        username: username,
        email: email,
        lastLogin: Date.now()
      }

    database_ref.child('users/' + user.uid).set(user_data)

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
    if(username <= 0){        
        return false
    } else {
        return true
    }
}

function validateEmail(email){
    let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(validRegex)){ 
        return true
    } else {
        return false
    }
}

function validatePass(password){
    if(password < 6){
        return false
    } else{
        return true
    }
}
function comparePass(password, passConf){
    if(password === passConf){
        return true
    } else {
        return false
    }
}


// ----------------->  Sign In <------------------------
const signInButton = document.getElementById('subBtn');

if(signInButton){
signInButton.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log('clicked');

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (validateEmail(email) === false || validatePass(password) === false){
      alert('Credenciales incorrectas.')
      return
    }
    
auth
.signInWithEmailAndPassword(email, password)
    .then(function(){
        window.location.href='/public/avatar/avatar.html';
        let user = auth.currentUser;
        const database_ref = database.ref()
        
        let user_data = {
        lastLogin: Date.now()
      }

    database_ref.child('users/' + user.uid).update(user_data)

    })
    .catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
    });
});  
}
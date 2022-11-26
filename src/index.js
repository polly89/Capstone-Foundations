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
// ---------------------> Avatar Builder <---------------------------
// Category Display 
const bodySelect = document.querySelector('#bodyDispCont')
const armSelect = document.querySelector('#armDispCont')
const legSelect = document.querySelector('#legDispCont')
const headSelect = document.querySelector('#headDispCont')
const mouthSelect = document.querySelector('#mouthDispCont')
const eyeSelect = document.querySelector('#eyeDispCont')

//Containers displaying options within the category selected
const cont1 = document.querySelector('.cont1')
const cont2 = document.querySelector('.cont2')
const cont3 = document.querySelector('.cont3')
const cont4 = document.querySelector('.cont4')

// Default avatar parts

const bodyDefault = document.querySelector('#bodyDefault')
const legDefault = document.querySelector('#legsDefault')
const headDefault = document.querySelector('#headDefault')
const eyeDefault = document.querySelector('#eyesDefault')
const mouthDefault = document.querySelector('#mouthDefault')
const armDefault = document.querySelector('#armsDefault')

// Avatar pieces for replacement
const body1 = src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/mermaid.png"
const body2 = src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/sweater.png"
const body3 = src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/bee.png"
const bod4 = src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/spots.png"

// JS to make the selections appear
bodySelect.addEventListener('click', () => {
    bodySelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/selectedBodDisplay.png"
    cont1.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/body-selection-1.png"
    cont2.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/body-selection-2.png"
    cont3.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/body-selection-3.png"
    cont4.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/body-selection-4.png"
})

bodyDefault.addEventListener('click', () =>{
  bodyDefault
})

armSelect.addEventListener('click', () => {
  armSelect.src = ""
  cont1.src = ""
  cont2.src = ""
  cont3.src = ""
  cont4.src = ""
})
legSelect.addEventListener('click', () => {
  legSelect.src = ""
  cont1.src = ""
  cont2.src = ""
  cont3.src = ""
  cont4.src = ""
})
headSelect.addEventListener('click', () => {
  headSelect.src = ""
  cont1.src = ""
  cont2.src = ""
  cont3.src = ""
  cont4.src = ""
})
eyeSelect.addEventListener('click', () => {
  eyeSelect.src = ""
  cont1.src = ""
  cont2.src = ""
  cont3.src = ""
  cont4.src = ""
})
mouthSelect.addEventListener('click', () => {
  mouthSelect.src = ""
  cont1.src = ""
  cont2.src = ""
  cont3.src = ""
  cont4.src = ""
})

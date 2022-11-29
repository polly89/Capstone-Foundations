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
// Queries:
// #1 Category Display (circles at the bottom of the screen)
const bodySelect = document.querySelector('#bodyDispCont')
const armSelect = document.querySelector('#armDispCont')
const legSelect = document.querySelector('#legDispCont')
const headSelect = document.querySelector('#headDispCont')
const mouthSelect = document.querySelector('#mouthDispCont')
const eyeSelect = document.querySelector('#eyeDispCont')

// #2Containers displaying options within the category selected (circles at the top of the screen)
const cont1 = document.querySelector('.cont1')
const cont2 = document.querySelector('.cont2')
const cont3 = document.querySelector('.cont3')
const cont4 = document.querySelector('.cont4')

// #3 Default part displayed on the avatar. 
const bodyDefault = document.querySelector('#bodyDefault')
const legDefault = document.querySelector('#legsDefault')
const headDefault = document.querySelector('#headDefault')
const eyeDefault = document.querySelector('#eyesDefault')
const mouthDefault = document.querySelector('#mouthDefault')
const armDefault = document.querySelector('#armsDefault')                 

let currentSelection = ''
// JS to make the selections appear:
    // #1 BODY
    bodySelect.addEventListener('click', () => {
      // Changes background color to show the category selected. 
      bodySelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/selectedBodDisplay.png"
        // Displays the options within that category.
        cont1.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/body-selection-1.png"
        cont2.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/body-selection-2.png"
        cont3.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/body-selection-3.png"
        cont4.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/body-selection-4.png"
        // // Resets the background color for inactive categories. 
        legSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/legs-display.png"
        headSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/head-diplay.png"
        mouthSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/head-diplay.png"
        armSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/arms-display.png"
        eyeSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/eyes-display.png"
        
        currentSelection = 'body'
})
// #2 LEGS
    legSelect.addEventListener('click', () => {
      // Changes background color to show the category selected. 
      legSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/selectedLegsDisplay.png"
      // Displays the options within that category.
      cont1.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/leg-selection-1.png"
      cont2.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/leg-selection-2.png"
      cont3.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/leg-selection-3.png"
      cont4.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/leg-slection-4.png"
      // Resets the background color for inactive categories. 
      bodySelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/body-display.png"
      headSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/head-diplay.png"
      mouthSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/head-diplay.png"
      mouthSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/mouth-display.png"
      armSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/arms-display.png"
      eyeSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/eyes-display.png"
      
      currentSelection = 'legs'
    })
    // #3 ARMS
    armSelect.addEventListener('click', () => {
      armSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/arms.png"

      cont1.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/arm-selection-1.png"
      cont2.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/arm-selection-2.png"
      cont3.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/arm-selection-3.png"
      cont4.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/arm-selection-4.png"

      bodySelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/body-display.png"
      headSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/head-diplay.png"
      mouthSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/head-diplay.png"
      mouthSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/mouth-display.png"
      eyeSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/eyes-display.png"
      legSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/legs-display.png"

      currentSelection = 'arms'
    })

    // #4 HEAD
    headSelect.addEventListener('click', () => {
      headSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/head.png"
      cont1.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/head-selection-1.png"
      cont2.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/head-selection-2.png"
      cont3.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/head-selection-3.png"
      cont4.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/head-selection-4.png"

      bodySelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/body-display.png"
      mouthSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/mouth-display.png"
      eyeSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/eyes-display.png"
      legSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/legs-display.png"
      armSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/arms-display.png"

      currentSelection = 'head'
    })
    // #5 EYES
    eyeSelect.addEventListener('click', () => {
      eyeSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/selectedEyesDisplay.png"
      cont1.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/eye-selection-1.png"
      cont2.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/eye-selection-2.png"
      cont3.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/eye-selection-3.png"
      cont4.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/eye-selection-4.png"

      headSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/head-diplay.png"
      bodySelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/body-display.png"
      mouthSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/mouth-display.png"
      legSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/legs-display.png"
      armSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/arms-display.png"

      currentSelection = 'eye'
    })
     // #6 MOUTH
    mouthSelect.addEventListener('click', () => {
      mouthSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/selectedMouthDisplay.png"
      cont1.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/mouth-selection-1.png"
      cont2.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/mouth-selection-2.png"
      cont3.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/mouth-selection-3.png"
      cont4.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/mouth-selection-4.png"

      headSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/head-diplay.png"
      bodySelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/body-display.png"
      legSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/legs-display.png"
      armSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/arms-display.png"
      eyeSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/eyes-display.png"

      currentSelection = 'mouth'
    })
            // Display selection and adjust location if needed. 
                cont1.addEventListener('click', () =>{
                  if(currentSelection === 'body'){
                      bodyDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/mermaid.png"
                      bodyDefault.style.marginTop = '20vh'
                  } else if (currentSelection === 'legs'){
                      legDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/alian.png"
                  } else if (currentSelection === 'arms'){
                      armDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/dance.png"
                      armDefault.style.marginTop = '20vh'
                      armDefault.style.marginLeft = '3vh'
                  } else if (currentSelection === 'head'){
                    headDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/hippo.png"
                    headDefault.style.marginTop = '0vh'
                  } else if (currentSelection === 'eye'){
                    eyeDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/wink.png"
                  } else if (currentSelection = 'mouth'){
                    mouthDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/line.png"
                  }
              })
                cont2.addEventListener('click', () =>{
                  if(currentSelection === 'body'){
                    bodyDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/sweater.png"
                    bodyDefault.style.marginTop = '20vh'
                  } else if(currentSelection === 'legs'){
                    legDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/furry.png"
                  } else if ( currentSelection === 'arms'){
                    armDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/bat.png"
                  }else if (currentSelection === 'head'){
                    headDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/girl.png"
                  }else if (currentSelection === 'eye'){
                    eyeDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/shy.png"
                  }else if (currentSelection = 'mouth'){
                    mouthDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/beak.png"
                  }
              })
                  
                cont3.addEventListener('click', () =>{
                  if(currentSelection === 'body'){
                    bodyDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/bee.png"
                  bodyDefault.style.marginTop = '20vh'
                  } else if (currentSelection === 'legs'){
                    legDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/elf.png"
                  } else if ( currentSelection === 'arms'){
                    armDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/ribbon.png"
                    armDefault.style.marginTop = '17.5vh'
                  }else if (currentSelection === 'head'){
                    headDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/boy.png"
                  }else if (currentSelection === 'eye'){
                    eyeDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/rackoon.png"
                  }else if (currentSelection = 'mouth'){
                    mouthDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/triangle.png"
                  }
                })
                cont4.addEventListener('click', () =>{
                  if(currentSelection === 'body'){
                    bodyDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/spots.png"
                    bodyDefault.style.marginTop = '20vh'
                  } else if( currentSelection === 'legs'){
                    legDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/ribbon-l.png"
                  } else if ( currentSelection === 'arms'){
                    armDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/monster.png"
                    armDefault.style.marginTop = '15vh'
                  }else if (currentSelection === 'head'){
                    headDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/bunny.png"
                  }else if (currentSelection === 'eye'){
                    eyeDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/laugh.png"
                  }else if (currentSelection = 'mouth'){
                    mouthDefault.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/cheesy.png"
                  }
                })
  
              
    

                  


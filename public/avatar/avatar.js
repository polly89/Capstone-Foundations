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


// ---------------------> Avatar Builder <---------------------------
// Queries:
// #1 Category Display (circles at the bottom of the screen)
const bodySelect = document.querySelector('#bodyDispCont')
const armSelect = document.querySelector('#armDispCont')
const legSelect = document.querySelector('#legDispCont')
const headSelect = document.querySelector('#headDispCont')
const mouthSelect = document.querySelector('#mouthDispCont')
const eyeSelect = document.querySelector('#eyeDispCont')
const saveAvatar = document.querySelector('#saveAvatarBtn')
const avatar = document.querySelector('.avatar')// Save Avatar

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
        mouthSelect.src = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/mouth-display.png"
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
      cont3.src = "avatarImages/smirk-selection.png"
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
                      bodyDefault.src = "avatarImages/mermaid-bod.png"
                      bodyDefault.style.marginTop = '20vh'
                  } else if (currentSelection === 'legs'){
                      legDefault.src = "avatarImages/alian-feet.png"
                  } else if (currentSelection === 'arms'){
                      armDefault.src = "avatarImages/elf-hands.png"
                  } else if (currentSelection === 'head'){
                    headDefault.src = "avatarImages/hippo-head.png"
                    headDefault.style.marginTop = '0vh'
                  } else if (currentSelection === 'eye'){
                    eyeDefault.src = "avatarImages/wink.png"
                  } else if (currentSelection = 'mouth'){
                    mouthDefault.src = "avatarImages/line-smile.png"
                  }
              })
                cont2.addEventListener('click', () =>{
                  if(currentSelection === 'body'){
                    bodyDefault.src = "avatarImages/sweater-bod.png"
                    bodyDefault.style.marginTop = '20vh'
                  } else if(currentSelection === 'legs'){
                    legDefault.src = "avatarImages/furry-feet.png"
                  } else if ( currentSelection === 'arms'){
                    armDefault.src = "avatarImages/bat.png"
                  }else if (currentSelection === 'head'){
                    headDefault.src = "avatarImages/girl-head.png"
                  }else if (currentSelection === 'eye'){
                    eyeDefault.src = "avatarImages/shy-eyes.png"
                  }else if (currentSelection = 'mouth'){
                    mouthDefault.src = "avatarImages/beak.png"
                  }
              })
                  
                cont3.addEventListener('click', () =>{
                  if(currentSelection === 'body'){
                    bodyDefault.src = "avatarImages/bee-bod.png"
                  bodyDefault.style.marginTop = '20vh'
                  } else if (currentSelection === 'legs'){
                    legDefault.src = "avatarImages/elf.png"
                  } else if ( currentSelection === 'arms'){
                    armDefault.src = "avatarImages/ribbon-ars.png"
                    armDefault.style.marginTop = '17.5vh'
                  }else if (currentSelection === 'head'){
                    headDefault.src = "avatarImages/boy-head-2.png"
                  }else if (currentSelection === 'eye'){
                    eyeDefault.src = "avatarImages/rackoon-eyes.png"
                  }else if (currentSelection = 'mouth'){
                    mouthDefault.src = "avatarImages/smirk.png"
                  }
                })
                cont4.addEventListener('click', () =>{
                  if(currentSelection === 'body'){
                    bodyDefault.src = "avatarImages/spots-bod.png"
                    bodyDefault.style.marginTop = '20vh'
                  } else if( currentSelection === 'legs'){
                    legDefault.src = "avatarImages/ribbon-l.png"
                  } else if ( currentSelection === 'arms'){
                    armDefault.src = "avatarImages/monster-arms.png"
                  }else if (currentSelection === 'head'){
                    headDefault.src = "avatarImages/bunny-head.png"
                  }else if (currentSelection === 'eye'){
                    eyeDefault.src = "avatarImages/laugh.png"
                  }else if (currentSelection = 'mouth'){
                    mouthDefault.src = "avatarImages/cheesy.png"
                  }
                })
  


if(saveAvatar){
  saveAvatar.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("saved button clicked");

    document.querySelector('.avatar').classList.add('savedAvatar')
    html2canvas(document.querySelector('.avatar')) 

    .then(canvas => {
    let savedAvatar = canvas.toDataURL()
    console.log(savedAvatar)
    // // window.location.href='/public/map/map.html';
    //     const database_ref = database.ref()

    //     let user_data = {
    //     avatar: saveAvatar,
    //     lastLogin: Date.now()
    //   }
        
    // database_ref.child('users/' + user.uid).push().key()

    document.querySelector('.avatar').classList.remove('savedAvatar')
})
})
}

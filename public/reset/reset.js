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
  
  // -----------------> Reset Password <--------------------
const resetBtn = document.getElementById('#resetBtn');
const userEmail = document.getElementById('user-email').value;

const resetPasswordFunction = () => {
    const email = userEmail; 

     auth
        .sendPasswordResetEmail(email)
        .then(() => {
        console.log('Password reset email was sent')
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
}

resetBtn.addEventListener('click', resetPasswordFunction)


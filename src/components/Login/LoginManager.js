// import React from 'react';

// // Firebase App (the core Firebase SDK) is always required and must be listed first
// import * as firebase from "firebase/app";

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import firebaseConfig from './firebase.config';

// export const initializeLoginFramework = () => {
//     if (firebase.apps.length === 0) {
//         firebase.initializeApp(firebaseConfig);
//     }
// }

// // Google Sign-In
// export const handleGoogleSignIn = () => {

//     const googleProvider = new firebase.auth.GoogleAuthProvider();
//     return firebase.auth().signInWithPopup(googleProvider)
//         .then(res => {

//             var { displayName, email } = res.user;
//             const signnedInUser = {
//                 isSignedIn: true,
//                 name: displayName

//             }
//             return (signnedInUser);


//         }).catch(function (error) {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // The email of the user's account used.
//             var email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//         });


// }

// const LoginManager = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default LoginManager;
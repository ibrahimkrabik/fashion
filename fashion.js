// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA6JU9j9VbOzfOdLE2k3RjTPeC6TozT9_U",
//   authDomain: "multimedia-project-8e5d9.firebaseapp.com",
//   databaseURL: "https://multimedia-project-8e5d9-default-rtdb.firebaseio.com",
//   projectId: "multimedia-project-8e5d9",
//   storageBucket: "multimedia-project-8e5d9.appspot.com",
//   messagingSenderId: "496638462280",
//   appId: "1:496638462280:web:10f3d20d44a652cf76cb7d",
//   measurementId: "G-1RMH74N0PL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


function scrollup(){
    const scrollup=document.getElementById('scroll-up');

    if(this.scrollY>=200)scrollup.classList.add('show-scroll');
    else scrollup.classList.remove('show-scroll');

}
window.addEventListener('scroll',scrollup)

let link=document.querySelectorAll(".navbar-nav li a");
link.forEach(e=>{
  e.addEventListener('click',()=>{link.forEach(e=>{e.classList.remove("active")})})
  e.addEventListener('click',()=>{e.classList.add("active")})

  

})





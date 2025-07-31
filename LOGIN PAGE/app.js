
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCtZAA3ugWFE7VqRzGgrRez2M2WUZvWdQQ",
  authDomain: "login-page-b8b95.firebaseapp.com",
  projectId: "login-page-b8b95",
  storageBucket: "login-page-b8b95.firebasestorage.app",
  messagingSenderId: "60956663843",
  appId: "1:60956663843:web:60814b155bd8f4b789d196"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      // window.location.href = "dashboard.html"; // optionally redirect
    })
    .catch((error) => {
      errorMessage.textContent = error.message;
    });
});

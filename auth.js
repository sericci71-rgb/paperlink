const firebaseConfig = { apiKey: "AIzaSyBGETnka8pVkgG7g0zekVUM7X8xLSGj6UE", 
                        authDomain: "paperlink-6bcbf.firebaseapp.com", 
                        projectId: "paperlink-6bcbf", 
                        storageBucket: "paperlink-6bcbf.appspot.com", 
                        messagingSenderId: "750496264953", appId: "1:750496264953:web:7f850cdb41200df6152828" }; 
firebase.initializeApp(firebaseConfig); 
const auth = firebase.auth(); 
function login() { const email = document.getElementById('email').value; 
                  const password = document.getElementById('password').value; 
                  auth.signInWithEmailAndPassword(email, password) .then(() => { document.getElementById('auth-container').style.display = 'none'; 
                                                                                document.getElementById('app').style.display = 'block'; 
                                                                                loadLinks(); }); } // Simmetriche funzioni per register(), logout(), ecc...

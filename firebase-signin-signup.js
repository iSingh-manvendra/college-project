// your-script.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";

// Add these imports for Analytics (optional but you have it), Authentication, and Realtime Database
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";


// Your web app's Firebase configuration (COPY THIS EXACTLY FROM YOUR FIREBASE CONSOLE)
const firebaseConfig = {
    apiKey: "AIzaSyAuXvQka_XYJfaeQ8G6MXVQhbhfyKSclEk",
    authDomain: "tripmates-fb5a2.firebaseapp.com",
    projectId: "tripmates-fb5a2",
    storageBucket: "tripmates-fb5a2.firebasestorage.app",
    messagingSenderId: "268270574178",
    appId: "1:268270574178:web:1b9e72eb377d604db80f3b",
    measurementId: "G-YFWE4PEGSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Initialize analytics if you want to use it

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firebase Realtime Database and get a reference to the service
const database = getDatabase(app);

// --- Get references to your HTML elements (inputs and forms) ---
// Login Form Elements
const loginEmailInput = document.getElementById('login-email');
const loginPasswordInput = document.getElementById('login-password');
const loginFormDiv = document.getElementById('loginForm');

// Signup Form Elements
const signupNameInput = document.getElementById('signupName');
const signupEmailInput = document.getElementById('signupEmail');
const signupPhoneInput = document.getElementById('signupPhone');
const travelTypeSelect = document.getElementById('travelType');
const signupPasswordInput = document.getElementById('signupPassword');
const confirmPasswordInput = document.getElementById('confirmPassword');
const signupFormDiv = document.getElementById('signupForm');

// Assuming you have an element outside the modal to display user status or a logout button
const userStatusDiv = document.getElementById('user-status'); // If you have this outside the modal
const signoutButton = document.getElementById('signout-button'); // If you have this outside the modal

// --- Password Toggle ---
// IMPORTANT: Your HTML has two elements with id="togglePassword".
// IDs MUST be unique. I've adjusted the selectors here to target them
// within their respective forms. You should ideally change your HTML IDs
// to something like 'togglePasswordLogin' and 'togglePasswordSignup' for clarity.
const togglePasswordLogin = document.querySelector('#loginForm #togglePassword');
const togglePasswordSignup = document.querySelector('#signupForm #togglePassword');

if (togglePasswordLogin) {
    togglePasswordLogin.addEventListener('click', function () {
        const type = loginPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        loginPasswordInput.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
}
if (togglePasswordSignup) {
    togglePasswordSignup.addEventListener('click', function () {
        const type = signupPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        signupPasswordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
}

// Function to close the modal (if you are using Bootstrap 5)
function closeLoginModal() {
    // Assuming you have Bootstrap 5. If not, adjust accordingly.
    const loginModalElement = document.getElementById('loginModal');
    if (loginModalElement) {
        const modal = bootstrap.Modal.getInstance(loginModalElement);
        if (modal) modal.hide();
        else { // Fallback if modal instance isn't found (e.g., if it's the first time)
            const newModal = new bootstrap.Modal(loginModalElement);
            newModal.hide();
        }
    }
}


// --- Modal View Toggles ---
window.showSignup = function() {
    loginFormDiv.style.display = 'none';
    signupFormDiv.style.display = 'block';
    // Clear login fields when switching to signup
    loginEmailInput.value = '';
    loginPasswordInput.value = '';
}

window.showLogin = function() {
    signupFormDiv.style.display = 'none';
    loginFormDiv.style.display = 'block';
    // Clear signup fields when switching to login
    signupNameInput.value = '';
    signupEmailInput.value = '';
    signupPhoneInput.value = '';
    travelTypeSelect.value = '';
    signupPasswordInput.value = '';
    confirmPasswordInput.value = '';
}

window.forgotPassword = async function() {
    const email = loginEmailInput.value;
    if (email) {
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Password reset email sent! Check your inbox.");
        } catch (error) {
            console.error('Password reset error:', error.message);
            alert(`Failed to send password reset email: ${error.message}`);
        }
    } else {
        alert("Please enter your email address in the login field to reset your password.");
    }
}

// --- Firebase Authentication Functions (called by onclick events) ---

// --- Signup Function ---
window.signup = async function() {
    const email = signupEmailInput.value;
    const password = signupPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const fullName = signupNameInput.value;
    const phoneNumber = signupPhoneInput.value;
    const preferredTravelType = travelTypeSelect.value;

    if (!fullName || !email || !password || !confirmPassword || !phoneNumber || !preferredTravelType) {
        alert("Please fill in all signup fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User signed up:', user.email);
        alert(`Signup successful! Welcome ${fullName}`);

        // Store additional user data in Realtime Database
        await set(ref(database, 'users/' + user.uid), {
            email: user.email,
            fullName: fullName,
            phoneNumber: phoneNumber,
            preferredTravelType: preferredTravelType,
            createdAt: new Date().toISOString() // Useful for admin panel
        });
        console.log('Additional user data saved to Realtime Database.');

        // Clear signup fields
        signupNameInput.value = '';
        signupEmailInput.value = '';
        signupPhoneInput.value = '';
        travelTypeSelect.value = '';
        signupPasswordInput.value = '';
        confirmPasswordInput.value = '';

        closeLoginModal(); // Close the modal
        // Optionally redirect the user or update UI to show logged-in state
        // window.location.href = "dashboard.html";

    } catch (error) {
        console.error('Signup error:', error.message);
        alert(`Signup failed: ${error.message}`);
    }
}

// --- Login Function ---
window.login = async function() {
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User logged in:', user.email);
        alert(`Login successful! Welcome back ${user.email}`);

        // Clear login fields
        loginEmailInput.value = '';
        loginPasswordInput.value = '';

        closeLoginModal(); // Close the modal
        // Optionally redirect the user or update UI
        // window.location.href = "dashboard.html";

    } catch (error) {
        console.error('Login error:', error.message);
        alert(`Login failed: ${error.message}`);
    }
}

// --- Google Sign-In (You'll need a button for this in your HTML) ---
// If you want a Google Sign-in button within your modal, add it like this:
//<button class="btn btn-danger w-100 mt-2" id="google-signin-button">Sign in with Google</button>
const googleSignInButton = document.getElementById('google-signin-button'); // Assuming you add this ID to a button

if (googleSignInButton) {
    googleSignInButton.addEventListener('click', async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Signed in with Google:', user.displayName || user.email);
            alert(`Google Sign-in successful! Welcome ${user.displayName || user.email}`);

            // Check if user already exists in your /users database, if not, add them
            const userRef = ref(database, 'users/' + user.uid);
            onValue(userRef, (snapshot) => {
                if (!snapshot.exists()) { // If user doesn't exist in our DB
                    set(userRef, {
                        email: user.email,
                        fullName: user.displayName || 'N/A', // Google provides display name
                        phoneNumber: 'N/A', // Google usually doesn't provide phone
                        preferredTravelType: 'N/A', // Not from Google, will need to be added later if desired
                        createdAt: new Date().toISOString()
                    }).then(() => {
                        console.log('New Google user data saved to Realtime Database.');
                    }).catch(error => {
                        console.error('Error saving new Google user data:', error);
                    });
                }
            }, { onlyOnce: true }); // Use onlyOnce to avoid continuous listeners

            closeLoginModal(); // Close the modal

        } catch (error) {
            console.error('Google Sign-in error:', error.code, error.message);
            alert(`Google Sign-in failed: ${error.message}`);
        }
    });
}


// --- Sign Out ---
// Assuming you have a signoutButton outside the modal, perhaps in a header.
if (signoutButton) {
    signoutButton.addEventListener('click', async () => {
        try {
            await signOut(auth);
            console.log('User signed out');
            alert('Signed out successfully!');
            // Optionally redirect to home/login page
            // window.location.href = "index.html";
        } catch (error) {
            console.error('Sign out error:', error.message);
            alert(`Sign out failed: ${error.message}`);
        }
    });
}

// --- Track Authentication State (IMPORTANT for showing/hiding content) ---
// This listener runs every time the user's login state changes.
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in.
        // Update any UI elements outside the modal to reflect the logged-in state.
        if (userStatusDiv) {
            userStatusDiv.innerHTML = `Logged in as: ${user.email} (UID: ${user.uid})`;
        }
        if (signoutButton) {
            signoutButton.style.display = 'block'; // Show sign out button
        }
        // You might want to hide elements that trigger the login modal here
        // e.g., document.getElementById('loginTriggerButton').style.display = 'none';

        console.log("User is logged in:", user.uid);
    } else {
        // User is signed out.
        if (userStatusDiv) {
            userStatusDiv.innerHTML = 'Not logged in.';
        }
        if (signoutButton) {
            signoutButton.style.display = 'none'; // Hide sign out button
        }
        // You might want to show elements that trigger the login modal here
        // e.g., document.getElementById('loginTriggerButton').style.display = 'block';

        console.log("User is logged out.");
    }
});

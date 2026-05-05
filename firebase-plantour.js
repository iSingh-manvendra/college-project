// firebase-plantour.js

// Import all necessary Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js"; // Optional, but keep if you're using it
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";


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

// Get HTML elements
const planTourForm = document.getElementById('plan-tour-form');
const messageDiv = document.getElementById('message'); // Assuming you have a div with id="message" for feedback

let currentUser = null; // To store the currently logged-in user

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = user;
        console.log("User logged in to plantour.html:", user.uid);
        // Pre-fill email and phone if available from logged-in user
        document.getElementById('email').value = user.email || '';
        // Note: Phone number is not directly in auth.currentUser unless specifically added to custom claims or DB
    } else {
        currentUser = null;
        console.log("User not logged in to plantour.html. Redirecting to login or showing message.");
        messageDiv.textContent = "Please log in to submit a tour plan.";
        // Optionally redirect to login page (index.html) if not logged in
        // window.location.href = "index.html";
    }
});


// Handle form submission
if (planTourForm) {
    planTourForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!currentUser) {
            alert("You must be logged in to submit a tour plan.");
            return;
        }

        // Get values from radio buttons
        const departureRadios = document.getElementsByName('departure');
        let selectedDeparture = '';
        for (const radio of departureRadios) {
            if (radio.checked) {
                selectedDeparture = radio.value;
                break;
            }
        }

        const budgetRadios = document.getElementsByName('budget');
        let selectedBudget = '';
        for (const radio of budgetRadios) {
            if (radio.checked) {
                selectedBudget = radio.value;
                break;
            }
        }

        // Gather form data using new IDs
        const formData = {
            destination: document.getElementById('destination').value,
            location: document.getElementById('location').value,
            departure: selectedDeparture, // From radio buttons
            budget: selectedBudget,       // From radio buttons
            adults: parseInt(document.getElementById('adults').value),
            children: parseInt(document.getElementById('children').value),
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            userId: currentUser.uid, // Link the tour plan to the logged-in user
            submittedAt: new Date().toISOString() // Timestamp
        };

        try {
            // Push data to the 'tourPlans' node in Realtime Database
            const newTourRef = push(ref(database, 'tourPlans')); // Generates a unique ID
            await set(newTourRef, formData);

            messageDiv.textContent = 'Tour plan submitted successfully!';
            messageDiv.style.color = 'green';
            planTourForm.reset(); // Clear form fields
            console.log("Tour plan saved:", formData);

        } catch (error) {
            console.error('Error submitting tour plan:', error);
            messageDiv.textContent = `Error submitting plan: ${error.message}`;
            messageDiv.style.color = 'red';
        }
    });
}

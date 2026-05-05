// admin-script.js

// Import all necessary Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";


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
const auth = getAuth(app);
const database = getDatabase(app);

// Get HTML elements
const adminStatusP = document.getElementById('admin-status');
const adminSignoutButton = document.getElementById('admin-signout');
const adminContentDiv = document.getElementById('admin-content');
const notAuthorizedDiv = document.getElementById('not-authorized');
const usersTableBody = document.getElementById('users-table-body');
const tourPlansTableBody = document.getElementById('tour-plans-table-body');

// --- Admin Sign Out ---
adminSignoutButton.addEventListener('click', async () => {
    try {
        await signOut(auth);
        alert('Admin signed out.');
        window.location.reload(); // Reload page to reflect unauthenticated state
    } catch (error) {
        console.error('Admin sign out error:', error.message);
        alert(`Admin sign out failed: ${error.message}`);
    }
});

// --- Authentication State Listener ---
onAuthStateChanged(auth, async (user) => {
    if (user) {
        // User is logged in. Now check if they are an admin.
        // THIS IS TEMPORARY & INSECURE FOR PRODUCTION, BUT SUITABLE FOR COLLEGE PROJECT TESTING.
        // You have provided this UID: 3fgLwb5fBuOo5vogx3IP2fCFehv2
        const TEMPORARY_ADMIN_UID = '3fgLwb5fBuOo5vogx3IP2fCFehv2'; 
        
        if (user.uid === TEMPORARY_ADMIN_UID) { // If the logged-in user's UID matches our designated admin UID
            adminStatusP.textContent = `Logged in as: ${user.email} (Admin Access)`;
            adminSignoutButton.style.display = 'block';
            adminContentDiv.style.display = 'block'; // Show admin content
            notAuthorizedDiv.style.display = 'none'; // Hide not authorized message
            
            loadAdminData(); // Load data for the admin

        } else {
            // User is logged in, but not the designated admin
            adminStatusP.textContent = `Logged in as: ${user.email} (Not an Admin)`;
            adminSignoutButton.style.display = 'block'; // Still allow them to sign out
            adminContentDiv.style.display = 'none'; // Hide admin content
            notAuthorizedDiv.style.display = 'block'; // Show not authorized message
        }

    } else {
        // User is not logged in at all.
        adminStatusP.textContent = 'Not logged in. Access denied.';
        adminSignoutButton.style.display = 'none';
        adminContentDiv.style.display = 'none';
        notAuthorizedDiv.style.display = 'block';
    }
});

// --- Function to Load Data ---
function loadAdminData() {
    // Load Users
    onValue(ref(database, 'users'), (snapshot) => {
        usersTableBody.innerHTML = ''; // Clear existing table
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                const userUid = childSnapshot.key;
                const userData = childSnapshot.val();
                const row = usersTableBody.insertRow();
                row.insertCell().textContent = userUid;
                row.insertCell().textContent = userData.email || 'N/A';
                row.insertCell().textContent = userData.fullName || 'N/A';
                row.insertCell().textContent = userData.phoneNumber || 'N/A';
                row.insertCell().textContent = userData.preferredTravelType || 'N/A';
                row.insertCell().textContent = userData.createdAt ? new Date(userData.createdAt).toLocaleString() : 'N/A';
            });
        } else {
            usersTableBody.innerHTML = '<tr><td colspan="6">No users found.</td></tr>';
        }
    });

    // Load Tour Plans
    onValue(ref(database, 'tourPlans'), (snapshot) => {
        tourPlansTableBody.innerHTML = ''; // Clear existing table
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                const planId = childSnapshot.key;
                const planData = childSnapshot.val();
                const row = tourPlansTableBody.insertRow();
                row.insertCell().textContent = planId;
                row.insertCell().textContent = planData.userId || 'N/A';
                row.insertCell().textContent = planData.destination || 'N/A';
                row.insertCell().textContent = planData.location || 'N/A';
                row.insertCell().textContent = planData.departure || 'N/A';
                row.insertCell().textContent = planData.budget || 'N/A';
                row.insertCell().textContent = planData.adults || '0';
                row.insertCell().textContent = planData.children || '0';
                row.insertCell().textContent = planData.email || 'N/A';
                row.insertCell().textContent = planData.phone || 'N/A';
                row.insertCell().textContent = planData.submittedAt ? new Date(planData.submittedAt).toLocaleString() : 'N/A';
            });
        } else {
            tourPlansTableBody.innerHTML = '<tr><td colspan="11">No tour plans found.</td></tr>';
        }
    });
}

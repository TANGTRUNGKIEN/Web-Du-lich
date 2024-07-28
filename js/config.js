// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOzDwUxEblrVOR96SlBMqsk2ynw7hIJOI",
    authDomain: "cuahang-e6ceb.firebaseapp.com",
    projectId: "cuahang-e6ceb",
    storageBucket: "cuahang-e6ceb.appspot.com",
    messagingSenderId: "1074418638853",
    appId: "1:1074418638853:web:6e74ff953d4ce92149bc6c",
    measurementId: "G-DZL52F4444"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { firebaseConfig, app,  analytics};
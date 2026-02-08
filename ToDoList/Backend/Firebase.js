"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE = exports.ANALYTICS = exports.FIREBASEAPP = void 0;
// Import the functions you need from the SDKs you need
var app_1 = require("firebase/app");
var analytics_1 = require("firebase/analytics");
var database_1 = require("firebase/database");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAtbukC2KnnJj3LUNEKtYzuc2nhtSgi2Kw",
    authDomain: "todolist-4f6e6.firebaseapp.com",
    projectId: "todolist-4f6e6",
    storageBucket: "todolist-4f6e6.firebasestorage.app",
    messagingSenderId: "410793071715",
    appId: "1:410793071715:web:7813557d38310b667e5456",
    measurementId: "G-W57308GWE4",
};
// Initialize Firebase
var FIREBASEAPP = (0, app_1.initializeApp)(firebaseConfig);
exports.FIREBASEAPP = FIREBASEAPP;
var ANALYTICS;
(0, analytics_1.isSupported)()
    .then(function (supported) {
    if (supported) {
        exports.ANALYTICS = ANALYTICS = (0, analytics_1.getAnalytics)(FIREBASEAPP);
    }
})
    .catch(function () {
    // analytics not supported in this environment (e.g., Node)
});
var DATABASE = (0, database_1.getDatabase)(FIREBASEAPP);
exports.DATABASE = DATABASE;

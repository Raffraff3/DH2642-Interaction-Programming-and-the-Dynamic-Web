/**
  Authored by Muhammad Shahwaiz Abbasi · 2026
  firebase.js —> starts Firebase once and exports the auth and database handles.
  Only the files in persistence/ may import this file.
 */

import { initializeApp } from "firebase/app"; // Load the function that starts a Firebase app.
import { getAuth } from "firebase/auth"; // Load the function that gives us Firebase sign-in.
import { getFirestore } from "firebase/firestore"; // Load the function that gives us the Firestore database.

// The settings Firebase needs to find our project.
const config = {
  apiKey: "apiKey", // The public key of the project.
  authDomain: "authDomain", // The web address used for sign-in pop-ups.
  projectId: "projectId", // The name of our Firebase project.
  appId: "appId", // The id of this web app inside the project.
};

// True when all three important settings are filled in, so Firebase can be used.
export const isFirebaseConfigured = Boolean(
  config.apiKey && config.projectId && config.appId,
);

let app = null; // Will hold the Firebase app (empty until we start it).
let auth = null; // Will hold the sign-in service (empty until we start it).
let db = null; // Will hold the database service (empty until we start it).

// Only start Firebase when the settings are complete.
if (isFirebaseConfigured) {
  app = initializeApp(config); // Start the Firebase app with our settings.
  auth = getAuth(app); // Get the sign-in service for this app.
  db = getFirestore(app); // Get the database service for this app.
}

export { app, auth, db };

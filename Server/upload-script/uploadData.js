const admin = require("firebase-admin");
const { restore } = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey2.json");

// const DatabaseURL = "https://class-room-application.firebaseio.com"

// firestoreService.initializeApp(serviceAccount, DatabaseURL);

// firestoreService.restore("data.json")
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

restore("./data.json");

var firebaseConfig = {
    apiKey: "AIzaSyCo4xVWn7Ypizk-6VB6XjTeb2ewiqaryic",
    authDomain: "projectone-cbac5.firebaseapp.com",
    databaseURL: "https://projectone-cbac5.firebaseio.com",
    projectId: "projectone-cbac5",
    storageBucket: "projectone-cbac5.appspot.com",
    messagingSenderId: "31129312771",
    appId: "1:31129312771:web:8a5072bcf95acf7dfcf836"
};
  
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
//Counter to  keep count of number of clicks done by the user.

//counter when user click on any part of the main content
var clickCounter = 0;
$("#main-content").on("click", function() {
// Add to clickCounter
clickCounter++;
//  Store Click Data to Firebase in a JSON property called clickCount
// Note how we are using the Firebase .set() method
database.ref().set({
  clickCount: clickCounter
});
});
//counter snapshot codes
database.ref().on("value", function(snapshot) {
// Then we console.log the value of snapshot
console.log(snapshot.val());
// Update the clickCounter variable with data from the database.
clickCounter = snapshot.val().clickCount;
// Then we change the html associated with the number.
$("#click-value").text(clickCounter);
// If there is an error that Firebase runs into -- it will be stored in the "errorObject"
// Again we could have named errorObject anything we wanted.
}, function(errorObject) {
// In case of error this will print the error
console.log("The read failed: " + errorObject.code);
});
(function ($) {
  "use strict"; // Start of use strict

  // No JS

})(jQuery); // End of use strict

// Get a reference to the database service
var database = firebase.database();

function writeEmail(email) {
  var ref = firebase.database().ref('notify-emails');
  // this new, empty ref only exists locally
  var newChildRef = ref.push();
  newChildRef.set({
    email: email,
    timestamp: (new Date()).toISOString(),
  });
};

function addEmail(email) {
  writeEmail(email);
}
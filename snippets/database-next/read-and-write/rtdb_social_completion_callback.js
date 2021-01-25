// This snippet file was generated by processing the source file:
// ./database-next/read-and-write.js
//
// To make edits to the snippets in this file, please edit the source

// [START rtdb_social_completion_callback_modular]
import { getDatabase } from "firebase/database";

const db = getDatabase(firebaseApp);
db.ref('users/' + userId).set({
  username: name,
  email: email,
  profile_picture : imageUrl
}, (error) => {
  if (error) {
    // The write failed...
  } else {
    // Data saved successfully!
  }
});
// [END rtdb_social_completion_callback_modular]
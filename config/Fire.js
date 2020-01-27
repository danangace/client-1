import firebase from "firebase"; // 4.8.1
import {
  FIRE_API_KEY,
  FIRE_AUTH_DOMAIN,
  FIRE_DATABASE_URL,
  FIRE_PROJECT_ID,
  FIRE_STORAGE_BUCKET,
  FIRE_MESSAGING_SENDER_ID
} from 'react-native-dotenv'

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
<<<<<<< HEAD
          apiKey: FIRE_API_KEY,
          authDomain: FIRE_AUTH_DOMAIN,
          databaseURL: FIRE_DATABASE_URL,
          projectId: FIRE_PROJECT_ID,
          storageBucket: FIRE_STORAGE_BUCKET,
          messagingSenderId: FIRE_MESSAGING_SENDER_ID
      });
  }
=======
        apiKey: FIRE_API_KEY,
        authDomain: FIRE_AUTH_DOMAIN,
        databaseURL: FIRE_DATABASE_URL,
        projectId: FIRE_PROJECT_ID,
        storageBucket: FIRE_STORAGE_BUCKET,
        messagingSenderId: FIRE_MESSAGING_SENDER_ID
      })
    }
>>>>>>> 41eabcd16858d855c83dd7a147535a23bfabfc15
  };

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref("messages");
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  on = callback =>
    this.ref
      .limitToLast(20)
      .on("child_added", snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  // send the message to the Backend
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  append = message => this.ref.push(message);

  // close the connection to the Backend
  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire();
export default Fire;

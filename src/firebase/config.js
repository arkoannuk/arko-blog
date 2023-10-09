import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAwViJjw3zmPJM2xpBuIPL0JhdZMZK-gfc',
  authDomain: 'net-vue-firebase.firebaseapp.com',
  projectId: 'net-vue-firebase',
  storageBucket: 'net-vue-firebase.appspot.com',
  messagingSenderId: '346863065637',
  appId: '1:346863065637:web:a16f50391aedd2d7c8fdcc'
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }

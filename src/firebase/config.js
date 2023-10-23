import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCQldWWouXbRX5kR8sWUUzOPJ204QrxOMo',
  authDomain: 'arko-blog.firebaseapp.com',
  projectId: 'arko-blog',
  storageBucket: 'arko-blog.appspot.com',
  messagingSenderId: '535975590809',
  appId: '1:535975590809:web:1ef6b283c21f5255e33108'
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }

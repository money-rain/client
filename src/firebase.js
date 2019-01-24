import Firebase from 'firebase/app'
import 'firebase/firestore'

var config = require('./config.json')
const firebaseApp = Firebase.initializeApp(config)
const firestore = firebaseApp.firestore()

export default firestore

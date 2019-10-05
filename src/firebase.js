import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyClogWwXEEa1eiNDYF4ORPVi9V_n3cnXKc',
  authDomain: 'todoist-clone-d618b.firebaseapp.com',
  databaseURL: 'https://todoist-clone-d618b.firebaseio.com',
  projectId: 'todoist-clone-d618b',
  storageBucket: 'todoist-clone-d618b.appspot.com',
  messagingSenderId: '682143579270',
  appId: '1:682143579270:web:e703efd61d5d9b36056507',
});

export { firebaseConfig as firebase };

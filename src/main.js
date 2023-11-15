import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import VueKonva from 'vue-konva';
import VueGoogleMaps from '@fawmi/vue-google-maps';

import './assets/style.css';

import axios from 'axios';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrArPrjK2RdAXddP3ZAKVRpagfztXjrwA",
  authDomain: "swemount-2d137.firebaseapp.com",
  projectId: "swemount-2d137",
  storageBucket: "swemount-2d137.appspot.com",
  messagingSenderId: "401638769719",
  appId: "1:401638769719:web:0765de6a911bfa41e16bb2",
  measurementId: "G-CVNKCYMPGH"
};

// Initialize Firebase
 initializeApp(firebaseConfig);


router.afterEach((to, from) => {
    window.scrollTo(0, 0)
  });
  
const app = createApp(App);

app.use(router);
app.use(VueKonva);
app.config.globalProperties.$http = axios;




app.use(VueGoogleMaps, {
  load: {
      key: 'AIzaSyAiwsX0pst4lZq1uBA6h1x89yRDZ4tO7TM',
      libraries: "places",

  },
})

//require('dotenv').config()


app.mount('#app')

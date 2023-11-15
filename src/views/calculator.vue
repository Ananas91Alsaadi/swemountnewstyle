<script >
import calcBody from "../components/calcBody.vue";
import history from "../components/history.vue";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { animate } from "motion"

//import { auth } from '../firebase';

export default {
  props:{
    langIsSe:Boolean,
    loggedInUser:Boolean,
    userId:String,
  },

  components: {
    calcBody,
  },

  data(){
    return{
      loggedIn:true,
    showPassword:false,
    emailCheck:'',
    passwordCheck:'',

    en:[
      "Thank you for your interest in our company. To sign up and create an account, please contact us. Once you have completed the sign up process and received your login credentials, you can log in to access our services. We look forward to working with you",
      "We apologize, but this page is not optimized for small screens with a width less than 768 pixels. For the best experience, please visit this page on a device with a larger screen or adjust your screen resolution to at least 768 pixels wide",
  
  ],
  se:[
      "Tack för ditt intresse för vårt företag. För att registrera dig och skapa ett konto, vänligen kontakta oss. När du har slutfört registreringsprocessen och mottagit dina inloggningsuppgifter kan du logga in och få tillgång till våra tjänster. Vi ser fram emot att få arbeta med dig",
      "Vi beklagar, men denna sida är inte anpassad för skärmar med en bredd mindre än 768 pixlar. För bästa upplevelse, vänligen besök denna sida på en enhet med större skärm eller justera skärmens upplösning till minst 768 pixlar bred.",

  ]

  }
  },
  methods:{
    checkLoggare(){
      const auth = getAuth();

      signInWithEmailAndPassword(auth, this.emailCheck, this.passwordCheck)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    this.$emit("isSignedIn", user);

    this.loggedIn=true;

    // ...
  })
  .catch((error) => {
    alert(error);
    const errorCode = error.code;
    const errorMessage = error.message;
  });


      /*
      auth.signInWithEmailAndPassword(this.emailCheck, this.passwordCheck)
        .then(() => {
          this.loggedIn=true;
          console.log('User logged in');
        })
        .catch((error) => {
          console.error(error.message);
        });
    */
      },

      check(){
      },
  },
}

</script>

<template>
   <!-- <main>
    <img class="head-imgs " src="/img/swemount15.jpg" alt="">

    <h1 @click="check">{{ langIsSe? "Kalkylator": "Calculator" }}</h1>

    <div class="less768">
      <div class="signup-msg">{{ langIsSe? se[1]: en[1] }}</div>


    </div>

    <div class="over768">

      <div v-if="!loggedIn">
        <div class="second-head margin-bottoms">
          <h1>{{langIsSe? "Logga in": "Log in"}}</h1>
          <hr>
        </div>

        <form @submit.prevent="login" action="">
          <label for="email">
            <p>Email:</p><input type="email" name="email" placeholder="anders.andersson@gmail.com" v-model="emailCheck"
              required>
          </label>
          <label for="password" style="position:relative;">
            <p>{{ langIsSe? "Lösenord": "Password" }}:</p><input :type="[showPassword?'text':'password']"
              name="password" placeholder="***********" v-model="passwordCheck" required>
            <div class="show-buttons" @click="showPassword=!showPassword"><i class="fa-regular fa-eye"
                v-if="showPassword"></i><i class="fa-regular fa-eye-slash" v-if="!showPassword"></i></div>
          </label>

          <button @click="checkLoggare">{{ langIsSe? "Logga in": "Log in" }}</button>

        </form>
        <div class="signup-msg">{{ langIsSe? se[0]: en[0] }}</div>
      </div>

      <div v-if="loggedIn">

        <calcBody :userId="userId" />

      </div>
    </div>
  </main> -->




  <!--NEW Log in View, created 2023-10-04-->


  <main>
    <div v-if="!loggedIn" class="login-container">
      <div class="form-container">
        <h1>{{langIsSe? "Logga in": "Log in"}}</h1>
        <form @submit.prevent="login" action="">
          <label for="email">
            <input type="email" name="email" placeholder="email@example.com" v-model="emailCheck" required>
          </label>
          <label for="password" style="position:relative;">
            <input :type="[showPassword?'text':'password']" name="password" placeholder="Lösenord"
              v-model="passwordCheck" required>
            <div class="show-buttons" @click="showPassword=!showPassword"><i class="fa-regular fa-eye"
                v-if="showPassword"></i><i class="fa-regular fa-eye-slash" v-if="!showPassword"></i></div>
          </label>
          <button type="button"
            class="secondary-button">{{langIsSe? "Skicka min veriferingskod": "Send my verification code"}} <img
              src="../../public/icons/svgs/device-mobile-camera.svg" alt="device-mobile-camera">
          </button>
          <p>{{langIsSe? "Fyll i verifieringskoden du fått på mejl": "Fill in verification code you got in email"}}</p>
          <label for="name">
            <input type="text" name="name" placeholder="Veriferingskod" required>
          </label>
          <button @click="checkLoggare" type="submit" class="main-button">Logga in</button>

          <!-- <div class="signup-msg">{{ langIsSe? se[0]: en[0] }}</div> -->
          <p>Tack för ditt intresse för vårt företag. För att registrera dig och skapa ett konto, vänligen kontakta oss.
            När du har slutfört registreringsprocessen och mottagit dina inloggningsuppgifter kan du logga in och få
            tillgång till våra tjänster. Vi ser fram emot att få arbeta med dig.</p>
        </form>
      </div>
    </div>
    <div v-if="!loggedIn" class=" login-logo-container">
      <div class="logo">
        <span class="logo-span">SOL</span>IFOKUS
      </div>
    </div>

    <!--
      
      
      Later on i think we need to make this a route/link to calcBody component instead of inserting the calcBody component in the login <main>
      
        
      -->
    <div v-else-if="loggedIn">
      <calcBody :userId="userId" />
    </div>
  </main>
</template>
<style scoped>
h1{
  margin-top: 10vw;
} 
@media screen and (min-width: 414px) {
.margin-bottoms{
  margin-bottom: 4vw;
}




}

@media screen and (min-width: 1201px) {
  .margin-bottoms{
  margin-bottom: 48px;
}
h1{
  margin-top: 150px;
} 
}

</style>
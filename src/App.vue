<script>

import { getAuth, signOut } from "firebase/auth";

import { RouterLink, RouterView } from 'vue-router'
//git subtree push --prefix dist origin gh-pages


export default {
  data(){
    return {
      langIsSe:true,
      menuMobile:false,
      loggedInUser:true,
      userId: "",
    }
  },
  methods:{
    valueSIgnIn(v) {
      this.loggedInUser=true;
      this.userId=v;

    },
    signOutUser() {

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  this.loggedInUser=false;
  this.userId="";

}).catch((error) => {
  // An error happened.
  alert(error);
});

    },
  },
}
</script>

<template>
    <!--

  <header>
    <div class="header-content" style="max-width: 1300px;">

    <a href="/"><img src="/swemount_logo.png" alt="swemount"></a>
   <div style="display:flex;gap:7vw;">
    <div class="lang-mobile" style="cursor:pointer;" @click="langIsSe=!langIsSe,menuMobile = false"><i class="fa-solid fa-earth-americas "></i> {{langIsSe?"EN":"SV"}}</div>

    <div   @click="menuMobile = true"> <i class="fa-solid fa-bars menu-bar yellow" ></i></div>
  </div>
    <div :class="['mobile-full-menu', menuMobile? '' :' hidden-div' ] ">
      <a href="/"><img src="/swemount_logo.png" alt="swemount"></a>
      <RouterLink class="nav-children" to="/" @click="menuMobile = false">{{ langIsSe? "Hem": "Home" }}</RouterLink>
        <RouterLink class="nav-children" to="/products" @click="menuMobile = false">{{ langIsSe? "Produkter": "Products" }}</RouterLink>
        <RouterLink class="nav-children" to="/calculator" @click="menuMobile = false">{{ langIsSe? "Kalkylator": "Calculator" }}</RouterLink>
        <RouterLink class="nav-children" to="/partners" @click="menuMobile = false">{{ langIsSe? "Distributörer & Partners": "Distributors & Partners" }}</RouterLink>
        <RouterLink class="nav-children" to="/about" @click="menuMobile = false">{{ langIsSe? "Om oss": "About us" }}</RouterLink>
        <RouterLink class="nav-children" to="/contact" @click="menuMobile = false">Support</RouterLink>
       <div @click="menuMobile = false"> <i class="fa-solid fa-circle-xmark menu-bar yellow exit-icon" ></i></div> 

    </div>

    <nav>
        <RouterLink class="nav-children" to="/">{{ langIsSe? "Hem": "Home" }}</RouterLink><span style="color:#ABABAB;">|</span> 
        <RouterLink class="nav-children" to="/products">{{ langIsSe? "Produkter": "Products" }}</RouterLink><span style="color:#ABABAB;">|</span>
        <RouterLink class="nav-children" to="/calculator">{{ langIsSe? "Kalkylator": "Calculator" }}</RouterLink><span style="color:#ABABAB;">|</span>
       <RouterLink class="nav-children" to="/partners">{{ langIsSe? "Distributörer & Partners": "Distributors & Partners" }}</RouterLink><span style="color:#ABABAB;">|</span>
        <RouterLink class="nav-children" to="/about">{{ langIsSe? "Om oss": "About us" }}</RouterLink><span style="color:#ABABAB;">|</span>
        <RouterLink class="nav-children" to="/contact">Support</RouterLink><span style="color:#ABABAB;">|</span>
        <div style="cursor:pointer;" @click="langIsSe=!langIsSe"><i class="fa-solid fa-earth-americas"></i> {{langIsSe?"EN":"SV"}}</div>

      </nav>
    </div>

  </header>
-->
  <RouterView :langIsSe="langIsSe" :loggedInUser="loggedInUser" :userId="userId" @isSignedIn="valueSIgnIn"/>
  <footer>
<!--
<div class="footer-content">
  <h2> {{ langIsSe? "Kontakta oss": "Contact us" }} </h2>

<div class="footer-child">
 <div style="display:flex; align-items: center;"> <i class="fa-solid fa-phone"></i> <div><p> 010-300 14 10 </p><p> <a href="mailto:info@swemount.se" >info@swemount.se</a></p></div> </div>
 <div style="display:flex; align-items: center;"><i class="fa-solid fa-location-dot"></i> <div><p>Fabriksgatan 15 </p> <p>571 78 Forserum</p></div></div>
 <div style="display:flex; align-items: center;"><i class="fa-solid fa-clock"></i> <div><p>MÅN-FRE 09:00 - 19:00</p><p>LÖR-SÖN stängt</p></div></div>
  
  </div>

                            

<div class="sm-icon"> <p style="display: flex; justify-content: space-between;"> <a href="https://www.facebook.com/swemount"><i class="fa-brands fa-facebook"></i></a><a href="https://www.linkedin.com/company/swemount"><i class="fa-brands fa-linkedin"></i></a><a href="https://www.Instagram.com/swemount"><i class="fa-brands fa-instagram"></i></a></p></div>

</div>
-->

<div class="copy-right"  > <!-- Copyright CFW TRADING AB © 2023--> </div>

</footer>



</template>

<style>


</style>

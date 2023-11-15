<script>
export default {
  props:{
    langIsSe:Boolean,
  },

  data() {
    return {
      en:[
      `Swemount is a company that helps property owners become more sustainable by installing solar panels on their roofs. Our team of experts carefully assesses the suitability for solar panel installation on each building and works with property owners to design a customized solar panel system that meets their energy needs and budget.

Once the solar panel system is installed, property owners can start producing their own renewable energy, which not only helps the environment but also saves them money on their energy bills.

At Swemount, we are proud to offer high-quality solar panel products and excellent customer service. We are committed to helping property owners reduce their carbon emissions and achieve energy independence.],
`
],      
se:[
      `Swemount är en företag som hjälper fastighetsägare att bli mer hållbara genom att installera solceller på deras tak. 
Vårt team av experter bedömer noggrant lämpligheten för solpanelinstallation på varje byggnad och samarbetar med fastighetsägare för att designa en skräddarsydd solpanelanläggning som möter deras energibehov och budget. 

När solpanelanläggningen är installerad kan fastighetsägarna börja producera sin egen förnybar energi, vilket inte bara hjälper miljön utan också sparar dem pengar på deras energiräkningar. 

På Swemount är vi stolta över att erbjuda högkvalitativa solpanelprodukter och utmärkt kundservice. Vi är angelägna om att hjälpa fastighetsägare att minska sina koldioxidutsläpp och uppnå energisjälvständighet.
`

      ],
      QA: [
        {
          Q: "Vad är det för typ av montagesystem som ni erbjuder?",
          A: `Våra montagesystem har utformats för att vara användbara för ett brett utbud av takmaterial. 
De är kompatibla med tegel/betongpannor, papp eller falsad plåt och gör det möjligt för dig att montera solpaneler på ett säkert och effektivt sätt.`,
          active: false,
        },
        {
          Q: "Finns det några begränsningar på vilken sorts solceller som kan användas med ert montagesystem?",
          A: `Med Swemounts montagesystem kan du vara säker på att de passar alla nuvarande typer av solceller och solpaneler. 
Vi har utvecklat våra system för att vara kompatibla med det allra senaste på marknaden, så att du kan få mest möjliga utbyte av ditt solenergisystem.
`
,
          active: false,
        },
        {
          Q: "Hur lång livslängd har eran montagesystem och finns det några garantier?",
          A: `30 års garanti.
Med oss kan du känna dig trygg och säker när du väljer ett montagesystem för dina solceller. 
Företaget lämnar full garanti på hela systemet som levereras från oss, så du kan vara säker på att ditt system kommer att fungera i många år framöver.
`
,
          active: false,
        },
        {
          Q: "Erbjuder ni teknisk support under installationen och/eller efteråt?",
          A: `Vid frågor är du mer än välkommen att kontakta oss för support och frågor, alternativt ladda ner någon av våra montageanvisning.`,
          active: false,
        },
      ],
      subject:"",
      name:"",
      email:"",
      message:"",

    };
  },
  methods: {
    sendEmail() {
      const mailtoLink = "mailto:info@swemount.com" + "?subject=" + encodeURIComponent(this.subject) + "&body=" + encodeURIComponent("Name: " + this.name  + "\n\n" + this.message);
      window.location.href = mailtoLink;
    },




  },


};
</script>

<template>
  <main>
    <img class="head-imgs " src="/img/swemount16.jpg" alt="">

    <h1>Support</h1>
<p class="start-text lines-included">{{ langIsSe? se[0]: en[0] }} </p>
<div class="second-head"> 
        <h1>{{ langIsSe? "Dokument" : "Documents" }}</h1>
   <hr>
  </div>
<ul class="doks">
  <RouterLink to="/products" class="li-route">   {{ langIsSe? "Montering" : "Mounting" }}  </RouterLink>
  <RouterLink to="/products" class="li-route">  {{ langIsSe? "Produkter" : "Products" }}  </RouterLink>
  <RouterLink to="/products" class="li-route">  {{ langIsSe? "Garanti" : "Guarantee" }}  </RouterLink>
</ul>

<div class="second-head"> 
        <h1>F&Q</h1>
   <hr>
  </div>


    <ul >
      <li v-for="(i, index) in QA" :key="index">
        <div @click="i.active = !i.active">
          <p :class="[
            'q',
            i.active ? '  q-active' : '',
          ]">{{ i.Q }}</p>

          <Transition name="slide-fade">
            <p class="ans lines-included"  v-if="i.active">{{ i.A }}</p>
          </Transition>
        </div>
      </li>
    </ul>
<div class="swe-form" style="" >
  <div class="second-head"> 
        <h1 style="color:#fff;">{{ langIsSe? "Kontakta oss": "Contact us" }}</h1>
   <hr>
  </div>

    <form @submit.prevent="sendEmail">

<!--    <form action="mailto:info@swemount.com" method="POST" enctype="text/plain" > -->

      <!-- <label for="email"><p>Eamil:</p><input type="email" name="email" v-model="email" placeholder="anders.andersson@gmail.com" required></label>-->
      <label for="name"><p>{{ langIsSe? "Namn": "Name" }}:</p><input type="text" name="name" v-model="name" placeholder="Anders Andersson" required></label>
      <label for="subject"><p>Subject:</p><input type="text" name="subject" v-model="subject" placeholder="subject" required></label>

      <label for="message"><p>{{ langIsSe? "Fråga": "Question" }}:</p>  <textarea name="message" v-model="message"  required ></textarea>

</label>

<button>{{ langIsSe? "Skicka": "Send" }}</button>

    </form>
  </div>
  </main>
</template>
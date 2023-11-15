<script >
export default {
  props:{
    langIsSe:Boolean,
  },

  data() {
    return {
      screenwidthHere:window.innerWidth,
      en: [
        "Welcome to Swemount! We are a company specializing in the sale and installation of solar cell systems and parts. Our team of trained professionals is dedicated to providing top-quality products and services to help our customers save energy and reduce their carbon footprint. Whether you are a homeowner looking to switch to solar power or a business owner interested in incorporating renewable energy into your operations, we have the expertise and resources to help you reach your goals. Contact us today to learn more about how we can support your transition to solar energy!",
        `With Swemounts' systems, you are sure to get a stable and secure installation of your solar panels.

By using the innovative material Zinc/Magnesium ZM310, you get products with excellent corrosion resistance and the ability to mount in exposed locations. The systems have undergone careful calculations and testing to withstand tough weather conditions such as strong winds and heavy snow loads.

Swemounts' free software for project design and calculation makes it easy to plan and execute your solar panel installation project.

With Swemounts' systems, the installation becomes easy and efficient. You get a few and easy-to-use components, as well as fast delivery directly to the installation site. Swemount offers various solutions for varying needs.

Swemount also cares about the environment. The products are manufactured using an energy-efficient machine park and work towards becoming climate-neutral.

Choose Swemount and get a reliable and sustainable solution for mounting solar panels.`,
      ],
      se: [
        "Swemount erbjuder innovativa och enkla lösningar av hög kvalitet för montering av solcellspaneler. Vi erbjuder stålprodukter med den optimala ytbehandlingen för våra svenska klimat. Vi lämnar 30 års garanti på samtliga av våra standard produkter för underkonstruktioner.",
        `Med Swemounts system är du säker på att få en stabil och säker installation av dina solceller. 

Genom att använda det innovativa materialet Zink/Magnesium ZM310 får du produkter med utmärkt korrosionsbeständighet och möjlighet att montera på utsatta ställen.
Systemen har genomgått noggranna beräkningar och tester för att klara tuffa väderförhållanden såsom hård vind och tung snöbelastning.

Swemounts gratis programvara för projektutformning och beräkning blir det enkelt att planera och genomföra ditt solcellsmontageprojekt.

Med Swemounts system blir montaget enkelt och effektivt. 
Du får få och lättanvända detaljer, samt snabb leverans direkt till montageplatsen. 
Swemount erbjuder olika lösningar för varierande behov

Swemount tänker också på miljön. Produkterna tillverkas med hjälp av en energisnål maskinpark och jobbar för att bli klimatneutrala. 

Välj Swemount och få en pålitlig och hållbar lösning för montage av solceller.`,

      ],
    };
  },
  methods: {

  },
};
</script>

<template>
  <main>

    <div class="video-container">
      <div style="max-width: 1200px; margin: auto;">
      <div class="head-text" ><h1 class="" >Swemount</h1>
<p class="white"> Swemount erbjuder innovativa och enkla lösningar med hög kvalitet för montering av solcellspaneler. Alla våra system är utvecklade i Sverige, med fokus på varje detalj.
Registrera dig och ta del av vår kalkylator för snö & vindlastberäkningar, eller kontakta oss för en skräddarsydd offert.</p>
 <a class="a-button" href="/contact" style=""> {{ langIsSe? "Kontakta oss": "Contact us" }}</a>
</div></div>


 <video class="bg-video" src="../assets/swemountvideo.mp4" muted autoplay loop></video>




    <!-- <iframe class="bg-video" :style="{'transform':'scale(' + screenwidthHere*0.00078125 + ');'}"  src="https://www.youtube.com/embed/iUtYNfyG18M?&autoplay=1&loop=1&controls=0&mute=1&playsinline=1&loop=1&showinfo=0&autohide=1&playlist=iUtYNfyG18M"  title="YouTube video player" frameborder="0"  allowfullscreen></iframe>
   -->
   
  </div>


  <div class="home-article1">
      <div style="display: flex; align-items: center;max-width: 1200px;" >
        <div class="p-text">
          <h2 class="yellow h2-home" >{{ langIsSe? "Swemount, vem är vi?": "Swemount, who are we?" }}</h2>

          <p  class=" lines-included white" >{{ langIsSe? se[0]: en[0] }}</p>
        </div>
        <img class="img-home" src="/img/swemount9.jpg" alt="" />
      </div>
    </div>

<div class="home-article2" style="max-width: 1200px;">
 <!-- <h2 class="yellow h2-home" style="text-align:center;">{{ langIsSe? "Produktnyheter": "Produktnyheter" }}</h2>-->
<div class="news-part" style="display: flex; align-items: center; justify-content: space-between;">
  <!--<div> <img src="/img/swemount10.png" alt=""><h3>SM Roof hook RH2000</h3> <p></p></div>-->
  <div><img src="/img/swemount18.jpg" alt=""><!--<h3>Guardian Fall Protection Roof Anchor</h3>--></div>
     <iframe class="video-present" src="https://www.youtube.com/embed/iUtYNfyG18M?&loop=1&playlist=iUtYNfyG18M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
  <div><img src="/img/swemount19.jpg" alt=""><!--<h3>DBI-SALA Roof Anchor</h3>--></div>
</div>
</div>

    <div class="home-article3">
      <div style="display: flex; align-items: center; max-width: 1200px;">
        <img class="img-home" src="/img/swemount20.jpg" alt="" />

        <div class="p-text">
          <h2 class="white h2-home">{{ langIsSe? "Varför ska du välja swemounts fästsystem ?": "Why should you choose Swemounts mounting systems?" }}</h2>

          <p  class=" lines-included" >{{ langIsSe? se[1]: en[1] }}</p>
        </div>
      </div>
    </div>

  </main>
</template>
<style>
</style>
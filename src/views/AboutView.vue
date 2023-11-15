<script>
var rootBrach = ""; ///swemounttest

export default {
  props:{
    langIsSe:Boolean,
    
  },
  data() {
    return {
      center: {lat: 57.69862519804575, lng: 14.468818086508398},
      markers: [
        {
          position: {
            lat: 57.69862519804575,
            lng: 14.468818086508398,
          }
        }, // Along list of clusters
      ],
      en: [
        "Swemount is a Swedish company that specializes in manufacturing high-quality mounting systems for solar panels. Our products are suitable for both large and small solar panel installations and have many different options to choose from, so customers can find the mounting system that best meets their needs.",
        "Swemount strives to always be at the cutting edge of technology and offer the most innovative and sustainable mounting systems on the market. The company is also very environmentally conscious and uses only sustainable materials in its production.",
      ],
      se: [
        "Swemount är ett svenskt företag som har specialiserat sig på att tillverka högkvalitativa montagesystem för solceller. Våra produkter är användbara för både stora och små solcellsanläggningar och de har många olika alternativ att välja mellan, så att kunden kan hitta det montagesystem som passar deras behov bäst. ",
        "Swemount strävar efter att alltid vara på den tekniska framkanten och att erbjuda de mest innovativa och hållbara montagesystemen på marknaden. Företaget är också mycket miljömedvetet och använder endast hållbara material i sin produktion.",
      ],
      personal: [
        {
          title: "Ekonomi",
          name: "Lena Phung ",
          phone: "0700000000",
          email: "lena@swemount.se",
          pic: `${rootBrach}/personal/Lena1.jpg`,
        },
        {
          title: "Order",
          name: "Henrik Lidhamn",
          phone: "0700000000",
          email: "henrik@swemount.se",
          pic: `${rootBrach}/personal/Henke1.jpg`,
        },
        {
          title: "Marknad",
          name: "Ulf Thorwalls ",
          phone: "0700000000",
          email: "ulf@swemount.se",
          pic: `${rootBrach}/personal/Ulf1.jpg`,
        },
        {
          title: "Försäljning",
          name: "Tobias Axelsson ",
          phone: "0700000000",
          email: "tobias@swemount.se",
          pic: `${rootBrach}/per-placeholder.png`,
        },
      ],
      selectedPersonal: 0,
    };
  },
  mounted() {
  },

  methods: {


    selectPersonal(i) {
      this.selectedPersonal = i;
    },
  },
};
</script>

<template>
  <main>
    <img class="head-imgs " src="/img/swemount15.jpg" alt="">

    <h1>{{ langIsSe? "Om oss": "About us" }}</h1>

    <div class="home-article4">
      <div class="p-text" >
        <h2 class="yellow h2-home" >Swemount</h2>

        <p class="">{{ langIsSe? se[0]: en[0] }}</p>
        <br />
        <p class="">{{ langIsSe? se[1]: en[1] }}</p>
      </div>
      <img  class="img-home img-back-box" src="/img/swemount21.jpg" alt="" />
    </div>

    <div class="team">
      <div class="second-head"> 
        <h1>{{ langIsSe? "Vårt team": "Our team" }}</h1>
   <hr>
  </div>



      <div class="all-personal">
        <div
          v-for="(i, index) in personal"
          :key="index"
          @click="selectPersonal(index)"
          class="one-personal business-card"
        >
          <img class="img-back-box" :src="i.pic" alt="" style="object-fit: cover;" />
          <div >
            <p class="business-card-name bold-font">   {{ i.name }}</p>

          <p class="business-card-title yellow bold-font">  {{ i.title }}</p>
          <!--<p class="business-card-icons bold-font"><i class="fa-solid fa-phone yellow"></i> &nbsp;&nbsp; {{ i.phone }}</p>-->
          <p class="business-card-icons bold-font"><i class="fa-solid fa-envelope-open yellow"></i> &nbsp;&nbsp; <a class="bold-font" :href="'mailto:'+i.email" >{{ i.email }}</a></p>
        </div>
        </div>

        </div>
      </div>
    <div class="map-location">
      <div class="second-head"> 
        <h1>Location</h1>
   <hr>
  </div>
  <div >
  <GMapMap
      :center="center"
      :zoom="15"

      map-type-id="terrain"
      class="img-loc"
      :options="{
   zoomControl: false,
   mapTypeControl: false,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: false,
   disableDefaultUi: true
 }"
  >

  <!--          url: "/swemounttest/logomarker.png",
-->

  <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          :icon= '{
          url: "/logomarker.png",
          scaledSize: {width: 60, height: 60},
          labelOrigin: {x: 16, y: -10}
      }'
         />

  </GMapMap>
</div>
    </div>
  </main>
</template>
<style scoped>
@media screen and (min-width: 414px) {

}

@media screen and (min-width: 1200px) {


}
</style>